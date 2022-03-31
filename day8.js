console.log("data");
// 1. a) Write a constructor for the class Movie, which takes a String representing the title of the movie, 
// a String representing the studio, and a String representing the rating as its arguments, and sets the 
// respective class properties to these values.
class movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    getrating() {
      return "the rating is  " + this.rating;
    }
  }

  
  // b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
 
  class movie {
    constructor(title, studio, rating){
        this.title = title;
        this.studio = studio;
        this.rating = "PG";
    }
}


//c) Write a method getPG, which takes an array of base type Movie as its argument,
//and returns a new array of only those movies in the input array with a rating of "PG".
//You may assume the input array is full of Movie instances. The returned array need
//not be full.
var classMovie = [];
function classMovie(){
    var pgmovie = new Movie[mov.length];
    var newArrayIndex = 0;
                 for (var i = 0; i < mov.length; i++) {
                   if (mov[i].rating.equals(“PG”)) {
                     pgMovie[newArrayIndex] = mov[i];
                               newArrayIndex++;
                            }
                        }
                        return pgMov;
                    }                                              


  // d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
// the studio “Eon Productions”, and the rating “PG­13”
const CasinoRoyale = new movie( "Casino Royal", "Eon Productions", "PG13");


// 2.Write a “person” class to hold all the details.

class person{
    constructor(firstname,lastname,age,address){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.address = address;
        this.getFullName = function(){
            return this.firstName + " " + this.lastName;
            }
        }

    };

    var person1 = new Person("James","Bond",50,"London");
        alert(person1.getFullName());

    var person2 = new Person("Tom","Paul",29,"newyork");
       alert(person2.getFullName());
 
       
// 3.  write a class to calculate uber price.


class estimatesfare{
  constructor(customername,customercity,car,basefare,timefare,distancefare){
    this.customername = "john";
    this.customercity = "boston";
    this.car = "black suv";
    this.basefare = basefare;
    this.timefare = timefare;
    this.distancefare = distancefare;
    this.getuberRate = function(){
      var basefare = 20,
      var distancefare = 10;
      var timefare = 5,
      var totalamount = kmfare+minfare+basefare;
      var finalfare = math.floor(totalamount/10)*10;
      retrun fares;
    }
    console.log(customercity,"rate is :",uberrate);
    getrate(customercity);
  };
  Introduceself(){
    console.log("Hello", customername + "welcome to uber rate program");
  }
} 

  