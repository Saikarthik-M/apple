const html = document.documentElement;
const canvas = document.getElementById("laptop-opening");
const context = canvas.getContext("2d");
const toptext1 = document.getElementById("fade-while-scroll1");
const toptext2 = document.getElementById("fade-while-scroll2");
const uplifter1 = document.getElementById("uplifter1");
const chip1 = document.getElementById("chip1");
const frameCount = 121;
const currentFrame = index => (
    `images/scrollingtop/large_${index.toString().padStart(4, '0')}.jpg`
)

const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
    }
};

const img = new Image()
img.src = currentFrame(1);
canvas.width = 1158;
canvas.height = 770;
img.onload = function () {
    context.drawImage(img, 0, 0);
}

const updateImage = index => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {
    console.log(document.documentElement.scrollTop);
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
    );

    requestAnimationFrame(() => updateImage(frameIndex + 1))
    if (scrollTop <= 120) {
        toptext1.style.opacity = 1 - scrollTop / 100;
        toptext2.style.opacity = 1 - scrollTop / 100;
    }
    if (scrollTop >= 2800) {
        canvas.style.position = "static";

    }
    else {
        canvas.style.position = "fixed";

    }

});

preloadImages()

$('#carouselExampleFade').carousel({
    interval: 1000,
    wrap: false
});

$('#carouselExampleFade').on('slid.bs.carousel', '', function () {
    var $this = $(this);

    $this.children('.carousel-control').show();

    if ($('.carousel-inner .item:first').hasClass('active')) {
        $this.children('.carousel-control-prev').hide();
    } else if ($('.carousel-inner .item:last').hasClass('active')) {
        $this.children('.carousel-control-next').hide();
    }

});

