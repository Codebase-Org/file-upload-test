<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

class Database {

    private $db_host = 'localhost';
    private $db_name = 'test';
    private $db_pass = '';
    private $db_user = 'root';
    private $con = null;

    public function connect() {
        try {

            $this->con = new PDO('mysql:host='.$this->db_host.';dbname='.$this->db_name, $this->db_user, $this->db_pass);

        } catch (PDOException $e) {
            echo $e->getMessage();
        }

        return $this->con;
    }
}