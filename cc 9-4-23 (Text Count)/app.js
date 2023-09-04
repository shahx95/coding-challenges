//challenge
/*
dom manipulation: create a function count() to count the number of characters, words, and lines in a text area and display the counts in specific output elements.
you are provided with the following element ids: charCount, wordCount, lineCount, textarea
*/

//solution
function count(){
    const textArea = document.getElementById('textarea')

    const charCountOutput = document.getElementById('charCount')
    const wordCountOutput = document.getElementById('wordCount')
    const lineCountOutput = document.getElementById('lineCount')

    const textValue = textArea.value.trim()
    const characterCount = textValue.length
    const wordCount = textValue.split(" ").filter(Boolean).length
    const lineCount = textValue.split("\n").filter(Boolean).length

    charCountOutput.textContent = characterCount
    wordCountOutput.textContent = wordCount
    lineCountOutput.textContent = lineCount
}