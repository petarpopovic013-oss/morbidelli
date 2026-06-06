const fs = require("fs");

let content = fs.readFileSync("./app/about/page.tsx", "utf-8");
const userTexts = JSON.parse(fs.readFileSync("./user_text.json", "utf-8"));

function wrapAccents(text) {
  return text.replace(/([šđžćčŠĐŽĆČ])/g, '<span style={{ fontFamily: "var(--font-inter-local)", fontWeight: "300" }}>$1</span>');
}

const map = {
  0: userTexts[0],
  1: userTexts[1],
  2: userTexts[2],
  3: userTexts[3],
  4: userTexts[4],
  5: userTexts[5],
  6: userTexts[6],
  7: userTexts[7],
  8: userTexts[8],
  9: userTexts[9],
  10: userTexts[10],
  11: userTexts[11],
  12: userTexts[12],
  13: userTexts[13],
  14: userTexts[14],
  15: userTexts[15],
  16: userTexts[16],
  17: userTexts[17],
  18: "Godine 2021. osnovan je MBP u Bolonji.", // The user's manually edited subtitle
  19: userTexts[18],
  20: userTexts[19],
  21: userTexts[20],
  22: userTexts[21] + "<br /><br />" + userTexts[22],
  23: userTexts[23] + "<br /><br /><br />" + userTexts[24]
};

const matches = [...content.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)];

let offset = 0;
for (let i = 0; i < matches.length; i++) {
  const match = matches[i];
  if (map[i] !== undefined) {
    const originalContent = match[1];
    
    // We only replace if we actually want to change it (e.g. index 18 we keep, wait, map[18] has our custom string but we should just wrap it if needed or just skip it)
    let replacement = map[i];
    
    if (i === 18) {
      // Keep exactly what was in the file, but strip old spans and rewrap
      replacement = originalContent.replace(/<[^>]*>/g, "").trim(); 
    }

    replacement = wrapAccents(replacement);

    const startPos = match.index + offset + match[0].indexOf(originalContent);
    const endPos = startPos + originalContent.length;

    content = content.substring(0, startPos) + "\n" + replacement + "\n" + content.substring(endPos);
    offset += (replacement.length + 2) - originalContent.length;
  }
}

fs.writeFileSync("./app/about/page.tsx", content);
console.log("Replacement done!");
