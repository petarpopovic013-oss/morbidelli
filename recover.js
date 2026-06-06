const fs = require('fs');
const lines = fs.readFileSync('backup.jsonl', 'utf-8').split('\n').filter(Boolean);

for (let line of lines) {
    try {
        const data = JSON.parse(line);
        // Sometimes the content is inside the output of a command
        if (data.content && data.content.includes('export const aboutHtml = "')) {
             let idx = data.content.indexOf('export const aboutHtml = "');
             let extracted = data.content.substring(idx + 26);
             extracted = extracted.substring(0, extracted.lastIndexOf('"'));
             fs.writeFileSync('recovered.html', extracted);
             console.log("Recovered from content string");
             process.exit(0);
        }
        
        if (data.tool_calls) {
             for (let t of data.tool_calls) {
                 if (t.arguments && t.arguments.output && t.arguments.output.includes('export const aboutHtml = "')) {
                     let idx = t.arguments.output.indexOf('export const aboutHtml = "');
                     let extracted = t.arguments.output.substring(idx + 26);
                     extracted = extracted.substring(0, extracted.lastIndexOf('"'));
                     fs.writeFileSync('recovered.html', extracted);
                     console.log("Recovered from tool_calls");
                     process.exit(0);
                 }
             }
        }
    } catch (e) {
    }
}
console.log("Not found directly, regexing...");
const full = fs.readFileSync('backup.jsonl', 'utf-8');
const match = full.match(/export const aboutHtml = \\"([^]*?)\\"/);
if (match) {
    fs.writeFileSync('recovered.html', match[1]);
    console.log("Recovered using regex");
} else {
    console.log("Failed to recover");
}
