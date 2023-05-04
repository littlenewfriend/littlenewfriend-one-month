var likeBtn = document.querySelector('.like-btn');

likeBtn.addEventListener('click', function () {
    var plusOne = document.createElement('span');
    plusOne.classList.add('plus-one');
    plusOne.textContent = '+1';
    likeBtn.appendChild(plusOne);

    setTimeout(function () {
        likeBtn.removeChild(plusOne);
    }, 1000);
});
