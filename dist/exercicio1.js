"use strict";
exports.__esModule = true;
var pessoa_1 = require("./pessoa");
var rogerio = new pessoa_1.Pessoa(59, 1.75);
//rogerio.peso = 68
//rogerio.altura = 1.74
console.log(rogerio.imc());
console.log(rogerio.classificar());
