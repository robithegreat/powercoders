console.log('My code is running !');

function greet(name){
  console.log('Hello,' + name);
}

function setClassTip(event){
  let el = document.getElementById('mypara');
  el.className = 'tip';
}

function setClassWarning(){
  let el = document.getElementById('mypara')
  el.className = 'warning';
}

function ClearClass(){
  let el = document.getElementById('mypara')
  el.className = '';
}
