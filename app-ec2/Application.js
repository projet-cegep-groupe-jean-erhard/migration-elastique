class Application {
  constructor(window, vueListemdp, vuemdp, vueAjoutermdp, mdpDAO){

    this.window = window;

    this.vueListemdp = vueListemdp;

    this.vuemdp = vuemdp;

    this.vueAjoutermdp = vueAjoutermdp;
    // C'est l'équivalent de function(mdp){this.ajoutermdp(mdp)}
    this.vueAjoutermdp.initialiserAjoutermdp(mdp =>this.ajoutermdp(mdp));

    this.mdpDAO = mdpDAO;

    // C'est l'équivalent de function(){this.naviguer()}
    this.window.addEventListener("hashchange", () =>this.naviguer());

    this.naviguer();
  }

  naviguer(){
    let hash = window.location.hash;

    if(!hash){

      this.mdpDAO.lister((listemdp) => this.afficherNouvelleListemdp(listemdp));

    }else if(hash.match(/^#ajouter-mdp/)){

      this.vueAjoutermdp.afficher();

    }else{

      let navigation = hash.match(/^#mdp\/([0-9]+)/);
      let idmdp = navigation[1];

      this.mdpDAO.chercher(idmdp, (mdp) => this.afficherNouveaumdp(mdp));
    }
  }

  afficherNouvelleListemdp(listemdp){

    console.log(listemdp);
    this.vueListemdp.initialiserListemdp(listemdp);
    this.vueListemdp.afficher();
  }

  afficherNouveaumdp(mdp){
    console.log(mdp);
    this.vuemdp.initialisermdp(mdp);
    this.vuemdp.afficher();
  }

  ajoutermdp(mdp){
    this.mdpDAO.ajouter(mdp, () => this.afficherListemdp());
  }

  afficherListemdp(){
    this.window.location.hash = "#";
  }
}

new Application(window, new VueListeMdp(), new VueMdp(), new VueAjouterMdp(), new MdpDAO());

