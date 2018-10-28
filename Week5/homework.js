console.log("Tinsley 10/1/2018");



const question = [
  ["yellow", "yellow is for warmth and inspiration to make people smile."],
  ["red", "red is a fading sunset on the horizon. "],
  ["blue", "blue smells like sea water;blue sound like the sound of waves"],
  ["pink", "What is pink? A rose is pink; By the fountain’s brink."],
  ["purple", "What is violet? Clouds are violet; In the summer twilight. "],
  ["black", "What is black? black is the new sexy"],
  ["green", "What is green? The grass is green,With small flowers between."],
  ["orange", "What is orange? Why, an orange,Just an orange!"],
  ["white", "What is white? A swan is white;Sailing in the light."],
 ];

function checkAnswer(input) {
    var input = document.getElementById("color").value.toLowerCase();
    for (let omg of question) {
        if (omg[0] == input) {
            console.log(input);
            return omg[1];
        }
    }
}



function showAnswer() {
    var undef = "I'm not familiar with this color";
    var showfeedback = checkAnswer();
    if (showfeedback === undefined){
        showfeedback=undef;
    }
    document.getElementById("answer").innerHTML = showfeedback;
    

}
