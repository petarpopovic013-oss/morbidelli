const fs = require('fs');

let content = fs.readFileSync('./app/about/content.ts', 'utf-8');

// The exported string is something like `export const aboutHtml = "\n ... \n";`
// Let's extract everything inside the quotes.
// Since it was exported using `export const aboutHtml = "` ... `";` we can just substring.
// Wait, actually I can just `require` it if I compile it or just regex it.
let match = content.match(/export const aboutHtml = "([\s\S]*)";/);
if (!match) {
    console.error("Could not find aboutHtml string");
    process.exit(1);
}
let html = match[1];

// Unescape the escaped characters like \"
html = html.replace(/\\"/g, '"');
html = html.replace(/\\n/g, '\n');

// 1. Remove HTML comments
html = html.replace(/<!--[\s\S]*?-->/g, '');

// 2. class -> className
html = html.replace(/class="/g, 'className="');

// 3. for -> htmlFor
html = html.replace(/for="/g, 'htmlFor="');

// 4. svg tags attributes (like fill-rule -> fillRule)
html = html.replace(/fill-rule="/g, 'fillRule="');
html = html.replace(/clip-rule="/g, 'clipRule="');
html = html.replace(/stroke-width="/g, 'strokeWidth="');
html = html.replace(/stroke-linecap="/g, 'strokeLinecap="');
html = html.replace(/stroke-linejoin="/g, 'strokeLinejoin="');

// 5. Close unclosed tags
// img
html = html.replace(/(<img\b[^>]*?)(?<!\/)>/g, '$1 />');
// source
html = html.replace(/(<source\b[^>]*?)(?<!\/)>/g, '$1 />');
// br
html = html.replace(/(<br\b[^>]*?)(?<!\/)>/g, '<br />');
// hr
html = html.replace(/(<hr\b[^>]*?)(?<!\/)>/g, '<hr />');

// 6. Inline styles to React style objects
function cssToObj(cssStr) {
    let styles = cssStr.split(';').filter(s => s.trim() !== '');
    let obj = {};
    for (let s of styles) {
        let [key, ...val] = s.split(':');
        if (!key || val.length === 0) continue;
        key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        let value = val.join(':').trim();
        // Handle unescaped html entities if any
        value = value.replace(/&#39;/g, "'");
        // Remove quotes around url() if they are messed up
        obj[key] = value;
    }
    return JSON.stringify(obj).replace(/"([^"]+)":/g, '$1:');
}

html = html.replace(/style="([^"]*)"/g, (match, p1) => {
    return `style={${cssToObj(p1)}}`;
});

// 7. Fix unescaped braces (none expected in standard html content, but just in case)
// We won't globally replace `{` unless it's an issue.

// Now generate page.tsx
const pageTsx = `
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <main className="flex-grow flex flex-col w-full">
      <Header />
      ${html}
      <Footer />
    </main>
  );
}
`;

fs.writeFileSync('./app/about/page.tsx', pageTsx);
console.log("Successfully generated app/about/page.tsx");
