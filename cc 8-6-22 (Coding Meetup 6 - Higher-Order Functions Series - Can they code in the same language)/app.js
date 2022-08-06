/*
You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return either:

true if all developers in the list code in the same language; or
false otherwise.

Notes:

The strings representing a given language will always be formatted in the same way (e.g. 'JavaScript' will always be formatted will upper-case 'J' and 'S'
The input array will always be valid and formatted as in the example above.

*/
/*
P: parameters R: return value E: examples P: pseudocode

P:  array of objects. format will be static.
R:  bool
E:
        var list1 = [
        { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
        { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
        { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
        ];
        
        isSameLanguage(list1) => true
P:
        use the every method on the input array
            check if every language equals the first language
            if it does not equal
                method will return false else true
*/

//solution

function isSameLanguage(list){
    return list.every( obj => obj.language === list[0].language)
}