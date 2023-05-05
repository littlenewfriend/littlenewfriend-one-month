document.addEventListener('DOMContentLoaded', function () {
    var swiper1 = new Swiper('.swiper-container-1', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination-1',
            clickable: true,
        },
    });

    var swiper2 = new Swiper('.swiper-container-2', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination-2',
            clickable: true,
        },
    });

    var likeBtns = document.querySelectorAll('.like-btn');

    likeBtns.forEach(function (likeBtn) {
        likeBtn.addEventListener('click', function () {
            var plusOne = document.createElement('span');
            plusOne.classList.add('plus-one');
            plusOne.textContent = '+1';
            likeBtn.appendChild(plusOne);

            setTimeout(function () {
                likeBtn.removeChild(plusOne);
            }, 1000);
        });
    });
});
