# API de Gestión de Bodegas - MongoDB y Node.js

Este proyecto es una API para gestionar bodegas, productos y movimientos de inventario utilizando MongoDB y Node.js.

## Requisitos previos

Asegúrate de tener instalado lo siguiente antes de comenzar:

- Node.js versión 18.16.1 (Preferiblemente).
- MongoDB (Crear una cuenta en MongoDB y conectarlo al VS).
- npm (Administrador de paquetes de Node.js).

## Configuración

1. Clona este repositorio en tu máquina local usando el siguiente comando:

```bash
git clone https://github.com/diegomanga26/mongoBodegas.git
```

1. Navega a la carpeta raíz del proyecto.
2. Instala las dependencias utilizando el siguiente comando npm en la consola:

```
npm install
```

1. Realiza la conexión con el servidor MongoDB utilizando tu herramienta preferida.

2. Ejecuta las consultas iniciales en tu base de datos MongoDB. Puedes encontrar las consultas en el archivo "query.mongodb" contenido en la carpeta "db".
3. Es necesario que en el archivo "atlas.js" cambies la constante "uri" con tu link correspondiente a la conexión con el MongoDB

## Ejecución

1. Crea un archivo `.env` en la raíz del proyecto con las rutas de conexión necesarias. Puedes encontrar un ejemplo en `.env.example` donde cambiaras el "atlasUser" por tu usuario de MongoDB, "atlasPassword" por tu contraseña del servidor de MongoDB y la "JWT_PRIVATE_KEY" de tu preferencia.
2. Crea el servidor seleccionando dentro del archivo "query.mongodb" que está dentro de la carpeta "db" todo el código hasta antes del mensaje "PETICIONES DE LAS COLECCIONES:" y luego presionas iniciar en la flecha ubicada en la esquina derecha.
3. Inicia el servidor de desarrollo con el siguiente comando:

```
npm run dev
```

Esto iniciará el servidor en `http://127.10.10.10:5439` por defecto.

## Endpoints de la API

A continuación, se describen los endpoints disponibles en la API junto con ejemplos de cómo realizar las consultas.

### 1. Colección "bodegas":

#### 1.1 Método "GET" para listar todas las bodegas alfabéticamente:

- Ruta: `/bodegas`
- Se solicita primeramente en la extensión "thunderclient" el token que tiene una duración de 30 minutos, que nos dará el acceso a la tabla por medio de esta url en el método seleccionable "GET":

```
http://127.10.10.10:5439/token/bodegas
```

- Ejemplo de respuesta:

```
{
  "status": 201,
  "message": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZC1ib2RlZ2FzIjowLCJub21icmVCb2RlZ2EiOiJCb2RlZ2FYWFhYIiwiaWQtcmVzcG9uc2FibGUiOjAsImVzdGFkb0JvZGVnYSI6MCwiY3JlYXRlZEJ5IjowLCJ1cGRhdGVCeSI6MCwiaWF0IjoxNjkyMzg5MjIyLCJleHAiOjE2OTIzOTEwMjJ9.oeFp_-NjOT_yQrN3ur_uJBN_KA-nxTA7GOf-36hlv9s"
}
```

- Como siguiente vas a ir a los headers del "thunderclient" vas a agregar en un header vacío "Authorization" y en su value el token que anteriormente se te retornó (en este caso lo que se encuentra dentro de "message" sin las comillas dobles).
- Se hará una modificación en la url y se solicitará el método"GET" para extraer todo el contenido de la tabla de bodegas:

```
http://127.10.10.10:5439/bodegas
```

- Esto nos devolverá un algo similar a lo siguiente:

```
[
  {
    "_id": "64dc39d367ec8292005a5747",
    "id": 49,
    "nombre": "Almacén Atuesta 555",
    "id_responsable": 11,
    "estado": 11,
    "created_at": "2022-07-21T00:00:00.000Z",
    "updated_at": "2022-07-21T00:00:00.000Z"
  },
  {
    "_id": "64dc39d367ec8292005a572c",
    "id": 12,
    "nombre": "Almacén Central",
    "id_responsable": 18,
    "estado": 1,
    "created_by": 18,
    "created_at": "2022-06-02T00:00:00.000Z"
  },
  {
    "_id": "64dc39d367ec8292005a573d",
    "id": 36,
    "nombre": "Almacén Principal",
    "id_responsable": 11,
    "estado": 1,
    "created_at": "2022-06-29T00:00:00.000Z",
    "updated_at": "2022-06-29T00:00:00.000Z"
  },
  {
    "_id": "64dc39d367ec8292005a5734",
    "id": 25,
    "nombre": "Almacén Soto Dos",
    "id_responsable": 15,
    "estado": 1,
    "created_at": "2022-06-02T00:00:00.000Z",
    "updated_at": "2022-06-02T00:00:00.000Z"
  },
  /// MAS BODEGAS...
]
```

- Y con esto ya habremos hecho nuestra primera consulta en el primer elemento del CRUD que en este caso es el método "GET".

#### 1.2 Método "POST" para ingresar una bodega a la colección:

- Ruta: `/bodegas`
- Mantendremos el mismo patrón para las peticiones de esta tabla ya que el ejemplo que pusimos en el body nos servirá para todos los métodos. (NOTA: Recordamos que en caso tal de vencer el token sin ningún problema podemos solicitar uno nuevo con los pasos anteriormente explicados).
- Con la url que teniamos en el método "GET" vamos a seleccionar en el "thunderclient" ahora el método "POST" y enviamos la data, ejemplo:

