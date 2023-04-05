

class Etudiant {
    constructor(nom, prenom, dateNaiss, sexe, classe) {
        this.nom = nom
        this.prenom = prenom,
            this.dateNaissance = dateNaiss
        this.sexe = sexe
        this.classe = classe
    }

    getObject() {
        return {
            nom: this.nom,
            prenom: this.prenom,
            dateNaissance: this.dateNaissance,
            sexe: this.sexe,
            classe: this.classe
        }
    }
}

exports.Etudiant = Etudiant