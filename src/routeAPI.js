const express = require("express")
const User = require("./Services/Models/EtudiantsModel").User
const EtudiantCtrl = require("./Routes/EtudiantCtrl")

exports.route = (()=>{
    var app = express.Router()
    // accueil route
    app.route("/")
        .get()
        .post((req, res)=>{
            const user = new User(req.body.name, req.body.password)
            res.send({name : user.nameUser, password : user.passwordUser})
        })

    // concernant les etudiants
    app.route("/etudiants/:niveau")
        .get(EtudiantCtrl.getAllStudents)

    // notes de tous les etudiants
    app.route("/notes/:niveau/:matieres")
        .get()


    app.route("/etudiants/etudiant")
        .get(EtudiantCtrl.Information)
        .post(EtudiantCtrl.Inscription)
        .put(EtudiantCtrl.Modification)
    return app
})()