const question = [
  "I am a Chocolate!! If you eat half of me, you will get a pet animal. Can you guess my name?",
  "If Barium is Ba & Sodium is Na, what 1 compund of Barium and 2 compound of Sodium will be?",
  "Tell a phone brand name, which looks like you are calling your Mom!!",
  "Tell a fruit name that, where a man comes and than go?",
  "I add a lot flavors to your food and have many layers. If you come close to me I bring tears!",
];
// const question = [
//   "I am a Chocolate!! If you eat half of me, you will get a pet animal. Can you guess my name?",
// ];
const answer = ["a2l0a2F0", "YmFuYW5h", "bWk=", "bWFuZ28=", "b25pb24="];
class QuizMaster {
  constructor() {
    if (QuizMaster.counter === undefined) {
      QuizMaster.counter = 0;
      QuizMaster.progressIncrement = 1 / question.length;
    }
    document.getElementById("question").innerHTML = question[0];
  }

  checkAnswer(e) {
    if (window.btoa(e.toLowerCase()) === answer[QuizMaster.counter]) {
      console.log(QuizMaster.progressIncrement * (QuizMaster.counter + 1));
      document
        .getElementById("progress")
        .setAttribute(
          "value",
          QuizMaster.progressIncrement * (QuizMaster.counter + 1)
        );
      QuizMaster.counter++;
      if (QuizMaster.counter < question.length) {
        document.getElementById("question").innerHTML =
          question[QuizMaster.counter];
        document.getElementById("answer").value = "";
      } else {
        var quiz_board = document.getElementById("quiz_board");
        quiz_board.classList.add("end");
        document.getElementById("answer_div").style.display = "none";
        document.getElementById("question").style.display = "none";
      }
    } else {
    }
  }
}
