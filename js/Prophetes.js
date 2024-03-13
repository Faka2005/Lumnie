class ProphèteClass { constructor(nom, nom_Arabe, naissance, mort, Pére, Mére  , Enfant = [], Femme = [], physique = [],peuple,video = [])
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
    new ProphèteClass("Adam", "عدم", "4000 av. J-C", "3070 av. J-C", "Adam", "Ève", [], [], [], "Hommes", []),
    new ProphèteClass("Noé", "نوح", "2850 av. J-C", "2750 av. J-C", "Lamech", "Betheleem", [], [], [], "Hommes", []),

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

        

        let Peuple = document.createElement('p');
        Peuple.textContent = "Peuple : " + prophete.getPeuple();
        Carte.appendChild(Peuple); // Ajouter le peuple à la carte

        

        let Video = document.createElement('div');
        Video.classList.add('video');

        if (prophete.getVideo().length > 0) {
            for (let video of prophete.getVideo()) {
                let Iframe = document.createElement('iframe');
                Iframe.src = video;
                Iframe.width = "300";
                Iframe.height = "150";
                Iframe.frameBorder = "0";
                Video.appendChild(Iframe);
            }
        }if (prophete.getVideo().length == 0){

            let div_erreur =document.createElement("div");
            div_erreur.classList.add("alert_video");
            let img_erreur=document.createElement("img");
            img_erreur.setAttribute("src","Icons/utils/alert_alarm_22185.ico");
            img_erreur.style.width="25px";
            img_erreur.style.display="inline-block";
            let message_erreur=document.createElement("p");
            message_erreur.innerHTML='Ce prophète n\'a pas de vidéo associée';
            
            div_erreur.append(img_erreur);
            div_erreur.append(message_erreur);
            Video.appendChild(div_erreur);

        }

        Carte.appendChild(Video); 

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

function Prophete_Choisie(Nom_Prophete_Selectionné) {
    const Affichage = document.getElementById("infos");
    if(Nom_Prophete_Selectionné !=="Tous"){
        
        Affichage.innerHTML = ''; // Supprimer le contenu précédent
    
        for (let prophete of Prophètes) {
            if (prophete.getNom() == Nom_Prophete_Selectionné) {
                let index = 0; // Initialiser l'index en dehors de la boucle
    
    
                    let Carte = document.createElement('div');
                    Carte.classList.add('carte');
    
                    let Nom = document.createElement('h2');
                    Nom.textContent = "Nom du prophète : " + prophete.getNom() + " (" + prophete.getNom_Arabe() + ")" + " " + "n°" + index;
                    Carte.appendChild(Nom); // Ajouter le nom à la carte
    
                    // Ajouter d'autres détails du prophète ici...
    
                    // Ajouter la carte à l'affichage
                    Affichage.appendChild(Carte);
    
                    // Incrémenter l'index
                  
                
                return; // Sortir de la fonction après avoir affiché les détails du prophète choisi
            }
        } 
    }else{
        Affichage.innerHTML= "";
        Afficher_Prophètes();
    }

}







//!Ce code ci-dessous est une version qui fonctionne suffit de rajouter le styles 


function Affichage_Liste(Liste) {
    const Liste_prophetes = document.querySelector('#ul_seconde');
    
    for (let i = 0; i < Liste.length; i++) {
  
        let li = document.createElement('li');
        li.className = "li_seconde";
        let button=document.createElement('button') ;
        
        button.type="button";
        button.className ="btn btn-primary";
        button.setAttribute('onclick', `Prophete_Choisie('${Prophètes[i].getNom()}')`);
        const Nom = document.createTextNode(Prophètes[i].getNom()  +  "(" +Prophètes[i].getNom_Arabe() +")");
        button.appendChild(Nom);
        li.appendChild(button);
        Liste_prophetes.appendChild(li); // Utiliser appendChild pour ajouter l'élément à la liste
    };
  };
Afficher_Prophètes();
Affichage_Liste(Prophètes);