```
  {
    "id-bodegas": 1,
    "nombreBodega": "Bodega Nueva",
    "id-responsable": 1,
    "estadoBodega": 1,
    "createdBy": 1
  }
```

- Esto nos retornará algo similar:

```
{
  "status": 406,
  "message": "Ingresar correctamente el formato updateBy"
}
```

- Esto nos indicará que correctamente se han ingresado los datos, en caso tal de faltar alguno de parámetros o fallar en alguno aparecerá un mensaje correspondiente indicando donde puede estar el error, en esta guía se recomienda en todo momento seguir el paso a paso para evitar inconvenientes.

- Aquí habremos posteado nuestro primer objeto en la tabla "bodegas", sigamos con la guía.

### 2. Colección "productos":

#### 2.1 Método "GET" para listar todos los productos en orden
descendente por el campo "Total".:

- Ruta: `/productos/total`
- Se solicita primeramente en la extensión "thunderclient" el token que tiene una duración de 30 minutos, que nos dará el acceso a la tabla por medio de esta url en el método seleccionable "GET":

```
http://127.10.10.10:5439/token/productos
```

- Ejemplo de respuesta:

```
{
  "status": 201,
  "message": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZC1ib2RlZ2FzIjowLCJub21icmVCb2RlZ2EiOiJCb2RlZ2FYWFhYIiwiaWQtcmVzcG9uc2FibGUiOjAsImVzdGFkb0JvZGVnYSI6MCwiY3JlYXRlZEJ5IjowLCJ1cGRhdGVCeSI6MCwiaWF0IjoxNjkyMzg5MjIyLCJleHAiOjE2OTIzOTEwMjJ9.oeFp_-NjOT_yQrN3ur_uJBN_KA-nxTA7GOf-36hlv9s"
}
```

- Como siguiente vas a ir a los headers del "thunderclient" vas a agregar en un header vacío "Authorization" y en su value el token que anteriormente se te retornó (en este caso lo que se encuentra dentro de "message" sin las comillas dobles).
- Se hará una modificación en la url y se solicitará el método"GET" para extraer todo el contenido de la tabla de productos:

```
http://127.10.10.10:5439/productos/total
```

- Esto nos devolverá un algo similar a lo siguiente:

```
[
  {
    "id": 18,
    "nombre": "Gafas",
    "estado": 1,
    "created_by": 11,
    "total": 8721
  },
  {
    "id": 100,
    "nombre": "Camisilla",
    "estado": 1,
    "created_by": 16,
    "total": 200
  },
  {
    "id": 100,
    "nombre": "Camisilla",
    "estado": 1,
    "created_by": 16,
    "total": 200
  },
  {
    "id": 100,
    "nombre": "Camisilla",
    "estado": 1,
    "created_by": 16,
    "total": 200
  },
  {
    "id": 100,
    "nombre": "Camisilla",
    "estado": 1,
    "created_by": 16,
    "total": 200
  },
  {
    "id": 13,
    "nombre": "Zapatos",
    "estado": 1,
    "created_by": 13,
    "total": 13
  },
  {
    "id": 14,
    "nombre": "Sombrero",
    "estado": 1,
    "created_by": 20,
    "total": 7
  }
]
```

- Y con esto ya habremos hecho nuestra primera consulta en el primer elemento del CRUD que en este caso es el método "GET".

#### 2.2 Método "POST" para ingresar un productos y a su vez asigne
una cantidad inicial del mismo en la tabla inventarios en una de las bodegas
por default:

- Ruta: `/productos`
- Mantendremos el mismo patrón para las peticiones de esta tabla ya que el ejemplo que pusimos en el body nos servirá para todos los métodos. (NOTA: Recordamos que en caso tal de vencer el token sin ningún problema podemos solicitar uno nuevo con los pasos anteriormente explicados).
- Con la url que teniamos en el método "GET" vamos a seleccionar en el "thunderclient" ahora el método "POST" y enviamos la data, ejemplo:

```
  {
    "id": 1,
    "nombre": "Zapatos",
    "estado": 1,
    "created_by": 1
  }
```

- Esto nos retornará algo similar:

```
{
  "msg": "Se ha guardado correctamente el Producto y su Inventario."
}
```

- Esto nos indicará que correctamente se han ingresado los datos, en caso tal de faltar alguno de parámetros o fallar en alguno aparecerá un mensaje correspondiente indicando donde puede estar el error, en esta guía se recomienda en todo momento seguir el paso a paso para evitar inconvenientes.
- Aquí habremos posteado nuestro primer objeto en la tabla "productos" e "inventarios", sigamos con la guía.

## Dependencias

Este proyecto utiliza las siguientes dependencias:

- **dotenv** (v16.3.1): Librería para cargar variables de entorno desde un archivo `.env`.
- **express** (v4.18.2): Framework web rápido, flexible y minimalista para Node.js.
- **express-rate-limit** (^6.8.1): Middleware para limitar la cantidad de solicitudes a tus endpoints en Express.
- **mongodb** (v5.7.0): Driver oficial de MongoDB para Node.js.
- **nodemon** (v3.0.1): Herramienta que reinicia automáticamente la aplicación cuando detecta cambios en el código durante el desarrollo.

## Contacto

Si deseas ponerte en contacto con el equipo del proyecto, puedes hacerlo a través del siguiente correo electrónico:

Diego Alexander Manga Marulanda - [diego-alex-manga@hotmail.com](mailto:diego-alex-manga@hotmail.com).

¡Espero tus aportes y sugerencias! No dudes en contactarme si tienes alguna pregunta o comentario sobre el proyecto.
