const contain = document.querySelector('.container');
const big = document.querySelector('.big-image');
const thumbs = document.querySelectorAll('.thub');

contain.addEventListener('click',function(e) {
    if(e.target.className == 'thub') {
        big.setAttribute('src',e.target.src)
        big.classList.add('fade');
        setTimeout(function() {
            big.classList.remove('fade');
        },1000);

        // Klik gambar dan hilangkan opacity
        thumbs.forEach(function(thub) {
            thub.className = 'thub';
        });

        e.target.classList.add('active');
    }
});
