const fs = require("fs");

const path = process.env.OAS_PATH;
if(!path) {
  console.error("❌ OAS_PATH environment variable is not set.");
  process.exit(1);
} 

// check oas exists
const oasExists = fs.existsSync(path);
if (!oasExists) {
  console.error(`❌ OpenAPI oas not found at ${path}. Please download it from https://docs.ozon.ru/api/seller/swagger.json and place it there.`);
  process.exit(1);
}

// get oas
const oas = JSON.parse(fs.readFileSync(path, "utf8"));

// ensure securitySchemes + global security
oas.components = oas.components || {};
oas.components.securitySchemes = oas.components.securitySchemes || {};
oas.components.securitySchemes.ClientId ||= { type: "apiKey", in: "header", name: "Client-Id" };
oas.components.securitySchemes.ApiKey ||= { type: "apiKey", in: "header", name: "Api-Key" };
oas.security ||= [
  { ClientId: [] },
  { ApiKey: [] }
];

// walk the oas issues
function walk(obj) {
  if (Array.isArray(obj)) {
    return obj.map(walk);
  } else if (obj && typeof obj === "object") {
    if (obj.type === "array of strings") {
      obj.type = "array";
      if (!obj.items) obj.items = { type: "string" };
    }
    if (Object.prototype.hasOwnProperty.call(obj, "foramt")) {
      obj.format = obj.foramt;
      delete obj.foramt;
    }
    if (Object.prototype.hasOwnProperty.call(obj, "description") && obj.description === null) {
      obj.description = "";
    }
    if (obj.type === "int") {
      obj.type = "integer";
    }
    if (obj.type === "bool") {
      obj.type = "boolean";
    }
    if (obj.type === "file") {
      obj.type = "string";
    }
    if (obj.type === null) {
      obj.type = "string";
    }
    if (obj.type === "enum") {
      obj.type = "string";
    }
    if (obj.type === "int64") {
      obj.type = "integer";
      if (!obj.format) obj.format = "int64";
    }
    if (obj.type === "timestamp") {
      obj.type = "string";
      if (!obj.format) obj.format = "date-time";
    }

    for (const k of Object.keys(obj)) obj[k] = walk(obj[k]);
  }
  return obj;
}
walk(oas);

// write back
fs.writeFileSync(path, JSON.stringify(oas, null, 2));
console.log("✅ Finished processing OpenAPI schema", path);
