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
// second button
let second = document.querySelector('#show2');
let para2 = document.getElementById('text2');
let container2 = document.querySelector('#cont2');
let hidden2 = document.querySelector('#hide2');

// show description
second.addEventListener('click', function(){
    para2 = document.getElementById('text2').style.display = 'block';
    second = document.getElementById('show2').style.display = 'none';
    container2 = document.getElementById('cont2').style.height = '250px';
    hidden2 = document.getElementById('hide2').style.display = 'block';
});

// hide description
hidden2.addEventListener('click', function(){
    para = document.getElementById('text2').style.display = 'none';
    second = document.getElementById('show2').style.display = 'block';
    container = document.getElementById('cont2').style.height = '66px';
    hidden = document.getElementById('hide2').style.display = 'none';
});

// third button
let third = document.querySelector('#show3');
let para3 = document.getElementById('text3');
let container3 = document.querySelector('#cont3');
let hidden3 = document.querySelector('#hide3');

// show description
third.addEventListener('click', function(){
    para3 = document.getElementById('text3').style.display = 'block';
    third = document.getElementById('show3').style.display = 'none';
    container3 = document.getElementById('cont3').style.height = '250px';
    hidden3 = document.getElementById('hide3').style.display = 'block';
});

// hide description
hidden3.addEventListener('click', function(){
    para3 = document.getElementById('text3').style.display = 'none';
    third = document.getElementById('show3').style.display = 'block';
    container3 = document.getElementById('cont3').style.height = '66px';
    hidden3 = document.getElementById('hide3').style.display = 'none';
});

// fourth button
let fourth = document.querySelector('#show4');
let para4 = document.getElementById('text4');
let container4 = document.querySelector('#cont4');
let hidden4 = document.querySelector('#hide4');

// show description
fourth.addEventListener('click', function(){
    para4 = document.getElementById('text4').style.display = 'block';
    fourth = document.getElementById('show4').style.display = 'none';
    container4 = document.getElementById('cont4').style.height = '250px';
    hidden4 = document.getElementById('hide4').style.display = 'block';
});

// hide description
hidden4.addEventListener('click', function(){
    para4 = document.getElementById('text4').style.display = 'none';
    fourth = document.getElementById('show4').style.display = 'block';
    container4 = document.getElementById('cont4').style.height = '66px';
    hidden4 = document.getElementById('hide4').style.display = 'none';
});
