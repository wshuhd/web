import _ from 'lodash';
function lazyLoadImage() {
    let loadedImageSet = new Set();
    return function () {
        let imgList = document.getElementsByClassName('lazyloadImg');
        let h = window.innerHeight;
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        imgList.forEach((img, i) => {
            if (loadedImageSet.has(img))
                continue;
            if (scrollTop + h <= img.offsetTop) {
                continue;
            }   
            let virtualImg = new Image();
            virtualImg.src = img.getAttribute('data-src');
            virtualImg.onload(() => {
                img.src = virtualImg.src;
            })
            loadedImageSet.add(img)
        })
    }
}
window.addEventListener('scroll', _.throttle(lazyLoadImage(), 200))