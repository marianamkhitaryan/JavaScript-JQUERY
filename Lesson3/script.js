function moveleft() {
    const img = document.getElementById('item');
    img.style.left = `${img.offsetLeft - 10}px`;
}
  
function moveright() {
    const img = document.getElementById('item');
    img.style.left = `${img.offsetLeft + 10}px`;
}
  
function moveup() {
    const img = document.getElementById('item');
    img.style.top = `${img.offsetTop - 10}px`;
}
  
function movedown() {
    const img = document.getElementById('item');
    img.style.top = `${img.offsetTop + 10}px`;
}
  
