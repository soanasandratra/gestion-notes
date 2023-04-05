const {PrismaClient} = require("@prisma/client")

const prisma = new PrismaClient()

module.exports = {

    //selectionné tous les etudiants
    findAllEtudiant : async function(niveau, cb){
        const findAll = await prisma.ETUDIANT.findMany({
            where : {
                niveau : niveau
            }
        })
        cb(findAll)
    }

}

