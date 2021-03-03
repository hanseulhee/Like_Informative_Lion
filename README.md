### Like_Informative_Lion
#### Likelion 9th 모집 웹 사이트 

---

### Of development

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



