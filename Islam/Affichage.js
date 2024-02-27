class ProphèteClass {
    constructor(nom, nom_Arabe, naissance, mort, Pére, Mére, Enfant = [], physique = []) {
        this.nom = nom;
        this.nom = nom_Arabe;
        this.naissance = naissance;
        this.mort = mort;
        this.Pére = Pére;
        this.Mére = Mére;
        this.Enfant = Enfant;
        this.physique = physique;
    }

    getNom_Arabe() {
        return this.nom_Arabe;
    };

    getNom() {
        return this.nom;
    };

    getNaissances() {
        return this.naissance;
    };

    getMort() {
        return this.mort;
    };

    getPere() {
        return this.Pére;
    };

    getMere() {
        return this.Mére;
    };

    getEnfant() {
        return this.Enfant;
    };

    getPhysique() {
        return this.physique;
    };
};

//! Lister les noms  dans l'odre 
const Prophètes = [
    new ProphèteClass("Adam"),
    new ProphèteClass(),
    new ProphèteClass(),
    new ProphèteClass(),
    new ProphèteClass(),
    new ProphèteClass(),
    new ProphèteClass(),
    new ProphèteClass(),
    new ProphèteClass(),
    new ProphèteClass(),
    new ProphèteClass(),
    new ProphèteClass(),
    new ProphèteClass(),
    new ProphèteClass(),
    new ProphèteClass(),
    new ProphèteClass(),
    new ProphèteClass(),
    new ProphèteClass(),
    new ProphèteClass(),
    new ProphèteClass(),
    new ProphèteClass(),
    new ProphèteClass(),
    new ProphèteClass(),
    new ProphèteClass(),
    new ProphèteClass()

]

//! Ne fonctionne pas car il affiche pas le nom choisie

/*
function Afficher_Prophète(i) {
    const Affichage = document.getElementById('infos');

    for (let key in Prophètes[i]) {
        if (key === "getNom_prophete") {
            let Nom = document.createElement('h2');
            Nom.textContent = "Nom du prophète : " + Prophètes[i].getNom_prophete();
            Affichage.appendChild(Nom);
        } else if (key === "getNom") {
            let NomArabe = document.createElement('h2');
            NomArabe.textContent = "Nom en arabe : " + Prophètes[i].getNom();
            Affichage.appendChild(NomArabe);
        }
    }
}

*/
// 
//!Ce code ci-dessous est une version qui fonctionne suffit de rajouter le styles 

/*

function Affichage_Liste_Prophete() {
    const Liste_prophetes = document.querySelector('#liste_prophetes');
    Liste_prophetes.innerHTML = '';
    for (let i = 0; i < Prophètes.length; i++) {

        let li = document.createElement('li');
        li.className = "list-group-item";
        const Nom = document.createTextNode(Prophètes[i].getNom_prophete()  +  "(" +Prophètes[i].getNom_Arabe() +")");
        li.appendChild(Nom);
        Liste_prophetes.appendChild(li); // Utiliser appendChild pour ajouter l'élément à la liste
    };
};
Affichage_Liste_Prophete();

*/

