# Javascript

## Javascript(ECMA Script) 버전

- 2009 : ES5 (java script)
- 2015 : ES6 (major update - 패러다임이 확 바뀐) , FrontEnd framework 연결
- 2016 : 이때부터 minor update,
- 2017 :
- 2018 :

## ES6 버전 특징

- 변수 scope 개념 확장
- class 개념 도입
- 함수 선언 형식 / 개념 추가
- 프론트엔드 프레임 워크/라이브러리에 사용

## 프로그래밍 언어 공부

- 프로그래밍 언어 문법
- 프로그래밍 언어 활용
  - 알고리즘
  - 로직
  - API

## Javascript 문법

- 변수(데이터 타입), 연산자

- 명령문(구문)

- 함수

- 배열, 객체, Class

## Javascript 활용

- 이벤트

- HTML, CSS와의 관계

## Javascript 변수 : var

https://www.w3schools.com/js/js_variables.asp

- 변수를 정의/선언할때 사용하는 키워드(예약어)
- ES5 버전에서 사용
- 값을 초기화한 후 자유롭게 변경 가능

```
var a; // 변수 하나씩 선언
var b;

var a, b; //한번에 여러 변수를 선언할 수 있다.
```

## Javascript 변수 : let

https://www.w3schools.com/js/js_let.asp

- 변수를 정의/선언할때 사용하는 키워드(예약어)
- var과 같은 성질

## Javascript 변수 : const(상수 변수)

- constant : 상수 (항상 같은 숫자)
- 한번 값을 초기화 하면 변경할 수 없다.

> ES5 버전에서는 일반 변수 var만 존재, ES6 일반변수 let, 상수변수 const가 추가됨.

### 데이터 타입

- 숫자
  - 정수
  - 실수
- 문자
  - 문자(character)
  - 문자열(string)
- 논리
  - 참(true)
  - 거짓(false)

> 자바 스크립트는 숫자, 문자, 논리 구분외에 데이터 타입을 구분하지 않는다.
> 자바 스크립트는 숫자, 문자, 논리 데이터를 구분하는 변수 선언 키워드가 없다.
> 데이터 타입을 구분해주는 자바스크립트 : 타입 스크립트

## Javascript 연산자

https://www.w3schools.com/js/js_operators.asp

### 산술 연산자

- +, -, \*, /, %(나머지)

### 대입/할당 연산자 (Assignment Operators)

- = : 대입 연산자

```

b = a + 1;

a = a + 2; // 여러번 실행 시 2씩 증가하는 식

a += 2; // 위 식의 축약 표현

a = a + 1; // a가 1씩 증가 (카운트)

a +=1; // 위 식의 축약 표현

a++; // 카운트의 의미가 있기때문에 위 축약 표현의 또 다른 표현 방식으로 사용

> a = a - 1; // 1식 증감
> a -= 1;
> a--;

```

> ++, -- 증감 연산자

### 연결 연산자

```
"a" + "b" => ab

"a" + 1 => a1

"1" + 1 => 11

console.log("총합계 : "+sum);
```

### 따옴표 사용 방법

```
element.innerHTML = "<img = src=\"picture.jpg\">"
// 따옴표를 중복으로 사용 시 안에 따옴표 앞에 \ 붙여야 함.

element.innerHTML = '<img = src="picture.jpg">'
// 단, 따옴표를 섞어 사용 시 \ 안붙여도 됨.
```

### 비교 연산자 (Comparison Operators)

- ==, === : 데이터 타입 동시에 비교 여부
- 비교 연산의 결과는 논리 데이터가 출력 된다. (true, false)

### 논리 연산자 (Logical Operators)

- 여러개의 비교식을 연결해서 연산할 때 사용 하는것.
- 논리 데이터를 연산할 때 사용하는 것.

> &&(and) : &&로 연결되는 비교식 또는 논리 데이터가 모두 참일 때 전체가 참

```
true && true => true
true && false => false
3<5 && 10<12 => true

```

| : pipe line

> ||(or) : ||로 연결되는 비교식 또는 논리데이터가 하나라도 참이면 전체가 참

```
true || true => true
true || false => true
3<5 || 10>12 => true

```

## 명령문/구문 (Syntax)

- 프로그램 실행 흐름을 제어해주는 역할을 한다.

### 조건문 / 분기문

> if 구문

```
if(conditions){
  // 코드 블럭
}

if(conditions){
  // 코드 블럭1
}else{
  // 코드 블럭2
}

if(conditions 1){
  // 코드 블럭1
}else if (condition2){
  // 코드 블럭2
}else{
  // 코드 블럭3
}
```

> conditions 식의 결과가 true이면 실행 코드 블럭을 실행하고 false이면 실행하지 않는다.
>
> conditions : 결과가 true/false가 나오는 식
>
> 숫자를 논리 데이터로 인식
>
> - 0 : false
>
> - 그 외의 정수 : true

> if 사용법
>
> - else if(){} : 필요한 개수 만큼 사용이 가능 하다.
> - else : 맨 마지막 부분에 사용

> switch 구문
> https://www.w3schools.com/js/js_switch.asp
>
> expressions식의 결과에 따라 여러 갈래로 분기
>
> expressions : 결과는 숫자, 문자의 형태

```
switch(expressions){
  case '결과값1':
    코드 블럭1;
    break;

  case '결과값2':
    코드 블럭2;
    break;

  case '결과값3':
    코드 블럭3;
    break;

  default:
    코드 블럭4;
}
```

### 반복문

> for loop
> https://www.w3schools.com/js/js_loop_for.asp
>
> - 특정 횟수 만큼 반복 실행

## 함수(Function)

- 특정한 기능을 실행(독립적으로 실행)할 수 있는 여러 코드를 묶어 놓은 블럭.
- 선언(declaration) : 함수 정의(definition)
- 호출(call) : 함수를 실행

## 배열, 객체, Class

- 데이터, 함수의 집합(자바 스크립트는 함수도 값으로 사용.)

### 배열(Array)
