/*
School Catalogue

Let's put your knowledge of classes to the test by creating a digital school catalog for the New York City Department of Education. The Department of Education wants the catalog to hold quick reference material for each school in the city.

We need to create classes for primary, middle, and high schools. Because these classes share properties and methods, each will inherit from a parent School class. Our parent and three child classes have the following properties, getters, setters, and methods:

School
Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)
Getters: all properties have getters
Setters: the numberOfStudents property has a setter
Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)

Primary
Includes everything in the School class, plus one additional property
Properties: pickupPolicy (string)

Middle
Does not include any additional properties or methods

High
Includes everything in the School class, plus one additional property
Properties: sportsTeams (array of strings)
*/


//create parent class
class School{
    constructor(name,level,numberOfStudents){
        this._name = name
        this._level = level
        this._numberOfStudents = numberOfStudents
    }

    get name(){
        return this._name
    }

    get level(){
        return this._level
    }

    get numberOfStudents(){
        return this._numberOfStudents
    }

    set numberOfStudents(number){
        if(typeof(number)==='number'){ //validating input
            this._numberOfStudents = number
        }
        else{
            console.log("Invalid input: Input must be a Number")
        }
    }

    quickFacts(){
        return `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
    }

    static pickSubstituteTeacher(substituteTeachers){
        let randomIndex = Math.floor(Math.random()*substituteTeachers.length)
        return substituteTeachers[randomIndex]
    }
}

//creating a subclass extending the School class
class PrimarySchool extends School{
    constructor(name,numberOfStudents,pickupPolicy){
        super(name,'primary',numberOfStudents)
        this._pickupPolicy = pickupPolicy

    }

    get pickupPolicy(){
        return this._pickupPolicy
    }
}

//creating a subclass extending the School class
class HighSchool extends School{
    constructor(name,numberOfStudents,sportsTeams){
        super(name,'highschool',numberOfStudents)
        this._sportsTeams = sportsTeams
    }
    
    get sportsTeams(){
        return this._sportsTeams
    }

}


//creating and testing instances

//primary school instance:
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

lorraineHansbury.quickFacts()


//lorraineHansbury.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']) 
//throws an error because pickSubstituteTeacher is a static method

School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])

//high school instance:
const alSmith = new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])

alSmith.sportsTeams