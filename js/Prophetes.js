class ProphèteClass {
    constructor(nom, nom_Arabe, naissance, mort, Pére, Mére  , Enfant = [], Femme = [], physique = [],peuple,video)
    {
        this.nom = nom;
        this.nom_Arabe = nom_Arabe;
        this.naissance = naissance;
        this.mort = mort;
        this.Pére = Pére;
        this.Mére = Mére;
        this.Enfant = Enfant;
        this.Femme = Femme;
        this.physique = physique;
        this.video =video;
        this.peuple = peuple;
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

    getFemme() {
        return this.Femme;
    };

    getPhysique() {
        return this.physique;
    };

    getVideo(){
        return  this.video;
    };

    getPeuple(){
        return this.peuple;
    }
    
}

const Prophètes = [
    new ProphèteClass("Adam", "عدم", "4000 av. J-C", "3070 av. J-C", "Adam", "Ève", [], [], [], "Hommes", "https://www.youtube.com/watch?v=8jluurK-E6U"),
    new ProphèteClass("Noé", "نوح", "2850 av. J-C", "2750 av. J-C", "Lamech", "Betheleem", [], [], [], "Hommes", "video_noe.mp4"),
    new ProphèteClass("Adam", "عدم", "4000 av. J-C", "3070 av. J-C", "Adam", "Ève", [], [], [], "Hommes", "video_adam.mp4"),
    new ProphèteClass("Noé", "نوح", "2850 av. J-C", "2750 av. J-C", "Lamech", "Betheleem", [], [], [], "Hommes", "video_noe.mp4"),
    new ProphèteClass("Adam", "عدم", "4000 av. J-C", "3070 av. J-C", "Adam", "Ève", [], [], [], "Hommes", "video_adam.mp4"),
    // Ajoutez d'autres prophètes avec des données réelles au besoin
];

function Afficher_Prophètes() {
    const Affichage = document.getElementById('infos');
    let index = 0; // Initialiser l'index en dehors de la boucle

    // Créer une div pour contenir les colonnes
    let colonnesDiv = document.createElement('div');
    colonnesDiv.classList.add('colonnes');

    for (let prophete of Prophètes) {
        let Carte = document.createElement('div');
        Carte.classList.add('carte');

        let Nom = document.createElement('h2');
        Nom.textContent = "Nom du prophète : " + prophete.getNom() + " (" + prophete.getNom_Arabe() + ")" + " " + "n°" + index;
        Carte.appendChild(Nom); // Ajouter le nom à la carte

        let Naissance = document.createElement('p');
        Naissance.textContent = "Date de naissance : " + prophete.getNaissances();
        Carte.appendChild(Naissance); // Ajouter la date de naissance à la carte

        let Mort = document.createElement('p');
        Mort.textContent = "Date de mort : " + prophete.getMort();
        Carte.appendChild(Mort); // Ajouter la date de mort à la carte

        let Pere = document.createElement('p');
        Pere.textContent = "Père : " + prophete.getPere();
        Carte.appendChild(Pere); // Ajouter le père à la carte

        let Mere = document.createElement('p');
        Mere.textContent = "Mère : " + prophete.getMere();
        Carte.appendChild(Mere); // Ajouter la mère à la carte

        let Enfants = document.createElement('p');
        Enfants.textContent = "Enfants : " + prophete.getEnfant().join(', ');
        Carte.appendChild(Enfants); // Ajouter les enfants à la carte

        let Physique = document.createElement('p');
        Physique.textContent = "Caractéristiques physiques : " + prophete.getPhysique().join(', ');
        Carte.appendChild(Physique); // Ajouter les caractéristiques physiques à la carte

        let Video = document.createElement('div');
        Video.classList.add('video');

        let Peuple = document.createElement('p');
        Peuple.textContent = "Peuple : " + prophete.getPeuple();
        Carte.appendChild(Peuple); // Ajouter le peuple à la carte
        
        let Iframe = document.createElement('iframe');
        Iframe.src = prophete.getVideo();
        Iframe.width = "300";
        Iframe.height = "150";
        Iframe.frameBorder = "0";
        Video.appendChild(Iframe);

        Carte.appendChild(Video); // Ajouter la vidéo à la carte

        

        // Ajouter la carte à la colonne actuelle
        colonnesDiv.appendChild(Carte);

        // Incrémenter l'index
        index = index + 1;

        // Si l'index est pair, cela signifie que nous avons ajouté deux cartes à la colonne, nous devons donc créer une nouvelle colonne
        if (index % 2 === 0) {
            // Ajouter la colonne à l'affichage principal
            Affichage.appendChild(colonnesDiv);

            // Créer une nouvelle colonne
            colonnesDiv = document.createElement('div');
            colonnesDiv.classList.add('colonnes');
        }
    }

    // S'il reste une seule carte non ajoutée à une colonne, l'ajouter à la dernière colonne
    if (Prophètes.length % 2 !== 0) {
        Affichage.appendChild(colonnesDiv);
    }
}



Afficher_Prophètes();








//! Lister les noms  dans l'odre 



 
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

