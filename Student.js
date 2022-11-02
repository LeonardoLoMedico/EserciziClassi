/*Esercizio 1
creare una classe Student, con i seguenti campi:
nome, cognome, data di nascita, hobby, motto 
e i metodi:getAge() -> "$Nome ha X anni"
getMotto() -> "Il motto di $Nome e' $Motto"
Bonus:compareAge(s1, s2) ritorna true se s1 piu' vecchio
haveSameHobby(s1,s2)
 */
let Student = class {
    constructor(nome,cognome,dataNascita,hobby,motto){
        this.nome=nome;
        this.cognome=cognome;
        this.dataNascita=dataNascita;
        this.hobby=hobby;
        this.motto=motto;
    }

    getAge(){
        let formatDate= "\'"+this.dataNascita+"\'";
        let dataN= new Date(formatDate);
        let differenzaAnni = Date.now() - dataN.getTime();// ottengo valore in millisecondi
        let anno = new Date(differenzaAnni);
        let age= Math.abs(anno.getUTCFullYear() - 1970);
        console.log(this.nome+" ha "+ age + " anni!");
        return age;
    }

    getMotto(){
        console.log("Il motto di "+this.nome+" è: "+ this.motto);
    }
    compare(age1,age2){
        if(age1>age2){
            return true;
        }
        else{
            return false;
        }
    }
    getHobby(){
        return this.hobby;
    }
    haveSameHobby(hobby1,hobby2){
        if(hobby1==hobby2) return true;
        else return false;
    }

}
module.exports = Student;