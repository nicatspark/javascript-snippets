/// Lazy-loading stylesheet onscroll
const loadStyle = src => {
  if (document.createStylesheet) {
    document.createStylesheet(src);
  } else {
    const stylesheet = document.createElement('link');
    stylesheet.href = src;
    stylesheet.type = 'text/css';
    stylesheet.rel = 'stylesheet';
    document.getElementsByTagName('head')[0].appendChild(stylesheet);
  }
};
let scrollFlag = false;
window.onscroll = () => {
  if (!scrollFlag) {
    console.log('Started Scrolling!');
    setTimeout(() => {
      loadStyle('./style2.css');
    }, 1000);
    scrollFlag = true;
  }
};
