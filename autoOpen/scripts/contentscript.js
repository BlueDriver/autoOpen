
console.log("autoOpen ------------------------------------------------------------------ start")

//文章超长后滚动
//document.getElementById('article_content').style.overflow = "scroll";
//文章高度为auto
document.getElementById('article_content').style.height = "auto";
//去掉渐变遮罩
document.getElementsByClassName('hide-article-box')[0].style.paddingTop = "0px";
//隐藏阅读更多的按钮
document.getElementsByClassName('hide-article-box')[0].style.display='none';
//隐藏底部登录框
document.getElementsByClassName('pulllog-box')[0].style.display='none';
//toast function
function Toast(msg,duration){
  duration=isNaN(duration)?3000:duration;
  var m = document.createElement('div');
  m.innerHTML = msg;
  m.style.cssText="max-width:60%;min-width: 150px;padding:0 14px;height: 40px;color: rgb(255, 255, 255);line-height: 40px;text-align: center;border-radius: 4px;position: fixed;top: 80%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 26px;";
  document.body.appendChild(m);
  setTimeout(function() {
    var d = 0.5;
    m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
    m.style.opacity = '0';
    setTimeout(function() { document.body.removeChild(m) }, d * 1000);
  }, duration);
}

Toast("autoOpen", 3000);
console.log("autoOpen ------------------------------------------------------------------ end")