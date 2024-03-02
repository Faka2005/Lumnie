class Pilliers_Ihsan {
  constructor(nom, description, conditions = [], annulatif = [], explication) {
    this.nom = nom;
    this.description = description;
    this.conditions = conditions;
    this.annulatif = annulatif;
    this.explication = explication;
  }
  getDescription() {
    return this.description;
  }
  getName() {
    return this.nom;
  }
  getConditions() {
    return this.conditions;
  }
  getAnnulatifs() {
    return this.annulatif;
  }
  getExplication() {
    return this.explication;
  }
}
class Pilliers_Iman {
  constructor(nom, description, conditions = [], annulatif = [], explication) {
    this.nom = nom;
    this.description = description;
    this.conditions = conditions;
    this.annulatif = annulatif;
    this.explication = explication;
  }
  getDescription() {
    return this.description;
  }
  getName() {
    return this.nom;
  }
  getConditions() {
    return this.conditions;
  }
  getAnnulatifs() {
    return this.annulatif;
  }
  getExplication() {
    return this.explication;
  }
}
class Pilliers_Islam {
  constructor(nom, description, conditions = [], annulatif = [], explication) {
    this.nom = nom;
    this.description = description;
    this.conditions = conditions;
    this.annulatif = annulatif;
    this.explication = explication;
  }
  getDescription() {
    return this.description;
  }
  getName() {
    return this.nom;
  }
  getConditions() {
    return this.conditions;
  }
  getAnnulatifs() {
    return this.annulatif;
  }
  getExplication() {
    return this.explication;
  }
}

function Section_Affichage(Pilliers) {
    const Affichage = document.getElementById("affichage");
    let index = 0; // Initialiser l'index en dehors de la boucle

    // Créer une div pour contenir les colonnes
    let colonnesDiv = document.createElement('div');
    colonnesDiv.classList.add('colonnes');

    for (let Pillier of Pilliers) {
        let section = document.createElement("section");
        section.className = "affichage";

        let h3 = document.createElement("h3");
        h3.textContent = Pillier.getName();
        section.appendChild(h3);

        let p = document.createElement("p");
        p.className = "description";
        p.textContent = Pillier.getDescription();
        section.appendChild(p);

        if (Pillier.getConditions().length != 0) {
            let ulCondition = document.createElement("ul");
            ulCondition.className = "liste-condition";

            for (let condition of Pillier.getConditions()) {
                let li = document.createElement("li");
                li.textContent = condition;
                ulCondition.appendChild(li);
            }

            p.appendChild(ulCondition);
        }

        let divResultat = document.createElement("div");
        divResultat.id = "resultat";
        divResultat.style.display = "none";
        let spanRessource = document.createElement("span");
        spanRessource.className = "ressource";
        let spanValeur = document.createElement("span");
        spanValeur.className = "valeur";
        divResultat.appendChild(spanRessource);
        divResultat.appendChild(document.createTextNode("/"));
        divResultat.appendChild(spanValeur);
        section.appendChild(divResultat);

        // Ajouter la section à la colonne actuelle
        colonnesDiv.appendChild(section);

        // Incrémenter l'index
        index++;

        // Si l'index est pair, cela signifie que nous avons ajouté deux sections à la colonne, nous devons donc créer une nouvelle colonne
        if (index % 2 === 0) {
            // Ajouter la colonne à l'affichage principal
            Affichage.appendChild(colonnesDiv);

            // Créer une nouvelle colonne
            colonnesDiv = document.createElement('div');
            colonnesDiv.classList.add('colonnes');
        }
    }

    // S'il reste une seule section non ajoutée à une colonne, l'ajouter à la dernière colonne
    if (Pilliers.length % 2 !== 0) {
        // Centrer la dernière section au milieu de la page
        colonnesDiv.classList.add('centrer');
        Affichage.appendChild(colonnesDiv);
    }
}




const Pilliers = [
    new Pilliers_Islam("Iman", "vindsk", [
        "fbiudbfk",
        "fvrgvegds",
        "grevfefvcdgver",
    ]),
    new Pilliers_Islam("Iman", "vindsk", [
        "fbiudbfk",
        "fvrgvegds",
        "grevfefvcdgver",
    ]),
    new Pilliers_Islam("Iman", "vindsk", [
        "fbiudbfk",
        "fvrgvegds",
        "grevfefvcdgver",
    ])
];
Section_Affichage(Pilliers);
