class Pilliers_Ihsan {
  constructor(nom, description, conditions = [], annulatif = [], explication,num) {
    this.nom = nom;
    this.description = description;
    this.conditions = conditions;
    this.annulatif = annulatif;
    this.explication = explication;
    this.num=num;
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
  getNum(){
    return  this.num;
  }
}
class Pilliers_Iman {
  constructor(nom, description, conditions = [], annulatif = [], explication,num) {
    this.nom = nom;
    this.description = description;
    this.conditions = conditions;
    this.annulatif = annulatif;
    this.explication = explication;
    this.num=num;
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
  getNum(){
    return  this.num;
  }
}
class Pilliers_Islam {
  constructor(nom, description, conditions = [], annulatif = [], explication,num) {
    this.nom = nom;
    this.description = description;
    this.conditions = conditions;
    this.annulatif = annulatif;
    this.explication = explication;
    this.num=num;
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
  getNum(){
    return  this.num;
  }
}
const Liste_Pilliers_Islam = [
  new Pilliers_Islam("Iman1", "vindsk", ["fbiudbfk","fvrgvegds","grevfefvcdgver"],[],"","Pillier 1"),
  new Pilliers_Islam("Iman2", "vindsk", ["fbiudbfk","fvrgvegds","grevfefvcdgver"],[],"","Pillier 1"),
  new Pilliers_Islam("Iman3", "vindsk", ["fbiudbfk","fvrgvegds","grevfefvcdgver"],[],"","Pillier 1")
];
const Liste_Pilliers_Iman=[

];
const Liste_Pilliers_Ihsan=[

];

function Section_Affichage(Liste) {
    const Affichage = document.getElementById("affichage");
    Affichage.innerHTML="";
    let index = 0; // Initialiser l'index en dehors de la boucle

    // Créer une div pour contenir les colonnes
    let colonnesDiv = document.createElement('div');
    colonnesDiv.classList.add('colonnes');

    for (let Pillier of Liste) {
        let section = document.createElement("section");
        section.className = "affichage";

        let h3 = document.createElement("h3");
        h3.textContent = Pillier.getName() + " : " + Pillier.getNum();
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
    if (Liste.length % 2 !== 0) {
        // Centrer la dernière section au milieu de la page
        colonnesDiv.classList.add('centrer');
        Affichage.appendChild(colonnesDiv);
    }
}

function Affichage_Pillier_Button_Choisie(Liste) {
  let Liste_Affichage = null;
  switch (Liste) {
    case Liste_Pilliers_Islam:
      Liste_Affichage = document.querySelector('#ul_seconde_islam');
      break;
    case Liste_Pilliers_Iman:
      Liste_Affichage = document.querySelector('#ul_seconde_iman');
      break;
    case Liste_Pilliers_Ihsan:
      Liste_Affichage = document.querySelector('#ul_seconde_ihsan');
      break;
    default:
      console.log("Erreur dans le choix de la liste d'affichage.");
      return;
  }

  for (let i = 0; i < Liste.length; i++) {
    let Pillier = Liste[i];
    let li = document.createElement('li');
    li.className = "li_seconde";
    let button = document.createElement('button');
    button.type = "button";
    button.className = "btn btn-primary";
    button.setAttribute('onclick', `Pilliers_Choisie('${Pillier.getName()}')`);
    const Nom = document.createTextNode(Pillier.getName());
    button.appendChild(Nom);
    li.appendChild(button);
    Liste_Affichage.appendChild(li); // Utiliser appendChild pour ajouter l'élément à la liste
  }
}

function Affichage_Button(Class_Button){
  var boutons = document.getElementById(Class_Button);
  if(boutons.style.display == 'none'){
    boutons.style.display='block';
  }else{
    boutons.style.display='none';
  }
}

function Pilliers_Choisie(nom){
  const Affichage =document.getElementById("affichage");
  Affichage.innerHTML="";
  for(listes of Liste_Pilliers_Islam){
    if(listes.getName()==nom)
    {
      const Affichage = document.getElementById("affichage");
      let section = document.createElement("section");
        section.className = "affichage";

        let h3 = document.createElement("h3");
        h3.textContent = listes.getName() + " : " + listes.getNum();
        section.appendChild(h3);

        let p = document.createElement("p");
        p.className = "description";
        p.textContent = listes.getDescription();
        section.appendChild(p);
        if (listes.getConditions().length != 0) {
          let ulCondition = document.createElement("ul");
          ulCondition.className = "liste-condition";

          for (let condition of listes.getConditions()) {
              let li = document.createElement("li");
              li.textContent = condition;
              ulCondition.appendChild(li);
          }

          p.appendChild(ulCondition);
      }
      section.appendChild(p);
      Affichage.appendChild(section);

    }
  }
}

Section_Affichage(Liste_Pilliers_Islam);
Affichage_Pillier_Button_Choisie(Liste_Pilliers_Islam);
