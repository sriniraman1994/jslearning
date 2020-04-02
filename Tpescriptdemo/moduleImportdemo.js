"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExportClass = require("./moduledemo");
let exportClass = new ExportClass.ExportDemo();
exportClass.setname('srinivas');
console.log(`exported class ${exportClass.getname()}`);
let exportDemo = new ExportClass.TestExport();
console.log(exportDemo.sayhello());
