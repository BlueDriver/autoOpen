console.log("autoOpen ------------------------------------------------------------------")
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
console.log("autoOpen ------------------------------------------------------------------")