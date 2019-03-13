<?php
/*echo
var_dump($_POST)
echo"</pre>"*/
$masas = [
    'cl' => "clasica",
    'cr' => "crunchy",
    'li' => "light",
];
$sinopsis = ""; //variables se declaran con dolar y no hay tipo
$sinopsis .= "El usuario {.$_POST['usuario']}
pidio una pizza {$_POST['tamano']}, con masa {masas[$_POST['masa']}, el costo total:\${$_POST['costo']}";

echo $sinopsis;
