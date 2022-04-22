# FAVS API

A sample node js api for company that aims to provide a better way to organize your favorite things: music, clothes, courses, etc., all in one place.

## PASOS

**Note**  
`La a `  
This sample express with mondo database app.

## PARTE I: Descargar y construir el proyecto en su maquina local.

## Method 1: Desde github

### 1) Clone el repositorio, instalar los node packages y verificar las rutas.

```
//en su equipo
git clone https://github.com/jramosmasgo/favs-api
cd favs-api
npm install
```

### 2) Una vez descargado el repositorio asegurese de tener instalado en su maquina local la base de datos de mongoDB y configurar el archivo .env

**Note**  
Si no desea instalar `mongo` puede usar una conextion remota.

```
//Ejemplo de configuracion de archivo .env
// Configuracion de puerto
PORT=4000
// Configuración de conexion a la base de datos
CONNECTION_DATABASE=mongodb://localhost/Favs
// Configuracion de clave secreta para la generacion de json web token
JWT_SECRET=My5ecretPassword
```

### 3) Una vez configurado lo previamente mencionado ejecutar el siguiente comando para poder correr la aplicacion

```

npm start
```

Abra su navegador preferido y acceda a la siguiente ruta y verifique que que mensaje `FAVS API running on port 4000`:  
`http://localhost:4000`

### 4) Ya verificado que la aplicacion este funcionando correctamente ya podemos probar los emdpoints.

**Nota:**  
Para poder comprobar los endpoints es nesesario instalar un cliente rest como [POSTMAN](https://www.postman.com/downloads/)

#### AUTH

`POST` El siguiente endpoint sirve para crear un nuevo Usuario `https://my.mainframe.com:7554/api/v1/sample-node-api/accounts/`

```
//Objeto a enviar
{
    "name":"nombre de usuario",
    "email":"correo",
    "password":"contrasenia"
}
```

`POST` El siguiente endpoint nos permite inciar sesion en el aplicativo `https://my.mainframe.com:7554/api/v1/sample-node-api/accounts/1/`

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
    "title":"titulo de la lista",
    "description":"descripcion de la lista",
    "url":"url",
    "items":[
        "item1",
        "item2",
        ...
    ]
}
```

`GET` Este endpoint obtiene una lista de favoritos creados por el usuario. `http://localhost:4000/favs`

`GET` Este endpoint obtiene una lista espcificada por el id ingresafo dentro de la url. `http://localhost:4000/favs/{id-de-lista}`

`DELETE` Este endpoint elimina una lista de favoriots espcificada por el id ingresafo dentro de la url. `http://localhost:4000/favs/{id-de-lista}`
