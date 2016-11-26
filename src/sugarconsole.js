/*
 * SugarConsole.js
 * Copyright 2016
 * Author: Luis Miguel F.
 * All Rights Reserved.
 * Use, reproduction, distribution, and modification of this code is subject to the terms and
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 *
 * Project: https://github.com/lmfresneda/sugarconsolejs
 */
/* global define */
;(function (define) {
  define([], function () {
    return (function () {

      /***************************** PRIVATE *******************************/
      let sugarConf = {
        _steps: 0,
        _timeStep: null,
        _fontFamilyLog: 'Arial',
        _dif: null
      };
      function _getSugarLine(text){
        let txt = '';
        text.split('')
            .forEach(c => txt += '+-');
        return `${txt}+`;
      };
      function _getSugarText(text){
        let txt = '';
        text.split('')
            .forEach(c => txt += `|${c}`);
        return `${txt}|`;
      };

      /**
       * Primary object to be extended to Console
       *
       * @type {Object}
       */
      let sugarconsole = {

        /***************************** TEST *******************************/
        /**
         * Method to test that the extension has run
         *
         * @method testlog
         */
        testlog(){
          console.log('Ready!');
        },

        /**
         * This method simply paints the logo of SugarConsole.js
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
         * With this method we can change the default typography when doing console.xlog
         *
         * @param  {String} font Font family to choice
         * @method fontFamilyLog
         */
        fontFamilyLog(font){
          sugarConf._fontFamilyLog = font;
        },

        /**
         * Paint a line separator 
         *
         * @param  {Number} [size=80] Optional, length of the separator line, formed
         * by [size] times the character '_'. By default 80.
         * @param  {Number} [fontSize=1] Optional, we indicate the font-size to be used for the line
         * @method separator
         */
        separator(size = 80, fontSize = 1){
          console.log('');
          let line = '';
          //to avoid polyfills (Array.from y/o Array.fill), bucle for
          for (var i = 0; i < size; i++) {
            line += '_';
          }
          console.log(`%c${line}`,
            `color: black; font-weight: bold; font-size: ${fontSize}em`);
          console.log('');
        },

        /***************************** LOGGER *******************************/

        /**
         * Paint a text, in a sugary way
         *
         * @param  {String} msg Text to log
         * @param  {Number} [fontSize=1] Optional, we indicate the font-size to be used
         * @method sugar
         */
        sugar(msg, fontSize = 1.2){
          console.log(`%c${_getSugarLine(msg)}`, `font-size: ${fontSize}em`);
          console.log(`%c${_getSugarText(msg)}`, `font-size: ${fontSize}em`);
          console.log(`%c${_getSugarLine(msg)}`, `font-size: ${fontSize}em`);
        },

        /**
         * Pinta un texto de INFO
         *
         * @param  {String} msg Optional, Text to log
         * @param  {Object} [infoObject=''] Optional, objeto a loguear después del texto
         * @method xinfo
         */
        xinfo(msg = 'Empty Info text', infoObject = ''){
          console.log(`%ci%cINFO: ${msg}`,
            `background-color: #006AFA; color: white; border-radius: 100%; padding: 1px 5px; margin-right: 5px;`, /*styles for symbol*/
            `color: #5B5959; background-color: #C8F5FD; padding: 1px 2px; border-radius: 2px`, /*styles for message*/
            infoObject);
        },

        /**
         * Pinta un texto de ERROR
         *
         * @param  {String} msg Optional, Text to log
         * @param  {Object} [errorObject=''] Optional, objeto a loguear después del texto
         * @method xerror
         */
        xerror(msg = 'Empty Error text', errorObject = ''){
          console.log(`%cX%cERROR: ${msg}`,
            `background-color: #EC1A1A; color: white; border-radius: 100%; padding: 1px 5px; margin-right: 5px;`, /*styles for symbol*/
            `color: #2F2F2F; background-color: #FFC4C4; padding: 1px 2px; border-radius: 2px`, /*styles for message*/
            errorObject);
        },

        /**
         * Pinta un texto de WARNING
         *
         * @param  {String} msg Optional, Text to log
         * @param  {Object} [warnObject=''] Optional, objeto a loguear después del texto
         * @method xwarn
         */
        xwarn(msg = 'Empty Warning text', warnObject = ''){
          console.log(`%c!%cWARN: ${msg}`,
            `background-color: #F0DC00; border-radius: 100%; padding: 1px 5px; margin-right: 5px; font-weight: bold`, /*styles for symbol*/
            `color: #2F2F2F; background-color: #FDFCC3; padding: 1px 2px; border-radius: 2px`, /*styles for message*/
            warnObject);
        },

        /**
         * Pinta un texto de DEBUG
         *
         * @param  {String} msg Optional, Text to log
         * @param  {Object} [debugObject=''] Optional, object to log in after the text
         * @method xdebug
         */
        xdebug(msg = 'Empty Debug text', debugObject = ''){
          console.log(`%c<>%cDEBUG: ${msg}`,
            `background-color: #777777; color: white; border-radius: 100%; padding: 2px 3px 3px 3px; margin-right: 5px`, /*styles for symbol*/
            `color: #2F2F2F; background-color: #E5E5E5; padding: 1px 2px; border-radius: 2px`, /*styles for message*/
            debugObject);
        },

        /**
         * Pinta un texto de log simple
         *
         * @param  {String} msg Optional, Text to log
         * @param  {Number} [fontSize=1.2] Optional, we indicate the font-size to be used
         * @param  {String} [fontFamily=Tipografía por defecto] Optional, tipografía a usar
         * @method xlog
         */
        xlog(msg = 'Empty Log text', fontSize = 1.2, fontFamily = sugarConf._fontFamilyLog){
          console.log(`%c${msg}`,
            `font-size: ${fontSize}em; font-family: ${fontFamily}`);
        },

        /**
         * Is console.log
         * @type {Function}
         */
        object: console.log,

        /**
         * Paint a bold text
         *
         * @param  {String} msg Optional, Text to log
         * @param  {Number} [fontSize=1.2] Optional, we indicate the font-size to be used
         * @method strong
         */
        strong(msg = 'Empty bold text', fontSize = 1.2){
          console.log(`%c${msg}`,
            `font-weight: bold; font-size: ${fontSize}em`);
        },

        /**
         * Paint an italic text
         *
         * @param  {String} msg Optional, Text to log
         * @param  {Number} [fontSize=1.2] Optional, we indicate the font-size to be used
         * @method italic
         */
        italic(msg = 'Empty italic text', fontSize = 1.2){
          console.log(`%c${msg}`,
            `font-style: italic; font-size: ${fontSize}em`);
        },

        /**
         * Pinta un texto citado (quote)
         *
         * @param  {String} msg Optional, Text to log
         * @param  {Number} [fontSize=1.2] Optional, we indicate the font-size to be used
         * @method quote
         */
        quote(msg = 'Empty quote text', fontSize = 1.2){
          console.log(`%c${msg}`,
            `font-style: italic; font-size: ${fontSize}em; border-left: 5px solid #A2A2A2; color: #B8B8B8; padding: 2px 0px 2px 5px; margin-left: 20px;`);
        },

        /**
         * Paint the current date. If you have previously called this method,
         * you will also paint the difference with the previous date in milliseconds
         *
         * @param  {Number} [fontSize=1.2] Optional, we indicate the font-size to be used
         * @method now
         */
        now(fontSize = 1.2){
          let printDiff = !(sugarConf._dif == null);
          if (sugarConf._dif == null) {
            sugarConf._dif = new Date();
          }
          let nDiff  = new Date();
          const diff = nDiff.getTime() - sugarConf._dif.getTime();
          console.log('');
          console.log(`%c>>> NOW -> ${nDiff.toString()} <<<`,
            `font-size: ${fontSize}em; color: blue; margin-left: 20px;`);
          if (printDiff) {
            console.log(`%c(Difference ${diff}ms)`,
              `font-size: ${fontSize - 0.2}em; color: blue; margin-left: 50px;`);
          }
          console.log('');
          sugarConf._dif = nDiff;
        },

        /***************************** STEPS *******************************/

        /**
         * Reset steps
         *
         * @method resetSteps
         */
        resetSteps(){
          sugarConf._steps = 0;
        },

        /**
         * Paint the next step. We can indicate if you reset the steps or not
         *
         * @param  {Boolean} [reset=true] we indicate if it should reset or not
         * when more than 5 seconds since the last call
         */
        step(reset = true){
          if (reset && sugarConf._timeStep != null &&
            new Date().getTime() - sugarConf._timeStep.getTime() > 5000) {
            this.resetSteps();
          }
          console.log(`%c${sugarConf._steps + 1}%c Step!`,
            `border: 1px solid black; padding: 1px 5px; border-radius: 100%`, /*styles for number step*/
            `border: 0; padding: 0; border-radius: 0`              /*styles for string step*/
          );
          sugarConf._steps += 1;
          sugarConf._timeStep = new Date();
        },

        /**
         * Paint the next step directly without resetting even after 5 seconds
         */
        stepNoReset(){
          this.step(false);
        },

        /*
         * Paint a step forcing to reset
         */
        stepWithReset(){
          this.resetSteps();
          this.step();
        }
      }

      return sugarconsole;

    })();
  });

}(typeof define === 'function' && define.amd ? define : function (deps, factory) {
  if (typeof module !== 'undefined' && module.exports) { //Node
    module.exports = factory();
  } else {
    window.sugarconsole = factory();
    Object.assign(console, sugarconsole);
  }
}));
 



