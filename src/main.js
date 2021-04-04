console.log('hi');
let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `
/* 大家好，我是豪豪，
下面我要画一个太极图
首先要准备一个div */
#div1{

    border : 1p;x solid red;
    width :200px;
    height :200px;
}
/* 接下来把div变成一个圆圈 */
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border :none;
}
  /* 八卦是一黑一白的 */
  #div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
  /*  加两个阴阳球 */
   #div1::before {
    width:100px;
    height:100px;
    border-radius:50%;
    display: block;
    background:#000;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);
}

#div1::after {
    width:100px;
    height:100px;
    border-radius:50%;
    display: block;
    background:#fff;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);

}
`
let string2 = "";
let n = -1
let step = () => {
    setTimeout(() => {
        n = n + 1;
        if (n > string.length - 1) {
            return;
        }
        if (string[n] === "\n") //如果是换行，替换
        {
            string2 += "<br>";
        }
        else if (string[n] === " ") {

            string2 += "&nbsp";

        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(1, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999)
        step();

    }, 50);
}
step();


