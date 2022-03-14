class MdpDAO{
    //cd /opt/bitnami/apache2/logs/
    constructor(){
        this.URL = 'http://3.97.107.117/'
    }

    lister(action){
        fetch(this.URL + 'lister.php')
            .then(response => response.text())
            .then(data =>
            {
                console.log(data);
                data = data == null ? null : JSON.parse(data)
                let listeMotDePasse = [];
                for(let position in data){
                    let motDePasse = new MotDePasse(
                        data[position].siteWeb,
                        data[position].url,
                        data[position].mdp,
                        data[position].questionSecrete,
                        data[position].reponseSecrete,
                        data[position].id
                    );

                    console.log(motDePasse);
                    listeMotDePasse.push(motDePasse);
                }
                action(listeMotDePasse);
            });
    }

    chercher(id, action){
        fetch(this.URL + 'chercher-par-id.php' + '?id=' + id)
            .then(response => response.json())
            .then(data =>
            {
                console.log(data);
                let motDePasse = new MotDePasse(
                    data.siteWeb,
                    data.url,
                    data.mdp,
                    data.questionSecrete,
                    data.reponseSecrete
                );
                action(motDePasse);
            });
    }

    ajouter(motDePasse, action){
        fetch(this.URL + 'ajouter.php',
            {
                method: 'POST',
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded'
                },
                body: JSON.stringify(motDePasse),
            })
            .then(response => response.text())
            .then(data =>
            {
                console.log('Détail:', data);
                action();
            });
    }

    modifier(motDePasse, action){
        console.log("dedefe" + motDePasse)
        fetch(this.URL + 'modifier.php',
            {
                method: 'POST',
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded'
                },
                body: JSON.stringify(motDePasse),
            })
            .then(response => response.text())
            .then(data =>
            {
                console.log('Détail:', data);
                action();
            });
    }
}
