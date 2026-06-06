const fs = require('fs');
let content = fs.readFileSync('./app/about/page.tsx', 'utf-8');

// Replacements
content = content.replace(/se[\s\S]*?vrsto etablirao/g, 'se čvrsto dokazao');
content = content.replace(/cementirav/g, 'učvrstiv');
content = content.replace(/u potpunosti dominiraju/g, 'u potpunosti vladaju');
content = content.replace(/dominiraju/g, 'vladaju');
content = content.replace(/akronim za/g, 'skraćenica za');
content = content.replace(/Akronim MBA/g, 'Skraćenica MBA');
content = content.replace(/konzistentno zavr/g, 'redovno zavr');
content = content.replace(/Strate[\s\S]*?ki pozicioniran u Bolonji/g, 'Smešten u srcu Bolonje');
content = content.replace(/sport-touring/g, 'sportsko-turistički');

// Fix spacing issues that might arise
fs.writeFileSync('./app/about/page.tsx', content);
console.log("Words replaced.");
