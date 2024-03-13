class Links_Page {
  constructor(name, link_page, link_icon, privacy) {
    this.name = name;
    this.link_page = link_page;
    this.link_icon = link_icon;
    this.privacy = privacy === "Private" ? privacy : "Public";
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
  getPrivacy() {
    return this.privacy;
  }
}

const icons = [
  new Links_Page("Accueil", "index.html", "/Icons/Acceuil.png", "Public"),
  new Links_Page("Les Différents Prophete", "Prophete.html", "/Icons/Prophete.png", "Public"),
  new Links_Page("Les Différents degrés de foie en Islam", "Pilliers.html", "/Icons/Pilliers.png", "Public"),
  new Links_Page("Les différents Juzz", "juzz.html", "/Icons/Juzz.jpg", "Public"),
  new Links_Page("Playlist de Qur'an", "Playlist.html", "/Icons/Playlist.png", "Public"),
  new Links_Page("Page de test","test.html","/Images\/Test\.png/", "Private")
];

function changeIcon(lien) {
  for (let icon of icons) {
    if (icon.getName() === lien) {
      const favicon = document.querySelector("link[rel='icon']") || document.createElement("link");
      favicon.type = "image/x-icon";
      favicon.rel = "icon";
      favicon.href = icon.getLinkIcon();
      document.querySelector("head").appendChild(favicon);
      console.log("Icône trouvée :", icon.getLinkIcon());
      return icon.getLinkIcon();
    }
  }
  console.error("Aucune icône trouvée pour le lien :", lien);
  return null;
}

function displayLink() {
  const nav_links = document.getElementById("nav-links");
  for (let icon of icons) {
    if (icon.getPrivacy() !== "Private") {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.href = icon.getLinkPage();
      a.textContent = icon.getName();
      li.appendChild(a);
      nav_links.appendChild(li);
    }
  }
}

function displayPageName() {
  const currentPage = window.location.pathname.split("/").pop().split(".")[0];
  const currentLink = icons.find(link => link.getLinkPage().split("/").pop().split(".")[0] === currentPage);
  if (currentLink) {
    const textOfLink = currentLink.getName();
    const rightDiv = document.getElementById("right");
    rightDiv.innerHTML += textOfLink;
    document.title = textOfLink;
    changeIcon(textOfLink);
    return textOfLink;
  }
}


function toggleThemeAcceuil() {
  const themeStyle = document.getElementById("theme-style");
  if (themeStyle.getAttribute("href") === "css/navbar_claire.css") {
    themeStyle.setAttribute("href", "css/navbar_sombre.css");
  } else {
    themeStyle.setAttribute("href", "css/navbar_claire.css");
  }
}
displayPageName();
displayLink();
