"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExportDemo {
    getname() {
        return this._name;
    }
    setname(value) {
        this._name = value;
    }
}
exports.ExportDemo = ExportDemo;
class TestExport {
    sayhello() {
        return 'hello';
    }
}
exports.TestExport = TestExport;
