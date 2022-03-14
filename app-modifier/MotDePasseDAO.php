<?php
require_once("MotDePasse.php");
require_once("MotDePasseSQL.php");

class Accesseur
{
  public static $baseDeDonnees = null;

  public static function initialiser()
  {
    $base = 'app-mot-de-passe';
    $hote = 'app-mot-de-passe.cwzqbwnooagp.ca-central-1.rds.amazonaws.com';
    $usager = 'julien';
    $motDePasse = 'julienjulien';
    $nomDeSourceDeDonnees = 'mysql:dbname=' . $base . ';host=' . $hote;
    MotDePasseDAO::$baseDeDonnees = new PDO($nomDeSourceDeDonnees, $usager, $motDePasse);
    MotDePasseDAO::$baseDeDonnees->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  }
}

class MotDePasseDAO extends Accesseur implements MotDePasseSQL
{
  public static function lister()
  {
    MotDePasseDAO::initialiser();

    $demandeListeMotDePasse = MotDePasseDAO::$baseDeDonnees->prepare(MotDePasseDAO::SQL_LISTER);
    $demandeListeMotDePasse->execute();
    $listeMotDePasseObjet = $demandeListeMotDePasse->fetchAll(PDO::FETCH_OBJ);
    //$contratsTableau = $demandeListeMotDePasse->fetchAll(PDO::FETCH_ASSOC);
    $listeMotDePasse = null;
    foreach($listeMotDePasseObjet as $motDePasseObjet) $listeMotDePasse[] = new MotDePasse($motDePasseObjet);
    return $listeMotDePasse;
  }

  public static function chercherParId($id)
  {
    MotDePasseDAO::initialiser();

    $demandeMotDePasse = MotDePasseDAO::$baseDeDonnees->prepare(MotDePasseDAO::SQL_CHERCHER_PAR_ID);
    $demandeMotDePasse->bindParam(':id', $id, PDO::PARAM_INT);
    $demandeMotDePasse->execute();
    $motDePasseObjet = $demandeMotDePasse->fetchAll(PDO::FETCH_OBJ)[0];
    //$contrat = $demandeMotDePasse->fetch(PDO::FETCH_ASSOC);
    return new MotDePasse($motDePasseObjet);
  }

  public static function ajouter($motDePasse)
  {
    MotDePasseDAO::initialiser();

    $demandeAjoutMotDePasse = MotDePasseDAO::$baseDeDonnees->prepare(MotDePasseDAO::SQL_AJOUTER);
    $demandeAjoutMotDePasse->bindValue(':siteWeb', $motDePasse->nom, PDO::PARAM_STR);
    $demandeAjoutMotDePasse->bindValue(':url', $motDePasse->marque, PDO::PARAM_STR);
    $demandeAjoutMotDePasse->bindValue(':mdp', $motDePasse->description, PDO::PARAM_STR);
    $demandeAjoutMotDePasse->bindValue(':questionSecrete', $motDePasse->description, PDO::PARAM_STR);
    $demandeAjoutMotDePasse->bindValue(':reponseSecrete', $motDePasse->description, PDO::PARAM_STR);
    $demandeAjoutMotDePasse->execute();
    return MotDePasseDAO::$baseDeDonnees->lastInsertId();
  }

  public static function modifier($motDePasse)
  {
    //TODO
  }
}
