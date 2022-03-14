class VueMdp {
  constructor(){
    this.html = document.getElementById("html-vue-mdp").innerHTML;
    this.mdp = null;
  }

  initialisermdp(mdp){
    this.mdp = mdp;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    document.getElementById("mdp-siteWeb").innerHTML = this.mdp.siteWeb;
    document.getElementById("mdp-url").innerHTML = this.mdp.url;
    document.getElementById("mdp-mdp").innerHTML = this.mdp.mdp;
    document.getElementById("mdp-questionSecrete").innerHTML = this.mdp.questionSecrete;
    document.getElementById("mdp-reponseSecrete").innerHTML = this.mdp.reponseSecrete;
  }

}
