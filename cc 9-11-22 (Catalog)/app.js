/*
You are given a small extract of a catalog:

s = "<prod><name>drill</name><prx>99</prx><qty>5</qty></prod>

<prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>

<prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>

<prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>

<prod><name>saw</name><prx>9</prx><qty>10</qty></prod>

...
(prx stands for price, qty for quantity) and an article i.e "saw".

The function catalog(s, "saw") returns the line(s) corresponding to the article with $ before the prices:

"table saw > prx: $1099.99 qty: 5\nsaw > prx: $9 qty: 10\n..."
If the article is not in the catalog return "Nothing".

Notes
There is a blank line between two lines of the catalog.
The same article may appear more than once. If that happens return all the lines concerned by the article (in the same order as in the catalog).
The line separator of results may depend on the language \nor \r\n. In Pascal \n is replaced by LineEnding.
in Perl use "£" instead of "$" before the prices.
You can see examples in the "Sample tests".
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: string
R: string
E:
    catalog(s, 'ladder') => 'ladder > prx: $112 qty: 12'
P: 
    check for invalid article input and return "Nothing" 

    split the input string 
    filter the splitted string array to only keep product lines that include the article using .includes()
    map the filtered array to format the product lines

    return the mapped array after joining to form a string

*/

//solution
function catalog(s, article) {
    if(!s.includes(article)){return "Nothing"}
     
    let arrayOfCatalog = s.split("\n\n")
    let filteredCatalogArray = arrayOfCatalog.filter(element => element.includes(article)) 
    
    let reformattedCatalogArray = filteredCatalogArray.map(item => {
      
      let itemName = item.substring(item.indexOf("name")+5,item.indexOf("</name>"))
      let itemPrice = item.substring(item.indexOf("<prx>")+5,item.indexOf("</prx>"))
      let itemQuantity = item.substring(item.indexOf("<qty>")+5,item.indexOf("</qty>"))
      
      return `${itemName} > prx: $${itemPrice} qty: ${itemQuantity}`
    })
    
    return reformattedCatalogArray.join("\r\n") 
  }