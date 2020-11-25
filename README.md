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
