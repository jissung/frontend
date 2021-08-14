# frontend

## 참고 

https://github.com/ - 개발 협업 도구 

https://codesandbox.io/ - 온라인상에서 코딩하고 관리하는 사이트 

https://www.w3schools.com/ - w3c 듀토리얼

## 클라이언트 서버 모델

클라이언트 -- 인터넷 -- 서버   
<img src="https://ko.wikipedia.org/wiki/%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8_%EC%84%9C%EB%B2%84_%EB%AA%A8%EB%8D%B8#/media/%ED%8C%8C%EC%9D%BC:Client-server-model.svg">


> 클라이언트 : 사용자가 사용하는 디바이스나 실행 소프트웨어를 의미한다.   (ex.스마트폰, PC, 웹 브라우저, application 등..) - 프론트 엔드

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
> - IP (Internet Protocol) : 숫자로 구성된 주소(ex. 192.168.0.1)
> - Domain Name : ex. www.naver.com / DNS (Domain Name Server)로 도메인 주소를 IP주소 변경한다.
> - ex) blog.naver.com/blog/12345 => URL 

> URL 종류 
> 절대(Absolute) URL
> 상대(Relative) URL 

### HTML File 경로


