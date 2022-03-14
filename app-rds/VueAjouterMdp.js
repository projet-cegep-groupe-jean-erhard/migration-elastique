class VueAjouterMdp {
  constructor(){
    this.html = document.getElementById("html-vue-ajouter-mdp").innerHTML;
    this.ajoutermdp = null;
  }

  initialiserAjoutermdp(ajoutermdp){
    this.ajoutermdp = ajoutermdp;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    document.getElementById("formulaire-ajouter").addEventListener("submit",evenement =>this.enregistrer(evenement));
  }

  enregistrer(evenement){
    evenement.preventDefault();

    let siteWeb = document.getElementById("mdp-siteWeb").value;
    let url = document.getElementById("mdp-url").value;
    let mdp = document.getElementById("mdp-mdp").value;
    let questionSecrete = document.getElementById("mdp-questionSecrete").value;
    let reponseSecrete = document.getElementById("mdp-reponseSecrete").value;

    this.ajoutermdp(new MotDePasse(siteWeb, url, mdp, questionSecrete, reponseSecrete, null));

  }

}