const express = require('express');
const hbs     = require('hbs');

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view_engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () =>{return new Date().getFullYear()});
hbs.registerHelper('screamIt', (text)=>{
    return text.toUpperCase();
});

app.get('/', (req,res)=>{
    res.render('home.hbs',{
        pageTitle : 'Home',
        welcomeMessage : 'Welcome to my first node js server!',              
    });
});

app.get('/about', (req,res)=>{
    res.render('about.hbs',{
        pageTitle : 'About',        
    });
});

app.get('/bad', (req,res) => {
    res.send({errorMessage : 'This is a bad route'});
})
app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`);
});