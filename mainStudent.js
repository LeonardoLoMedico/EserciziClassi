const Student = require("./Student");

let s1 = new Student("Leonardo","Lo Medico","1994-06-27","nuoto","Fidarsi è bene, non fidarsi è meglio!");
let s2 = new Student("Leonardo","Lo Medico","1995-06-27","nuoto","Fidarsi è bene, non fidarsi è meglio!");

let age1 =s1.getAge();
let age2 = s2.getAge();
let hobby1= s1.getHobby();
let hobby2 = s2.getHobby();

s1.getMotto();
console.log(s1.compare(age1,age2)+ " "+ s2.compare(age2,age1));
console.log(s1.haveSameHobby(hobby1,hobby2));

 
