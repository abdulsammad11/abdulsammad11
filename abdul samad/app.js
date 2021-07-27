// queation 1
var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "10", quantity: "2", }
];
console.log(itemsArray[0].price*itemsArray[0].quantity)
console.log(itemsArray[1].price * itemsArray[1].quantity)
console.log(itemsArray[2].price * itemsArray[2].quantity)
console.log(itemsArray[3].price * itemsArray[3].quantity)
// question 2
var item = {
    name : "a.samad",
    email: "abdul.samad",
    pasword: "*****",
    age: "24",
};
if ("name" in item === true) {
    console.log(" yes")
}
else{console.log("nothing")}
if ("email" in item === true) {console.log ("you are") }
else { console.log("you win ")}

// question 3

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const person = new Person("Jonh", 24);

console.log(person.name,person.age);

// question 4
function User(Name, Gender, Address, Education, Profession) {
    this.Name = Name;
    this.Gender = Gender;
    this.Address = Address;
    this.Education = Education;
    this.Profession = Profession;
}
function getsubmit() {
    var userName = document.getElementById("Name")
    var userGender = document.getElementById("Gender")
    var userAddress = document.getElementById("Address")
    var userEducation = document.getElementById("Education")
    var userProfession = document.getElementById("Profession")
    var arr = []
    var myuser2 = new User(userName.value, userGender.value, userAddress.value, userEducation.value, userProfession.value);
    arr.push(myuser2);
    console.log(arr)
   
}