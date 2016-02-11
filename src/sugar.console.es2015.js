{
	/**
	 * Objeto principal que se extenderá a Console
	 * 
	 * @type {Object}
	 */
	var SugarConsole = {
		/***************************** PRIVATE *******************************/
		/**
		 * Private utilities
		 * 
		 * @private
		 * @type {Object}
		 */
		__private: {
			_steps: 0,
			_timeStep: null,
			_fontFamilyLog: "Arial",
			_dif: null,
			_getSugarLine(text){
				let txt = "";
				text.split("").forEach(c => txt += "+-"); 
				return `${txt}+`;
			},
			_getSugarText(text){
				let txt = "";
				text.split("").forEach(c => txt += `|${c}`);
				return `${txt}|`;
			},
		},

		/***************************** TEST *******************************/
		/**
		 * Método para testear que ha funcionado la extensión
		 * 
		 * @method testlog
		 */
		testlog(){
			console.log("Ready!");
		}, 

		/**
		 * Este método simplemente pinta el logo de SugarConsole.js
		 * 
		 * @method logo
		 */
		logo(){
			console.log(`(  ____ \\|\\     /|(  ____ \\(  ___  )(  ____ )(  ____ \\(  ___  )( (    /|(  ____ \\(  ___  )( \\      (  ____ \\   \\__    _/(  ____ \\`);
			console.log(`| (    \\/| )   ( || (    \\/| (   ) || (    )|| (    \\/| (   ) ||  \\  ( || (    \\/| (   ) || (      | (    \\/      )  (  | (    \\/`);
			console.log(`| (_____ | |   | || |      | (___) || (____)|| |      | |   | ||   \\ | || (_____ | |   | || |      | (__          |  |  | (_____ `);
			console.log(`(_____  )| |   | || | ____ |  ___  ||     __)| |      | |   | || (\\ \\) |(_____  )| |   | || |      |  __)         |  |  (_____  )`);
			console.log(`      ) || |   | || | \\_  )| (   ) || (\\ (   | |      | |   | || | \\   |      ) || |   | || |      | (            |  |        ) |`);
			console.log(`/\\____) || (___) || (___) || )   ( || ) \\ \\__| (____/\\| (___) || )  \\  |/\\____) || (___) || (____/\\| (____/\\ _ |\\_)  )  /\\____) |`);
			console.log(`\\_______)(_______)(_______)|/     \\||/   \\__/(_______/(_______)|/    )_)\\_______)(_______)(_______/(_______/(_)(____/   \\_______)`);
		},


		/***************************** UTILS *******************************/

		/**
		 * Con este método podemos cambiar la tipografía por defecto a la hora de hacer console.xlog
		 *
		 * @param  {String} font Fuente a incorporar
		 * @method fontFamilyLog
		 */
		fontFamilyLog(font){
			this.__private._fontFamilyLog = font;
		},

		/**
		 * Pinta una línea separadora
		 * 
		 * @param  {Number} [fontSize=1] Opcional, indicamos el font-size que se usará para la línea
		 * @method separator
		 */
		separator(fontSize = 1){
			console.log(""); 
			console.log(`%c____________________________________________________________________________________`, 
				`color: black; font-weight: bold; font-size: ${fontSize}em`);
			console.log("");
		},

		/***************************** LOGGER *******************************/

		/**
		 * Pinta el texto pasado de una forma azucarada
		 * 
		 * @param  {String} msg Mensaje a loguear
		 * @param  {Number} [fontSize=1] Opcional, indicamos el font-size que se usará
		 * @method sugar
		 */
		sugar(msg, fontSize = 1.2){
			console.log(`%c${this.__private._getSugarLine(msg)}`, `font-size: ${fontSize}em`);
			console.log(`%c${this.__private._getSugarText(msg)}`, `font-size: ${fontSize}em`);
			console.log(`%c${this.__private._getSugarLine(msg)}`, `font-size: ${fontSize}em`);
		},

		/**
		 * Pinta un texto de INFO
		 * 
		 * @param  {String} msg Opcional, mensaje a loguear
		 * @param  {Object} [infoObject=""] Opcional, objeto a loguear después del texto
		 * @method xinfo
		 */
		xinfo(msg = "Empty Info text", infoObject = ""){
			console.log(`%ci%cINFO: ${msg}`, 
				`background-color: #006AFA; color: white; border-radius: 100%; padding: 1px 5px; margin-right: 5px;`,  /*styles for symbol*/
				`color: #5B5959; background-color: #C8F5FD; padding: 1px 2px; border-radius: 2px`, /*styles for message*/
				infoObject);  
		},

		/**
		 * Pinta un texto de ERROR
		 * 
		 * @param  {String} msg Opcional, mensaje a loguear
		 * @param  {Object} [errorObject=""] Opcional, objeto a loguear después del texto
		 * @method xerror
		 */
		xerror(msg = "Empty Error text", errorObject = ""){
			console.log(`%cX%cERROR: ${msg}`, 
				`background-color: #EC1A1A; color: white; border-radius: 100%; padding: 1px 5px; margin-right: 5px;`,    /*styles for symbol*/
				`color: #2F2F2F; background-color: #FFC4C4; padding: 1px 2px; border-radius: 2px`, /*styles for message*/
				errorObject);  
		},

		/**
		 * Pinta un texto de WARNING
		 * 
		 * @param  {String} msg Opcional, mensaje a loguear
		 * @param  {Object} [warnObject=""] Opcional, objeto a loguear después del texto
		 * @method xwarn
		 */
		xwarn(msg = "Empty Warning text", warnObject = ""){
			console.log(`%c!%cWARN: ${msg}`, 
				`background-color: #F0DC00; border-radius: 100%; padding: 1px 5px; margin-right: 5px; font-weight: bold`, /*styles for symbol*/
				`color: #2F2F2F; background-color: #FDFCC3; padding: 1px 2px; border-radius: 2px`, /*styles for message*/
				warnObject);  
		},

		/**
		 * Pinta un texto de DEBUG
		 * 
		 * @param  {String} msg Opcional, mensaje a loguear
		 * @param  {Object} [debugObject=""] Opcional, objeto a loguear después del texto
		 * @method xdebug
		 */
		xdebug(msg = "Empty Debug text", debugObject = ""){
			console.log(`%c<>%cDEBUG: ${msg}`, 
				`background-color: #777777; color: white; border-radius: 100%; padding: 2px 3px 3px 3px; margin-right: 5px`, /*styles for symbol*/
				`color: #2F2F2F; background-color: #E5E5E5; padding: 1px 2px; border-radius: 2px`, /*styles for message*/
				debugObject);  
		},

		/**
		 * Pinta un texto de log simple
		 * 
		 * @param  {String} msg Opcional, mensaje a loguear
		 * @param  {Number} [fontSize=1.2] Opcional, indicamos el font-size que se usará
		 * @param  {String} [fontFamily=Tipografía por defecto] Opcional, tipografía a usar
		 * @method xlog
		 */
		xlog(msg = "Empty Log text", fontSize = 1.2, fontFamily = this.__private._fontFamilyLog){
			console.log(`%c${msg}`, 
				`font-size: ${fontSize}em; font-family: ${fontFamily}`);
		},

		/**
		 * Es console.log
		 * @type {Function}
		 */
		object: console.log,

		/**
		 * Pinta un texto resaltado en negrita
		 * 
		 * @param  {String} msg Opcional, mensaje a loguear
		 * @param  {Number} [fontSize=1.2] Opcional, indicamos el font-size que se usará
		 * @method strong
		 */
		strong(msg = "Empty bold text", fontSize = 1.2){
			console.log(`%c${msg}`, 
				`font-weight: bold; font-size: ${fontSize}em`);
		},

		/**
		 * Pinta un texto en itálica
		 * 
		 * @param  {String} msg Opcional, mensaje a loguear
		 * @param  {Number} [fontSize=1.2] Opcional, indicamos el font-size que se usará
		 * @method italic
		 */
		italic(msg = "Empty italic text", fontSize = 1.2){
			console.log(`%c${msg}`, 
				`font-style: italic; font-size: ${fontSize}em`);
		},

		/**
		 * Pinta un texto citado (quote)
		 * 
		 * @param  {String} msg Opcional, mensaje a loguear
		 * @param  {Number} [fontSize=1.2] Opcional, indicamos el font-size que se usará
		 * @method quote
		 */
		quote(msg = "Empty quote text", fontSize = 1.2){
			console.log(`%c${msg}`, 
				`font-style: italic; font-size: ${fontSize}em; border-left: 5px solid #A2A2A2; color: #B8B8B8; padding: 2px 0px 2px 5px; margin-left: 20px;`);
		},

		/**
		 * Pinta la fecha actual. Si se ha llamado anteriormente a este método, se pintará también la diferencia con la anterior fecha en milisegundos
		 * 
		 * @param  {Number} [fontSize=1.2] Opcional, indicamos el font-size que se usará
		 * @method now
		 */
		now(fontSize = 1.2){ 
			let printDiff = !(this.__private._dif == null);
			if(this.__private._dif == null) {
				this.__private._dif = new Date();
			}
			let nDiff = new Date();
			const diff = nDiff.getTime() - this.__private._dif.getTime();
			console.log("");
			console.log(`%c>>> NOW -> ${nDiff.toString()} <<<`, 
				`font-size: ${fontSize}em; color: blue; margin-left: 20px;`);
			if(printDiff){
				console.log(`%c(Difference ${diff}ms)`, 
					`font-size: ${fontSize - 0.2}em; color: blue; margin-left: 50px;`);
			}
			console.log("");
			this.__private._dif = nDiff;
		},


		/***************************** STEPS *******************************/

		/**
		 * Resetea los pasos
		 * 
		 * @method resetSteps
		 */
		resetSteps(){
			this.__private._steps = 0;
		},

		/**
		 * Pinta el siguiente paso. Le podemos indicar si resetea los pasos o no
		 * 
		 * @param  {Boolean} [reset=true] Opcional, indicamos si debe resetear o no cuando hayan pasado más de 5 segundos
		 * 								  desde la última vez que se llamó
		 */
		step(reset = true){
			if(reset && this.__private._timeStep != null && new Date().getTime() - this.__private._timeStep.getTime() > 5000){ 
				this.resetSteps();
			}
			console.log(`%c${this.__private._steps+1}%c Step!`, 
				`border: 1px solid black; padding: 1px 5px; border-radius: 100%`, /*styles for number step*/
				`border: 0; padding: 0; border-radius: 0`						  /*styles for string step*/
						);
			this.__private._steps += 1;
			this.__private._timeStep = new Date();
		},

		/**
		 * Pinta directamente el siguiente paso sin resetear aunque pasen 5 segundos
		 */
		stepNoReset(){
			this.step(false);
		},
		
		/*
		 * Pinta un paso obligando a resetear
		 */
		stepWithReset(){
			this.resetSteps();
			this.step();
		}
	}
	//extendemos las propiedades al objeto global console
 	Object.assign(console, SugarConsole); 
}
 



