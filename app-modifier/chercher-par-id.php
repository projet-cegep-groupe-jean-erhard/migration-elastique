<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json; charset=utf-8');

require_once "MotDePasse.php";
require_once("MotDePasseDAO.php");

$motDePasse = new MotDePasse($_GET);
$motDePasse = MotDePasseDAO::chercherParId($motDePasse->id);
echo json_encode($motDePasse);
