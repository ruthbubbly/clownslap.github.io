const selectEl = select => {return document.querySelector(`#${select}`);}

const outSlideshowDiv = selectEl('out-slideshow-div');
const outSlideshowImage = selectEl('out-slideshow-image');
const outPrev = selectEl('out-prev-arrow');
const outNext = selectEl('out-next-arrow');
const outDesc = selectEl('out-image-desc')
const outSlideshowImages = [
    'images/Sign.jpeg',
    'images/outside-front.jpg',
    'images/shed.jpg',
    'images/Hiihtolatu.jpg'
];
const outHeaders = [
    '',
    'LEVINKULMA',
    'SHED',
    'SKIING TRACK'
];
const outDescriptions = [
    '',
    'A solid log cabin, guaranteed to stay warm even during the coldest winter day!',
    'An outside log shed for replenishing the firewood!',
    'Just behind the house you will find a cross country ski track, part of the extensive Levi network'
];
const outDots = [];
let outSlideIndex = 0;
const autoplayOut = selectEl('out-ap');

const setSlide = (index, dots, desc, descs, image, images, headers) => {
    image.style.backgroundImage = `url(${images[index]})`;
    desc.innerHTML = '';
    createDescription(headers[index], descs[index], desc);
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active-selector-dot');
        dots[i].classList.add('inactive-selector-dot');
    }
    dots[index].classList.remove('inactive-selector-dot');
    dots[index].classList.add('active-selector-dot');
}

const createDescription = (header, description, descDiv) => {
    const h3 = document.createElement('h3');
    const desc = document.createElement('span');
    h3.textContent = header;
    desc.textContent = description;
    descDiv.appendChild(h3);
    descDiv.appendChild(desc);
}

const createDots = (images, append, push, index) => {
    for (let j = 0; j < images.length; j++) {
        const dotDiv = document.createElement('div');
        const dot = document.createElement('i');
        dot.id = `i-${j}`;
        dot.classList.add('fa');
        dot.classList.add('fa-circle');
        dotDiv.appendChild(dot);
        dotDiv.classList.add('selector-dot-div');
        dotDiv.classList.add('inactive-selector-div');
        if (j === index) {
            dotDiv.classList.add('active-selector-dot');
            dotDiv.classList.remove('inactive-selector-div');
        }
        append.appendChild(dotDiv);
        push.push(dotDiv);
    }
}

const outSetSlide = () => {
    setSlide(outSlideIndex, outDots, outDesc, outDescriptions, outSlideshowImage, outSlideshowImages, outHeaders);
}

const outCreateDots = () => {
    createDots(outSlideshowImages, outSlideshowDiv, outDots, outSlideIndex);
}

const outNextSlide = () => {
    outSlideIndex++;
    for (let i = 0; i < outDots.length; i++) {
        if (outDots[i].className === 'active-selector-dot') {
            outDots[i].classList.remove('active-selector-dot');
            outDots[i].classList.add('inactive-selector-dot');
        }
    }
    if (outSlideIndex >= outSlideshowImages.length) {
        outSlideIndex = 0;
    }
    outSetSlide();
}

const outPrevSlide = () => {
    outSlideIndex--;
    // for (let i = 0; i < outDots.length; i++) {
    //     outDots[i].classList.remove('active-selector-dot');
    //     outDots[i].classList.add('inactive-selector-dot');
    // }
    if (outSlideIndex < 0) {
        outSlideIndex = outSlideshowImages.length - 1;
    }
    outSetSlide();
}

let outLoop = setInterval(outNextSlide, 6000);
outLoop;
outCreateDots();
outSetSlide();

outNext.addEventListener('click', () => {
    outNextSlide();
    clearInterval(outLoop);
    outLoop = setInterval(outNextSlide, 8000);
    outLoop;
});
outPrev.addEventListener('click', () => {
    outPrevSlide();
    clearInterval(outLoop);
    outLoop = setInterval(outNextSlide, 8000);
    outLoop;
});

for (let i = 0; i < outDots.length; i++) {
    outDots[i].addEventListener('click', () => {
        outSlideIndex = i;
        outSetSlide();
        clearInterval(outLoop);
        outLoop = setInterval(outNextSlide, 8000);
        outLoop;
    });
}

const f1SlideshowDiv = selectEl('f1-slideshow-div');
const f1SlideshowImage = selectEl('f1-slideshow-image');
const f1Prev = selectEl('f1-prev-arrow');
const f1Next = selectEl('f1-next-arrow');
const f1Desc = selectEl('f1-image-desc')
const f1SlideshowImages = [
    'images/living-room.jpg',
    'images/rug.jpg',
    'images/tv.jpg',
    'images/fireplace.jpg',
    'images/fireplace-dining.jpg',
    'images/bathroom-1f.jpg',
    'images/bedroom-1f.jpg',
    'images/view-1f.JPG',
    'images/drying-closet.jpg'
];
const f1Headers = [
    'LIVING ROOM',
    'REINDEER SKIN',
    'HOME THEATER',
    'FIREPLACE',
    'DINING ROOM',
    'BATHROOM',
    'BEDROOM',
    'BEDROOM VIEW',
    'DRYING CUPBOARD'
];
const f1Descriptions = [
    'A high and spacious living room. The fireplace made of Lapland stone brings warmth and a very nice homely feeling',
    'On the living room wall, a real reindeer skin complete with the horns',
    'Underneath the reindeer skin you will, of course, find a tv and home theater with blueray for a cold or rainy day.',
    'Large, authentic fireplace for keeping warm on a cold evening',
    'Next to the living room a modern and fully equipped kitchen and dining space which seats eight',
    'Naturally we offer a bathroom and sauna, and also a washing machine for your convenience.',
    'One bedroom downstairs…',
    '…with a view of untouched Lapland nature from the window',
    'A separate drying cupboard by the front door will dry your wet clothes quickly (and warm them up nicely in the morning before you go out…)'
];
const f1Dots = [];
let f1SlideIndex = 0;
const f1AP = selectEl('f1-ap');


