const { XMLParser } = require('fast-xml-parser');
const { readFileSync } = require('fs');

//xml file from https://learn.microsoft.com/en-us/previous-versions/windows/desktop/ms762271(v=vs.85)
const xmlFile = readFileSync('books.xml', 'utf8');
const parser = new XMLParser();
const json = parser.parse(xmlFile);

console.log(`First book: `, json.catalog.book[0]);