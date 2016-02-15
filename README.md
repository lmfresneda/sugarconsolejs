#sugar.console.js

Una simple colección de extensiones al objeto console para darle un poco de azúcar

##Cómo empezar

Referenciar en nuestra página la utilidad `sugar.console.min.js`

```html
	<script type="text/javascript" src="sugar.console.min.js"></script>
```

Las extensiones se pueden usar directamente desde le objeto global `console` o haciendo uso de la clase `SugarConsole` disponible

##API

###.separator([size = 80, fontSize = 1])

Pinta una línea separadora.

![console.separator](img/console_separator.jpg)

Le podemos indicar que sea menos o más larga mediante el parámetro `size` y el espesor de esta mediante el parámetro `fontSize`, ejemplo:

![console.separator](img/console_separator2.jpg)

###.sugar(msg [, fontSize = 1.2])

Pinta el texto pasado de una forma azucarada.

![console.sugar](img/console_sugar.jpg)

Mediante el parámetro opcional `fontSize` podemos hacer el texto más o menos grande, ejemplo:

![console.sugar](img/console_sugar2.jpg)

###.xinfo([msg = "Empty Info text", infoObject = ""])

Pinta un texto de INFO

![console.xinfo](img/console_xinfo.jpg)

Podemos pasarle opcionalmente un objeto que será logueado posterior al texto, ejemplo:

![console.xinfo](img/console_xinfo2.jpg)

###.xerror([msg = "Empty Error text", errorObject = ""])

Pinta un texto de ERROR

![console.xerror](img/console_xerror.jpg)

Podemos pasarle opcionalmente un objeto que será logueado posterior al texto, ejemplo:

![console.xerror](img/console_xerror2.jpg)

###.xwarn([msg = "Empty Warning text", warnObject = ""])

Pinta un texto de WARNING

![console.xwarn](img/console_xwarn.jpg)

Podemos pasarle opcionalmente un objeto que será logueado posterior al texto, ejemplo:

![console.xwarn](img/console_xwarn2.jpg)

###.xdebug([msg = "Empty Debug text", debugObject = ""])

Pinta un texto de DEBUG

![console.xdebug](img/console_xdebug.jpg)

Podemos pasarle opcionalmente un objeto que será logueado posterior al texto, ejemplo:

![console.xdebug](img/console_xdebug2.jpg)

###.xlog([msg = "Empty Log text", fontSize = 1.2, fontFamily = "Arial"])

Pinta un texto de log simple.

![console.xlog](img/console_xlog.jpg)

Opcionalmente podemos indicarle el tamaño de letra y la tipografía, por ejemplo:

![console.xlog](img/console_xlog2.jpg)

###.fontFamily(font)

Con este método podemos cambiar la tipografía por defecto a la hora de hacer console.xlog

###.object(...)

Es console.log

###.strong([msg = "Empty bold text", fontSize = 1.2])

Pinta un texto resaltado en negrita.

![console.strong](img/console_strong.jpg)

Opcionalmente podemos indicarle el tamaño de letra mediante el parámetro `fontSize`.

###.italic([msg = "Empty italic text", fontSize = 1.2])

Pinta un texto en itálica.

![console.italic](img/console_italic.jpg)

Opcionalmente podemos indicarle el tamaño de letra mediante el parámetro `fontSize`.

###.quote([msg = "Empty quote text", fontSize = 1.2])

Pinta un texto citado (quote).

![console.quote](img/console_quote.jpg)

Opcionalmente podemos indicarle el tamaño de letra mediante el parámetro `fontSize`.

###.now([fontSize = 1.2])

Pinta la fecha actual. Si se ha llamado anteriormente a este método, se pintará también la diferencia con la anterior fecha en milisegundos.

![console.now](img/console_now.jpg)

![console.now](img/console_now2.jpg)

###.step([reset = true])

Con éste método podemos pintar pasos (los típicos "Por aquí paso" de una forma un poco más elegante. Este método concretamente pinta el siguiente paso. Le podemos indicar si resetea los pasos o no.

![console.step](img/console_step1.jpg) 

![console.step](img/console_step2.jpg)

![console.step](img/console_step3.jpg)

Si pasan más de 5 segundos entre un paso y otro, automáticamente se resetean:

![console.step](img/console_step4.jpg)

Pero podemos obligar a que no lo haga mediante el parámetro `reset` pasándolo como `false`:

![console.step](img/console_step5.jpg)

###.resetSteps()

Resetea los pasos

###.stepNoReset()

Pinta directamente el siguiente paso sin resetear aunque pasen 5 segundos. Igual que hacer `.step(false)`.

###.stepWithReset()

Pinta un paso obligando a resetear. Igual que hacer:

```javascript
	console.resetSteps();
	console.step();
```

##Extra

También podemos encontrar cosas sin ninguna importancia y/o que no sirven para nada:

###.testlog()

Método para testear que ha funcionado la extensión:

![console.testlog](img/console_testLog.jpg)

###.logo()

Este método simplemente pinta el logo de SugarConsole.js

![console.logo](img/console_logo.jpg)
