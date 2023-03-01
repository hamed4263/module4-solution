(function(window) {

    var byeSpeaker = {};
    var speakWord = "Good Bye";
    byeSpeaker.speackWord = function speak(name) {
        console.log(speakWord + " " + name);
        document.getElementById("output").innerHTML += "<p>" + speakWord + " " + name + "</p>";
    }
    window.byeSpeaker = byeSpeaker;
})(window);