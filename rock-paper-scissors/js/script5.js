//버튼을 클릭했을때 메서드안에 승리를 판단하는 부분이 중복되기 때문에 따로 메서드로 분리할 필요가 있다
var SCISSORS = '가위';
var ROCK = '바위';
var PAPER = '보';

// 어떤 버튼을 클릭하더라도 이 함수가 실행되게 한다
function onButtonClick(userInput) {//userInput: 사용자가 선택한 패를 넘겨 받을수 있도록 한다
    
    console.log('사용자의 패: ' + userInput);//사용자의 패가 잘넘어왔는지 출력
    var comInput;
    var rnd = Math.random();

    if (rnd < 0.33) {
        comInput = SCISSORS;
    } else if (rnd < 0.66) {
        comInput = ROCK;
    } else {
        comInput = PAPER;
    }

    var result = '내 패: ' + userInput + ', 컴퓨터 패: ' + comInput;

    if (userInput === SCISSORS) {
        if (comInput === SCISSORS) {
            result += ' - 비겼습니다.';
        } else if (comInput === ROCK) {
            result += ' - 컴퓨터 승!';
        } else {
            result += ' - 나 승!';
        }
    } else if (userInput === ROCK) {
        if (comInput === ROCK) {
            result += ' - 비겼습니다.';
        } else if (comInput === PAPER) {
            result += ' - 컴퓨터 승!';
        } else {
            result += ' - 나 승!';
        }
    } else {
        if (comInput === PAPER) {
            result += ' - 비겼습니다.';
        } else if (comInput === SCISSORS) {
            result  += ' - 컴퓨터 승!';
        } else {
            result  += ' - 나 승!';
        }
    }


    alert(result);

}