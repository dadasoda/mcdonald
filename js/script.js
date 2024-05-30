
window.addEventListener('load', function () {

    //변수
    const header = document.querySelector('.header')
    const hMenu = document.querySelector('.hMenu')
    const topSearch = document.querySelector('.topSearch')
    const srch = document.querySelector('.topSearch .srch')
    const close = document.querySelector('.topSearch .close')
    const aside = document.querySelector('.aside')
    const btnTop = document.querySelector('.btnTop')

    hMenu.addEventListener('mouseenter', function () {
        header.classList.add('open');
    })

    header.addEventListener('mouseleave', function () {
        header.classList.remove('open');
    })

    srch.addEventListener('click', function () {
        topSearch.classList.add("open");
    })

    close.addEventListener('click', function () {
        topSearch.classList.remove("open");
    })

    window.addEventListener('scroll', function () {
        const docScrollTop = document.querySelector('html').scrollTop

        if (docScrollTop > 100) { // docScrollTop 100이상 일때
            aside.style.display = 'block'
            header.classList.add('fixed')
        } else {
            aside.style.display = 'none'
            header.classList.remove('fixed')
        }

        console.log("html 문서를 수직으로 얼마나 스크롤 했는지 ", docScrollTop)
        console.log("윈도우(브라우저)를 수직으로 얼마나 스크롤 했는지 ", window.scrollY)
    })

    btnTop.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    })

    //스와이퍼 슬라이드 설정
    var swiper = new Swiper(".mainSlide", {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

})