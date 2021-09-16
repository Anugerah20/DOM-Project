// Selamat Datang
alert('Selamat Datang, Untuk Game Ini Belum Responsive Di Mobile');

// Pilihan Komputer
function LihatPilihanKomputer () {
    const komp = Math.random();
    if (komp < 0.34) return  'gajah';
    if (komp >= 0.34 && komp < 0.67) return 'orang'; 
    return 'semut';
}

function LihatHasil (komp, player) {
    if(player == komp) return 'SERI!';
    if(player == 'gajah') return (komp == 'orang') ? 'MENANG!' : 'KALAH!';
    if(player == 'orang') return (komp == 'gajah') ? 'KALAH!' : 'MENANG!';
    if(player == 'semut') return (komp == 'orang') ? 'KALAH!' : 'MENANG!';
}
// Ganti gambar acak secara otomatis
function acak() {
    const GambarKomputer = document.querySelector('.gambar-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let j = 0;
    const waktuMulai = new Date().getTime();
    setInterval( function () {
        if(new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return; 
        }
        GambarKomputer.setAttribute('src', 'Image/' + gambar[j++] + '.png');
        if(j == gambar.length) j = 0;
    }, 100)
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (tampilkan) {
    tampilkan.addEventListener('click', function() {
        const PilihanKomputer = LihatPilihanKomputer();
        const PilihanPlayer = tampilkan.className;
        const hasil = LihatHasil(PilihanKomputer, PilihanPlayer);

        acak();

    setTimeout(function() {
        const GambarKomputer = document.querySelector('.gambar-komputer');
        GambarKomputer.setAttribute('src', 'Image/' + PilihanKomputer + '.png');

        // Tampilkan Pesan
        const pesan = document.querySelector('.info');
        pesan.innerHTML = hasil;
        }, 1000);
    });
});





// Aksi ketika pilihan Pertama diklik
// const playGajah = document.querySelector('.gajah');
// playGajah.addEventListener('click', function() {

// Aksi ketika pilihan Kedua diklik
// const playOrang = document.querySelector('.orang');
// playOrang.addEventListener('click', function() {
// const PilihanKomputer = LihatPilihanKomputer();
// const PilihanPlayer = playOrang.className;
// const hasil = LihatHasil(PilihanKomputer, PilihanPlayer);
    
//const GambarKomputer = document.querySelector('.gambar-komputer');
//GambarKomputer.setAttribute('src', 'Image/' + PilihanKomputer + '.png');

//     // Tampilkan Pesan
//     const pesan = document.querySelector('.info');
//     pesan.innerHTML = hasil;
// });


// Aksi ketika pilihan Ketiga diklik
// const playSemut = document.querySelector('.semut');
// playSemut.addEventListener('click', function() {
//     const PilihanKomputer = LihatPilihanKomputer();
//     const PilihanPlayer = playSemut.className;
//     const hasil = LihatHasil(PilihanKomputer, PilihanPlayer);
    
//     const GambarKomputer = document.querySelector('.gambar-komputer');
//     GambarKomputer.setAttribute('src', 'Image/' + PilihanKomputer + '.png');

//     // Tampilkan Pesan
//     const pesan = document.querySelector('.info');
//     pesan.innerHTML = hasil;
// });

