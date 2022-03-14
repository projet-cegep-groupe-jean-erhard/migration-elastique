class VueModifierMdp{
  constructor(){
    this.html = document.getElementById("html-vue-modifier-mdp").innerHTML;
    this.modifierMdp = null;
    this.mdpModif = null;
  }

  initialiserModifierMdp(modifierMdp){
    this.modifierMdp = modifierMdp;
  }

  setMdpModif(mdpModif){
    this.mdpModif = mdpModif;
  }

  afficher(){

    document.getElementsByTagName("body")[0].innerHTML = this.html;


    document.getElementById("mdp-siteWeb").value = this.mdpModif.siteWeb;
    document.getElementById("mdp-url").value = this.mdpModif.url;
    document.getElementById("mdp-mdp").value = this.mdpModif.mdp;
    document.getElementById("mdp-questionSecrete").value = this.mdpModif.questionSecrete;
    document.getElementById("mdp-reponseSecrete").value = this.mdpModif.reponseSecrete;

    document.getElementById("formulaire-modifier").addEventListener("submit",evenement =>this.enregistrer(evenement));

  }

  enregistrer(evenement){
    evenement.preventDefault();

    let hash = window.location.hash;
    let navigation =  hash.match(/^#modifier-mdp\/([0-9]+)/);
    let id = navigation[1];


    let siteWeb = document.getElementById("mdp-siteWeb").value;
    let url = document.getElementById("mdp-url").value;
    let mdp = document.getElementById("mdp-mdp").value;
    let questionSecrete = document.getElementById("mdp-questionSecrete").value;
    let reponseSecrete = document.getElementById("mdp-reponseSecrete").value;

    console.log("dededed"+ siteWeb, url, mdp, questionSecrete, reponseSecrete, id)

    this.modifierMdp(new MotDePasse(siteWeb, url, mdp, questionSecrete, reponseSecrete, id));

  }
}
  