<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

class Fileuploads {

    public $file_id;
    public $file_title;
    public $filename;
    public $file_content;

    private $con;
    private $table = 'files';

    public function __construct($db) {
        $this->con = $db;
    }

    public function insert($params) {
        try {
            $this->file_title = $params['file_title'];
            $this->filename = $params['filename'];
            $this->file_content = $params['file_content'];

            $query = 'INSERT INTO '.$this->table.' SET 
                  file_title = :file_title,
                  filename = :filename,
                  file_content = :file_content';

            $stmt = $this->con->prepare($query);
            $stmt->bindValue('file_title', $this->file_title);
            $stmt->bindValue('filename', $this->filename);
            $stmt->bindValue('file_content', $this->file_content);

            if($stmt->execute()) {
                return true;
            }

            return false;
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }
}