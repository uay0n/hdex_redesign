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