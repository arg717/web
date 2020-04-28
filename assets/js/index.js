// JavaScript Document

$(document).ready(function () {
    //start test
    var dt = new Date();
    console.log(dt);
    $("#submitTxtArea").click(function () {
        // makes array
        var txtArea = document.getElementById("txtArea").value;
        var splitTxt = txtArea.split(" ");
        console.log(splitTxt);
        document.getElementById("word").innerHTML = splitTxt[0];
        // make timer
        var interval = 1000; // ms
        var expected = Date.now() + interval;
        setTimeout(step, interval);
        function step() {
            var dt = Date.now() - expected; // the drift (positive for overshooting)
            if (dt > interval) {
                // something really bad happened. Maybe the browser (tab) was inactive?
                // possibly special handling to avoid futile "catch up" run
            }
            document.getElementById("timer").innerHTML = expected;
            expected += interval;
            setTimeout(step, Math.max(0, interval - dt)); // take into account drift
        }
        // on user space validator
        var b = 0;
        $("#player").keydown(function () {
            console.log(event);
            var enterKey;
            event.keyCode === 32 ? enterKey = true : enterKey = false; // enter press
            var player = document.getElementById("player");
            if (enterKey === true && player.value === " " + splitTxt[b] || player.value === splitTxt[b]) {
                b++;
                document.getElementById("word").innerHTML = splitTxt[b];
                player.value = player.defaultValue;

            } else {
                console.log("error");
            }

        });
    });
});


////Error Log: 
//
//enters in textarea get log for typing / not typeable
//apostrophes and quotes mess up sometimes next word getting
//
////still to do: 
//
//timer
//wpm 1 second = 60wpm 1 milisecond = 120wpm
//score
//
////daydream idea:
//
//full fledged website = most recent articles/blogs around the internet updated daily for typing digestion 
//complex; get site, read entire site and type along


//wpm equation
//make var date 
//
//all characters typed 
//divided by 5 // five characters make a word
//get var by the minute divide by minutes it took to get type that
//
