const fs = require("fs");

function countLogLevels() {
   try {
       const data = fs.readFileSync("app.log", "utf8");
       const lines = data.split("\n");
       
       const counts = {
           info: 0,
           warning: 0,
           error: 0
       };
       
       lines.forEach(line => {
           if (line.includes("[info]")) {
               counts.info++;
           } else if (line.includes("[warning]")) {
               counts.warning++;
           } else if (line.includes("[error]")) {
               counts.error++;
           }
       });
       
       console.log("Log-Level counts:", counts);
       
   } catch (err) {
       console.error("Error reading file!", err);
   }
}

countLogLevels();