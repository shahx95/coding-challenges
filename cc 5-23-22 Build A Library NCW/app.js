/* INTERMEDIATE JAVASCRIPT
Build a Library
Congratulations, you’ve passed the grueling rigmarole of librarian school and have become head librarian at your local Books-‘N-Stuff.
Just as you sit down, eager to utilize all those skills you learned in “Lib 203 - Shushing: How to Maintain Order While Spitting”, you realize you’re still using index cards to handle everything.
But no matter, you know some JavaScript, so let’s get to work modernizing your new digs.
Books-‘N-Stuff carries three different types of media: books, CDs, and movies. 

In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:

Book
Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

Movie
Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

CD
Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
*/


//Solution

//create a parent class
class Media{
    constructor(title){
        this._title=title
        this._isCheckedOut=false
        this._ratings=[]
    }
    
    get title(){
        return this._title
    }
    get isCheckedOut(){
        return this._isCheckedOut
    }
    get ratings(){
        return this._ratings
    }

    set isCheckedOut(value) {
        this._isCheckedOut = value
      }

    getAverageRating(){
        //sum of all the ratings divided by the number of ratings
        let sum = this._ratings.reduce( (total,currentVal)=>total+currentVal,0 )
        let numberOfElements = this._ratings.length
        return (sum/numberOfElements).toFixed(2)
    }
    toggleCheckOutStatus(){
        this._isCheckedOut = !this._isCheckedOut
    }
    addRating(rating){
        this._ratings.push(rating)
    }
}


//create subclass extending on Media parent class
class Book extends Media{
    constructor(title,author,pages){
        super(title)
        this._author = author
        this._pages = pages
    }
    
    get author() {
        return this._author;
      }
    
    get pages() {
        return this._pages;
      }
}

//create subclass extending on Media parent class
class Movie extends Media{
    constructor(title,director,runTime){
        super(title)
        this._director = director
        this._runTime = runTime
    }

    get director() {
        return this._director;
      }
    
    get runTime() {
        return this._runTime;
      }
}


//create subclass extending on Media parent class
class CompactDisc extends Media{
    constructor(title,artist,songs){
        super(title)
        this._artist = artist
        this._songs = songs
    }
    get artist(){
        return this._artist
    }
    get songs(){
        return this._songs
    }

    //extra method added to output a random song from the album
    random(){
        //returns array[random index]
        let randomIndex = Math.floor(Math.random()*(this._songs.length))
        return this._songs[randomIndex]
    }

}


//creating a Book instance
const harryPotter = new Book('Harry Potter and the Goblet of Fire ', 'J K Rowling', 605);

harryPotter.toggleCheckOutStatus();
console.log(harryPotter.isCheckedOut);

harryPotter.addRating(4);
harryPotter.addRating(5);
harryPotter.addRating(5);
console.log(harryPotter.getAverageRating());

//creating a Movie instance
const batman = new Movie('The Batman', 'Matt Reeves', 174);

batman.toggleCheckOutStatus();
console.log(batman.isCheckedOut);

batman.addRating(1);
batman.addRating(1);
batman.addRating(5);
console.log(batman.getAverageRating());

//creating a CompactDisc instance
const thriller = new CompactDisc('Thriller', 'Michael Jackson', ['Billie Jean', 'Thriller', 'Beat It', 'Baby Be Mine', 'Human Nature']);

console.log(thriller.isCheckedOut);

thriller.addRating(3);
thriller.addRating(5);
thriller.addRating(4);
console.log(thriller.getAverageRating());

console.log(thriller.random());