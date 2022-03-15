const sliderImages = () => {
    var counter = 2;
    const firstLabel = document.querySelector('.manual-btn-1');
    const secondLabel = document.querySelector('.manual-btn-2');
    const thirdLabel = document.querySelector('.manual-btn-3');
    const fourthLabel = document.querySelector('.manual-btn-4');
    firstLabel.classList.add('background_black')

    setInterval(function () {
        document.getElementById('radio' + counter).checked = true;
        if (counter == 1) {
            firstLabel.classList.add('background_black')
        } else {
            firstLabel.classList.remove('background_black')
        }
        if (counter == 2) {
            secondLabel.classList.toggle('background_black')
        } else {
            secondLabel.classList.remove('background_black')
        }
        if (counter == 3) {
            thirdLabel.classList.toggle('background_black')
        } else {
            thirdLabel.classList.remove('background_black')
        }
        if (counter == 4) {
            fourthLabel.classList.toggle('background_black')
        } else {
            fourthLabel.classList.remove('background_black')
        }
        counter++;
        if (counter > 4) {
            counter = 1;
        }
    }, 3000);
}



const clickSlider = () => {
    const firstLabel = document.querySelector('.manual-btn-1');
    const secondLabel = document.querySelector('.manual-btn-2');
    const thirdLabel = document.querySelector('.manual-btn-3');
    const fourthLabel = document.querySelector('.manual-btn-4');
    firstLabel.addEventListener('click', function () {
        firstLabel.classList.add('background_black')
        if (secondLabel.classList.contains('background_black')) {
            secondLabel.classList.remove('background_black');
        };
        if (thirdLabel.classList.contains('background_black')) {
            thirdLabel.classList.remove('background_black');
        };
        if (fourthLabel.classList.contains('background_black')) {
            fourthLabel.classList.remove('background_black');
        };
    });

    secondLabel.addEventListener('click', function () {
        secondLabel.classList.add('background_black')
        if (firstLabel.classList.contains('background_black')) {
            firstLabel.classList.remove('background_black');
        };
        if (thirdLabel.classList.contains('background_black')) {
            thirdLabel.classList.remove('background_black');
        };
        if (fourthLabel.classList.contains('background_black')) {
            fourthLabel.classList.remove('background_black');
        };
    });

    thirdLabel.addEventListener('click', function () {
        thirdLabel.classList.add('background_black')
        if (firstLabel.classList.contains('background_black')) {
            firstLabel.classList.remove('background_black');
        };
        if (secondLabel.classList.contains('background_black')) {
            secondLabel.classList.remove('background_black');
        };
        if (fourthLabel.classList.contains('background_black')) {
            fourthLabel.classList.remove('background_black');
        };
    });

    fourthLabel.addEventListener('click', function () {
        fourthLabel.classList.add('background_black')
        if (firstLabel.classList.contains('background_black')) {
            firstLabel.classList.remove('background_black');
        };
        if (secondLabel.classList.contains('background_black')) {
            secondLabel.classList.remove('background_black');
        };
        if (thirdLabel.classList.contains('background_black')) {
            thirdLabel.classList.remove('background_black');
        };
    });

}

sliderImages();
clickSlider();
