# Prueba técnica backend

## Introducción

Bienvenid@ a la prueba de técnica de Wuolah para desarrolladores backend

Queremos ver cómo te desenvuelves ante un caso práctico que simula los retos a los que nos enfrentamos a diario

## ¿Qué buscamos evaluar?


- Capacidad de **entender los requisitos y buscar soluciones**
- Capacidad de comunicación a la hora de plantear posibles dudas y/o decisiones
- Familiaridad o capacidad de adaptación al stack planteado
- **Buen uso** de Node.js y buenas prácticas en el **diseño de APIs**
- **Principios** aplicados en el desarrollo de código, prestando especial atención en:
    - **Idempotencia**: debemos ser capaces de ejecutar nuestro código con cualquier dato que siga el formato y obtener siempre los mismos resultados para la misma entrada, independientemente del entorno en el que sea ejecutado.
    - **Testeabilidad**: ¿cómo garantizas que tu código funciona? Proveer tests es otra tarea importante que a menudo olvidamos o no priorizamos.
    - **Rendimiento**: tendemos a pensar que la velocidad no es tan importante, pero cambia la forma en la que nuestros usuarios hacen o perciben las cosas. Y por último, piensa en la escalabilidad del sistema que estas desarrollando, ¿qué ocurre si el código recibe cientos de peticiones por segundo? ¿identificas algún cuello de botella?

## Prueba


### Requisitos básicos

Vamos a construir una aplicación de concursos. Para ello, construiremos una API RESTful que de solución a las siguientes historias de usuario:

- Como usuario me gustaría visualizar un listado de concursos disponibles.
- Como usuario me gustaría obtener los detalles de un concurso determinado.
- Como usuario me gustaría ser capaz de canjear mis tickets por participaciones en un concurso, pudiendo canjear un número ilimitado de tickets en un mismo concurso.
- Como usuario me gustaría ver mis tickets, siendo capaz de filtrar por estado del ticket (canjeado o disponible) y por id de concurso, en caso de ticket canjeado.
- Como usuario me gustaría ver un listado de usuarios que han participado en un determinado concurso.

### Bonus

- El sistema debe otorgar un ticket a todo usuario que realice un acceso a la plataforma cada semana. Nos gustaría conocer tu opinión sobre cómo realizarías dicho procesamiento, explicándolo de forma teórica, **no hace falta implementación**.
- Escribe documentación clara sobre cómo está diseñada la solución y cómo ejecutar el código.
- Escribe buenos comentarios in-line (sobre el propio código).
- Escribe mensajes descriptivos en los commits.
- Un demo online es siempre bienvenida :)

## Instrucciones


- Para iniciar la prueba, haz un fork de [este repositorio](https://github.com/wuolah/test-backend), crea una rama con tu nombre completo y luego realiza una Pull Request cuando esté todo listo para ser revisado.
- Existen **dos opciones de implementación**, elige la que prefieras.
    - **No cloud-native**
    - **Cloud-native (AWS)**
- Evita realizar un único commit y mantén un histórico que nos permita saber cómo has ido llegando a la solución final.
- Puedes usar cualquier biblioteca que usarías normalmente si se tratara de una aplicación real. Pero ten en cuenta que **estamos interesados en tu código** y la forma en la que resuelves el problema, no en el expertise en una determinada biblioteca.
- No esperamos que puedas completar todas las tareas. Esta prueba es la misma que se presenta para candidatos de todos los niveles de experiencia, así que haz lo que puedas de manera natural y relajada.

### Implementación no cloud-native

- usa Node.js LTS y cualquier framework de tu elección.
- Nos gustaría que utilizaras una de las siguientes base de datos aunque se aceptan otras con justificación.
    - si prefieres relacional: MySQL
    - si prefieres no relacional: MongoDB
- (Opcional) Describe tu estrategia de logging de los endpoints.
- (Opcional) Provee una estrategia de autenticación/autorización haciendo uso de JWT.

### Implementación cloud-native

- Crea un único servicio como una AWS Lambda individual en Node.js
- Nos gustaría que utilizaras una de las siguientes base de datos aunque se aceptan otras bases de datos con justificación.
    - si prefieres relacional: AWS Aurora (versión compatible con MySQL)
    - si prefieres no relacional: DynamoDB o DocumentDB
- Usa alguna herramienta de infraestructura como código que pueda ser usada para desplegar todos los recursos a una cuenta de AWS. Por ejemplo: CloudFormation, Terraform, Serverless Framework, etc.
- Usa API Gateway para exponer AWS Lambda.
- (Opcional) Describe tu estrategia para la gestión de errores en Lambda (política de reintentos, DLQs, etc.).
- (Opcional) Describe tu cloud-native estrategia para realizar el logging y la monitorización de los endpoints.

## FAQ


**¿Cuánto tiempo tengo?**

No hay fecha límite de entrega, pero creemos que una semana es suficiente para llevar a cabo la solución.

**¿Qué pasa si tengo alguna duda?**

[Crea una issue](https://github.com/wuolah/test-backend/issues/new/choose) en el repositorio o contacta con juanlu@wuolah.com. Te responderemos lo antes posible.
