function assemblyLine(inputObj) { // DECORATOR FUNCTION.
  
  let libraryObj = {

    hasClima: function (inputObj) {

      inputObj.temp = 21;
      inputObj.tempSettings = 21;
      inputObj.adjustTemp = function () {

        if (inputObj.temp < inputObj.tempSettings) inputObj.temp += 1;
        else if (inputObj.temp > inputObj.tempSettings) inputObj.temp -= 1;
      };
    },

    hasAudio: function (inputObj) {

      inputObj.currentTrack = null;
      inputObj.nowPlaying = function () {
        if (inputObj.currentTrack !== null) console.log(`Now playing '${inputObj.currentTrack.name}' by ${inputObj.currentTrack.artist}`);
      };
    },

    hasParktronic: function (inputObj) {

      inputObj.checkDistance = function (distance) {

        if (distance < 0.1) {
          console.log("Beep! Beep! Beep!");
        } else if (distance >= 0.1 && distance < 0.25) {
          console.log("Beep! Beep!");
        } else if (distance >= 0.25 && distance < 0.5) {
          console.log("Beep!");
        } else {
          console.log("");
        }
      };
    },
  };

  return libraryObj;
  // console.log(libraryObj);
}

assemblyLine({ make: 'Toyota', model: 'Avensis' });