# API de Gestión de Bodegas - MongoDB y Node.js

Este proyecto es una API para gestionar bodegas, productos y movimientos de inventario utilizando MongoDB y Node.js.

## Requisitos previos

Asegúrate de tener instalado lo siguiente antes de comenzar:

- Node.js versión 18.16.1 (Preferiblemente).
- MongoDB.
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

1. Preferentemente en otra terminal, convierte los archivos TypeScript en JavaScript en la carpeta "controller" ejecutando:

```
npm run tsc
```

1. Realiza la conexión con el servidor MongoDB utilizando tu herramienta preferida.
2. Ejecuta las consultas iniciales en tu base de datos MongoDB. Puedes encontrar las consultas en el archivo "query.mongodb" contenido en la carpeta "db".

## Ejecución

1. Crea un archivo `.env` en la raíz del proyecto con las rutas de conexión necesarias. Puedes encontrar un ejemplo en `.env.example`.
2. Inicia el servidor de desarrollo con el siguiente comando:

```
npm run dev
```

Esto iniciará el servidor en `http://127.10.10.10:5439` por defecto.

## Endpoints de la API

A continuación, se describen los endpoints disponibles en la API junto con ejemplos de cómo realizar las consultas.

### 1. Consulta de Alquiler:

#### 1.1 Mostrar todos los clientes registrados en la base de datos:

- Ruta: `/cliente`
- Método: GET
- Realiza la consulta para obtener todos los clientes:

```
GET http://127.10.10.10:5439/cliente
```

- Ejemplo de respuesta:

```
[
  {
    "_id": "64da88c29390b91b229112f9",
    "cliente": 1,
    "nombre": "Juan",
    "apellido": "Perez",
    "documento": "12345678",
    "direccion": "Calle 123",
    "numero": "11111111",
    "Email": "juan@example.com"
  },
  {
    "_id": "64da88c29390b91b229112fa",
    "cliente": 2,
    "nombre": "Maria",
    "apellido": "Lopez",
    "documento": "87654321",
    "direccion": "Avenida 456",
    "numero": "22222222",
    "Email": "maria@example.com"
  },
  {
    "_id": "64da88c29390b91b229112fb",
    "cliente": 3,
    "nombre": "Pedro",
    "apellido": "Gonzalez",
    "documento": "56789012",
    "direccion": "Plaza 789",
    "numero": "33333333",
    "Email": "pedro@example.com"
  },
  {
    "_id": "64da88c29390b91b229112fc",
    "cliente": 4,
    "nombre": "Laura",
    "apellido": "Martinez",
    "documento": "09876543",
    "direccion": "Ruta 101",
    "numero": "44444444",
    "Email": "laura@example.com"
  },
  {
    "_id": "64da88c29390b91b229112fd",
    "cliente": 5,
    "nombre": "Carlos",
    "apellido": "Gomez",
    "documento": "43210987",
    "direccion": "Calle 987",
    "numero": "55555555",
    "Email": "carlos@example.com"
  }
]
```

#### 

## Dependencias

Este proyecto utiliza las siguientes dependencias:

- **dotenv** (v16.3.1): Librería para cargar variables de entorno desde un archivo `.env`.
- **express** (v4.18.2): Framework web rápido, flexible y minimalista para Node.js.
- **express-rate-limit** (^6.8.1): Middleware para limitar la cantidad de solicitudes a tus endpoints en Express.
- **mongodb** (v5.7.0): Driver oficial de MongoDB para Node.js.
- **nodemon** (v3.0.1): Herramienta que reinicia automáticamente la aplicación cuando detecta cambios en el código durante el desarrollo.

Asegúrate de instalar estas dependencias utilizando el comando:

```bash
npm install

```

