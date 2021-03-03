### Like_Informative_Lion

#### Likelion 9th 모집 웹 사이트

---

### Development

#### 스크롤 위치 파악하여 버튼을 보이고, 숨김

![ezgif com-gif-maker (8)](https://user-images.githubusercontent.com/63100352/109745951-f3b8d200-7c17-11eb-8a5f-4d86d6e6f4c7.gif)

```js
const handleScroll = () => {
  const currentYPos = window.pageYOffset;

  if (currentYPos < 300) {
    topButton.classList.add(HIDE_CN);
  } else if (currentYPos < beforeYPos) {
    topButton.classList.remove(HIDE_CN);
  } else {
    topButton.classList.add(HIDE_CN);
  }
  beforeYPos = currentYPos;
};
```

#### image hover시 scale 효과

![ezgif com-gif-maker (9)](https://user-images.githubusercontent.com/63100352/109752146-3633dc00-7c23-11eb-8d89-b4fbb78ce8cf.gif)

```css
.endbox:hover .endphoto {
  transform: scale(1.2);
}

.endbox:hover .endframe__background {
  transform: scale(1.1);
}
```

---

### Additional development items

- 브라우저별로 웹이 잘 동작하도록 하기
  Link : [브라우저 스타일링](https://suyou.tistory.com/166)
