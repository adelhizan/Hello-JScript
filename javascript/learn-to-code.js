//var name = "Jack";
//var age = 20;
//            
//var message = "Hi my name is " + name + " and I am " + age + " years old!";
//
//alert(message);
//console.log(message);


var firstname = '"John"';
var lastname = "Jacobing";
var dateOfBirth = "10-09-82";
var age = 23;
//var profilImUrl "http://coolpicks.com/johnjacob.jpg";

var loginWelcomeMessage = "Welcome, " + firstname + ". happy " + age + "rd birthday!";

console.log(loginWelcomeMessage);

var div = 10 % 3;
console.log(div);


var myAccBal = 300;
var nikeshoes = 200.74;
var coupon = 500;

if (nikeshoes <= myAccBal) {
    myAccBal -= nikeshoes;
    console.log("bought shoes direct!");
    console.log("My account balance : " + myAccBal);
} else if (nikeshoes - coupon <= myAccBal) {
    myAccBal -= nikeshoes - coupon;
    console.log("bought shoes with coupon!");
    console.log("My account balance : " + myAccBal);
} else {
    console.log("no enough money to bought shoes");
}


var val1 = 23;
var val2 = "23";

if (val1 != val2) 
    console.log('val1 and val2 are equal with "=="');

if (val1 === val2) 
    console.log('val1 and val2 are equal with "==="');
else 
    console.log('val1 and val2 are NOT equal with "==="');

/***************************************/

//var student1 = "Timmy";
//var student2 = "Janessa";
//var student3 = "Arun";

var balances = [50.45, 4000.3, -56];

/*** very bad array here */
var person = ["John", 12, "USA",true];
/************/

var studentTemp = ["Timmy","Janessa","Arun"];
var naughtyList = [];

var badkid = studentTemp[0];

console.log(studentTemp);

naughtyList.push(badkid);
console.log(naughtyList);

var index = naughtyList.indexOf("Timmy");
var index2 = studentTemp.indexOf("Arun");
console.log(index, index2);

if (index > -1) {
    naughtyList.splice(index, 1);
}
console.log(naughtyList);

/***************************/

var total = 10;
for (var x = 0; x < total; x++) {
    console.log(x)    
}

// Array
var students = ["Adel", "Saad", "Ali", "Khaled", "Nasser", "Mohaamed"];

var length1 = students.length;
console.log("length of students array : " + length1);
for (y = 0; y < length1; y++) {
    console.log(y + " " + students[y]);
}

/***************************/



// Object

function Student(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this. greeting = function() {
        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
    };
};

var students = [];

var s1 = new Student("Ali","Saad",7)

console.log(s1);
console.log(s1.greeting());

students.push(new Student("Khaled","Mohammed",6));
students.push(new Student("Naseer","Aziz",8));
students.push(new Student("Adel","Wael",7));

console.log(Student);

for (var i = 0 ; i < students.length; i++) {
    var student = students[i];
    console.log(i, student, student.greeting());
}


// for in loop
var studentxx = students[0];

for (var key in studentxx) {
    console.log("*Key* " + key, studentxx[key]);
}

//var student0 = {
//    firstName: "Ali",
//    lastName: "Fahad",
//    age: 7,
//};
//
//console.log(student0.firstName);
//console.log(student0["firstName"]);
//console.log(student0.greeting());
//console.log(student0);

    
// create an empty object

//var student1 = new Object();
//student1.firstName = "Adel";
//student1.lastName = "Majed";
//student1.age = 9;
//
//var student2 = {};
//student2.firstName = "Zack";
//student2.lastName = "Bader";
//student2.age = 5;
//student2.classID = "B/R"


var students = [];
//students.push(student0);
//students.push(student1);
//students.push(student2);


//console.log(students);



/*****************************/

//var length2 = 15;
//var width2 = 10;
//var area2 = length2 * width2;
//
//var length3 = 12;
//var width3 = 14;
//var area3 = length3 * width3;
//
//console.log(area2);
//console.log(area3);

function area(length, width) {
    return length * width;
}

var area2 = area(10,15);
console.log(area2);


var rectanglesAreas = []
rectanglesAreas.push(area(10,15));
rectanglesAreas.push(area(14,2));
rectanglesAreas.push(area(4,5));

console.log(rectanglesAreas);


var bankBalance = 500;

function makeTransaction(priceOFSale) {
    if (priceOFSale <= bankBalance) {
        bankBalance -= priceOFSale;
        console.log(priceOFSale + " Purchase Successful");
    } else {
        console.log(priceOFSale + " Insufficient Funds");
    }
}

console.log(bankBalance);
makeTransaction(79.00);

console.log(bankBalance);
makeTransaction(2.34);

console.log(bankBalance);
makeTransaction(10.45);

console.log(bankBalance);
makeTransaction(450.45);

var transaction = function(priceOFSale) {
    if (priceOFSale <= bankBalance) {
        bankBalance -= priceOFSale;
        console.log(priceOFSale + " Purchase Successful");
    } else {
        console.log(priceOFSale + " Insufficient Funds");
    }

};

transaction(10);

var printCustomerName = function(first,last) {
    console.log("First NAme : " + first + " Last Name : " + last);
}

var applyForCreditCard = function(creditScore, soul) {
    //call some functions to process application
}

var bankOperations =[];

// Store functions in array to using them
bankOperations.push(transaction);
bankOperations.push(printCustomerName);
bankOperations.push(applyForCreditCard);

console.log(bankOperations)