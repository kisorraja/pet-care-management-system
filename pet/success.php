<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Success Page</title>
<style>
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-image: url('s1.jpg'); 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.container {
    margin: 50px auto;
    max-width: 600px;
    padding: 20px;
    background-color: rgba(249, 249, 249, 0.8); 
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
</head>
<body>
<div class="container">
    <h2>Your Pet Details Have Been Successfully Added!</h2>
    <p><strong>Name:</strong> <?php echo $_GET["name"]; ?></p>
    <p><strong>Type:</strong> <?php echo $_GET["type"]; ?></p>
    <p><strong>Age:</strong> <?php echo $_GET["age"]; ?></p>
    <p><strong>Breed:</strong> <?php echo $_GET["breed"]; ?></p>
    <p><strong>diseases:</strong> <?php echo $_GET["diseases"] ?></p>
    <p><strong>Days Affected:</strong> <?php echo $_GET["daysAffected"] ?? 'N/A'; ?></p>
    <p><strong>Appointment:</strong> <?php echo $_GET["appointment"] ?? 'N/A'; ?></p>
    <p><strong>Vaccinated:</strong> <?php echo $_GET["vaccinated"] ? 'Yes' : 'No'; ?></p>
</div>
</body>
</html>
