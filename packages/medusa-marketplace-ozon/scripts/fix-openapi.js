const fs = require("fs");

const path = "openapi/vendor/swagger.json";
const spec = JSON.parse(fs.readFileSync(path, "utf8"));

// ensure securitySchemes + global security
spec.components = spec.components || {};
spec.components.securitySchemes = spec.components.securitySchemes || {};
spec.components.securitySchemes.ClientId ||= { type: "apiKey", in: "header", name: "Client-Id" };
spec.components.securitySchemes.ApiKey   ||= { type: "apiKey", in: "header", name: "Api-Key" };
spec.security ||= [ { ClientId: [] }, { ApiKey: [] } ];

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
    if (obj.type === "int"){
      obj.type = "integer";
    }
    if (obj.type === "bool"){
      obj.type = "boolean";
    }
    if (obj.type === "file"){
      obj.type = "string";
    }
    if (obj.type === null){
      obj.type = "string";
    }
    if (obj.type === "enum"){
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

walk(spec);
fs.writeFileSync(path, JSON.stringify(spec, null, 2));
console.log("✅ Fixed 'array of strings' types in", path);
