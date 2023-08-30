<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Headers: *');
//header('Content-Type: text/html');
header('Access-Control-Allow-Methods: *');

include_once('../../config/Database.php');
include_once('../../Models/Fileuploads.php');

$database = new Database();
$db = $database->connect();

$file = new Fileuploads($db);

if($_SERVER['REQUEST_METHOD'] === "POST") {

    $ori_fname = $_FILES['file']['name'];
    $ext = pathinfo($ori_fname, PATHINFO_EXTENSION);
    $target_path = '../../assets/test/';
    $actual_fname = $_FILES['file']['name'];
    $target_path = $target_path . $ori_fname;

    $result = array();

    if(move_uploaded_file($_FILES['file']['tmp_name'], $target_path)) {
        $params = [
            "file_title" => $_POST['file_title'],
            "filename" => $_POST['filename'],
            "file_content" => $_POST['file_content']
        ];

        if($file->insert($params)) {
            $result["status"] = 1;
            $resylt["message"] = "Uploaded file successfully.";
        }

    } else {
        $result['status'] = 0;
        $result['message'] = "File upload failed. Please try again.";
    }

    echo json_encode($result);

}