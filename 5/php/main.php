<?php
/**
 * Created by IntelliJ IDEA.
 * User: Administrator
 * Date: 30.09.2015
 * Time: 18:51
 */

if (isset($_POST['array'])) main();

function main(){
    //echo $_POST['array']['0']['name'];
    //print_r($_POST);
    //$array = $_POST;
    //echo sizeof($_POST['array']);

    $xml = new SimpleXMLElement('<xml/>');
    $progress = $xml->addChild('progress');

    for ($i = 0; $i < sizeof($_POST['array']); $i++){
        $student = $progress->addChild('student');
        $student->addChild('name', $_POST['array'][$i]['name']);
        $student->addChild('group', $_POST['array'][$i]['group']);
        $student->addChild('book', $_POST['array'][$i]['book']);
    }

    $xmlFile = '../xml/student.xml';
    $openFile = file_get_contents($xmlFile);
    $openFile = $xml->asXML();
    file_put_contents($xmlFile, $openFile);

    //print($xml->asXML());
}
