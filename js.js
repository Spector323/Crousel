const wrapperOne = document.querySelector('.wrapper-1');
const leftButton = document.querySelector('.carousel-left');
const rightButton = document.querySelector('.carousel-right');
const leftButtonSmall = document.querySelector('.carousel-left-small');
const rightButtonSmall = document.querySelector('.carousel-right-small');
const imageContainer = document.querySelector('.image-container');


let track = 0;

let counter = 1;

const moveImagesLeft = function () {
    if (counter < imageContainer.childElementCount) {
        counter++;
        track = track - 100;
        wrapperOne.style.marginLeft = `${track}%`;
    }
}

const moveImagesRight = function () {
    if (counter > 1) {
        counter--;
        track = track + 100;
        wrapperOne.style.marginLeft = `${track}%`;
    }
}
document.body.addEventListener("keydown", function(e) {
    if(e.key == "ArrowLeft")
        moveImagesRight();
    else if(e.key == "ArrowRight")
        moveImagesLeft();
	})
rightButton.addEventListener('click', () => {
    moveImagesLeft();
});

rightButtonSmall.addEventListener('click', () => {
    moveImagesLeft();
});

leftButton.addEventListener('click', () => {
    moveImagesRight();
});

leftButtonSmall.addEventListener('click', () => {
    moveImagesRight();
});