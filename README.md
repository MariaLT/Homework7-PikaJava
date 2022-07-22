# PikaJava- Homework 7

### ⚡ Proyecto de Pokedex 
<p align="center">
    <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png'
width='450'>
</p>

### 👩🏻‍🏫 Proyecto realizado por: 
* Sarah Fossi
* María León
* Carmen Gómez 
* Rocío Arellano

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

Te damos la bienvenida a nuestro proyecto en el que hemos creado una POKEDEX donde podrás hacerte entrenador pokemon y un equipo con tus propios pokemons!!
A continuación te invitamos a conocer qué hemos realizado en nuestro proyecto, y cuál ha sido la lógica y forma de trabajo que hemos realizado. 
Te atreves a jugar??
HAZTE CON TODOS!! 
<p align="center">
<img src = 'https://www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png' width='250'>

-----------------------------------------------------------------------------------------------------------------------------------------

###  💻 ¿Cómo está conformado el proyecto?

Contamos con una parte realizada en Java que se encuentra en el puerto 8080 y que se conecta a la base de datos de MySQL. 
En este proyecto en los controladores contamos con todo tipo de peticiones GET, POST, PUT Y DELETE. 
También contamos con otro proyecto realizado con Angular. Este proyecto será levantado en el puerto 4200, y, se unirá tanto a nuestra base de datos propia, como a una API externa que se nos ha proporcionado: 
PokéAPI (pokeapi.co)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

### 🎮 ¿Cómo jugar? 

Para que  funcione correctamente, tendrás que levantar las terminales de cada proyecto. 
Para ello:
-	 en java usaremos por terminal: ` mvn spring-boot:run `
-	En angular usaremos por terminal: `ng serve`

Te recomendamos que te crees una connection titulada homework con contraseña homework. 
Y para dar los privilegios: `GRANT ALL PRIVILEGES ON homework.* TO 'homework'@'127.0.0.1';`

Tras esto ya puedes jugar!!
En la primera pantalla `Pokemon` encontrarás todos los pokemons, y podrás usar nuestra barra de navegación de páginas para poder ir viendo todos los pokemons que existen, te va a aparecer su foto, nombre y características. 
Puedes usar nuestra barra de navegación que se encuentra debajo de la cabecera para cambiar de pantalla.
En la pantalla `Trainer` podrás crear un entrenador por medio de un formulario, y al darle al botón de `Submit` se guardará en la base de datos y además te irán apareciendo a continuación en formato lista en esa misma pantalla. (Puedes guardar tantos entrenadores como quieras). 
En la pantalla `Team` podrás realizar tu equipo completo con uno de los entrenadores que  hayas creado previamente y con 6 pokemons a tu elección de todos los existentes. Todo ello se guardará además en la base de datos. 
<p align="center">
    <img src = 'https://static.wikia.nocookie.net/espokemon/images/7/72/Rojo_RFVH_%28Ilustraci%C3%B3n%29.png/revision/latest?cb=20091129174930'
width='150'>



-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
### 😊 Datos adicionales que nos gustaría que conocieras: 

* El proyecto ha sido realizado por partes iguales por las 4 miembros del grupo, debido a que nuestra dinámica de trabajo ha consistido en realizar reuniones virtuales durante todo el proyecto. No nos hemos dividido el trabajo, sino que lo hemos ido haciendo de forma simultánea en conjunto. Íbamos turnándonos para escribir el código pero el resto del equipo participaba de la escritura del mismo a la vez. 
* Como dato curioso, hemos intentado usar un aspecto en colores similar al del juego original

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

Por último nos gustaría agradecerte tu tiempo por probar e interesarte en nuestro proyecto; esperamos haber estado a la altura de lo que se nos pedía y que te hayas divertido mientras lo revisabas.

<p align="center">
    <img src = 'http://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png' width='250'>

