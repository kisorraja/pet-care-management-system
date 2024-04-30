<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $petName = $_POST["petName"];
    $petType = $_POST["petType"];
    $petAge = $_POST["petAge"];
    $petBreed = $_POST["petBreed"];
    $diseases = $_POST["diseases"];
    $daysAffected = $_POST["daysAffected"];
    $appointment = $_POST["appointment"];
    $vaccinated = $_POST["vaccinated"];
    $params = http_build_query(array(
        "name" => $petName,
        "type" => $petType,
        "age" => $petAge,
        "breed" => $petBreed,
        "diseases" =>$diseases,
        "daysAffected" => $daysAffected,
        "appointment" => $appointment,
        "vaccinated" => $vaccinated
    ));

    echo $params;
} else {
    echo "Error"; 
}
?>
