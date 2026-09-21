//hdex_index.js
/* top 버튼 작동 */
document.querySelector('.top_btn').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
/* 베스트 상품 볼 때 누르기 */
const rankBtn = document.querySelector('.rank_btn');
const rankModal = document.querySelector('.rank_modal');

rankBtn.addEventListener('click', () => {
    rankModal.classList.toggle('active');
});
// 메인 히어로 배경 변경 및 번호 변경

const currentBg = document.querySelector('.hero_bg');
const nextBg = document.querySelector('.hero_bg.next');
const currentNum = document.querySelector('.btn_num p span');

const slides = [
    {
        image: './image/hero_big_1.png',
        position: 'center 10%'
    },
    {
        image: './image/hero_big_2.jpg',
        position: 'center 50%'
    },
    {
        image: './image/hero_big_3.png',
        position: 'center 20%'
    },
    {
        image: './image/hero_big_4.png',
        position: 'center 40%'
    },
    {
        image: './image/hero_big_5.jpg',
        position: 'center 20%'
    }
];

let current = 0;

// 첫 이미지 설정
currentBg.style.backgroundImage = `url(${slides[0].image})`;
currentBg.style.backgroundPosition = slides[0].position;

setInterval(() => {
    const next = (current + 1) % slides.length;
    nextBg.style.backgroundImage = `url(${slides[next].image})`;
    nextBg.style.backgroundPosition = slides[next].position;
    nextBg.style.opacity = '1';
    // 숫자 바로 변경
    current = next;
    currentNum.textContent = current + 1;
    setTimeout(() => {
        currentBg.style.backgroundImage = `url(${slides[next].image})`;
        currentBg.style.backgroundPosition = slides[next].position;
        nextBg.style.opacity = '0';
    }, 1000);
}, 3000);

//메뉴 스크롤 시
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

//베스트 메뉴 누르기
const bestTab = document.querySelectorAll('.best > ul li');
const training = document.querySelector('.best .training');
const daily = document.querySelector('.best .daily');

bestTab[0].addEventListener('click', function(e) {
    e.preventDefault();

    bestTab[0].classList.add('active');
    bestTab[1].classList.remove('active');

    training.style.display = 'grid';
    daily.style.display = 'none';
});

bestTab[1].addEventListener('click', function(e) {
    e.preventDefault();

    bestTab[0].classList.remove('active');
    bestTab[1].classList.add('active');

    training.style.display = 'none';
    daily.style.display = 'grid';
});