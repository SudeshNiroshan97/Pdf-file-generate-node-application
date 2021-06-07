const PDFDocument = require('jspdf');
const fs = require('fs');

let pdfDoc = new PDFDocument;
pdfDoc.pipe(fs.createWriteStream('MegaTrendLanka.pdf'));








pdfDoc.end();