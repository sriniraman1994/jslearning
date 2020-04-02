
  class ExportDemo{
    private _name: string;
    public getname(): string {
        return this._name;
    }
    public setname(value: string) {
        this._name = value;
    }
}

 class TestExport{
    sayhello():string{
        return 'hello';
    }
}

export{ExportDemo,TestExport};