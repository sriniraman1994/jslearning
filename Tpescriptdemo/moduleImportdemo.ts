import  * as ExportClass from './moduledemo';

let exportClass = new ExportClass.ExportDemo();
exportClass.setname('srinivas');
console.log(`exported class ${exportClass.getname()}`);

let exportDemo = new ExportClass.TestExport();
console.log(exportDemo.sayhello());