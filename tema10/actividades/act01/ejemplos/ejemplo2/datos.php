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

        echo json_encode($result);

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

        $stmt->bind_param('id', $id);

        $stmt->execute();

        $result = $stmt->get_result();

        echo json_encode($result);

    }
}

?>