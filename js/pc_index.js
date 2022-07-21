window.addEventListener('load', function () {
    alert("这是一份送给你的贺卡！")
  })
  var open9 = document.querySelector('#open');
  open9.addEventListener('click', function () {
    function showWord() {
      // alert(22);
  
      $(".word1").lbyl({
        content: "四年，转眼成了回忆。对于这个记忆，非常感谢有你陪伴。从前，我们一起哭泣、欢笑、疯狂、嬉戏…但，从来没有放弃过。大家都是为了自己的梦想而坚持，希望将来，还可以继续坚持现在的自己…… 但愿将来的时光够长，能荒废，能寂寞；愿将来的我们，提起这段记忆，还能继续发狂…  ",
        speed: 150,
        type: 'show',
        //======================
        finished: function () {
  
          var i1 = document.createElement('i');
          var w1 = document.querySelector('.word1');
          i1.className = 'em-svg em-blush';
          console.log(i1);
          console.log(w1);
          w1.appendChild(i1);
          $('.word2').lbyl({
            content: "人生虽苦，但要学会苦心作乐。当你想哭泣的时候，请告诉我，我会一直支持你！即使世界没有光明，你仍然是我最珍贵的小光，纵然软弱，却是我人生不可缺少的一部分。虽属部份，却缺少了这一部分，不完整。所以呀，你我将成为永远的好朋友，永不分离。要是谁欺负你，我要亲手砍下它的翅膀，毁坏他的天堂。你知道吗？你是我最有价值的资产。不管怎么样我都会陪你。永不离弃，永不嫌弃。（祝愿丁程鑫的老婆和丁程鑫百年好合！）",
            speed: 150,
            type: 'fade',
            fadeSpeed: 150,
            finished: function () {
              $(".signed").lbyl({
                content: "爱你的 李悦萱",
                speed: 150,
                type: 'show',
                finished: function () {
                  var si = document.querySelector('.signed');
                  var i2 = document.createElement('i');
                  i2.className = 'em-svg em-heart';
                  si.appendChild(i2);
  
  
  
                }
              })
            }
          })
  
  
  
        }
      })
    }
  
  
    var timer01 = setTimeout(showWord, 2000);
    console.log(timer01);
  
  
  })
  
  
  // $(function () {
  //   $(".word1").lbyl({
  //     content: "四年，转眼成了回忆。对于这个记忆，非常感谢有你陪伴。从前，我们一起哭泣、欢笑、疯狂、嬉戏…但，从来没有放弃过。大家都是为了自己的梦想而坚持，希望将来，还可以继续坚持现在的自己……但愿将来的时光够长，能荒废，能寂寞；愿将来的我们，提起这段记忆，还能继续发狂…",
  //     speed: 150,
  //     type: 'show',
  //     //======================
  //     finished: function () {
  //       $('.word2').lbyl({
  //         content: "人生虽苦，但要学会苦心作乐。当你想哭泣的时候，请告诉我，我会一直支持你！即使世界没有光明，你仍然是我最珍贵的小光，纵然软弱，却是我人生不可缺少的一部分。虽属部份，却缺少了这一部分，不完整。所以呀，你我将成为永远的好朋友，永不分离。要是谁欺负你，我要亲手砍下它的翅膀，毁坏他的天堂。你知道吗？你是我最有价值的资产。不管怎么样我都会陪你。永不离弃，永不嫌弃。（祝愿丁程鑫的老婆和丁程鑫百年好合！）",
  //         speed: 150,
  //         type: 'fade',
  //         fadeSpeed: 150,
  //         finished: function () {
  //           $(".signed").lbyl({
  //             content: "爱你的 李悦萱",
  //             speed: 150,
  //             type: 'show',
  //             // finished: function () {
  //             //   $(".em-svg em-heart").lbyl({
  //             //     content: '<i class="em-svg em-heart"/>',
  //             //     speed: 150,
  //             //     type: 'show',
  //             //   })
  //             // }
  //           })
  //         }
  //       })
  //     } // Finished Callback
  //   })
  //   // $(".signed").lbyl({
  //   //   content: "爱你的 李悦萱",
  //   //   speed: 350,
  //   //   type: 'show',
  //   // })
  
  // })
  
  
  
  
  
  
  
  
  
  
  window.addEventListener('load', function () {
    //自动播放音乐
    var music = document.getElementById("touchstart");
    console.log(music);
    console.log(music.paused);
    if (music.paused) {
      music.paused = false;
      music.play();
    }
  
  
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var outer = document.querySelector('.outer');
    var outerWidth = outer.offsetWidth;
    outer.addEventListener('mouseenter', function () {
      arrow_l.style.display = 'block';
      arrow_r.style.display = 'block';
      clearInterval(timer);
      timer = null;
    })
    outer.addEventListener('mouseleave', function () {
      arrow_l.style.display = 'none';
      arrow_r.style.display = 'none';
      timer = setInterval(function () {
        arrow_r.click();
      }, 3000);
    })
    //动态生成小圆圈,focus是outer，ul是imglist,ol是pro-...
    var imglist = document.querySelector('#imglist');
    var promo_nav = document.querySelector('.promo-nav');
    for (var i = 0; i < imglist.children.length; i++) {
      var li = document.createElement('li');
      li.setAttribute('index', i);
      promo_nav.appendChild(li);
      li.addEventListener('click', function () {
        for (var i = 0; i < promo_nav.children.length; i++) {
          promo_nav.children[i].className = '';
        }
        this.className = 'selected';
        //点击小圆圈移动图片
        var index = this.getAttribute('index');
        num = index;
        circle = index;
  
        console.log(outerWidth);
        console.log(index);
        animate(imglist, -index * outerWidth);
  
  
      })
    }
  
    promo_nav.children[0].className = 'selected';
    //克隆第一张图片放到最后面
    var first = imglist.children[0].cloneNode(true);
    imglist.appendChild(first);
    //点击右侧按钮，图片滚动一张
    var num = 0;
    var circle = 0;
    var flag = true;
    arrow_r.addEventListener('click', function () {
      if (flag) {
        flag = false;
        if (num == imglist.children.length - 1) {
          imglist.style.left = 0;
          num = 0;
        }
        num++;
        animate(imglist, -num * outerWidth, function () {
          flag = true;
        });
        circle++;
        if (circle == promo_nav.children.length) {
          circle = 0;
        }
        circleChange();
      }
  
  
    })
    //左侧按钮
    arrow_l.addEventListener('click', function () {
      if (flag) {
        flag = false;
        if (num == 0) {
          num = imglist.children.length - 1;
          imglist.style.left = -num * outerWidth + 'px';
  
        }
        num--;
        animate(imglist, -num * outerWidth, function () {
          flag = true;
        });
        circle--;
        circle = circle < 0 ? promo_nav.children.length - 1 : circle;
        circleChange();
      }
  
    })
    function circleChange() {
      for (var i = 0; i < promo_nav.children.length; i++) {
        promo_nav.children[i].className = '';
      }
      promo_nav.children[circle].className = 'selected';
  
    }
    //自动播放轮播图
    var timer = setInterval(function () {
      arrow_r.click();
    }, 3000);
  })
  
  
  
  
  
    (function () {
      function $(id) {
        return document.getElementById(id);
      }
  
      var card = $('card'),
        openB = $('open'),
        closeB = $('close'),
        timer = null;
      //000
  
      console.log('wat', card);
  
      openB.addEventListener('click', function () {
        card.setAttribute('class', 'open-half');
        if (timer) clearTimeout(timer);
        timer = setTimeout(function () {
          card.setAttribute('class', 'open-fully');
          timer = null;
        }, 1000);
      });
  
      closeB.addEventListener('click', function () {
        card.setAttribute('class', 'close-half');
        if (timer) clearTimerout(timer);
        timer = setTimeout(function () {
          card.setAttribute('class', '');
          timer = null;
        }, 1000);
      });
  
  
  
    }());
  // //轮播图片
  // var sildeIndex = 1;
  // function showSlides(n) {
  //   var slides = document.getElementsByClassName("img0");
  //   var select = document.getElementsByClassName("selected");
  //   var i;
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   for (i = 0; i < select.length; i++) {
  //     select[i].className = select[i].className.replace("active", "");
  //   }
  //   if (n > slides.length) {
  //     sildeIndex = 1;
  //   }
  //   if (n < 1) {
  //     sildeIndex = slides.length
  //   }
  //   sileds[sildeIndex - 1].style.display = "block";
  // }
  // //实现左右翻页功能
  // showSlides(sildeIndex);
  // function plusSlides(n) {
  //   showSlides(sildeIndex = sildeIndex + n);
  // }
  // function currentSlide(n) {
  //   showSlides(sildeIndex = n);
  // }
  /*页面重定向*/
  function jump() {
    window.location.replace("index2.html");
  }
  // window.onload = function () {
  //   var music = document.getElementById("touchstart");
  //   console.log(music);
  //   console.log(music.paused);
  //   if (music.paused) {
  //     music.paused = false;
  //     music.play();
  //   }
  // }
    //==========================================================================
    //   /*轮播照片*/
    //   var imglist = document.getElementById("imglist");
    //   var imgArr = document.getElementsByTagName("img");
    //   //设置imglist的宽度
    //   // imglist.style.width = 398 * imgArr.length + "px";
    //   imglist.style.width = 410 * imgArr.length + "px";
    //   //设置导航居中
    //   //获取navDiv
    //   var navDiv = document.getElementById("navDiv");
    //   //获取outer
    //   var outer = document.getElementById("outer");
    //   //设置navDiv的left值
    //   // navDiv.style.left = (outer.offsetWidth - navDiv.offsetWidth) / 2 + "px";
    //   //默认显示图片的索引
    //   var index = 0;
  
  
    //   //获取所有a
    //   var allA = document.getElementsByClassName("a0");
    //   //设置默认选中的效果
    //   allA[index].style.backgroundColor = "#ff5000";
    //   //为所有的超链接都绑定单击响应函数
    //   for (var i = 0; i < allA.length; i++) {
    //     //为每一个超链接都添加一个num属性
    //     allA[i].num = i;
    //     allA[i].onclick = function () {
    //       //关闭自动切换定时器
    //       clearInterval(timer);
    //       //获取点击超链接的索引,并将其设置为index
    //       index = this.num;
    //       //切换图片
    //       // imglist.style.left = -296 * index + "px";
  
    //       setA();
    //       //使用move函数切换图片
    //       move(imglist, "left", -296 * index, 20, function () {
    //         autoChange();
    //       });
    //     };
    //   }
    //   //自动切换图片
    //   autoChange();
    //   //000
    //   function setA() {
    //     //判断当前索引是否是最后一张照片
    //     if (index >= imgArr.length - 1) {
    //       index = 0;
    //       //通过css直接讲最后一张变为第一张
    //       imglist.style.left = 0;
    //     }
    //     for (var i = 0; i < allA.length; i++) {
    //       allA[i].style.backgroundColor = "";
    //     }
    //     allA[index].style.backgroundColor = "#ff5000";
    //   };
    //   /*自动切换图片*/
    //   var timer;
    //   function autoChange() {
    //     //开启一个定时器，用来定时去切换图片
    //     timer = setInterval(function () {
    //       //使索引自增
    //       if (index != 3)
    //         index++;
    //       //判断index的值
    //       index %= imgArr.length;
    //       //执行动画，切换图片
    //       move(imglist, "left", -296 * index, 20, function () {
    //         setA();
    //       });
  
    //     }, 3000);
    //   }
  
  
  
  
    // };
    // //箭头切换图片
    // var num = 0;
    // var pre01 = document.getElementsByClassName('arrow-l');
    // var imgshow = document.getElementById("imglist");
    // function js_method() {
    //   num--;
    //   if (index < 0) {
    //     index = 2;
    //   }
    //   setA();
    //   var left;
    //   var imgleft = imgshow.style.left;
    //   if (imgleft == "0px") {
    //     left = -2000;
    //   }
    //   else {
    //     left = parseInt(imgleft) + 296;
    //   }
    //   imgshow.style.left = left + "px";
    //================================================================================
  
  