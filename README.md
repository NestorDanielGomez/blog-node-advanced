# Blog-node-advance

- Ejecutar `npm install` en el directorio raiz para las dependencias del servidor
- Dentro de la carpeta client ejecutar: `npm install --legacy-peer-deps` para las dependencias del Front.
- Volver al directorio raiz y ejecutar: `npm run dev` para correr la aplicacion.

#### Necesitas tu string de conexion a mongo para poder

`VER el archivo .env.example` provisto como ejemplo para las variables de entorno que se necesitan.

Conceptos desarrollados:

#### Redis.

- Uso de Redis con NESTED HASHES (HSET y HGET), cada key apunta a un objeto anidado, no a un valor especifico.

- Se modifico el objeto `query` de mongoose para agregar Redis y poder chequear que si la consulta ya fue realizada con anterioridad la respuesta la devuelva Redis.
- Cuando se crea un post, se borra la cache.

#### Testing

- Lanzar instancias de chromium programaticamente e interactuar con el banco de pruebas.
- Como hacer aserciones en jest acerca de lo que que pasan en la ventana de chromium.
- como simular el login de un usuario a traves goggle Oauth.
- Se toma el id de un usuario existente y se genera una fake session.
- Uso de proxies para optimización de un sistema de pruebas.

#### AWS

- Uso de Buckets (AWS S3) para almacenamiento de las imagenes.
- Solicitud de `Presigned URLs` para el almacenamiento de la imagen.
- Credenciales AWS con IAM.
- Permitir Acciones con politicas IAM.
- Configuración de Buckets policies.

#### Integracion continua.

La práctica de automatizar la integración de los cambios de código de varios contribuidores en un único proyecto de software. Es una de las principales prácticas recomendadas de DevOps, que permite a los desarrolladores fusionar con frecuencia los cambios de código en un repositorio central donde luego se ejecutan las compilaciones y pruebas. Las herramientas automatizadas sirven para verificar que el nuevo código es correcto antes de la integración.

`CI`: Proceso para fusionar todos los cambios de código en una sola rama

`CI-server` (Github Actions - travis - circle - codeship -aws codebuild)
Servidor que ejecuta comprobaciones automáticas (pruebas/tests) en el código base para garantizar que los cambios no hayan roto nada.

- Configuración un CI-Server para practicar la integración continua.
