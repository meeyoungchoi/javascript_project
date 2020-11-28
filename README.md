# javascript_project
자바스크립트 프론트엔드 프로젝트 가이드 복습

# 11월 23일
+ vscode 설치
+ 환경설정

> alert
+ 팝업창 띄우기

> document.write
+ 입력받은 문자열을 html의 body 태그안에 그대로 출력해준다
  
> console.log
+ 개발자도구 콘솔에 문자열이 출력된다

> 변수 선언
+ var
+ 변수선언을 위한 키워드이다


# 11월 24일
+ for문
  > for문을 사용하여 숫자의 개수만큼 입력받아서 평균구하기
+ while문
    > while문을 사용하여 숫자의 개수만큼 입력받아서 평균구하기

+ Number()
  > 자바스크립트는 숫자를 문자로 인식하기 때문에
  > 숫자간 연산을 할때는 형변환을 해줘야 한다
  > Number 메서드를 사용하여 형변환을 해줄수 있다

  # 11월 25일
  + 조건문(if) - 가위 바위 보 게임 (rock-paper-scissors / script.js)
  > 조건문을 사용하여 가위 바위 보 게임 만들기
  
  > 컴퓨터는 랜덤으로 패를 낼수 있다
  
  > 랜덤 값을 출력하기 위해 Math.random() 를 사용하였다
  
  > 사용자로 부터 가위 바위 보 중 값을 입력받는다
  
  > 사용자가 입력한 값이 올바른지 조건문을 통해 유효성을 검사하였다
  
  > 컴퓨터가 낸 패와 사용자가 낸 패를 비교하여 게임 결과 도출

  + 가위 바위 보 게임 로직 수정 (rock-paper-scissors /script2.js)
  > 사용자와 컴퓨터가 내는 패를 변수로 선언하고 상수화 시켰다

  > 상수화의 장점: 가위 바위 보 변수는 변하지 않는값이기 때문에 코드를 더 효율적으로 작성 가능

  + 가위 바위 보 게임 로직 추가(rock-paper-scissors / script2.js)
  > 게임종료시 내가 이긴 횟수와 컴퓨터가 이긴횟수 출력후 게임 종료

  + 가위 바위 보 게임 로직 변경(rock-paper-scissors / script3.js)
  > if문을 switch 문으로 변경


# 11월 26일
+ 가위바위보 게임 버튼입히기
> alert창을 통해 값을 입력받았던것을 버튼을 클릭하는 것으로 수정했다  
> 참고 
> (rock-paper-scissors/js/scirpt4.js)
> 
> (rock-papaer-scissors/index2.html)
> 
> 버튼이 눌릴때마다 메서드가 실행되어 해당 메서드안에서 컴퓨터의 패가 결정되어 승부를 내게된다
>
> 하지만 가위 바위 보 버튼마다 전부 메서드가 필요하고 컴퓨터 패가 결정되어 승부를 내는 코드는 메서드마다 중복이 된다
> 
> 따라서 버튼이 눌렸을때 공통적으로 실행될 메서드 하나만을 만들었다
>
>해당 메서드의 파라미터로 사용자가 누른버튼의 값을 넘긴다
> 컴퓨터의 패는 해당 메서드 안에서 결정된다
> 컴퓨터와 사용자의 가위 바위 보 결과도 메서드 하나에서 전부 처리한다
>참고  (rock-paper-scissors/js/scirpt5.js)

# 11월 28일
+ 로또번호 생성기 만들기
> do while 문을 활용하여 겹치는 값이 있는경우 while 문안에서 검사하여 해당 숫자를 다시 뽑도록 구현
> 
> 참고 (lotto/js/script.js)
> 
> 문제점
> 
> 뽑아야 하는 숫자가 많아질수록 while문안에서검사해야 하는 조건식도 길어지게 된다

+ 로또번호 생성기를 배열을 사용해서 만든다
> 자바스크립트에서는 []를 사용하여 배열을 선언한다
> 배열에 값을 넣을때는 push를 사용한다
> 배열에서 값을 삭제할때는 splice를 사용한다
>
> 1부터 45까지 숫자를 배열에 저장한다
> 0부터 44까지 숫자중 랜덤으로 배열의 인덱스를 뽑는다
> 배열에서 해당 인덱스 위치에 저장된 값을 뽑는다
> 뽑은 인덱스에 저장된 값은 splice 메서드를 통해 배열에서 삭제한다
> 삭제를 하는 이유는 중복되는 값이 뽑히지 않게 하기 위함이다
> 뽑힌 로또번호에 style적용 참고(lotto/css/style.css)
> 참고 (lotto/js/script2.js)
>
+ 로또 번호 숫자 정렬하기
> sort 메서드 사용
> sort 메서드의 파라미터로 비교함수 compare를 전달한다
> sort메서드가 자동으로 비교함수 compare를 실행해준다



