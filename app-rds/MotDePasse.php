<?php
class MotDePasse implements JsonSerializable
{
  public static $filtres =
    array(
      'id' => FILTER_VALIDATE_INT,
      'siteWeb' => FILTER_SANITIZE_ENCODED,
      'url' => FILTER_SANITIZE_ENCODED,
      'mdp' => FILTER_SANITIZE_ENCODED,
      'questionSecrete' => FILTER_SANITIZE_ENCODED,
      'reponseSecrete' => FILTER_SANITIZE_ENCODED
    );

  protected $id;
  protected $siteWeb;
  protected $url;
  protected $mdp;
  protected $questionSecrete;
  protected $reponseSecrete;

  public function __construct($motDePasseObjet)
  {
    $tableau = filter_var_array((array) $motDePasseObjet, MotDePasse::$filtres);
    $this->id = $tableau['id'];
    $this->siteWeb = $tableau['siteWeb'];
    $this->url = $tableau['url'];
    $this->mdp = $tableau['mdp'];
    $this->questionSecrete = $tableau['questionSecrete'];
    $this->reponseSecrete = $tableau['reponseSecrete'];
  }

  public function __set($propriete, $valeur)
  {
    switch($propriete)
    {
      case 'id':
        $this->id = $valeur;
        break;
      case 'siteWeb':
        $this->siteWeb = $valeur;
        break;
      case 'url':
        $this->url = $valeur;
        break;
      case 'mdp':
        $this->mdp = $valeur;
        break;
      case 'questionSecrete':
        $this->questionSecrete = $valeur;
        break;
      case 'reponseSecrete':
        $this->reponseSecrete = $valeur;
        break;
    }
  }

  public function __get($propriete)
  {
    $self = get_object_vars($this);
    return $self[$propriete];
  }

  public function jsonSerialize()
  {
    //Define the fields we need
    return array(
      "id"=>$this->id,
      "siteWeb"=>$this->siteWeb,
      "url"=>$this->url,
      "mdp"=>$this->mdp,
      "questionSecrete"=>$this->questionSecrete,
      "reponseSecrete"=>$this->reponseSecrete
    );
  }
}
