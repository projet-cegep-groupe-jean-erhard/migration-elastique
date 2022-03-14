class Application {
  constructor(window, vueListeMdp, vueMdp, vueAjouterMdp, vueModifierMdp, mdpDAO){

    this.window = window;

    this.vueListeMdp = vueListeMdp;

    this.vueMdp = vueMdp;

    this.vueAjouterMdp = vueAjouterMdp;
    // C'est l'équivalent de function(mdp){this.ajouterMdp(mdp)}
    this.vueAjouterMdp.initialiserAjoutermdp(mdp =>this.ajouterMdp(mdp));

    this.vueModifierMdp = vueModifierMdp;
    this.vueModifierMdp.initialiserModifierMdp(mdp =>this.modifierMdp(mdp));

    this.mdpDAO = mdpDAO;

    // C'est l'équivalent de function(){this.naviguer()}
    this.window.addEventListener("hashchange", () =>this.naviguer());

    this.naviguer();
  }

  naviguer(){
    let hash = window.location.hash;

    if(!hash){

      this.mdpDAO.lister((listeMdp) => this.afficherNouvelleListeMdp(listeMdp));

    }else if(hash.match(/^#ajouter-mdp/)){

      this.vueAjouterMdp.afficher();

    }else if(hash.match(/^#modifier-mdp\/([0-9]+)/)){

      let navigation =  hash.match(/^#modifier-mdp\/([0-9]+)/);
      let idMdp = navigation[1];


      this.mdpDAO.chercher(idMdp, (mdp) => this.afficherModifierMdp(mdp));
    }else{

      let navigation = hash.match(/^#mdp\/([0-9]+)/);
      let idMdp = navigation[1];

      this.mdpDAO.chercher(idMdp, (mdp) => this.afficherNouveauMdp(mdp));
    }
  }

  afficherNouvelleListeMdp(listeMdp){

    console.log(listeMdp);
    this.vueListeMdp.initialiserListemdp(listeMdp);
    this.vueListeMdp.afficher();
  }

  afficherNouveauMdp(mdp){
    console.log(mdp);
    this.vueMdp.initialisermdp(mdp);
    this.vueMdp.afficher();
  }

  afficherModifierMdp(mdp){
    console.log(mdp);
    this.vueModifierMdp.setMdpModif(mdp);
    this.vueModifierMdp.afficher();
  }

  ajouterMdp(mdp){
    this.mdpDAO.ajouter(mdp, () => this.afficherListeMdp());
  }

  modifierMdp(mdp){
    console.log(mdp);
    this.mdpDAO.modifier(mdp, () => this.afficherListeMdp());
  }

  afficherListeMdp(){
    this.window.location.hash = "#";
  }
}

new Application(window, new VueListeMdp(), new VueMdp(), new VueAjouterMdp(), new VueModifierMdp(), new MdpDAO());
