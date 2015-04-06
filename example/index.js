var mesh = require("mesh");
var webrtc  = require("..");

var db = webrtc({ 
  key: '8oi9boiedfeqm2t9'
});

mesh.run(db, "tail").on("data", function(operation) {
  console.log("remote operation:", operation);
});

global.mesh = mesh;
global.db = db;
global.stream = mesh.stream(db);
