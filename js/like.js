(function (w, d) {
    d.querySelector('body').addEventListener('click', function (e) {
        addLike(e);
    });
    var likeArr = [];
    function addLike(e) {
        var likeDiv = d.createElement('div');
        likeDiv.classList.add('like');
        likeDiv.innerHTML = '<i class="fas fa-heart"></i>';
        d.body.appendChild(likeDiv);
        likeArr.push({
            el: likeDiv,
            top: e.clientY - 20,
            left: e.clientX - 10,
            opacity: 1,             //透明度
            scale: 1,               //放大倍数
            color: `rgb(${255 * Math.random()},${255 * Math.random()},${255 * Math.random()})`
        });
        moveLike();
    };
    function moveLike() {
        for (var i = 0; i < likeArr.length; i++) {
            if (likeArr[i].opacity <= 0) {          //透明小于0时
                d.body.removeChild(likeArr[i].el);  //body去除like
                likeArr.splice(i, 1);               //队列删减
                return;                             //跳出moveLike函数
            }
            likeArr[i].top--;
            likeArr[i].opacity -= 0.01;           //透明度操作,根据喜好自定义
            likeArr[i].scale += 0.01;
            likeArr[i].el.style.cssText = `
            top: ${likeArr[i].top}px;
        left: ${likeArr[i].left}px;
        color: ${likeArr[i].color};
        opacity: ${likeArr[i].opacity};
        transform: scale(${likeArr[i].scale});`
        }
        w.requestAnimationFrame(moveLike);

    }



})(window, document);