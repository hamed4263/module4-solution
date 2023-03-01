for (var i = 0; i <= (names.length - 1); i++) {

    if (names[i].charAt(0) == "J" || names[i].charAt(0) == "j") {


        byeSpeaker.speackWord(names[i]);
    } else {

        helloSpeaker.speackWord(names[i]);
    }

}