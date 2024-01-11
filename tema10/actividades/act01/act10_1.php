<?php


class Conexion
{
    public $db;
    public function __construct()
    {
        $this->db = new mysqli("localhost", "root", "", "tema10");
        if ($this->db->connect_errno) {
            throw new Exception('ERROR');
        }
        ;
    }
    public function getIdNombre()
    {

        $sql = "
                SELECT 
                    datos.id,
                    datos.nombre
                FROM
                    datos
                ORDER BY 
                    datos.id
                ";

        $stmt = $this->db->prepare($sql);

        $stmt->execute();

        $result = $stmt->get_result();

        json_encode($result);

        return $result;

    }

    public function getTodo($id)
    {

        $sql = "
                SELECT 
                    datos.id,
                    datos.nombre,
                    datos.apellidos,
                    datos.ciudad
                FROM
                    datos
                WHERE
                    datos.id = ?
                ORDER BY 
                    datos.id
                ";

        $stmt = $this->db->prepare($sql);

        $stmt->bind_param('i', $id);

        $stmt->execute();

        $result = $stmt->get_result();

        json_encode($result);

        return $result;

    }

}



?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Actividad 10.1</title>
</head>

<body>
    <h1>Tarea 1 Tema 10</h1>
    <select class="form-select" aria-label="Default select example">
        <option selected disabled>Seleccione un nombre</option>
        <option value="1">Juan</option>
        <option value="2">Pedro</option>
        <option value="3">Pepe</option>
    </select>
</body>

</html>