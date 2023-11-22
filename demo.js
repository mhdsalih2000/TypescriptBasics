// Type Script Tutuorial
// definging Datatyes (Explicit Types)
var UserName = "Muhammed Salih P";
var Age = 23;
var isSmart = true;
var Skills = ["js", "python", "ts", "etc"];
var Count = [1, 2, 3, 4];
var EmptyArray = [];
var UserDeatail = { name: "muhammed salih",
    age: 23 };
// Onject
var UserDetails = {
    name: "suahil",
    Age: 42,
    Salery: 15000
};
// union Operator
// in this methred we can assign both string number boolian in an array 
var Name = ["muhammed", 1, false];
// Functions
function GetUserName(UserDeatail) {
    return UserDeatail.name;
}
var Gname = GetUserName(UserDetails);
console.log(Gname);
