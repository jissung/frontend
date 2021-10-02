# frontend

## 참고

https://github.com/ - 개발 협업 도구

https://codesandbox.io/ - 온라인상에서 코딩하고 관리하는 사이트

https://www.w3schools.com/ - w3c 듀토리얼

## 클라이언트 서버 모델

클라이언트 -- 인터넷 -- 서버  
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Client-server-model.svg/1920px-Client-server-model.svg.png" />

> 클라이언트 : 사용자가 사용하는 디바이스나 실행 소프트웨어를 의미한다. (ex.스마트폰, PC, 웹 브라우저, application 등..) - 프론트 엔드

> 서버 : 서비스 제공자의 기기 또는 서버에 사용되는 소프트웨어를 의미한다. - 백엔드

## 프로그래밍 언어 해석기

> 인터프리터 : 동시통역 (php,jsp,asp,basic)
>
> 컴파일러 : 한번에 많은 양을 통역 (C, C++, java, C# ..)
>
> 렌더링 : 브라우저 클라이언트에서 소스 코드를 다운 받아 화면에 출력하는 것을 의미 (프론트 엔드에서 시각적인 개념이 포함되어 있는 단어로 렌더링이라고 표현함)

## HTML

### Introduction

https://www.w3schools.com/html/html_intro.asp

> 웹 페이지 구조 표시

> 웹 페이지 콘텐츠 표시
>
> - 텍스트 콘텐츠
> - 멀티미디어 콘텐츠 : 이미지, 비디오, 오디오 .. 등

### HTML Element

https://www.w3schools.com/html/html_elements.asp

`(backtick)

```
<tagname> Contents </tagname>

* 시작태그만 있는 경우 : Empty Element
```

> 포함관계(nested)

```
<html>
  <body>
    <h1>Heading</h1>
  </body>
</html>
```

> html-body-h1의 관계
>
> html : body와의 관계에서는 부모요소, h1과의 관계에서는 조상요소라고 한다.
>
> body : h1과의 관계에서는 부모요소, html과의 관계에서는 자식요소라고 한다.
>
> h1 : body와의 관계에서는 자식요소, html과의 관계에서는 자손요소라고 한다.

### HTML Attribute

https://www.w3schools.com/html/html_attributes.asp

### HTML Headings

https://www.w3schools.com/html/html_headings.asp

h1~h6 : 제목태그(h : heading)

### HTML Paragraph

https://www.w3schools.com/html/html_paragraphs.asp

### HTML Link

https://www.w3schools.com/html/html_links.asp

a 태그 : anchor(닻),이란 의미로 하이퍼링크를 연결해주는 태그이다.

- a 태그에서 href 속성(attribute)를 꼭 사용 해야한다.

사용예제

```
<a href="url">link text</a>
```

> URL (Uniform Resource Locator) : 파일식별자 (위치 표시), 가장 넓은 의미의 인터넷 주소를 말한다.
> 인터넷 주소
>
> - IP (Internet Protocol) : 숫자로 구성된 주소(ex. 192.168.0.1)
> - Domain Name : ex. www.naver.com / DNS (Domain Name Server)로 도메인 주소를 IP주소 변경한다.
> - ex) blog.naver.com/blog/12345 => URL

> URL 종류
> 절대(Absolute) URL
> 상대(Relative) URL

### HTML File 경로

https://www.w3schools.com/html/html_filepaths.asp

절대 vs 상대

- 경로 위치 표시 방식
- 경로 표시 기준의 변경 여부에 따른 것
- 절대 경로 방식
- ex) 대한민국 서울특별시 서초구 ~동 대호빌딩 801호
- ex) 도메인 주소부터 시작하는 경로 (도메인주소/상세경로 : https://www.naver.com/blog.image.jpg)
- 출발지 위치에 상관없이 항상 찾아갈 수 있도록 표시
-
- 상대 경로 방식
- ex) 강남역 11번 출구에서 3분 거리 대호빌딩
- 출발지 위치를 기준으로 표시 (상세경로 : /blog/image.jpg || image.jpg)
- 위치에 따라 사용되기 때문에 주소체계가 달라질 수 있다.

### HTML List

https://www.w3schools.com/html/html_lists.asp

> 중첩목록(Nested List) : 포함 관계로 되어 있는 목록

### HTML Table

https://www.w3schools.com/html/html_tables.asp

html table jenerator : https://www.tablesgenerator.com/html_tables

### HTML Images

https://www.w3schools.com/html/html_images.asp

> alt : alternative(변경, 대체)

### HTML Video

https://www.w3schools.com/html/html5_video.asp

### HTML Youtube

https://www.w3schools.com/html/html_youtube.asp

### HTML Block & Inline

https://www.w3schools.com/html/html_blocks.asp

> 포함관계
>
> - 블럭요소에는 다른 블럭요소, 인라인 요소, 콘텐츠 포함 가능
> - 인라인 요소 : 다른 인라인 요소, 콘텐츠 포함 가능, 블럭요소는 포함 불가능
> - 예외 : a - 인라인 요소이지만 블럭 요소를 포함 가능

### HTML ID & Class

https://www.w3schools.com/html/html_id.asp

https://www.w3schools.com/html/html_classes.asp

> ID attribute

> - id 속성으로 만들어지는 이름은 한 HTML 문서 내에서 고유해야 한다. (한번만 사용 가능-논리적 개념)
> - id는 한 대상의 HTML Element의 하나의 이름만 지정할 수 있다. (물리적 오류 발생함.)

> Class attribute

> - class로 붙여주는 이름은 한 HTML 문서 내에서 여러번 중복 사용이 가능하다.
> - class는 한 대상의 HTML Element의 여러개의 이름을 지정할 수 있다.

### CSS 상속

> 부모요소에 적용된 CSS속성이 자식요소에 적용되는 것을 상속이라고 한다.

### CSS Text

https://www.w3schools.com/css/css_text.asp

> - color
> - Aligment
> - Decoration
> - Transformation
> - Spacing

### CSS Font

https://www.w3schools.com/css/css_font.asp

> 웹에서 사용하는 폰트는 브라우저에서 랜더링 되기 때문에 기존에는 사용자 PC에 설치되어 있는 폰트를 사용하게 되는데 사용자 PC에 설치된 폰트를 찾지 않고 서버에 폰트를 저장해 사용하는 기술이 개발되었는데 그것을 웹 폰트 방식이라고 한다.

> 웹 폰트 서비스 (web font)
>
> - 구글 폰트(영문/한글) : https://fonts.google.com/
> - 눈누 폰트(한글) : https://noonnu.cc/

> font-faily
>
> - 항상 폰트 목록 끝에 기본 폰트 이름을 입력해야 된다.
> - 고딕 : sans-serif / 명조 : serif

> font size

> font style
>
> - italic

> font weight
>
> - 100, 200, 300 .... : 숫자로 표시

### BOX Model

https://www.w3schools.com/css/css_boxmodel.asp

> - content(width,height) : 콘텐츠의 너비 또는 높이
> - padding : 안쪽 여백
> - border : 테두리
> - margin : 바깥 여백

### width / height

> - 블럭 요소의 가로길이/세로길이를 적용 시
> - auto : 요소의 기본 특성을 따라 감 / defalut 값 : 적용하지 않은 상태와 같음
> - px : px 값으로 고정
> - % : 부모요소를 기본으로 특정 비율만큼 설정
> - 인라인 요소에 가로길이/세로길이는 적용되지 않음.

### padding

> - padding-top : / padding-right / padding-bottom / padding-left
> - padding : 1opx, 20px, 30px, 40px;
> - padding : 10px, 20px;
> - padding : 10px

### margin

<!-- 박스가 상하대칭 되어 있을때 그 사이 마진이 한쪽만 적용되는 현상을
마진겹침이라고 한다. 두 박스 모두 마진 적용하지 않고 한 쪽에만 마진을 적용한다. -->

### border

> border:1px solid red;
>
> border-top / border-right / border-bottom / border-left

### Background color

https://www.w3schools.com/css/css_background.asp

> background-color
>
> background-image:url()

### color 표현 방식

> RGB : Red Green Blue - 가산 혼합 (색을 섞을수록 밝음)
>
> - 스크린에서 color 표현할 때 사용한다.
>
> CMYK : Cyan Magenta Yellow Black - 감산 혼합 (색을 섞을수록 어두어짐)
>
> - 프린터에서 color 표현할 때 사용하는 방식이다.

> color 코드 값
>
> - 10진수 표현 : RGB(255, 255, 255)
> - 16진수 표현 : #1a9cf0

### box-sizing

> box-sizing:border-box -> width/height가 박스 전체 길이가 됨.

### CSS Flex

> 박스 레이아웃 구성에 관련된 CSS 속성
>
> flex를 적용
>
> dispaly:flex;
>
> 부모 요소에 적용하는 속성
>
> - flex-direction : flex 박스의 배치 방향
> - justify-content : 가로 방향 정렬
> - align-items : 세로방향 정렬
>
> 자식 요소에 적용하는 속성
>
> flex:1; : 빈 공간에 박스를 채움

### Responsive Web (반응형 웹)

> 반응형 웹
>
> - OSMU (One Source Multiuse)
> - 한 HTML 페이지에서 다양한 CSS를 통해 PC, Smart phone 레이아웃 구성을 표현
>
> - View port
>
> - Media Query :

    - break point : 레이아웃이 변경되는 시점
    - (320px ~ 640px:s.p) (641px ~ 1024px:t.b) (1025px ~ 1920px:p.c)
    - (320px ~ 799px:s.p) (800px ~q 1920px:p.c)

```
@midea screen and (max-width:1920px){
  -pc style css code -
}

@midea screen and (max-width:1024px){
  - tablet style css code -

}

@midea screen and (max-width:640px)
 - smart phone layour -
```

    - 해상도
      - smart phone : 320px ~ 640px
      - tablet : 768px ~ 1024px
      - PC : 1024px ~ 1920px

> - Fluid Layout (유동형 레이아웃)
> - % 단위를 활용해서 부모 요소의 크기가 변경될 때 자식요소의 크기도 같이 부드럽게 변하도록 하는 레이아웃

### Combinator Selector (조합 선택자)

> 2개 이상의 선택자를 조합해서 사용하는 형태

```
* 여러개 선택자 모두 동일한 css 적용하라.
.name1,.name2

* 여러개 선택자를 동시에 가지고 있는 경우
.name1.name2 : Elemnet가 class 이름을 name1과 name2를 동시에 가지고 있는 경우
div.name1 : div Element가 name1 class이름을 가지고 있는 경우
#name1.name2 : ID 이름이 name1이면서 클래스 이름이 name2인 경우
}

* 자손 요소 선택
.name1 .name2 : class 이름이 name1인 요소의 자손 요소중 class 이름이 name2인 요소를 선택

* 자식 요소 선택
.name1>name2 : class 이름이 name1인 요소의 자식 요소중 class이름이 .name2인 요소를 선택

```

### CSS Position

> 박스를 단독으로 좌표값을 이용해서 위치를 설정할 때 사용.
>
> - static
> - relative
> - absolute
> - fixed

> relative
>
> - 원래 위치의 자리를 그대로 유지하면서 원래 위치를 기준으로 좌표 이동을 할 수 있다.

> absolute
>
> - 원래 위치의 자리를 유지하지 않고 부모를 기준으로 좌표 이동을 할 수 있다.
> - 기본 : body를 기준
> - 부모 요소의 position 속성을 적용한 경우 : 인접한 부모요소를 기준

> fixed
>
> - absolute와 유사하다.
> - 위치 기준이 브라우저가 된다.
> - 스크롤 이동시에도 표시 됨.
> - sticky와 유사하지만 fixed는 지정된 브라우저 위치에 계속 붙어있는 반면, sticky는 기준점이 지나면
