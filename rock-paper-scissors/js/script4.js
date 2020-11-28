// 가위 버튼의 onclick 속서에 넣을수 있는 함수 만들기
var SCISSORS = '가위';
var ROCK = '바위';
var PAPER = '보';

//가위 버튼클릭 핸들러
function onScissorsClick() {
    var comInput;
    var rnd = Math.random();

    if (rnd < 0.33) {
        comInput = SCISSORS;
    } else if (rnd < 0.66) {
        comInput = ROCK;
    } else {
        comInput = PAPER;
    }

    if (comInput === SCISSORS) {
        alert('내 패: ' + SCISSORS + ' , 컴퓨터 패: ' + comInput  + ' - 비겼습니다.');
    } else if (comInput === ROCK) {
        alert('내 패: ' + SCISSORS + ' , 컴퓨터 패: ' + comInput  + ' - 컴퓨터 승!');
    } else {
        alert('내 패: ' + SCISSORS + ' , 컴퓨터 패: ' + comInput  + ' - 나 승!');
    }
}

//바위 버튼클릭 핸들러
function onRockClick() {
    var comInput;
    var rnd = Math.random();

    if (rnd < 0.33) {
        comInput = SCISSORS;
    } else if (rnd < 0.66) {
        comInput = ROCK;
    } else {
        comInput = PAPER;
    }

    if (comInput === ROCK) {
        alert('내 패: ' + ROCK + ' , 컴퓨터 패: ' + comInput  + ' - 비겼습니다.');
    } else if (comInput === PAPER) {
        alert('내 패: ' + ROCK + ' , 컴퓨터 패: ' + comInput  + ' - 컴퓨터 승!');
    } else {
        alert('내 패: ' + ROCK + ' , 컴퓨터 패: ' + comInput  + ' - 나 승!');
    }


}

//보 버튼클릭 핸들러
function onPaperClick() {
    var comInput;
    var rnd = Math.random();

    if (rnd < 0.33) {
        comInput = SCISSORS;
    } else if (rnd < 0.66) {
        comInput = ROCK;
    } else {
        comInput = PAPER;
    }

    if (comInput === PAPER) {
        alert('내 패: ' + PAPER + ' , 컴퓨터 패: ' + comInput  + ' - 비겼습니다.');
    } else if (comInput === SCISSORS) {
        alert('내 패: ' + PAPER + ' , 컴퓨터 패: ' + comInput  + ' - 컴퓨터 승!');
    } else {
        alert('내 패: ' + PAPER + ' , 컴퓨터 패: ' + comInput  + ' - 나 승!');
    }
    
}

