//Three types of type declaration
let testString = 'test'; //type with assignment
//testString = 123; result in error due to type difference
let testStringDirect = 'hello'; // assignment without type
//testStringDirect = 1; result in error due to different type  used
let testNumeric; //type declaration without assignment
//testNumeric = 'sas'; result in error
//primitive types:
let sringprimitive = 'test'; // string type
let numbertype = 102; // number type
let booltype = true; //bool type
let arraytype = [1, 'asd', 2]; //any array
let stringarraytype = ['one', 'two', 'three']; //string array
let numberArrayType = [1, 2, 5]; //number array
let booltypeArray = [true, true, false]; // bool array
let tupleDemo = ['hello', 1, true]; //tuple fixed length and fixed type array
// with type argument
function typeArgumentDemo(arg1) {
    return arg1;
}
//return type string
function returnTypeDemo(ag1) {
    return ag1;
}
//return type is void
function printLog(arg) {
    console.log(arg);
}
//Enum
var Days;
(function (Days) {
    Days[Days["MONDAY"] = 0] = "MONDAY";
    Days[Days["TUESDAY"] = 1] = "TUESDAY";
    Days[Days["WEDNESDAY"] = 2] = "WEDNESDAY";
    Days[Days["THURSDAY"] = 3] = "THURSDAY";
    Days[Days["FRIDAY"] = 4] = "FRIDAY";
    Days[Days["SATURDAY"] = 5] = "SATURDAY";
    Days[Days["SUNDAY"] = 6] = "SUNDAY";
})(Days || (Days = {}));
//UNION 
let unionDemo = 1; //mixed type
unionDemo = 'hello'; // ther wont be error sinxe it supports both strin and number 
function typeGuardDemo(arg, ar2) {
    //typeGuard expression
    if (typeof (arg) === "string") {
        return arg + ar2;
    }
    if (typeof (arg) === 'number' && typeof (ar2) === 'number') {
        return arg + ar2;
    }
    return arg.toString() + ar2.toString();
}
//represent null and undefined args
function nullUndefinedFunctionDemo(arg) {
    return arg;
}
//default args
function defaultArgumentWithType(arg = 'this is string') {
    return arg;
}
//rest or spread operation
function spreadDemo(arg, ...arg2) {
    return arg + ' ' + arg2.join(' ');
}
//optional params
function optionalParam(arg) {
    return arg;
}
//implementation
let Emloyee = { name: 'test' };
let Emloyee2 = {
    name: 'srini',
    age: 26
};
class Staff {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    static getPosition() {
        return Staff._position;
    }
    showInformation() {
        return `welcome ${this.name} your id is: ${this.id} your position ${Staff.getPosition()}`;
    }
}
Staff._position = 'Trainee';
class Manager {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    static getPosition() {
        return Manager._position;
    }
    showInformation() {
        return `welcome ${this.name} your id is: ${this.id} your position ${Manager.getPosition()}`;
    }
}
Manager._position = 'manager';
//factory model and static method demo
function showInfo(position) {
    let staff = new Staff('srinivasan', 2);
    let manager = new Manager('Bala', 1);
    if (position === Staff.getPosition()) {
        return staff;
    }
    else if (position === Manager.getPosition()) {
        return manager;
    }
    else {
        throw new Error("Position not found");
    }
}
//abstract class instance cannot be created 
class AthleticsCoachHelper {
}
class RunnerCoach extends AthleticsCoachHelper {
    constructor(gameName, gameType, practicePlace, name, id, term) {
        super();
        this.gameName = gameName;
        this.gameType = gameType;
        this.practicePlace = practicePlace;
        this.name = name;
        this.id = 10;
        this.term = 5;
    }
    drillTask() {
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
class CricketCoach {
    constructor(name, id, term) {
        this.name = name;
        this.id = id;
        this.term = term;
    }
    drillTask() {
        return `
        coach name : ${this.name}
        coach id: ${this.id}
        term : ${this.term}
        instruction : do fie;ding drill for 5 hrs
        `;
    }
}
class GenericsClassDemo {
    constructor(text1, text2) {
        this._text1 = text1;
        this._text2 = text2;
    }
    gettext1() {
        return this._text1;
    }
    settext1(value) {
        this._text1 = value;
    }
    gettext2() {
        return this._text2;
    }
    settext2(value) {
        this._text2 = value;
    }
}
class GenricsInterfaceClass {
    setAndReturnText(text1, text2) {
        return `returning ${text1} and ${text2}`;
    }
}
function getCricketPractice() {
    let cricketCoach = new CricketCoach('Ravi Shastri', 2, 5);
    return cricketCoach.drillTask();
}
function getAthleticsPractice() {
    let AthleticsCoach = new RunnerCoach('Sprintini', 1, 'statium', 'srini', 2, 5);
    return AthleticsCoach.drillTask();
}
let Emloyeereadonly = { name: 'srinivas', isMale: true };
Emloyeereadonly.name = 'srinivasan';
//Emloyeereadonly.isMale=false; readonly property can't be changed after first assignment error
function genericsDemo(args) {
    return args;
}
function genericsClassDemo() {
    let genericsClassDemo = new GenericsClassDemo('srini', 837);
    return `hi  ${genericsClassDemo.gettext1()} ${genericsClassDemo.gettext2()}`;
}
var FirstNameSpace;
(function (FirstNameSpace) {
    class NamespaceDemo {
        sayHi() {
            console.log('hi from FirstNameSpac');
        }
    }
    FirstNameSpace.NamespaceDemo = NamespaceDemo;
    class ClassWithoutExport {
    }
})(FirstNameSpace || (FirstNameSpace = {}));
var SecondNameSpace;
(function (SecondNameSpace) {
    class NamespaceDemo {
        sayHi() {
            console.log('hi from  SecondNameSpace');
        }
    }
    SecondNameSpace.NamespaceDemo = NamespaceDemo;
})(SecondNameSpace || (SecondNameSpace = {}));
function checknameSpace() {
    let firstnamespaceDemo = new FirstNameSpace.NamespaceDemo();
    firstnamespaceDemo.sayHi();
    let secondnamespaceDemo = new SecondNameSpace.NamespaceDemo();
    secondnamespaceDemo.sayHi();
}
printLog(typeArgumentDemo('bala'));
printLog(typeArgumentDemo('srini '));
printLog(Days.MONDAY);
printLog(Days[0]);
printLog(typeGuardDemo(1, 'srini'));
//printLog(nullUndefinedFunctionDemo()); result in error
printLog(null);
printLog(defaultArgumentWithType());
printLog(defaultArgumentWithType('teststring'));
printLog(spreadDemo('srini', 'bala', 'maha', 'seetharaman'));
printLog('optional' + optionalParam());
Emloyee.name = 'vasan';
printLog(Emloyee);
printLog(Emloyee2);
printLog(Emloyeereadonly);
printLog(showInfo('Trainee').showInformation());
printLog(showInfo('manager').showInformation());
try {
    showInfo('test');
}
catch (error) {
    console.error(error.message);
}
printLog(getCricketPractice());
printLog(getAthleticsPractice());
printLog(genericsDemo('hello this first generics'));
printLog(genericsDemo(123456));
printLog(genericsClassDemo());
printLog(new GenricsInterfaceClass().setAndReturnText('first argument', 'second argument'));
checknameSpace();
