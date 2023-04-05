const EtudiantModel = require("../Services/Models/EtudiantsModel")
const Etudiant = require("../Services/Classes/Etudiant").Etudiant
module.exports = {

    getAllStudents : function(req, res){
        let niveau = req.params.niveau ?? ""
        EtudiantModel.findAllEtudiant(niveau, (allEtudiants => {
            res.json(allEtudiants)
            
        }))
    },

    // inscrire un nouveau etudiant
    Inscription : function(req, res) {
        // let etudiant = new Etudiant("test", "etudiant", "2004-11-16", "F", "L1")
        // EtudiantModel.InscriptionAction(etudiant, (result)=>{
        //     res.json({result})
        // })
    },

    Information : function(req, res) {

        res.send("voici mes information")
    },

    Modification : function(req, res) {

        res.send("je suis une modification")
    }
}