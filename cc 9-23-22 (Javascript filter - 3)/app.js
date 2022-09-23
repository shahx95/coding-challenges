/*
Your friend saw the great work you did with keeping your user-names at bay in

http://www.codewars.com/dojo/katas/525d9b1a037b7a9da7000905

now he'd like you to do (nearly) the same thing for his website, but as always, the devil is in the details.

He has troubles with users ending or starting in a ".", and his user-array is a flat array of user-email-pairs, like so:
[ "foo", "foo@bar.com", "bar", "bar@foo.com", ".foo", "food@bar.com" ]
He is only interested in e-mailing the users and ask them to sign up again, so no need to keep the user-name, only e-mail addresses for the user-names that start or end with a "." should be returned. For the above array, the correct return-array would be

[ "food@bar.com" ]

You have to use the filter-method of Javascript, which returns each element of the array for which the filter-method returns true.
*/


/*
P: parameters R: return value E: examples P: pseudocode

P: array of strings
R: array of strings
E:
    [ "foo", "foo@bar.com", "bar", "bar@foo.com", ".foo", "food@bar.com" ]
    => [ "food@bar.com" ]
P: 
   use filter method the array
     if element contains "@"
        if the preceding element contains "." at the start or the end
            return the element
    return the resulting array from the filter method         
*/


//solution
function searchNames( logins ){
    // console.log(logins)
    return logins.filter((element, index) => {
      if(element.includes("@")){
        let previous = logins[index-1]
        let status = previous[0].includes(".") || previous[previous.length - 1].includes(".")
        if(status){
          return element
        }
      }
    })
  }