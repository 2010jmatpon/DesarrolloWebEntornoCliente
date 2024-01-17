<?php

$conn = new mysqli("localhost", "root", "", "tema10");

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Manejar la solicitud según el tipo de operación
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Obtener todos los datos de la tabla "datos"
    $sql = "SELECT id, nombre, apellidos FROM datos";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $datos = array();

        while ($row = $result->fetch_assoc()) {
            $datos[] = $row;
        }

        echo json_encode($datos);
    } else {
        echo "No se encontraron resultados";
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Manejar la solicitud para cargar campos según el ID
    $id = $_POST['id'];

    $sql = "SELECT * FROM datos WHERE id = $id";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $datos = $result->fetch_assoc();
        echo json_encode($datos);
    } else {
        echo "No se encontraron resultados para el ID proporcionado";
    }
}

$conn->close();
?>