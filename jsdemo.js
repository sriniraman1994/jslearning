//var vs let vs const

function varLetConstTest() {
    console.log('With var keyword');
    //var 
    var index = 10;
    for (var index = 0; index < 4; index++) {
        console.log("the value of var inside loop" + index); //0,1,2,3
    }
    console.log("the value of var outside the loop" + index); //4

    console.log('with let keyword');

    if (true) {
        var localVariableDeclaredInsideScope = 10;
    }
    console.log("var variable declared inside the if loop is accessible outside:" + localVariableDeclaredInsideScope);

    console.log("incase of let , const , this is not possibel");
    //let

    let index1 = 10;
    for (let index1 = 0; index1 < 4; index1++) {
        console.log("the value of let inside loop" + index1); //0,1,2,3
    }
    console.log("the value of let outside the loop" + index1); //10

    // for const redeclaration is not possible
    // const index2 = 10;
    // for (const index2 = 0; index2 < 4; index2++) {
    //     console.log("the value of let inside loop" + index2); //0,1,2,3
    // }
    // console.log("the value of let outside the loop" + index2); //10

    //const  
    const arrayConst = ['Monday'];
    const mapConst = {key:'day',value:'monday'};
    //const can be manipulated
    arrayConst.push('tuesday');
    mapConst.test = 'test';
    //cant redeclare
    //const arrayConst= [];
    console.log('constant array manipulated'+arrayConst);
    console.log(`consatant map manipulated${mapConst.key} ${mapConst.value}`);

    //Problems with var keyword for key press event:
    console.log('var keyword is maintained globally so it has follwing problem');
    const buttons = document.getElementsByTagName('button');
    // for(var i=1;i<buttons.length;i++){
    //     var button = buttons[i];
    //     button.addEventListener('click',function clickListener(params) {
    //         alert('button click functionality with var keyword : button'+i+'is clicked'); output will be 10 always
    //     });
    // }

    //changing with let keyword for key press event avoids this isuue:
   
    
    console.log('let keyword is used  problem is fixed');
    for(let  k=0;k<buttons.length;k++){
        const button = buttons[k];
        button.addEventListener('click',function clickListener(params) {
            alert('button click functionality with let keyword : button'+(k+1)+'is clicked');
        });
        
    }
}


function spreadOperationDemo(){
    let array1 = [1,2,3];
    let array2 = [4,5,6];
    let mergedArrayWithoutSpread = [0,array1,array2,10];
    let mergedArrayWithSpread = ['new elemnt1',...array1,...array2,'new element 2'];
    console.log(`before spread:${mergedArrayWithoutSpread}`);
    console.log(`afterspread:${mergedArrayWithSpread}`);
}

function mapDemo(){
    let demoMap = new Map();
    //duplicate keys get removed automatically
    demoMap.set("text","data");
    demoMap.set(new Date(),'today');
    console.log(demoMap);
    demoMap.forEach((key,value) => {
        console.log(`key in Map ds:${key} 
        value in map ds : ${value}` );
    });
    for(let [k,v] of demoMap ){
        console.log(` itearte through map with destructuring assignment :key ${k} , value ${v}`);
    }
    console.log(demoMap.get("text"));
    console.log(demoMap.keys());//returns key mapiterator which we can iterate with next()
    console.log("has method assures the presence of key in the map:"+demoMap.has('text'));
    console.log(demoMap.delete("text"));
    let a=[1,2,3,4];
    let testMap = new Map([[a],[new Date(),'today']]);//map created with values in construtor
    console.log('constructor map:');
    console.log(testMap);
    let funcArgMap = new Map();
    funcArgMap.set(function keyfunc(){
        console.log('this is the key function');
    },'value');
    console.log('map with function as key');
    console.log(funcArgMap);
    return demoMap.keys();
}

function setDemo(){
    console.log('set operations');
    let test = [1,2,3,4,5,6,1,2,3];
    let demoSet = new Set(test);
    console.log(demoSet);//duplcate values removed
    //iterating sets:
    demoSet.forEach(element => {
        console.log(element);
    });
    demoSet.delete(3);
    console.log('after delete:');
    console.log(demoSet);
}

function forOfLoopDemo(){
    let demoArray = ['test','skill','js','bodybuild','spring','java'];
    let demoMap = new Map();
    demoMap.set('name','srini');
    demoMap.set('age','26');
    demoMap.set('group','it');
    for(let demo of demoArray){
        for(let innerdata of demo){
            console.log(innerdata);
        }
    }
    for(let mapdata of demoMap){
        console.log(mapdata);
    }
}

//array fuction
//let arroFuc=nction = function(val){console.log(val);}
let arrowFunction = val => console.log(val); 

let objDeclarationWithFuction = {key(val){return val},value:'value'};

function sum(a=0,b=0){
    return a+b ;
}

function thisScopeBindUsage(){

    // **********the issue is the this is not accessible********** //
    // return  {
    //     name : 'srini',
    //     hobbies: ['playing cricket','coding','gaming'],
    //     printhobbies(){
    //         this.hobbies.forEach(function(hobby){
    //             console.log(this.name+'likes'+hobby);// name doesnt prints
    //         }); 
    //     }
    // }; 

    //solution 1: with _this
    // return  {
    //     name : 'srini',
    //     hobbies: ['playing cricket','coding','gaming'],
    //     printhobbies(){
    //         let _this = this;
    //         this.hobbies.forEach(function(hobby){
    //             console.log(_this.name+'likes'+hobby); // name prints
    //         });
    //     }
    // }; 

    //solution 2: with bind
    //  return  {
    //      name : 'srini',
    //      hobbies: ['playing cricket','coding','gaming'],
    //      printhobbies(){
    //          this.hobbies.forEach(function(hobby){
    //              console.log(this.name+'likes'+hobby); // name prints
    //          }.bind(this));
    //      }
    //  }; 
    //solution 3: with Arrow function
     return  {
         name : 'srini',
         hobbies: ['playing cricket','coding','gaming'],
         printhobbies(){
             this.hobbies.forEach(element => {
                 console.log(this.name+" "+'likes'+element);
             });
         }
     }; 
    
}

