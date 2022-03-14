<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");


require_once "MotDePasse.php";
require_once "MotDePasseDAO.php";

$motDePasseJSON = file_get_contents('php://input');
$motDePasseObjet = json_decode( $motDePasseJSON );
$motDePasse = new MotDePasse($motDePasseObjet);

$motDePasse = MotDePasseDAO::chercherParId($motDePasse->id);
$id = MotDePasseDAO::modifier($motDePasse->id, $motDePasseObjet);

echo json_encode($id);
