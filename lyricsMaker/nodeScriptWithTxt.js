var dataToWrite;
var fs = require('fs');

var input;
var color = process.argv[3] || "#ff00ff";
var newFileName = process.argv[4] || "newfile.csv";

input = fs.readFileSync(process.argv[2], 'utf8');

    input = input.replace(/(,)/gm, "");
    input = input.replace(/(\r\n|\n|\r)/gm," ");
    input = input.replace(/(')/gm,"'");
    input = input.replace(/(")/gm,"");

console.log(input);

dataToWrite = input.split(" ").map(item=> ["", item, color]).join('\n');

fs.writeFile(newFileName, dataToWrite, 'utf8', function (err) {
    if (err) {
    	console.log('Some error occured - file either not saved or corrupted file saved.');
    } else{
    	console.log('It\'s saved!');
    }
});