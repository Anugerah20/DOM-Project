/* Mengatur Dark Mode - Cara pertama menggunakan *
//onclick="darkmode()"
// function darkMode() {
//     let model = document.body;
//     model.classList.toggle('dark-mode');
// }


/*Mengatur Dark Mode - Cara kedua*/
//const DarkMode = document.getElementById('DarkMode');
//DarkMode.onclick = function() {
    // document.body.style.backgroundColor = '#000';
    // document.body.setAttribute('class', 'hitam');
    // document.body.classList.toggle('hitam');
// }

const DarkMode = document.getElementById('DarkMode');
function darkMode() {
    document.body.classList.toggle('hitam');
}

const randomColor = document.createElement('button');
const textColor = document.createTextNode('Warna acak');
randomColor.appendChild(textColor);
randomColor.setAttribute('type', 'button');
DarkMode.after(randomColor);

randomColor.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    
    document.body.style.background = 'rgb('+ r +','+ g +', '+ b +')';
});

// Studi Kasus 3
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.background = 'rgb('+ r +','+ g +','+ b +')'
});


sHijau.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.background = 'rgb('+ r +','+ g +','+ b +')'
});

sBiru.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.background = 'rgb('+ r +','+ g +','+ b +')'
});


// Studi kasus 4 Mouse digerakan background berubah warna
document.body.addEventListener('mousemove', function(event) {
    // Posisi mouse digerakan
    // console.info(event.clientX);

    // Ukuran Browser
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);

    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    
    document.body.style.background = 'rgb('+ xPos +','+ yPos +',100)'
});