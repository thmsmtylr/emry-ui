const fs = require("fs");
const path = require("path");
const presets = require("./tailwindPresets");

const BLACKLISTED_KEYS = ["backgroundImage", "plugins"];

const generateCSSVariables = (obj, prefix = "") => {
  let css = "";

  for (const key in obj) {
    if (BLACKLISTED_KEYS.includes(key)) {
      continue; // Skip processing blacklisted keys
    }

    if (typeof obj[key] === "object") {
      css += generateCSSVariables(
        obj[key],
        prefix + key.replace(/\./g, "\\") + "-"
      );
    } else {
      let variableName = `--${prefix}${key.replace(/\./g, "\\")}`;
      variableName = variableName.replace(/--theme/g, "--emyui"); // Replace --theme with --emyui
      variableName = variableName.replace(/-extend/g, ""); // Remove -extend
      const value = obj[key];
      css += `${variableName}: ${value};\n`;
    }
  }

  return css;
};

const cssContent = generateCSSVariables(presets);

const outputPath = path.join(__dirname, "./index.css");

// Write the generated CSS content to index.css
fs.writeFileSync(outputPath, `:root {\n${cssContent}\n}`);
