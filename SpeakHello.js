(function(window) {

    var helloSpeaker = {};
    var speakWord = "Hello";
    helloSpeaker.speackWord = function speak(name) {
        console.log(speakWord + " " + name);
        document.getElementById("output").innerHTML += "<p>" + speakWord + " " + name + "</p>";
    }
    window.helloSpeaker = helloSpeaker;

})(window);