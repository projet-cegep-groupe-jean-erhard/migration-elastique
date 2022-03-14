class VueModifierMdp {
    constructor(){
        this.html = document.getElementById("html-vue-modifier-mdp").innerHTML;
        this.modifiermdp = null;
    }

    initialiserModifiermdp(modifiermdp){
        this.modifiermdp = modifiermdp;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
        document.getElementById("formulaire-modifier").addEventListener("submit",evenement =>this.enregistrer(evenement));
    }

    enregistrer(evenement){
        evenement.preventDefault();

        let siteWeb = document.getElementById("mdp-siteWeb").value;
        let url = document.getElementById("mdp-url").value;
        let mdp = document.getElementById("mdp-mdp").value;
        let questionSecrete = document.getElementById("mdp-questionSecrete").value;
        let reponseSecrete = document.getElementById("mdp-reponseSecrete").value;

        this.modifiermdp(new MotDePasse(siteWeb, url, mdp, questionSecrete, reponseSecrete, null));

    }

}