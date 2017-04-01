# sugarconsolejs

A simple collection of extensions to the console object to give you some sugar

## How to use

### npm

`npm install sugarconsole --save-dev`

### bower

`bower install sugarconsole --save`

### [Download project](https://github.com/lmfresneda/sugarconsolejs/archive/master.zip "Download project")

Menction our webpage at the script 

```html
	<script type="text/javascript" src="dist/sugarconsole.min.js"></script>
```

Extensions can be used directly from the global `console` object or by using the available `sugarconsole` class.

## Requirements

SugarConsole.js is zero dependencies. It is only necessary that the global object `console` exists.

## API

### .separator(*[size = 80, fontSize = 1]*)

Paint a line separator.

![console.separator](img/console_separator.jpg)

We can indicate that it is shorter or longer using the `size` parameter and its thickness using the `fontSize` parameter, eg:

![console.separator](img/console_separator2.jpg)

### .sugar(msg *[, fontSize = 1.2]*)

Paint the text in a sugary way.

![console.sugar](img/console_sugar.jpg)

Using the optional parameter `fontSize` we can make the text more or less large, eg:

![console.sugar](img/console_sugar2.jpg)

### .xinfo(*[msg = "Empty Info text", infoObject = ""]*)

Paint an INFO text

![console.xinfo](img/console_xinfo.jpg)

We can optionally pass you an object that will be logged after the text, eg:

![console.xinfo](img/console_xinfo2.jpg)

### .xerror(*[msg = "Empty Error text", errorObject = ""]*)

Paint an ERROR text

![console.xerror](img/console_xerror.jpg)

We can optionally pass you an object that will be logged after the text, eg:

![console.xerror](img/console_xerror2.jpg)

### .xwarn(*[msg = "Empty Warning text", warnObject = ""]*)

Paint a WARNING text 

![console.xwarn](img/console_xwarn.jpg)

We can optionally pass you an object that will be logged after the text, eg:

![console.xwarn](img/console_xwarn2.jpg)

### .xdebug(*[msg = "Empty Debug text", debugObject = ""]*)

Paint a DEBUG text

![console.xdebug](img/console_xdebug.jpg)

We can optionally pass you an object that will be logged after the text, eg:

![console.xdebug](img/console_xdebug2.jpg)

### .xlog(*[msg = "Empty Log text", fontSize = 1.2, fontFamily = "Arial"]*)

Paint a simple log text.

![console.xlog](img/console_xlog.jpg)

Optionally we can indicate the font size and typography, eg:

![console.xlog](img/console_xlog2.jpg)

### .fontFamily(font)

With this method we can change the default typography when doing console.xlog

### .object(...)

Is console.log

### .strong(*[msg = "Empty bold text", fontSize = 1.2]*)

Paint a bold text.

![console.strong](img/console_strong.jpg)

Optionally we can indicate the font size using the parameter `fontSize`.

### .italic(*[msg = "Empty italic text", fontSize = 1.2]*)

Paint an italic text.

![console.italic](img/console_italic.jpg)

Optionally we can indicate the font size using the parameter `fontSize`.

### .quote(*[msg = "Empty quote text", fontSize = 1.2]*)

Paint a quoted text.

![console.quote](img/console_quote.jpg)

Optionally we can indicate the font size using the parameter `fontSize`.

### .now(*[fontSize = 1.2]*)

Paint the current date. If this method was previously called, the difference with the previous date in milliseconds will also be painted.

![console.now](img/console_now.jpg)

![console.now](img/console_now2.jpg)

### .step(*[reset = true]*)

With this method we can paint steps (the typical "Here step") in a slightly more elegant way.This method concretely paints the next step.We can indicate if you reset the steps or not.

![console.step](img/console_step1.jpg) 

![console.step](img/console_step2.jpg)

![console.step](img/console_step3.jpg)

If they pass more than 5 seconds between one step and another, they will automatically reset:

![console.step](img/console_step4.jpg)

But we can force it not to do so using the `reset` parameter by passing it as `false`:

![console.step](img/console_step5.jpg)

### .resetSteps()

Reset steps

### .stepNoReset()

Paint directly the next step without resetting even after 5 seconds. Same as doing `.step(false)`.

### .stepWithReset()

Paint a step by forcing it to reset. Same as doing:

```javascript
	console.resetSteps();
	console.step();
```

## Extra

We can also find things of no importance and/or that are of no use:

### .testlog()

Method to test that the extension has run:

![console.testlog](img/console_testLog.jpg)

### .logo()

This method simply paints the logo of SugarConsole.js

![console.logo](img/console_logo.jpg)
