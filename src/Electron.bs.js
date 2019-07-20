// Generated by BUCKLESCRIPT VERSION 6.0.3, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

var electron = (window.require ? window.require("electron") : undefined);

function ifElectron(fn) {
  if (electron !== undefined) {
    return Caml_option.some(Curry._1(fn, Caml_option.valFromOption(electron)));
  }
  
}

var currentWindow = ifElectron((function (electron) {
        return electron.remote.getCurrentWindow();
      }));

function openInBrowser($$event) {
  ifElectron((function (electron) {
          $$event.preventDefault();
          return electron.shell.openExternal($$event.target.href);
        }));
  return /* () */0;
}

function toggleMaximize(win) {
  if (win.isMaximized()) {
    win.unmaximize();
    return /* () */0;
  } else {
    win.maximize();
    return /* () */0;
  }
}

function macOSDoubleClick($$event) {
  ifElectron((function (electron) {
          var target = $$event.target;
          if (target.className.includes && target.className.includes("double-click-control")) {
            var doubleClickAction = electron.remote.systemPreferences.getUserDefault("AppleActionOnDoubleClick", "string");
            var $$window = electron.remote.getCurrentWindow();
            switch (doubleClickAction) {
              case "Maximize" : 
                  return toggleMaximize($$window);
              case "Minimize" : 
                  $$window.minimize();
                  return /* () */0;
              default:
                return /* () */0;
            }
          } else {
            return 0;
          }
        }));
  return /* () */0;
}

var isWin = navigator.appVersion.includes("Windows");

var isMac = navigator.appVersion.includes("Mac");

var match = ifElectron((function (param) {
        return true;
      }));

var isElectron = match !== undefined ? match : false;

function Electron$IfElectron(Props) {
  var children = Props.children;
  var os = Props.os;
  var isThisTheRightOs = os ? isMac : isWin;
  if (electron !== undefined && isThisTheRightOs) {
    return Curry._1(children, Caml_option.valFromOption(electron));
  } else {
    return null;
  }
}

var IfElectron = /* module */[/* make */Electron$IfElectron];

export {
  electron ,
  ifElectron ,
  currentWindow ,
  openInBrowser ,
  toggleMaximize ,
  macOSDoubleClick ,
  isWin ,
  isMac ,
  isElectron ,
  IfElectron ,
  
}
/* electron Not a pure module */
