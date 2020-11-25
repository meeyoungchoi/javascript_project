//코드 개선
//가위 바위 보 변수를 각각 만들어서 상수로 치환
//상수: 절대 바뀌지 않는 값

var myWin = 0;
var comWin = 0;
while (true) {
    var SCISSORS = '가위';
    var ROCK = '바위';
    var PAPER = '보';


    var myInput = prompt('가위, 바위, 보 , 종료');

    if (myInput !== SCISSORS && myInput !== ROCK && myInput !== PAPER && myInput !== '종료') {
        alert('가위, 바위, 보, 종료 중에서 입력하세요');
    } else {
        if (myInput === '종료') {
            alert('내가 이긴횟수: ' +  myWin + '회 , 컴퓨터가 이긴횟수: ' +  comWin + '회 게임 종료');
            break;
        }


        var comInput;

        var rnd = Math.random();

        if (rnd <= 0.33) {
            comInput = SCISSORS;
        } else if (rnd <= 0.66) {
            comInput = ROCK;
        } else {
            comInput = PAPER;
        }

        if (myInput === SCISSORS) {
            if (comInput === SCISSORS) {
                alert('컴퓨터 패: ' + comInput + ' , 내 패: ' + myInput + ' 결과: 비겼습니다');
            } else if (comInput === ROCK) {
                alert('컴퓨터 패: ' + comInput + ' , 내 패: ' + myInput + ' 결과: 컴퓨터 승!');
                comWin += 1;
            } else {
                alert('컴퓨터 패: ' + comInput + ' , 내 패: ' + myInput + ' 결과: 나 승!');
                myWin += 1;
            }
        } else if (myInput === ROCK) {
            if (comInput === ROCK) {
                alert('컴퓨터 패: ' + comInput + ' , 내 패: ' + myInput + ' 결과: 비겼습니다');
            } else if (comInput === PAPER) {
                alert('컴퓨터 패: ' + comInput + ' , 내 패: ' + myInput + ' 결과: 컴퓨터 승!');
                comWin += 1;
            } else {
                alert('컴퓨터 패: ' + comInput + ' , 내 패: ' + myInput + ' 결과: 나 승!');
                myWin += 1;
            }
        } else if (myInput === PAPER) {
            if (myInput === PAPER) {
                alert('컴퓨터 패: ' + comInput + ' , 내 패: ' + myInput + ' 결과: 비겼습니다');
            } else if (comInput === SCISSORS) {
                alert('컴퓨터 패: ' + comInput + ' , 내 패: ' + myInput + ' 결과: 컴퓨터 승!');
                comWin += 1;
            } else {
                alert('컴퓨터 패: ' + comInput + ' , 내 패: ' + myInput + ' 결과: 나 승!');
                myWin += 1;
            }
        }




    }

    continue;

}

