// Type Script Tutuorial



// definging Datatyes (Explicit Types)

let UserName:string = "Muhammed Salih P"
let Age     :number =23
let isSmart :boolean=true
let Skills  :string[]=["js","python","ts","etc"]
let Count   :number[]=[1,2,3,4]
let EmptyArray:[]=[]
let UserDeatail:{name:string,age:number}=
{name:"muhammed salih",
age:23}


// interface 
// interface is  abstract methord to use Datatypes 

type Details={
    name :string
    Age:number
    Salery : number  //now this atrbute optional,use Qustine mark to make this optional
    
}

// Onject
let UserDetails :Details={
    name:"suahil",
    Age:42,
    Salery :15000
   
}




// union Operator
// in this methred we can assign both string number boolian in an array 
const Name :(string | number|boolean)[] =["muhammed",1,false]



// Functions

function GetUserName(UserDeatail:Details){

 return UserDeatail.name
}

let Gname = GetUserName(UserDetails)
console.log(Gname)