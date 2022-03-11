<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json; charset=utf-8');

$listeMotDePasseJson = file_get_contents("liste-MotDePasse.json");

if(strlen($listeMotDePasseJson) > 0){
  $listeMotDePasse = json_decode($listeMotDePasseJson);
  echo json_encode($listeMotDePasse);
}else{
  echo json_encode([]);
}