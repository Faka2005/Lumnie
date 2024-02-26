const Prophète = {
  Prophète1: {
    nom: "1",
    naissance: "",
    mort: "",
    Pére: "",
    Mére: "",
    Enfant: "",
  },
  Prophète2: {
    nom: "",
    naissance: "",
    mort: "",
    Pére: "",
    Mére: "",
    Enfant: "",
  },
};

const Califes = {
  Califes1: {
    nom: "",
    naissance: "",
    mort: "",
    Pére: "",
    Mére: "",
    Enfant: "",
    Lieu_de_naissance: "",
    Lieu_de_mort: "",
    qualite: "",
  },
  Califes2: {
    nom: "",
    naissance: "",
    mort: "",
    Pére: "",
    Mére: "",
    Enfant: "",
    Lieu_de_naissance: "",
    Lieu_de_mort: "",
    qualite: "",
  },
};
const Campagnon = {
  Campagnon1: {
    nom: "",
    qualite: "",
    surnom: "",
  },
  Campagnon2: {
    nom: "",
    qualite: "",
    surnom: "",
  },
};
const Anges = {
  Anges1: {
    nom: "",
    rôle: "",
    description: "",
  },
  Anges2: {
    nom: "",
    rôle: "",
    description: "",
  },
};
const Ennemi_Allah = {
  ennemisdallah1: {
    nom: "",
    description: "",
    causes: "",
  },
  ennemisdallah2: {
    nom: "",
    description: "",
    causes: "",
  },
};
const Pilliers_Islam={
  pillier1 :{
    nom:"",
    description:"",
  }
}
const Pilliers_Iman={
  pillierimaman1 :{
    nom:"",
    description:""
  }
}
const Nom_Allah={
  Nom_Allah1:
  {
    nom_arabe:"",
    nom_français:"",
    description:""
  }
}
const juzz={
  juzz1:{
    numJuz:0,
    debut:"",
    fin:"",
    ayat:""
  }
}
const douans={
  douans1:{
    arabe:"",
    description:""
  }
}

class Sourates {
  constructor(nomSourate = []) {
    this.nomSourate = nomSourate;
  }
}

class Récitateur {
  constructor(nom, sourates = []) {
    this.nom = nom;
    this.sourates = new Sourates(sourates);
  }

  // Fonction pour récupérer chaque élément de la liste de sourates
  getSourates() {
    return this.sourates.nomSourate;
  }
}


const recitateur1 = new Récitateur("Abdul Basit", ["Al-Fatiha", "Al-Baqarah", "Al-Imran"]);

// Fonction pour récupérer et afficher les sourates d'un récitateur
function Affiche_Sourates(recitateur) {
  // Appel de la fonction getSourates pour récupérer les sourates
  const sourates = recitateur.getSourates();

  // Affichage de chaque élément de la liste de sourates
  sourates.forEach((sourate, index) => {
    console.log(` ${sourate}`);
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


Affiche_Sourates(recitateur1);
DonneSourate(0, recitateur1);