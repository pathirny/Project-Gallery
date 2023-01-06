let first = document.querySelector('#pro-btn');
let para = document.querySelector('#text');
let container = document.querySelector('#cont');
let hidden = document.querySelector('#hidden');

first.addEventListener('click', function(){
    para = document.getElementById('text').style.display = 'block';
    first = document.getElementById('pro-btn').style.display = 'none';
    container = document.getElementById('cont').style.height = '250px';
    hidden = document.getElementById('hidden').style.display = 'block';
})

