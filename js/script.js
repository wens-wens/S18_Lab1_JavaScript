function genererContenu() {
  // Obtenir l'élément avec l'id démo et lui ajouter des éléments h2 et p
   // Obtenir l'élément avec l'id demo
    const demo = document.getElementById("demo");

    // Récupérer les valeurs des champs
    const nombre = document.querySelectorAll("input")[0].value;
    const titre = document.querySelectorAll("input")[1].value;
    const texte = document.querySelectorAll("input")[2].value;

    // Vider le contenu précédent
  demo.innerHTML = "";

    // Créer les sections
    for (let i = 0; i < nombre; i++) {

        // Créer un titre
        const h2 = document.createElement("h2");
        h2.textContent = titre;

        // Créer un paragraphe
        const p = document.createElement("p");
        p.textContent = texte;

        // Ajouter les éléments dans le DOM
        demo.appendChild(h2);
        demo.appendChild(p);
    }
}
  
function changerStyle() {
  // Obtenir les éléments p qui sont sous le div demo et changer la couleur spécifiée dans l'input
  const demo = document.getElementById("demo")
  //Recuperer les valeurs
  const paragraphe = document.querySelectorAll("p")
  //Recuperer la couleur ecrite dans l'input
  const couleur = document.querySelectorAll("input")[3].value
  //change la couleur du paragraphe
  paragraphe.forEach(function(p){
    p.style.color = couleur
  })

}
  
function changerClassBoutons() {
  // Obtenir les éléments boutons et changer leur className pour celui qui est spécifié dans l'input
  
    // Obtenir tous les boutons
    const boutons = document.querySelectorAll("button");

    // Récupérer le nom de la classe dans l'input
    const classe = document.querySelectorAll("input")[4].value;

    // Changer la classe de chaque bouton
    boutons.forEach(function(bouton) {
        bouton.className = classe;
    });
}