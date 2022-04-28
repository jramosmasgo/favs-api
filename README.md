# FAVS API

Una node js api para empresa que tiene como objetivo proporcionar una mejor manera de organizar sus cosas favoritas: música, ropa, cursos, etc., todo en un solo lugar.

## PASOS

**Note**  
`La aplicación fue construida a partir de tecnologias como node js, mongo, mongoose.`

## Descargar y construir el proyecto en su maquina local.

### 1) Clone el repositorio y instale los node packages.

```
//en su equipo
git clone https://github.com/jramosmasgo/favs-api
cd favs-api
npm install
```

### 2) Una vez descargado el repositorio asegurese de tener instalado en su maquina local la base de datos de mongoDB y configure el archivo .env

**Note**  
Si no desea instalar `mongo` puede usar una conexión remota como mongoDB Atlas.

```
// Configuración de puerto
PORT=4000
CONNECTION_DATABASE=mongodb://localhost/Favs
JWT_SECRET=My5ecretPassword
```

### 3) Una vez configurado lo previamente mencionado ejecutar el siguiente comando para poder correr la aplicacion

```

npm start
```

Abra su navegador preferido y acceda a la siguiente ruta y verifique que que mensaje `FAVS API running on port 4000`:  
`http://localhost:4000`

### 4) Ya verificado que la aplicacion este funcionando correctamente ya podemos probar los endpoints.

**Nota:**  
Para poder observar la docuemntacion de la API puede ingresar a la url `http://localhost:4000/docs`
Para poder comprobar los endpoints es nesesario instalar un cliente rest como [POSTMAN](https://www.postman.com/downloads/)

#### AUTH

`POST` El siguiente endpoint sirve para crear un nuevo Usuario `http://localhost:4000/auth/local/register`

```
//Objeto a enviar
{
    "name":"nombre de usuario",
    "email":"correo",
    "password":"contrasenia"
}
```

`POST` El siguiente endpoint nos permite inciar sesion en el aplicativo `http://localhost:4000/auth/local/login`

**Nota:**  
El endpoint nos devuelve un token que es nesesario para poder usar los siguientes endpoints.

```
// Objeto a enviar
{
    "email":"correo de usuario",
    "password":"contrsena de usuario"
}
```

#### FAVORITES

**Nota:**  
Los siguiente endpoints requieren del token de autorizacion para poder llamarse. Dependiendo del cliente rest que este utilizando este token puede ser colocado en el apartado de `Authorization` con el type de `Bearer Token`

`POST` Este endpoint nos permitira gurdar una lista de favoritos `http://localhost:4000/favs`

```
// Objeto a enviar
{
  "name": "nombre de la lista",
  "favs": [
    {
      "title": "titulo de elemento 1",
      "description": "descripcion del elemento",
      "link": "https://www.google.com"
    },
    {
      "title": "titulo de elemento 2",
      "description": "descripcion del elemento 2",
      "link": "https://www.google2.com"
    }
  ]
}
```

`GET` Este endpoint obtiene una lista de favoritos creados por el usuario. `http://localhost:4000/api/favs`

`GET` Este endpoint obtiene una lista espcificada por el id ingresado dentro de la url. `http://localhost:4000/api/favs/{id-de-lista}`

`DELETE` Este endpoint elimina una lista de favoritos espcificada por el id ingresado dentro de la url. `http://localhost:4000/api/favs/{id-de-lista}`
