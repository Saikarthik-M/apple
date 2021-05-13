const html = document.documentElement;
const canvas = document.getElementById("laptop-opening");
const context = canvas.getContext("2d");
const toptext1 = document.getElementById("fade-while-scroll1");
const toptext2 = document.getElementById("fade-while-scroll2");
const frameCount = 148;
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
});

preloadImages()




