function countStringOccurrences(text, searchedWord){
let words = text.split(` `);
let counter = 0;
for (const word of words) {
    if(word === searchedWord){
        counter++;
    }
    
}
    console.log(counter);
}
countStringOccurrences('This is a word and it also is a sentence',
'is');
countStringOccurrences('softuni is great place for learning new programming languages',
'softuni');
