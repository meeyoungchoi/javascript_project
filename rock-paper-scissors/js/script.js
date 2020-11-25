while (true) {
    var userInput = prompt('가위, 바위, 보! , 종료: -1');

    if (userInput !== '가위' && userInput !== '바위' && userInput !== '보' && Number(userInput) !== -1) {
        alert('가위, 바위, 보 중 하나를 입력해야 합니다');
    } else {

        if (Number(userInput) == -1) {
            alert('게임종료');
            break;
        }

        var comInput;
        var rnd = Math.random();

        if (rnd < 0.33) {
            comInput = '가위';
        } else if (rnd < 0.66) {
            comInput = '바위';
        } else {
            comInput = '보';
        }

        console.log('컴퓨터의 패: ' + comInput);

        if (userInput == '가위') {
            if (comInput == '가위') {
                alert('컴퓨터: ' + comInput + ' , 나: ' + userInput + '  - 컴퓨터와 비겼습니다.');
            } else if (comInput == '바위') {
                alert('컴퓨터: ' + comInput + ' , 나: ' + userInput + '  - 컴퓨터가 이겼습니다.');
            } else {
                alert('컴퓨터: ' + comInput + ' , 나: ' + userInput + '  - 내가 이겼습니다.');
            }
        } else if (userInput == '바위') {
            if (comInput == '바위') {
                alert('컴퓨터: ' + comInput + ' , 나: ' + userInput + ' - 컴퓨터와 비겼습니다.');
            } else if (comInput == '가위') {
                alert('컴퓨터: ' + comInput + ' , 나: ' + userInput + ' - 내가 이겼습니다.');
            } else {
                alert('컴퓨터: ' + comInput + ' , 나: ' + userInput + ' - 컴퓨터가 이겼습니다');
            }
        } else {
            if (comInput == '보') {
                alert('컴퓨터: ' + comInput + ' , 나: ' + userInput + ' - 컴퓨터와 비겼습니다.');
            } else if (comInput == '가위') {
                alert('컴퓨터: ' + comInput + ' , 나: ' + userInput + ' - 컴퓨터가 이겼습니다.');
            } else {
                alert('컴퓨터: ' + comInput + ' , 나: ' + userInput + ' - 내가 이겼습니다.');
            }
        }

    }

    continue;

}

