const pdf = require('pdf').pdf
const fs = require('fs')

var doc = new pdf()

doc.text(20, 20, "This is the first page text");

doc.text(20, 40, "This is more text in the pdf on the first page");


doc.setProperties({

    title: 'pdf file',
    subject: 'Maths',
    creator: 'John',
    keywords: 'Maths'

})

var filename = "Megatrend.pdf"

fs.writeFile(filename, doc.output(), function(err, data){

    console.log("File pdf created");

})

