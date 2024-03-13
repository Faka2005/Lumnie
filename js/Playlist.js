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
    getNom() {
      return this.nom;
    }
    getSourates() {
      return this.sourates.nomSourate;
    }
  }
  
  // Création de quelques récitateurs avec leurs sourates
  const Playlistt = [
    new Récitateur("Récitateur 1", ["Sourate 1", "Sourate 2", "Sourate 3"]),
    new Récitateur("Récitateur 2", ["Sourate 4", "Sourate 5", "Sourate 6"]),
  ];
  
  
  // Fonction pour générer la playlist HTML
  function generatePlaylist(recitateur) {
    const playlistDiv = document.getElementById("playlist");
    const sourates = recitateur.getSourates();
  
    const playlistHTML = `
      <h2>${recitateur.nom}</h2>
      <ul>
        ${sourates.map((sourate, index) => `<li><button onclick="playSourate('${index}', '${recitateur.nom}')">${sourate}</button></li>`).join("")}
      </ul>
    `;
  
    playlistDiv.innerHTML += playlistHTML;
  }
  
  // Fonction pour jouer une sourate
  function playSourate(numero, recitateurName) {
    let recitateur = Playlistt.find(recitateur => recitateur.nom === recitateurName);
  
    if (!recitateur) {
      alert("Récitateur non trouvé.");
      return;
    }
  
    const sourates = recitateur.getSourates();
  
    // Vérifier si le numéro de la sourate est valide
    if (numero >= 0 && numero < sourates.length) {
      const sourate = sourates[numero];
      alert(`Lecture de la sourate "${sourate}" du récitant "${recitateur.getNom()}"`);
    } else {
      alert(`Le numéro de la sourate n'est pas valide.`);
    }
  }
  
  
  // Générer la playlist pour chaque récitant
  Playlistt.forEach(recitateur => {
    generatePlaylist(recitateur);
  });
  