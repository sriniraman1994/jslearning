//Three types of type declaration
let testString : string = 'test'; //type with assignment
//testString = 123; result in error due to type difference
let testStringDirect = 'hello'; // assignment without type
//testStringDirect = 1; result in error due to different type  used
let testNumeric:number; //type declaration without assignment
//testNumeric = 'sas'; result in error

//primitive types:
let sringprimitive :string ='test'; // string type
let numbertype :number = 102; // number type
let booltype:boolean = true; //bool type
let arraytype:any[] = [1,'asd',2];//any array
let stringarraytype:string[] = ['one','two','three']; //string array
let numberArrayType:number[] = [1,2,5];//number array
let booltypeArray : boolean[] =[true,true,false]; // bool array
let tupleDemo:[string,number,boolean] = ['hello',1,true]; //tuple fixed length and fixed type array

// with type argument
function typeArgumentDemo(arg1:string){
    return arg1;
}
//return type string
function returnTypeDemo(ag1:string):string{
    return ag1;
}
//return type is void
function printLog(arg:any):void{
    console.log(arg);
}
//Enum
enum Days{
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
}
//UNION 
let unionDemo : string|number = 1;//mixed type
unionDemo = 'hello'; // ther wont be error sinxe it supports both strin and number 
type stringornumber = string|number;

function typeGuardDemo(arg:stringornumber,ar2:stringornumber){
    //typeGuard expression
    if(typeof(arg)==="string"){
        return arg+ar2;
    } 
    if(typeof(arg)==='number' && typeof(ar2)==='number'){
        return arg+ar2;
    }
    return arg.toString()+ar2.toString();
}
//represent null and undefined args
function nullUndefinedFunctionDemo(arg:string|null){
    return arg;
}
//default args
function defaultArgumentWithType(arg:string='this is string'):string{
    return arg;
}
//rest or spread operation
function spreadDemo(arg:string,...arg2:string[]){
    return arg+' '+arg2.join(' ');
}
//optional params
function optionalParam(arg?:string){
    return arg;

}
//interface 
interface interfaceDemo{
    name:string;
}

//implementation
let Emloyee :interfaceDemo = {name:'test'};

interface interfaceOptionalDemo{
    name:string,
    secondName?:string,
    age:number
}
let Emloyee2:interfaceOptionalDemo = {
    name:'srini',
    age:26
}

interface interfaceReadOnlyDemo  {
     name  :string,
    readonly isMale:boolean
}

interface Emloyee{
     name:string;
     id:number;
    showInformation():string;
}

class Staff implements Emloyee{ // class implementation of interface can have own memebers
    name: string;
    private static _position: string ='Trainee';
    constructor(name:string,id:number){
        this.name = name;
        this.id = id;
    }
    public static getPosition(): string {
        return Staff._position;
    }
    id: number;
    showInformation(): string {
       return `welcome ${this.name} your id is: ${this.id} your position ${Staff.getPosition()}`;
    }
}

class Manager implements Emloyee{
    name: string;
    id: number;
    constructor(name:string,id:number){
        this.name = name;
        this.id = id;
    }
    private static _position: string ='manager';
    public static getPosition(): string {
        return Manager._position;
    }
    showInformation(): string {
        return `welcome ${this.name} your id is: ${this.id} your position ${Manager.getPosition()}`;
     }

}

//factory model and static method demo
function showInfo (position:string):Emloyee{
    let staff = new Staff('srinivasan',2);
    let manager = new Manager('Bala',1);
    if(position === Staff.getPosition()){
        return staff;
    }else if (position === Manager.getPosition()){
        return manager;
    }else{
        throw new Error("Position not found");
    }
}
// interface  demo 
interface Coach {
    name:string;
    id:number;
    term:number;
    drillTask():string;
}
//interface extension demo
interface AthleticsCoach extends Coach{
    gameName:string;
    gameType:number;
    practicePlace:string;
}
//abstract class instance cannot be created 
abstract class AthleticsCoachHelper implements AthleticsCoach{
    gameName: string;
    gameType: number;
    practicePlace: string;
    name: string;
    id: number;
    term: number;
    abstract drillTask():string;
}

class RunnerCoach extends AthleticsCoachHelper{
    
    constructor(gameName:string, gameType: number, practicePlace: string, name: string,id:number,term: number){
        super();
        this.gameName = gameName;
        this.gameType = gameType; 
        this.practicePlace = practicePlace;
        this.name = name;
        this.id = 10;
        this.term =5;
    }

