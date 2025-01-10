const fs = require("fs");

function analyzeLog() {
    try {
        const data = fs.readFileSync("app.log", "utf8");
        const lines = data.split("\n");
        let errorCount = 0;

        console.log("\nError messages:");
        lines.forEach(line => {
            if (line.includes("[error]")) {
                console.log(line);
                errorCount++;
            }
        });

        console.log("\nFound Errors:", errorCount);
        
    } catch (err) {
        console.error("Error reading file!", err);
    }
}

analyzeLog();