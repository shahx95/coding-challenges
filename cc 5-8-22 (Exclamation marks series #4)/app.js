/*
Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
*/ 

/*
P: parameters R: return value E: examples P: pseudocode

P: function will accept as a string only. validate the input and return an error if input is not string
R: function will return a string value
E: 
    remove("!Hi!") => "Hi!"
    remove("Hi! Hi!") => "Hi Hi!"
    remove("Hi") => "Hi!"

P:
    create a function remove that accepts an input string s
    validate the input is string
    split the string by !. this will remove the !. 
    join the split array
    add ! at the end of the joined string 
    return the concatenated string     
*/




function remove(s){
    if(typeof(s)==='string'){
        return  s.split('!').join('').concat('!');
    }
    else{
        return 'Enter a valid string'
    }
  }

//another way without using builtin methods  
//
function remove(s){
    var str=""
    for (var i=0; i<s.length; ++i)
      if (s[i]!='!')
        str+=s[i];
    return str+'!';
  }