---
name: BlogPost
path: /blog/mobile-wedding-invitation
date: 2020-10-30T12:00:00.000Z
title: github 페이지로 모바일 청첩장 만들기
thumbnail: /assets/2020-10-30-mobile-wedding-invitation/_thumbnail.png
metaDescription: 결혼식의 주인공은 신부라고들 하지만 이 모바일 청첩장에서 만큼은 아빠의 계좌 번호가 주인공이 아닐까 싶습니다.
---

흔히 볼 수 있는 모바일 청첩장들은 미니멀리스트인 저에게 맘에 안드는 구석이 많습니다.

- 불필요한 정보가 많이 담겨 있고
- '신랑/신부에게 연락하기' 같은 이상한 기능이 들어 있기도 하고
- 노래가 나오기도 합니다. (실제로 이 기능 때문에 많은 친구들이 불만을 토로했습니다.)

이런 이유들로 언젠가 결혼을 하게 된다면 직접 모바일 청첩장을 만들어 보고 싶었습니다.<br />
그러던 저의 결혼식이 한 달 앞으로 다가왔고 요새는 웨딩 촬영을 하면 모바일 청첩장도 패키지로 만들어 준다는 사실도 알게 되었습니다...😭

### 😱(말을 잇지 못하는...)

![입틀막](/assets/2020-10-30-mobile-wedding-invitation/1.png)

업체를 통해서 전달 받은 모바일 청첩장은 충격과 공포였습니다.

- 노래가 나와요... 심지어 휴대폰 무음 모드에서도 나옵니다.
- favicon 도 인증서도 없는 불법 웹사이트 같은 느낌... 요청을 주고 받지는 않아 다행이지만 '주의 요함' 이라는 단어가 모바일 청첩장에는 없었다면 더 좋았을 것 같네요.

  ![no-favicon-ssl](/assets/2020-10-30-mobile-wedding-invitation/2.png)

- URL 도 실망시키지 않습니다. 초등학교 저학년 때 이런 아이디를 많이 쓰곤 했었는데...

  ![no-favicon-ssl](/assets/2020-10-30-mobile-wedding-invitation/3.png)

- 소스를 살펴보니 구글 검색 엔진 최적화도 되어 있어요. 왜죠?..

하지만 저는 바쁘디 바쁜 현대인이기 때문에 그냥 이 청첩장을 쓰기로 합니다. 노래 나오는 거 말고는 크게 창피하진 않더라구요.

### 고객 (a.k.a. 엄마) 의 기능 추가 요청

이런저런 이유로 결혼식을 남자친구의 고향인 전주에서 올리게 되었습니다. 하지만 코로나 사태로 인해 제 쪽 하객 분들 (및 부모님의 수금 대상들) 의 참가가 어렵게 되자 부모님은 사전 피로연을 열기로 결정합니다.

모바일 청첩장을 받은 엄마에게 전화가 왔습니다.

> "사전 피로연 얘기도 모바일 청첩장에 넣을 수 있나?"

두근두근.. 저의 실력을 보여줄 때가 되었습니다. 읽던 책을 덮고 당장 컴퓨터 앞에 앉았습니다. 검색해보니 이미 많은 개발자 분들이 직접 모바일 청첩장을 만들고 계셨습니다. 여러 개발자 분들의 모바일 청첩장을 참고하여 github 페이지와 bootstrap 을 사용해서 사전 피로연 청첩장을 만들기로 했습니다.

### 어떻게 만들어 볼까 🤔

bootstrap 을 쓰기로 한 가장 큰 이유는 반응형으로 만들기 위함이므로 화면 width 가 768 px 이하인 경우와 768 px 보다 큰 경우로 나눠서 대충 레이아웃을 구상해보았습니다.

![layout](/assets/2020-10-30-mobile-wedding-invitation/4.png)

웨딩 촬영 결과물이 잘 나와서 대충 사진 몇 개랑 사진 피로연 정보만 넣어도 그럴 듯해 보였습니다.

### 고객 (a.k.a. 엄마) 의 기능 추가 요청 2

> "처음 꺼보다 글씨도 잘 보이고 조용한기 좋다. 근데 아빠 친구들이 본식에 올 수도 있어가 전주 예식장 정보도 넣을 수 있나?"

나의 깔끔한 모바일 청첩장이 인정 받았다는 기쁨 + 회사에서 기획자에게 추가 작업 요청을 받는 내 모습이 겹쳐지는 불쾌함

기획자 여러분 작업 요청은 충분한 고민 후에 주세요!!! 같은 작업 두 번 하는 거 너무 싫습니다... 🙏🏻 하지만 엄마에게 오케이! 를 외치며 섹션 하나를 더 추가했습니다. 다행히 통과가 되었고 지금은 엄마/아빠 지인에게 잘 전달되고 있다고 합니다.

### 작업을 마치며

웹 개발자는 아니지만 간단한 웹사이트를 만들 수 있다는 게 꽤나 쓸모 있네요. <br />
흔쾌히 모바일 청첩장에 대한 블로그 작성을 허락해준 남자친구 rlaalstjd 군에게 감사의 말씀을 전합니다! ❤️

[github 페이지로 만든 모바일 청첩장](https://yyna.github.io)

결혼식의 주인공은 신부라고들 하지만 이 모바일 청첩장에서 만큼은 아빠의 계좌 번호가 주인공이 아닐까 싶습니다..ㅎㅎ..

![layout](/assets/2020-10-30-mobile-wedding-invitation/5.png)

읽어주셔서 감사합니다. 😎

---

### 참고한 링크

- [iOS 개발자가 모바일 청첩장을 만들면 어떻게 될까?](https://sungdoo.dev/programming/my-wedding-invitation/)
- [결혼식 청첩장 Github blog로 세련되게 만들기. 후기!](https://blog.voidmainvoid.net/217)