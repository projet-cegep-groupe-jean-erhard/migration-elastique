<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json; charset=utf-8');

$id = $_GET["id"];

$listeMotDePasseJson = file_get_contents("liste-MotDePasse.json");

if(strlen($listeMotDePasseJson) > 0){
  $listeMotDePasse = json_decode($listeMotDePasseJson);
  foreach($listeMotDePasse as $motDePasse) {
      if ($id == $motDePasse->id) {
          echo json_encode($motDePasse);
          die();
      }
  }
}
echo json_encode([]);