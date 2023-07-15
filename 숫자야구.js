function generateAnswer() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var answer = [];
  
    for (var i = 0; i < 3; i++) {
      var randomIndex = Math.floor(Math.random() * numbers.length);
      var digit = numbers[randomIndex];
      numbers[randomIndex] = numbers[numbers.length - 1];
      numbers.pop();
      answer.push(digit);
    }
  
    return answer;
  }
  
  function playGame() {
    var answer = generateAnswer();
    var attempts = 0;
  
    function checkGuess() {
      var guess = readline("세 자리 숫자를 입력하세요:");
      var guessArray = guess.split("").map(Number);
  
      var strike = 0;
      var ball = 0;
  
      for (var i = 0; i < 3; i++) {
        if (guessArray[i] === answer[i]) {
          strike++;
        } else if (answer.includes(guessArray[i])) {
          ball++;
        }
      }
  
      attempts++;
      console.log("입력:", guess);
      console.log("스트라이크:", strike);
      console.log("볼:", ball);
  
      if (strike === 3) {
        console.log("축하합니다! 정답을 맞추셨습니다.");
        console.log("시도 횟수:", attempts);
        return;
      }
  
      checkGuess();
    }
  
    checkGuess();
  }
  
  playGame();
  