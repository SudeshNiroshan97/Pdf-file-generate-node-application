const PDFDocument = require('pdfkit');
const fs = require('fs');

let pdfDoc = new PDFDocument;
pdfDoc.pipe(fs.createWriteStream('MegaTrendLanka.pdf'));


pdfDoc.rect(200,35,200,286).fillAndStroke('#FFFFFF', '#000');
pdfDoc.rect(10,286,200,286).fillAndStroke('#FFFFFF', '#000');
pdfDoc.rect(10,286,10,10).fillAndStroke('#FFFFFF', '#000');
pdfDoc.rect(10,10,104,10).fillAndStroke('#FFFFFF', '#000');

pdfDoc.rect(104,98,104,10).fillAndStroke('#FFFFFF', '#000');
pdfDoc.rect(10,35,200,35).fillAndStroke('#FFFFFF', '#000');
pdfDoc.rect(10,60,200,60).fillAndStroke('#FFFFFF', '#000');
pdfDoc.rect(10,77,200,77).fillAndStroke('#FFFFFF', '#000');
pdfDoc.rect(10,98,200,98).fillAndStroke('#FFFFFF', '#000');

pdfDoc.rect(10,105,200,105).fillAndStroke('#FFFFFF', '#000');

pdfDoc.rect(10,230,200,230).fillAndStroke('#FFFFFF', '#000');
pdfDoc.rect(10,237,200,237).fillAndStroke('#FFFFFF', '#000');







pdfDoc.end();