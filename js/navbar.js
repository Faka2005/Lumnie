const liens = [
    { "Accueil": "index.html" },
    { "Les Différents Prophete": "Prophete.html" },
    { "Les Différents Pilliers en Islam": "Pilliers.html" },
    { "Les différents Juzz": "juzz.html" },
];
function Lien() {
  const currentPage = window.location.pathname.split("/").pop().split(".")[0];

  // Recherche du lien correspondant à la page actuelle
  const lienCourant = liens.find((link) => {
    const url = Object.values(link)[0];
    const pageName = url.split("/").pop().split(".")[0];
    return pageName === currentPage;
  });

  if (lienCourant) {
    // Extraction du texte et de l'URL du lien
    const textDuLien = Object.keys(lienCourant)[0];
    const Droite = document.getElementById("right");
    Droite.innerHTML += textDuLien;
    return textDuLien;
  }
}
function Affichage_Lien(){

      
    const nav_links=document.getElementById('nav-links');
    for (let link of liens) {
        for (let text in link) {
            let li  = document.createElement('li');
            let a = document.createElement('a');
            a.href = link[text];
            a.textContent = text;
            li.appendChild(a);
            nav_links.appendChild(li);
        }
        // Ajoutez une balise <br> pour séparer les liens
        
    }
    
}
Lien();
Affichage_Lien();