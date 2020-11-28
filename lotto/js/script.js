//뽑힌 숫자들을 넣을 변수를 준비한다
var num1, num2, num3, num4, num5, num6;

//소수점을 버리기 위해 Math.floor 메서드를 사용한다
num1 = Math.floor(Math.random() * 45 + 1);

do {
    num2 = Math.floor(Math.random() * 45 + 1);
    num3 = Math.floor(Math.random() * 45 + 1);
    num4 = Math.floor(Math.random() * 45 + 1);
    num5 = Math.floor(Math.random() * 45 + 1);
    num6 = Math.floor(Math.random() * 45 + 1);
} while (num2 === num1 || num3 === num1 || num3 === num2 || num4 === num3 || num4 === num2 || num4 === num1
    || num5 === num4 || num5 === num3 || num5 === num2 || num5 === num1 || num6 === num5 || num6 === num4 || 
    num6 === num3 || num6 === num2 || num6 === num1) {
    console.log('num1: ' + num1);
    num2 = Math.floor(Math.random() * 45 + 1);
    console.log('num2: ' + num2);
    num3 = Math.floor(Math.random() * 45 + 1);
    console.log('num3: ' + num3);
    num4 = Math.floor(Math.random() * 45 + 1);
    console.log('num4: ' + num4);
    num5 = Math.floor(Math.random() * 45 + 1);
    console.log('num5: ' + num5);
    num6 = Math.floor(Math.random() * 45 + 1);
    console.log('num6: ' + num6);
}

