<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tema10";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener todos los datos de la tabla "datos"
$sql = "SELECT id, nombre, apellidos FROM datos";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $datos = array();

    while ($row = $result->fetch_assoc()) {
        $datos[] = $row;
    }
} else {
    echo "No se encontraron resultados";
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consulta de Datos</title>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>
<body>

    <h1>Tarea 1 Tema 10</h1>

    <!-- Select con nombres -->
    <label for="selectNombres">Selecciona un nombre:</label>
    <select id="selectNombres">
        <option selected disabled>Selecciona un nombre:</option>
        <?php
        foreach ($datos as $dato) {
            echo "<option value='{$dato['id']}'>{$dato['nombre']}</option>";
        }
        ?>
    </select>

    <!-- Tabla para mostrar detalles -->
    <div id="detalles">
        <!-- Aquí se mostrarán los detalles del dato seleccionado -->
    </div>

    <script>
        $(document).ready(function() {
            // Manejar el cambio en el select para cargar detalles
            $('#selectNombres').change(function() {
                var id = $(this).val();

                // Realizar una solicitud para cargar detalles según el ID
                $.ajax({
                    url: 'archivo.php',
                    type: 'POST',
                    dataType: 'json',
                    data: {id: id},
                    success: function(data) {
                        // Crear una tabla con los detalles del dato seleccionado
                        var table = '<table border="1">';
                        table += '<tr><th>ID</th><th>Nombre</th><th>Apellidos</th></tr>';
                        table += '<tr><td>' + data.id + '</td><td>' + data.nombre + '</td><td>' + data.apellidos + '</td></tr>';
                        table += '</table>';

                        // Mostrar la tabla en el contenedor 'detalles'
                        $('#detalles').html(table);
                    },
                    error: function(error) {
                        console.log(error.responseText);
                    }
                });
            });
        });
    </script>

</body>
</html>