// Javascript Regular Expression
// regexr.com

/[]/g

// g : global
// i : case insensitive
// gm : multiline
// s : single line
// u : unicode
// y : sticky

//  /[a-z]/g  > selects lowercase a-z
//  /[A-Z]/g  > selects uppercase A-Z

//  /./g  > selects everything except for new line breaks.

//  /[\s\S]/g  > selects everything.

//  /\w/g  > word character
//  /\W/g  > selects everything except word, selects spaces, apostrophe, hyphens etc.

//  /\d/g  > selects the digits(numbers)
//  /\D/g  > everything except the digits

//  /\s/g  > selects all the whitespace, line breaks
//  /\S/g  > selects everything except for whitespace

//  /^I/gm  > selects every I at that starts a line.

//  /d$/gm  > selects every d that end a line.

//  /\./gm  > selects the period symbol

//  /(old)/gm  > selects a capturing group that has the letters "old" in them.

//  /(?:old)/gm  > selects the words with "old" but doesnt capture them.

//  /g(?:old)/gm  > only highlights the letter g that is followed by the letters old.

//  /g(?:old)/gm  > only highlights the letter g not followed by the letters old.


// quantifiers //

//  /[A-Z]\w+/gm  > highlights capital letters with more than 1 letter, wihout apostrophe etc.

//  /[A-Z][a-z]*/gm  > highlights capital letters with 0 or more letters following.


//  /\d{3}/gm  > highlights group of 3 digits 

//  /(hear)?t/gm  > highlights the word hear and if a t follows then the t also gets higlighted, also highlights letter t everywhere else

//  /(hear)t/gm  > highlights the word heart


//  /h\w+?/gm  > selects character h and 1 following letter

//  /(g|l)ive/gm  > selects words starting with g or l and ending with ive.
