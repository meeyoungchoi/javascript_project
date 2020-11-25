//switch 문을 사용하여 가위 바위 보 게임 작성


var myWin = 0;
var comWin = 0;
var draw = 0;
while (true) {
    var SCISSORS = '가위';
    var ROCK = '바위';
    var PAPER = '보';
    var STATUS = '종료';


    var myInput = prompt('가위, 바위, 보 , 종료');

    if (myInput !== SCISSORS && myInput !== ROCK && myInput !== PAPER && myInput !== STATUS) {
        alert('가위, 바위, 보, 종료 중에서 입력하세요');
    } else {
        if (myInput === STATUS) {
            alert('내가 이긴횟수: ' +  myWin + '회 , 컴퓨터가 이긴횟수: ' +  comWin + '회 , 비긴횟수: ' + draw + '회  - 게임 종료');
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

        switch(myInput) {
            case SCISSORS:
                switch(comInput) {
                    case SCISSORS:
                        alert('내 패: ' + myInput + ', 컴퓨터 패: ' + comInput + ' - 비겼습니다.');
                        draw += 1;
                        break;
                    case PAPER:
                        alert('내 패: ' + myInput + ', 컴퓨터 패: ' + comInput + ' - 컴퓨터 승');
                        comWin += 1;
                        break; 
                    default:
                        alert('내 패: ' + myInput + ', 컴퓨터 패: ' + comInput + ' - 나 승');
                        myWin += 1;
                        break;   
                        
                }
                break;

            case ROCK: 
                switch(comInput) {
                    case ROCK:
                        alert('내 패: ' + myInput + ', 컴퓨터 패: ' + comInput + ' - 비겼습니다.');
                        draw += 1;
                        break;
                    case PAPER:
                        alert('내 패: ' + myInput + ', 컴퓨터 패: ' + comInput + ' - 컴퓨터 승');
                        comWin += 1;
                        break; 
                    case SCISSORS:
                        alert('내 패: ' + myInput + ', 컴퓨터 패: ' + comInput + ' - 나 승');
                        myWin += 1;
                        break;

                }
                break;

            default:
                switch(comInput) {
                    case PAPER:
                        alert('내 패: ' + myInput + ', 컴퓨터 패: ' + comInput + ' - 비겼습니다.');
                        draw += 1;
                        break;
                    case SCISSORS:
                        alert('내 패: ' + myInput + ', 컴퓨터 패: ' + comInput + ' - 컴퓨터 승');
                        comWin += 1;
                        break; 
                    case ROCK:
                        alert('내 패: ' + myInput + ', 컴퓨터 패: ' + comInput + ' - 나 승');
                        myWin += 1;
                        break;  


                }
                break;

        }




    }

    continue;

}

