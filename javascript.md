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

## 변수 scope(접근 가능 범위)

> Global Scope (전역 범위)
>
> Function Scope (함수지역 범위)
>
> Block Scope (블럭지역 범위)

> var(ES5) 키워드는 Block Scope 개념이 적용되지 않고 전역 변수처럼 인식 됨.

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

https://www.w3schools.com/js/js_function_definition.asp

- 특정한 기능을 실행(독립적으로 실행)할 수 있는 여러 코드를 묶어 놓은 블럭.
- 선언(declaration) : 함수 정의(definition)
- 호출(call) : 함수를 실행

## 배열, 객체, Class

https://www.w3schools.com/js/js_arrays.asp

- 데이터, 함수의 집합(자바 스크립트는 함수도 값으로 사용.)

### 배열(Array)

> 배열 데이터가 메모리에 생성되는 구조
>
> - 일반 변수는 선언이 되었을 때 메모리에 값이 직접 할당되는 형태이고, 배열 변수는 메모리에 배열 데이터가 저장된 곳의 주소값이 할당된 형태
> - 배열 변수가 const로 선언되었을 때 각 원소들의 변경에는 영향을 미치지 않고, 배열 자체가 변경될 때는 영향을 미치기 때문에 변경할 수 없음.

### 객체(Objerct)

> 프로그래밍상의 데이터를 객체라는 개념으로 대상화시키는 것.
>
> 객체
>
> - Property
>   - 객체가 가지고 있는 속성, 특성
> - Method(함수)
>
>   - 객체의 기능 또는 동작
>
> - 객체 데이터는 name:value 한 쌍으로 구성됨.
>
>   - name:value 형태는 key:value 형태로도 이야기 함.
>
> - 객체 method에서 this 키워드를 사용하면 method를 소유하고 있는(포함하는)
>   객체를 가리킨다.

> 내장 객체
>
> - js에서 기본으로 가지고 있는 객체
> - Araay , Date, Math

### Class

https://www.w3schools.com/js/js_classes.asp

> 객체를 만들어주는 설계도
> 객체 데이터를 여러개 생성할 수 있도록 하는 설계도
>
> new 키워드를 사용하여 객체 데이터를 생성

## Javascript 활용

### JS Event

https://www.w3schools.com/js/js_events.asp

> Event는 HTML 문서내의 상태 변화에 따른 발생되는 신호를 이벤트라고 한다.
> Event가 발생하면 Event를 감지하고 발생된 신호에 맞는 처리 또는 기능을 만들어야 함.

> Event 종류
>
> Mouse Event
>
> - Click, mouse over, scroll

> keyboard Event
>
> - key down(press), change
>
> focus
>
> 자동으로 발생되는 이벤트
>
> load

### JS Event Handler/Listener

```
elementNode.addEventListener(이벤트, 함수);
```

> 함수를 따로 정의해서 매개변수로 넣어주는 경우 함수 이름만 넣어줌 (괄호 생략)
>
> 함수를 따로 정의하지 않고 익명함수로 직접 넣어주는 경우도 있음.

### JS Form

https://www.w3schools.com/html/html_form_input_types.asp
https://www.w3schools.com/html/html_form_elements.asp

> Form 요소는 서버 측에 데이터를 전달할 때 사용자의 입력을 받을 수 있는 요소

```
<input type="text" /> // text 입력할 수 있는 창
<input type="password" />
<input type="radio" />

<select>
  <option>HTML</option>
  <option>CSS</option> // option 태그를 활용해서 항목 만들기
</select>

<button type="button">save</button> // 버튼 생성

```

> input 버튼과 button은 기능상의 차이는 없다.
>
> HTML 요소 구성의 차이
>
> - input은 빈 요소이고 button은 시작/종료 태그로 구성됨
> - input 버튼은 컨텐츠 구성 시 value attribute를 사용해야 하기 때문에 제약이 있다.
> - button은 컨텐츠 구성 시 제약이 없다.
> - 시작/종료 태그로 된 가상 요소 이미지를 넣을 수 있음.
> - 빈 요소에는 가상 요소를 사용 할 수 없다. ( 영역을 지정해 줄 수 없기 때문 )

### JS 작성 방식

> HTML, CSS와 Javascript가 같이 사용될 때 3가지가 제대로 적용되기 위한 작성
>
> - External : js파일을 따로 생성 (외부 파일)
> - Internal : HTML 문서내 script태그를 사용해 코드를 작성 하는 방식.
> - InLine : HTML Element에 javascript 코드를 직접 작성하는 경우.

> External, Internal 방식으로 코딩하는 경우 Javascript의 로딩 시점은 HTML요소가 모두 로딩(랜더링)된 이후이어야 함.
>
> script 태그에 defer attribute를 사용하면 script 태그 위치에 상관없이 HTML이 모두 로딩된 이후에 코드를 실행 할 수 있다.
> defer attirbute는 외부 파일을 불러올때만 적용이 가능하다.

```
 - External

 <script src="function.js"></script>

 - Internal

<script>
  console.log(123);
</script>

 - Inline
 <button type="button" onclick="show();" >버튼</button>
```

### JS DOM

https://www.w3schools.com/js/js_htmldom.asp

> DOM : Document Object Model
>
> - HTML 요소들이 객체로 생성된 것.
> - javascript에서 HTML 요소들을 제어하기 위해서 사용한다.

### JS DOM Access

```
document.getElementById('id');
document.getElementByTagName('tag');
document.getElementByClassName('class');

```

> jQuery
>
> - javascript에서 만들어 놓은 라이브러리
> - 장점 : DOM요소에 접근할때 심플하게 사용 가능하다.

```
$('#id')
$('tag')
$('.class')
```

> HTML5

```
document.querySlector('#id');
document.querySlector('tag');
document.querySlector('.class');

document.querySlectorAll('.class');
<!-- tag, class일때 사용 -->

```

### Create / Read / Update / Delete

> Create

```
//HTML 요소 생성
document.createElement()

//Text 생성
document.createTextNode()

// 부모요소에 자식 요소를 추가
parentNode.appendChild(childNode);

// 해당요소에 클래스 이름 추가
elementNode.classList.add()

// input type text 요소의 값을 저장하고 있는 property
inputNode.value

```
