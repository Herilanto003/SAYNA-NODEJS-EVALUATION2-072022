// intégration des modules et des packages
require('dotenv').config()
const express = require("express");
const con = require("./src/model/mysql");
const bodyParser = require("body-parser");
console.log(con)


const app = express();

const PORT = process.env.PORT || 3000


// utilisation de body parser
// -------------------------------
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// ----------------------------------------
// connexion à la base de données
// const con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "herylanto",
//     database: "evaluation"
// });

// teste de connection à la base de donné
con.connect((err)=>{
    if(err) throw err;
    console.log("database connected...");
})


// Utilisation des packages et modules
app.use(express.static(__dirname+"/public"));


// lancement du serveur
app.listen(3000, console.log("le serveur démarre"));

// routage vers l' index.html
app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

// routage vers le backend
app.get("/backend", (req,res)=>{
    res.sendFile(__dirname+"/backend.html");
});

// routage vers le frontend
app.get("/frontend", (req,res)=>{
    res.sendFile(__dirname+"/frontend.html");
});

// routage vers l' marketing
app.get("/marketing", (req,res)=>{
    res.sendFile(__dirname+"/marketing.html");
});

// routage vers l' signup
app.get("/signup", (req,res)=>{
    res.sendFile(__dirname+"/signup.html");
});

// routage vers l' uxui
app.get("/uxui", (req,res)=>{
    res.sendFile(__dirname+"/uxui.html");
});

// routage vers l' contact
app.get("/contact", (req,res)=>{
    res.sendFile(__dirname+"/contact.html");
});



// Enregistrement dans la base de donnees
app.post("/enregistrement",(req,res)=>{
    securisation(req.body);
    
    con.query(
        `INSERT INTO USER (firstname,lastname,avis,note,formation) VALUES (?,?,?,?,?)`,
        [
            req.body.fname,
            req.body.lname,
            req.body.avis,
            req.body.Note,
            req.body.formation
        ],
        (err, resultat)=>{
            if (err) throw err;
            res.json(resultat);
        }
    );
});

// récuperation des notes par formations
app.get("/homeRecupere", (req,res)=>{
    con.query(
        "SELECT formation, firstname, lastname,note,avis FROM user WHERE note >= 4 order by formation",
        (err,resultat)=>{
            res.json(resultat)
        }
    );
})

// récuperation des formations backend
app.get("/backRecupere", (req,res)=>{
    con.query(
        "SELECT firstname, lastname, avis,note FROM user WHERE formation='Backend'",
        (err,resultat)=>{
            res.json(resultat)
        }
    );
});


// récuperation des formations frontend
app.get("/frontRecupere", (req,res)=>{
    con.query(
        "SELECT firstname, lastname, avis,note FROM user WHERE formation='Frontend'",
        (err,resultat)=>{
            res.json(resultat)
        }
    );
});


// récuperation des formations frontend
app.get("/markeRecupere", (req,res)=>{
    con.query(
        "SELECT firstname, lastname, avis,note FROM user WHERE formation='Marketing'",
        (err,resultat)=>{
            res.json(resultat)
        }
    );
});


// récuperation des formations frontend
app.get("/uxRecupere", (req,res)=>{
    con.query(
        "SELECT firstname, lastname, avis,note FROM user WHERE formation='UX-UI'",
        (err,resultat)=>{
            res.json(resultat)
        }
    );
});









// function de securisation des donnees
function securisation(donne) {
    for(let i in donne)
    {
        donne[i] = donne[i].trim();
    }
}