window.onload = function () {
  // function showWord() {

  //   $(".p1").lbyl({
  //     content: "四年，转眼成了回忆。对于这个记忆，非常感谢有你陪伴。从前，我们一起哭泣、欢笑、疯狂、嬉戏…但，从来没有放弃过。大家都是为了自己的梦想而坚持，希望将来，还可以继续坚持现在的自己…… 但愿将来的时光够长，能荒废，能寂寞；愿将来的我们，提起这段记忆，还能继续发狂…  ",
  //     speed: 150,
  //     type: 'show',
  //     //======================
  //     finished: function () {

  //       var i1 = document.createElement('i');
  //       var w1 = document.querySelector('.p1');
  //       i1.className = 'em-svg em-blush';
  //       console.log(i1);
  //       console.log(w1);
  //       w1.appendChild(i1);
  //       $('.p2').lbyl({
  //         content: "人生虽苦，但要学会苦心作乐。当你想哭泣的时候，请告诉我，我会一直支持你！即使世界没有光明，你仍然是我最珍贵的小光，纵然软弱，却是我人生不可缺少的一部分。虽属部份，却缺少了这一部分，不完整。所以呀，你我将成为永远的好朋友，永不分离。要是谁欺负你，我要亲手砍下它的翅膀，毁坏他的天堂。你知道吗？你是我最有价值的资产。不管怎么样我都会陪你。永不离弃，永不嫌弃。（祝愿丁程鑫的老婆和丁程鑫百年好合！）",
  //         speed: 150,
  //         type: 'fade',
  //         fadeSpeed: 150,
  //         finished: function () {
  //           $(".signed").lbyl({
  //             content: "爱你的 李悦萱",
  //             speed: 150,
  //             type: 'show',
  //             finished: function () {
  //               var si = document.querySelector('.signed');
  //               var i2 = document.createElement('i');
  //               i2.className = 'em-svg em-heart';
  //               si.appendChild(i2);



  //             }
  //           })
  //         }
  //       })



  //     }
  //   })
  // }


  // var timer01 = setTimeout(showWord, 2000);
  // console.log(timer01);


  var page1 = document.getElementById("page1")
  var page2 = document.getElementById("page2")

  var music = document.getElementById("music")
  var audio = document.getElementsByTagName("audio")[0];

  audio.addEventListener("ended", function (event) {
    music.setAttribute("class", "")
    // music.style.animationPlayState = "paused"
  }, false)

  // audio.play()
  // function musicPlay() {
  //   if(audio.paused){
  //     audio.paused = false
  //     audio.play()
  //   }
  // }
  // setInterval(musicPlay(), 1)

  // music.onclick = function () {
  //   if(audio.paused){
  //     audio.play()
  //     this.setAttribute("class", "play")
  //     // this.style.animationPlayState = "running"
  //   }else{
  //     audio.pause()
  //     this.setAttribute("class", "")
  //     // this.style.animationPlayState = "paused"
  //   }
  // }
  music.addEventListener("touchstart", function (event) {
    if (audio.paused) {
      audio.play()
      this.setAttribute("class", "play")
      // this.style.animationPlayState = "running"
    } else {
      audio.pause()
      this.setAttribute("class", "")
      // this.style.animationPlayState = "paused"
    }
  }, false)

  // page1.addEventListener("touchstart", function(event){
  //   page1.style.display = "none"
  //   page2.style.display = "block"
  //   page3.style.display = "block"
  //   page3.style.top = "100%"

  //   setTimeout(function() {
  //     page2.setAttribute("class", "page fadeOut")
  //     page3.setAttribute("class", "page fadeIn")
  //   }, 5000)
  // }, false)
}

