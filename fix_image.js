const fs = require('fs');
const path = './app/about/content.ts';
let content = fs.readFileSync(path, 'utf-8');

// Replace bg-secondary with bg-black for the specific images that act as frames
content = content.replace(/object-cover bg-secondary\\"/g, 'object-cover bg-black\\"');
content = content.replace(/object-cover bg-secondary"/g, 'object-cover bg-black"');

fs.writeFileSync(path, content);
console.log("Updated background color to black");
