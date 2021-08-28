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

> 영역의 특성

>  - 블럭요소 : 가로길이 - 부모요소에 채워짐 / 세로길이 - 자식요소에 맞춰짐
>  - 인라인 요소 : 가로길이와 세로길이 모두 자식요소에 맞춰짐.

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
> - 데이터와 표시하는 것과 관련해서 많이 사용한다. 

> Class attribute

> - class로 붙여주는 이름은 한 HTML 문서 내에서 여러번 중복 사용이 가능하다.
> - class는 한 대상의 HTML Element의 여러개의 이름을 지정할 수 있다. (이름 사용에 유연하다.)




