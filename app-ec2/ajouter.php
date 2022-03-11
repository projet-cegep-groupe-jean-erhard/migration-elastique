<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$motDePasseJSON = file_get_contents('php://input');
$motDePasse= json_decode( $motDePasseJSON );
print_r($motDePasse);

$listeMotDePasse = [];
$listeMotDePasseJson = file_get_contents("liste-MotDePasse.json");

if(strlen($listeMotDePasseJson) > 0){
  $listeMotDePasse = json_decode($listeMotDePasseJson);
  $nombreMotDePasse = count($listeMotDePasse);

  $motDePasse->id = $nombreMotDePasse;
  array_push($listeMotDePasse, $motDePasse);
  print_r($listeMotDePasse);
}

$listeMotDePasseJson = json_encode($listeMotDePasse);

/* Linux
sudo chgrp demon liste-MotDePasse.json
sudo chmod g+w liste-MotDePasse.json
*/

file_put_contents("liste-MotDePasse.json", $listeMotDePasseJson);