function* generatordemo(i){
    console.log('first yield of generatordemo');
    yield i;
    console.log('second yield of genratordemo');
    yield i+10;
}

function* inlineGeneratorDemo(j){
    console.log('first yield of inlineGeneratorDemo');
    yield j;
    console.log('calling the generator demo:');
    yield *generatordemo(j);
    console.log('second yield  of inlineGeneratorDemo');
    yield j+10;
}

function* generatorWithReturn(i){
    yield i;
    yield i+10;
    return i+20;
    //yield i+30; unreachable after return
}

function* generatorWithReturn(i){
    yield i;
    yield i+10;
    return i+20;
    //yield i+30; unreachable after return
}

function* generatorWithParams(){
    console.log(0);
    console.log(yield,1);
}

function destructuringAssignments(){
    let [a,b,c] = [1,2,3];
    console.log(`contents in array :${a} ${b} ${c}`);
    let [d,,f] = [4,5,6]; //5 is omitted
    console.log(`contents in omitted array${d} ${f}`);
    let [g,...h] = [10,20,30,40,50,60];
    console.log(`contents in merged array ${g} ${h}`);
    let [start,,end] = destructuredFunction();
    console.log('Destructured function returned'+start+ ' ' +end);
    console.log(`swapped with destructuring:${swapWithDestructuring(10, 20)}`);
    let [name='default name',age='18'] = ['srini'];//if no data default value is set
    console.log('name with default destructuing:'+name +','+'age is'+age);
}
function swapWithDestructuring(first,secondb){
    let [a,b] =[secondb,first];
    return [a,b];
}
function destructuredFunction(){
    return [970,80,90];
}

function templateStringTest (name,age,education) {
    return `name:${name}welcome 
    your age is${age}
    your qualification:${education} `;

}

class Person {
    constructor(name,age,sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getSex(){
        return this.sex;
    }
    setName(name){
        this.name = name;
    }
    setAge(age){
        this.age = age;
    }
    setSex(sex){
        this.sex = sex;
    }
    showInfo(){
        console.log(`Welcome ${this.name} you are a ${this.sex} and you are ${this.age} years old`);
    }

}

class Student extends Person{
    constructor(name,age,sex,qualification,mark){
        super(name,age,sex);
        this.qualification = qualification;
        this.mark = mark;
    }
    getQualification(){
        return this.qualification;
    }
    setQualification(qualification){
        this.qualification = qualification;
    }
    getMark(){
        return this.mark;
    }
    setMark(mark){
        this.mark = mark;
    }
    showInfo(){
        console.log(`Welcome ${super.getName()} you studied ${this.qualification} your mark is : ${this.mark}`);
    }
}
function getStatus(){
    return false;
}
function promiseDemo(){
   return new Promise((resolve,reject) =>{
    let status = getStatus();
    if(status){
        resolve();
    }else{
        reject();
    }
   });
}

function promiseAjaxDemo(url,method){
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload = function(){
            if(this.status>=200 && this.status<300){
                resolve(xhr.response);
            }else{
                console.log('status not 200');
                reject({
                    status:this.status,
                    statusText:this.statusText
                });
            }
        };
        xhr.onerror = function(){
            console.log('error');
            reject({
                status:this.status,
                statusText:this.statusText
            });
        };
        xhr.send();
    });
}

varLetConstTest();
console.log('this is the template ste string demo \n');
console.log(templateStringTest('srini',26,'B.Tech[I.T]'));
console.log('spread operation demo');
spreadOperationDemo();
mapDemo();
setDemo();
forOfLoopDemo();
arrowFunction('srini');
console.log(objDeclarationWithFuction.key('testkey'),objDeclarationWithFuction.value);
console.log('Default value:'+sum());
console.log('with args'+sum(10,20))
console.log('with destructuring assignment');
destructuringAssignments();
thisScopeBindUsage().printhobbies();
let mygen = generatordemo(10);
console.log(mygen.next());
console.log(mygen.next());
console.log('inline genraor execution');
let inlineGen = inlineGeneratorDemo(15);
console.log(inlineGen.next());
console.log(inlineGen.next());
console.log(inlineGen.next());
console.log(inlineGen.next());
console.log('generator with return ');
let generatorWithRet = generatorWithReturn(10);
console.log(generatorWithRet.next());
console.log(generatorWithRet.next());
console.log(generatorWithRet.next());
let person = new Person('srini',25,'male');
person.showInfo();
let student = new Student('bala',25,'male','B.tech',76);
student.showInfo();
promiseDemo().then(function(){
    console.log('promise successfully completed');
}).catch(function(){
    console.log('failed');
});

promiseAjaxDemo('https://reqres.in/api/users','GET').then(function(response){
    console.log('promise ajax sucsess');
    console.log(JSON.parse(response));
}).catch(function(failedText){
    console.log(failedText);
});

