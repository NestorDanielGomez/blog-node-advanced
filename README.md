# blog-node-advance

NESTED HASHES, cada key apunta a un objeto anidado (value = nested ley | nested value) , no a un valor especifico.
para acceder a estos valores se usa HSET y HGET

promisify. toma cualquier funcion que tenga una callback como ultimo parametro y lo hace devolver una promesas.
lo usamos para que la devolucion de la llamada sea una promesa y no un CB

client.flushall() - redis..borra todo

se modifica el objeto query de mongoose para chequear antes de ejecutar la query(exec) si la consulta ya ha sido hecha.
sobreescribir la funcion exec para chequear si la consulta ya ha sido hecha.

VAMOS sobre escribir la funcion (exec)de mongoose

-------testing
lanzar instancias de chromium programaticamente con js e interactuar con el banco de pruebas
como hacer aserciones en jest acerca de lo que que pasan en la ventana de chromium
como simular el login de un usuario a traves goggle Oauth

"test": "jest --runInBand --detectOpenHandles --forceExit"

---

se toma el id de un usario existente y se genera una fake session object .
firmamos el objecto fake
y lo vamos a setear en nuestra instancia de chromium

Uso de proxies para optimizacion de un sistema de pruebas.

---

Integracion continua.
la práctica de automatizar la integración de los cambios de código de varios contribuidores en un único proyecto de software. Es una de las principales prácticas recomendadas de DevOps, que permite a los desarrolladores fusionar con frecuencia los cambios de código en un repositorio central donde luego se ejecutan las compilaciones y pruebas. Las herramientas automatizadas sirven para verificar que el nuevo código es correcto antes de la integración.

CI
proceso para fusionar todos los cambios de código en una sola rama

CI-server (travis - circle - codeship -aws codebuild)
servidor que ejecuta comprobaciones automáticas (pruebas/tests) en el código base para garantizar que los cambios no hayan roto nada
vamos a configurar un ci server para practicar la integracion continua.
