// FAYL: create-env.js
const fs = require("fs");
const path = require("path");

// Netlify-dakı mühit dəyişənini oxuyuruq
const apiKey = process.env.NG_APP_WEATHER_API_KEY;

if (!apiKey) {
  console.error(
    "ERROR: Environment variable NG_APP_WEATHER_API_KEY is not set."
  );
  process.exit(1);
}

// Build üçün environment faylının məzmununu hazırlayırıq
const environmentFileContent = `
export const environment = {
  production: true,
  weatherApiUrl: 'https://api.weatherapi.com/v1/forecast.json',
  weatherApiKey: '${apiKey}'
};
`;

// Faylı yazacağımız yolu təyin edirik
const targetPath = path.join(__dirname, "src/environments/environment.ts");

// Faylı yaradırıq
fs.writeFileSync(targetPath, environmentFileContent);

console.log(
  `Successfully created environment.ts file with API key for production.`
);