    drillTask(): string {
        return ` 
        coachname : ${this.name} 
        coachid:${this.id} 
        coach term:${this.term}
        gamename: ${this.gameName} 
        game type : ${this.gameType} 
        place: ${this.practicePlace}
        do a 5km run for 2 hrs `;
    }

}
// implementation of coach class
class CricketCoach implements Coach {
    name: string;
    id: number;
    term: number;
    constructor(name:string,id:number,term:number){
        this.name = name;
        this.id = id;
        this.term=term;
    }
    drillTask(): string {
        return `
        coach name : ${this.name}
        coach id: ${this.id}
        term : ${this.term}
        instruction : do fie;ding drill for 5 hrs
        `
    }
}

class GenericsClassDemo<T1,T2>{
    private _text1: T1;
    public gettext1(): T1 {
        return this._text1;
    }
    public settext1(value: T1) {
        this._text1 = value;
    }
    private _text2: T2;
    public gettext2(): T2 {
        return this._text2;
    }
    public settext2(value: T2) {
        this._text2 = value;
    }
    constructor(text1:T1,text2:T2){
        this._text1 = text1;
        this._text2 = text2;
    }

}
interface GenericsInterfaceDemo<T1,T2>{
     text1 :T1;
     text2 : T2;
     setAndReturnText(text1:T1,text2:T2):string;
}

class GenricsInterfaceClass<T1,T2> implements GenericsInterfaceDemo<T1,T2>{
    text1: T1;
    text2: T2;
    setAndReturnText(text1: T1, text2: T2):string {
        return `returning ${text1} and ${text2}`;
    }

}
function getCricketPractice():string{
    let cricketCoach = new CricketCoach('Ravi Shastri',2,5); 
    return  cricketCoach.drillTask();
}

function getAthleticsPractice():string{
    let AthleticsCoach = new RunnerCoach ('Sprintini',1,'statium','srini',2,5);
    return AthleticsCoach.drillTask();
}

let Emloyeereadonly:interfaceReadOnlyDemo = {name:'srinivas',isMale:true}
Emloyeereadonly.name='srinivasan';
//Emloyeereadonly.isMale=false; readonly property can't be changed after first assignment error

function genericsDemo<T>( args:T):T{
    return args;
}

function genericsClassDemo(){
    let genericsClassDemo = new GenericsClassDemo<string,number>('srini',837);
    return `hi  ${genericsClassDemo.gettext1()} ${genericsClassDemo.gettext2()}`;
    
}

namespace FirstNameSpace{
    export class NamespaceDemo{
        sayHi(){
            console.log('hi from FirstNameSpac');
        }
    }
    class ClassWithoutExport{

    }
}

namespace SecondNameSpace{
    export class NamespaceDemo{
        sayHi(){
            console.log('hi from  SecondNameSpace');
        }
    }
}

function checknameSpace():void{
    let firstnamespaceDemo = new FirstNameSpace.NamespaceDemo();
    firstnamespaceDemo.sayHi();
    let secondnamespaceDemo = new SecondNameSpace.NamespaceDemo();
    secondnamespaceDemo.sayHi();
}
printLog(typeArgumentDemo('bala'));
printLog(typeArgumentDemo('srini '));
printLog(Days.MONDAY);
printLog(Days[0]);
printLog(typeGuardDemo(1,'srini'));
//printLog(nullUndefinedFunctionDemo()); result in error
printLog(null);
printLog(defaultArgumentWithType());
printLog(defaultArgumentWithType('teststring'));
printLog(spreadDemo('srini','bala','maha','seetharaman'));
printLog('optional'+optionalParam());
Emloyee.name = 'vasan';
printLog(Emloyee);
printLog(Emloyee2);
printLog(Emloyeereadonly);
printLog(showInfo('Trainee').showInformation());
printLog(showInfo('manager').showInformation());
try{
    showInfo('test');
}catch(error){
    console.error(error.message);
}
printLog(getCricketPractice());
printLog(getAthleticsPractice());
printLog(genericsDemo<string>('hello this first generics'));
printLog(genericsDemo<number>(123456));
printLog(genericsClassDemo());
printLog(new GenricsInterfaceClass<string,string>().setAndReturnText('first argument','second argument'));
checknameSpace();











