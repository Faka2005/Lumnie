class Links_Page {
  constructor(name, link_page, link_icon) {
    this.name = name;
    this.link_page = link_page;
    this.link_icon = link_icon;
  }
  getName() {
    return this.name;
  }
  getLinkPage() {
    return this.link_page;
  }
  getLinkIcon() {
    return this.link_icon;
  }
}

const icones = [
  new Links_Page("Accueil", "index.html", "/Icons/Acceuil.png"),
  new Links_Page("Les Différents Prophete", "Prophete.html", "/Icons/Prophete.png"),
  new Links_Page("Les Différents degrés de foie en Islam","Pilliers.html", "/Icons/Pilliers.png"),
  new Links_Page("Les différents Juzz", "juzz.html", "/Icons/Juzz.jpg"),
];

//! Change l'icône de la page en fonction du lien
function change_icone(lien) {
  for (let icone of icones) {
    if (icone.getName() === lien) {
      // Sélectionner l'élément <link> relatif à l'icône
      const favicon =document.querySelector("link[rel='icon']") ||document.createElement("link");
      favicon.type = "image/x-icon";
      favicon.rel = "icon";

      // Chemin vers votre nouvelle icône
      favicon.href = icone.getLinkIcon();

      // Remplacer l'icône actuelle par la nouvelle icône
      document.querySelector("head").appendChild(favicon);

      console.log("Icône trouvée:", icone.getLinkIcon());
      return icone.getLinkIcon(); // Retourner le lien de l'icône
    }
  }
  console.error("Aucune icône trouvée pour le lien:", lien);
  return null; // Retourner null si aucune icône n'est trouvée
}

//! Affiche le nom de la page en fonction du lien avec le dictionnaire "liens".
function Lien() {
  const currentPage = window.location.pathname.split("/").pop().split(".")[0];

  // Recherche du lien correspondant à la page actuelle
  const lienCourant = icones.find((link) => {
    const pageName = link.getLinkPage().split("/").pop().split(".")[0];
    return pageName === currentPage;
  });

  if (lienCourant) {
    // Extraction du texte et de l'URL du lien
    const textDuLien = lienCourant.getName();
    const Droite = document.getElementById("right");
    Droite.innerHTML += textDuLien;
    change_icone(textDuLien);
    return textDuLien;
  }
}

//! Affichage des différents liens du site
console.log(`Vous êtes sur : ${Lien()}`);
function Affichage_Lien() {
  const nav_links = document.getElementById("nav-links");
  for (let link of icones) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = link.getLinkPage();
    a.textContent = link.getName();
    li.appendChild(a);
    nav_links.appendChild(li);
  }
}
//! Pas terminé
/*
function Darkmod(){
  var element = document.body;
  element.classList.toggle("dark-mode");
  var btn=document.getElementById('button');
  if (element.classList.contains("dark-mode")){
    console.log('Dark')
    btn.style.color="white";
    btn.value='Light Mode';
  }else{
    console.log("Light")
    btn.style.color="#121212";
    btn.value='Dark Mode';
  }
}
*/

Affichage_Lien();
