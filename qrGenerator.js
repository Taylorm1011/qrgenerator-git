const inquirer = require('inquirer')

inquirer
.prompt([
{
    message: "type in your URL:",
    name: "URL",
},
    
]).then(answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt",url,(err) =>{
        if(err) throw err;
        console.log
    })
}