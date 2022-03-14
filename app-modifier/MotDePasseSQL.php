<?php
interface MotDePasseSQL
{
  public const SQL_LISTER          = "SELECT * FROM motDePasse;";
  public const SQL_CHERCHER_PAR_ID = "SELECT * FROM motDePasse WHERE id = :id;";
  public const SQL_AJOUTER         = "INSERT INTO motDePasse (siteWeb, url, mdp, questionSecrete, reponseSecrete) VALUES (:siteWeb, :url, :mdp, :questionSecrete, :reponseSecrete);";
  public const SQL_MODIFIER        = "UPDATE motDePasse SET siteWeb = :siteWeb, url = :url, mdp = :mdp, questionSecrete = :questionSecrete, reponseSecrete = :reponseSecrete  WHERE id = :id;";
}
