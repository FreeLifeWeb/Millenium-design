const galleryContainer = document.querySelector('.about__box');
const galleryControlsContainer = document.querySelector('.about__controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.about__img');

class Carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery() {
        this.carouselArray.forEach((el) => {
            el.classList.remove('about__img-1');
            el.classList.remove('about__img-2');
            el.classList.remove('about__img-3');
        });

        this.carouselArray.slice(0, 4).forEach((el, i) => {
            el.classList.add(`about__img-${i + 1}`);
        });
    }

    setCurrentState(direction) {
        if (direction.className == 'about__controls-previous') {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControls() {
        this.carouselControls.forEach((control) => {
            const button = document.createElement('button');
            button.className = `about__controls-${control}`;
            button.innerText =
                control === 'previous' ? 'Предыдущий' : 'Следующий';
            galleryControlsContainer.appendChild(button);
        });
    }

    useControls() {
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach((control) => {
            control.addEventListener('click', (e) => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const exampleCarousel = new Carousel(
    galleryContainer,
    galleryItems,
    galleryControls
);
exampleCarousel.setControls();
exampleCarousel.useControls();
