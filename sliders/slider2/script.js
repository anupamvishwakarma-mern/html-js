const initSlider = () => {
    const buttons = document.querySelectorAll('.slider-wrapper .slider-button');
    const imageList = document.querySelector('.slider-wrapper .image-list');
    const scrollBar = document.querySelector('.container .slider-scrollbar');
    const scrollBarThumb = scrollBar.querySelector('.scrollbarthumb');

    const maxWidth = imageList.scrollWidth - imageList.clientWidth;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const direction = button.id === 'next-button' ? 1 : -1;
            const imageWidth = imageList.querySelectorAll('.img-item')[0].clientWidth;
            const scrollAmount = imageWidth * direction + 20;

            imageList.scrollBy({ left: scrollAmount, behavior: 'smooth' })
        })
    })

    const handleButtonActive = () => {
        buttons[0].style.display = imageList.scrollLeft <= 0 ? 'none' : 'block';
        buttons[1].style.display = imageList.scrollLeft >= maxWidth ? 'none' : 'block';
    }

    const updateScrollBar = () => {
        const scrollAmount = imageList.scrollLeft;
        const thumbPosition = (scrollAmount / maxWidth) * (scrollBar.clientWidth - scrollBarThumb.offsetWidth);
        scrollBarThumb.style.left = `${thumbPosition}px`;
    }

    imageList.addEventListener('scroll', ()=>{
        handleButtonActive()
        updateScrollBar()
    })
    handleButtonActive()
}

window.addEventListener('load', initSlider);