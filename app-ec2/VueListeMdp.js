class VueListeMdp {
  constructor(){
    this.html = document.getElementById("html-vue-liste-mdp").innerHTML;
    this.listemdpDonnee = null;
  }

  initialiserListemdp(listemdpDonnee){
    this.listemdpDonnee = listemdpDonnee;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;

    let listemdp = document.getElementById("liste-mdp");
    const listemdpItemHTML = listemdp.innerHTML;
    let listemdpHTMLRemplacement = "";

    for(var numeromdp in this.listemdpDonnee){
      let listemdpItemHTMLRemplacement = listemdpItemHTML;
      listemdpItemHTMLRemplacement = listemdpItemHTMLRemplacement.replace("{MotDePasse.id}",this.listemdpDonnee[numeromdp].id);
      listemdpItemHTMLRemplacement = listemdpItemHTMLRemplacement.replace("{MotDePasse.siteWeb}",this.listemdpDonnee[numeromdp].siteWeb);
      listemdpHTMLRemplacement += listemdpItemHTMLRemplacement;
    }

    listemdp.innerHTML = listemdpHTMLRemplacement;
  }

}