const f1SetSlide = () => {
    setSlide(f1SlideIndex, f1Dots, f1Desc, f1Descriptions, f1SlideshowImage, f1SlideshowImages, f1Headers);
}

const f1CreateDots = () => {
    createDots(f1SlideshowImages, f1SlideshowDiv, f1Dots, f1SlideIndex);
}

const f1NextSlide = () => {
    f1SlideIndex++;
    if (f1SlideIndex >= f1SlideshowImages.length) {
        f1SlideIndex = 0;
    }
    f1SetSlide();
}

const f1PrevSlide = () => {
    f1SlideIndex--;
    if (f1SlideIndex < 0) {
        f1SlideIndex = f1SlideshowImages.length - 1;
    }
    f1SetSlide();
}

f1CreateDots();
f1SetSlide(f1SlideIndex, f1Dots);
let f1Loop = setInterval(f1NextSlide, 6000);
f1Loop;

f1Next.addEventListener('click', () => {
    f1NextSlide();
    clearInterval(f1Loop);
    f1Loop = setInterval(f1NextSlide, 8000);
    f1Loop;
});
f1Prev.addEventListener('click', () => {
    f1PrevSlide();
    clearInterval(f1Loop);
    f1Loop = setInterval(f1NextSlide, 8000);
    f1Loop;
});

for (let i = 0; i < f1Dots.length; i++) {
    f1Dots[i].addEventListener('click', () => {
        f1SlideIndex = i;
        f1SetSlide();
        clearInterval(f1Loop);
        f1Loop = setInterval(f1NextSlide, 8000);
        f1Loop;
    });
}



const f2SlideshowDiv = selectEl('f2-slideshow-div');
const f2SlideshowImage = selectEl('f2-slideshow-image');
const f2Desc = selectEl('f2-image-desc');
const f2Next = selectEl('f2-next-arrow');
const f2Prev = selectEl('f2-prev-arrow');
const f2Images = [
    'images/floor-two-living.jpg',
    'images/tv-room.jpg',
    'images/bathroom-2f.jpg',
    'images/kids-room.jpg',
    'images/bedroom-2f-living-room.jpg',
    'images/top-living.jpg'
];
const f2Headers = [
    'SECOND FLOOR LIVING SPACE',
    'TELEVISION',
    'BATHROOM',
    'BEDROOM',
    'SECOND BEDROOM',
    'VIEW FROM SECOND FLOOR BEDROOM'
];
const f2Descriptions = [
    'Large, second floor living room with two beds and a television',
    'Complete with a second tv set for the kids',
    'And a second bathroom so you do not need to queue up in the morning',
    'One of the two upstairs bedrooms, with two beds and a high cupboard as well as a view to the road and neighboring nature',
    'And another bedroom, also with two beds…',
    '…and a direct view to the living room, again nice for the smaller kids'
];
const f2Dots = [];
let f2SlideIndex = 0;
const f2AP = selectEl('f2-ap');

const f2SetSlide = () => {
    setSlide(f2SlideIndex, f2Dots, f2Desc, f2Descriptions, f2SlideshowImage, f2Images, f2Headers);
}

const f2CreateDots = () => {
    createDots(f2Images, f2SlideshowDiv, f2Dots, f2SlideIndex);
}

const f2NextSlide = () => {
    f2SlideIndex++;
    if (f2SlideIndex >= f2Images.length) {
        f2SlideIndex = 0;
    }
    f2SetSlide();
}

const f2PrevSlide = () => {
    f2SlideIndex--;
    if (f2SlideIndex < 0) {
        f2SlideIndex = f2Images.length - 1;
    }
    f2SetSlide();
}

f2CreateDots();
f2SetSlide();
f2SetSlide(f2SlideIndex, f2Dots);
let f2Loop = setInterval(f2NextSlide, 6000);
f2Loop;

f2Next.addEventListener('click', () => {
    f2NextSlide();
    clearInterval(f2Loop);
    f2Loop = setInterval(f2NextSlide, 8000);
    f2Loop;
});
f2Prev.addEventListener('click', () => {
    f2PrevSlide();
    clearInterval(f2Loop);
    f2Loop = setInterval(f2NextSlide, 8000);
    f2Loop;
});

for (let i = 0; i < f2Dots.length; i++) {
    f2Dots[i].addEventListener('click', () => {
        f2SlideIndex = i;
        f2SetSlide();
        clearInterval(f2Loop);
        f2Loop = setInterval(f2NextSlide, 8000);
        f2Loop;
    });
}