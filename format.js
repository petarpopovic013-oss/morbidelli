const fs = require('fs');
let content = fs.readFileSync('./app/about/page.tsx', 'utf-8');

// Fix the broken image url
content = content.replace(/style=\{\{backgroundImage:"url\(&quot"\}\}/g, "style={{backgroundImage: \"url('/photos/history/hero-najveci.jpg')\"}}");

fs.writeFileSync('./app/about/page.tsx', content);
