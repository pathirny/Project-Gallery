// first button
let first = document.querySelector('#show1');
let para = document.getElementById('text1');
let container = document.querySelector('#cont1');
let hidden = document.querySelector('#hide1');

// show description
first.addEventListener('click', function(){
    para = document.getElementById('text1').style.display = 'block';
    first = document.getElementById('show1').style.display = 'none';
    container = document.getElementById('cont1').style.height = '250px';
    hidden = document.getElementById('hide1').style.display = 'block';
});

// hide description
hide1.addEventListener('click', function(){
    para = document.getElementById('text1').style.display = 'none';
    first = document.getElementById('show1').style.display = 'block';
    container = document.getElementById('cont1').style.height = '66px';
    hidden = document.getElementById('hide1').style.display = 'none';
});

