<?php
session_start();
if (!isset($_SESSION["user"])) {
   header("Location: login.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>User Dashboard</title>

    <style>
        .user-details {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  text-align: center;
}

label {
  display: block;
  margin-top: 10px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  display: block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

#save-button {
  background-color: #008CBA;
  margin-top: 0;
}

    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to Dashboard</h1>
        <?php


?>

<html>
  <head>
    <!-- Your other HTML and CSS code here -->
  </head>
  <body>
  <div class="user-details">
  <h2>User Details</h2>

 
 
 <?php
    $hostName = "localhost";
    $dbUser = "root";
    $dbPassword = "";
    $dbName = "login_register";
    $conn = mysqli_connect($hostName, $dbUser, $dbPassword, $dbName);
    if (!$conn) {
        die("Something went wrong;");
    }

  // Your query to fetch the user details
  $query = "SELECT `id`, `full_name`, `email` FROM `users` WHERE id = '1'";

  // Execute the query
  $result = mysqli_query($conn, $query);

  // Check if the query was successful
  if ($result) {
    // Fetch the row as an associative array
    $row = mysqli_fetch_assoc($result);

    // Display the values in textboxes

    ?>
          <form id="user-form" method="post" action="#">
    <label for="username">Username:</label>
    <!-- full name -->
    <input type="text" id="username" name="username" value="<?php echo $row['full_name']; ?>" readonly>

    <label for="email" >Email address:</label>
    <input type="text" id="email" name="email" value="<?php echo $row['email']; ?>" readonly>

    <!-- <button type="button" id="edit-button">Update Details</button>
    <button type="submit" id="save-button" style="display: none;">Save</button> -->
  </form>

    <?php
  } else {
    // Handle the error if the query fails
    echo "Error executing the query: " . mysqli_error($connection);
  }

  // Close the database connection
  mysqli_close($conn);
  ?>
        <a href="logout.php" class="btn btn-warning">Logout</a>
    </div>
</body>
</html>