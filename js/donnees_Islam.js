//! Class utilisé pour la partie islam 

  
class Califes{
  constructor(nom_califes,nom,naissance,mort,Pére,Mére,Enfant= [],physique = [],qualite =[]) {
    this.nom_califes=nom_califes;
    this.nom=nom;
    this.naissance=naissance;
    this.mort=mort;
    this.Pére=Pére;
    this.Mére=Mére;
    this.Enfant=Enfant;
    this.physique=physique;
    this.calité=qualite;
  }
  getNom(){
    return this.nom;
  };
  
  getNom_Califes(){
    return this.nom_califes;
  };

  getNaissances() {
    return this.naissance;
  };

  getMort(){
    return this.mort;
  };

  getPere(){
    return  this.Pére;
  };
  
  getMere(){
    return this.Mére;
  };

  getEnfant(){
    return this.Enfant;
  };

  getPhysique(){
    return  this.physique;
  };
  
  getQualite(){
    return this.qualite;
  }
};

class Anges{
  constructor(nom, role, description =[],explication){
    this.nom = nom ;
    this.role= role ;
    this.description= description ;
    this.explication=explication;
  }

  getNom(){
    return this.nom
  }  
  
  getRole(){
    return  this.role ;
  }

  getDescription(){
    return this.description ;
  }
  
  getExplication(){
    return this.explication ;
  }
};
class Campagnon{
  constructor(nom,qualite,surnom){
    this.nom=nom;
    this.qualite=qualite;
    this.surnom=surnom;
  }
  getNom(){
    return this.nom;
  };

  getQualite(){
    this.qualite;
  };
  getSurnom() {
    return this.surnom;
  }
};

class Ennemi_Allah{
  constructor(nom,description,causes=[],explication) {
    this.nom = nom;
    this.description = description ;
    this.causes = causes ;
    this.explication = explication ;
  }
  getNom(){
    return  this.nom ;
  }
  getDescription(){
    return this.description;
  }
  getCauses(){
    return this.causes;
  }
  getExplication(){
    return  this.explication;
  }
};



class Juzz{
  constructor (num_Juzz , nom_juzz , sourates =[],debut,fin){
    this.num_Juzz= num_Juzz ;
    this.nom_juzz = nom_juzz ;
    this.sourates = new Sourates [sourates] ;
    this.debut=debut;
    this.fin=fin;
  }
  getNumero_Juzz(){
    return this.num_Juzz;
  }
  getNom_Juzz(){
    return this.nom_juzz;
  }
  getSourates() {
    return this.sourates.nomSourate;
  }
  getDebut(){
    return  this.debut;
  }
  getFin(){
    return this.fin;
  }
};
class Sourates {
  constructor(nomSourate = []) {
    this.nomSourate = nomSourate;
  }
};
class Récitateur {
  constructor(nom, sourates = []) {
    this.nom = nom;
    this.sourates = new Sourates(sourates);
  }
  getNom(){
    return  this.nom;
  }
  
  getSourates() {
    return this.sourates.nomSourate;
  }
};


// Fonction pour récupérer et afficher les sourates d'un récitateur
function Affiche_Sourates(recitateur) {
  // Appel de la fonction getSourates pour récupérer les sourates
  const sourates = recitateur.getSourates();

  // Affichage de chaque élément de la liste de sourates
  sourates.forEach((sourate,index) => {
    console.log(` sourate :${sourate} , Index :${index}`);
  });
}
// Fonction qui donne le sourat choisi dans le récitateur choisi
function DonneSourate(numero, recitateur) {
  const sourates = recitateur.getSourates();
  
  // Vérifier si le numéro de la sourate est valide
  if (numero > 0 && numero <= sourates.length) {
    const sourate = sourates[numero - 1];
    console.log(`${sourate}`);
  } else {
    console.log(`Le numéro de la sourate n'est pas valide.`);
  }
}

class Nom_Allah{
  constructor(nom_arabe,nom_français,signification,explication){
    this.nomAr = nom_arabe;
    this.nomFr = nom_français;
    this.signification = signification;
    this.explication = explication
  }
  getNomAR() {return this.nomAr;}
  getNomFR() {return this.nomFr;}
  getSignif() {return this.signification;}
  getExplication() {return this.explication;}
}



const recitateur1 = new Récitateur("Abdul Basit", ["Al-Fatiha", "Al-Baqarah", "Al-Imran"]);


