<?php
//Initial commit GA

// Include Database Class
include('db.php');



//Connect to DB
//same as saying in T, use avnet_games for testing a db
$connection = new DB("localhost", "root", "","avnet_games");



// Loop over results and make a $row variable for each result
function dumpWeapons($connection) {
	//dumps entire table, weapons
	$results = $connection->execute("SELECT * FROM weapons");

	echo "Dumping weapons table: <br>";
	while ($row = $results->fetch_assoc()) {
		echo "weapon_ID => " . $row['weapon_ID'] . ", ";
		echo "weapon_name => " . $row['weapon_name'] . ", ";
		echo "weapon_str => " . $row['weapon_str'] . '<br>';
	}
}

dumpWeapons($connection);

echo "<br>Create a new record: <br>";
$sql_values = [
	'weapon_name' => 'sword',
	'weapon_str' => 3
];

$connection->create("weapons", $sql_values);

dumpWeapons($connection);

echo "<br>Retrieve a record: <br>";
$sql_values = [
	'weapon_name' => 'sword',
];

$results = $connection->retrieve("weapons", $sql_values);

while ($row = $results->fetch_assoc()) {
	echo "weapon_ID => " . $row['weapon_ID'] . ", ";
	$sword_id = $row['weapon_ID'];
	echo "weapon_name => " . $row['weapon_name'] . ", ";
	echo "weapon_str => " . $row['weapon_str'] . '<br>';
}

echo "<br>Update a record: <br>";
$sql_values = [
	'weapon_ID' => $sword_id,
	'weapon_name' => 'axe',
	'weapon_str' => '4'
];

$connection->update("weapons", $sql_values);

dumpWeapons($connection);

echo "<br>Delete a record: <br>";
$sql_values = [
	'weapon_name' => 'axe',
];

$connection->delete("weapons", $sql_values);
dumpWeapons($connection);



?>