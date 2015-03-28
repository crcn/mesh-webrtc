var crudlet = require("crudlet");
var webrtc  = require("..");

var db = webrtc({ 
  key: '8oi9boiedfeqm2t9'
});

crudlet.run(db, "tail").on("data", function(operation) {
  console.log("remote operation:", operation);
});

global.crudlet = crudlet;
global.db = db;
global.stream = crudlet.stream(db);
