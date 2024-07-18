document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("colour-change");
    const colors = ["#6D3B47","#886F68","#424C55","#3D2C2E"," #2E1F27"];
    let colorIndex = 0;

    function changeColor() {
        textElement.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }

    setInterval(changeColor, 500); // Change color every 500 milliseconds
});

var headone = document.querySelector('#one')
headone.addEventListener('mouseover',function(){
    headone.style.color = 'brown'
    headone.textContent = "I'm loving it🥤🥤"
})

var headone = document.querySelector('#one')
headone.addEventListener('mouseout',function(){
    headone.style.color = 'black';
    headone.textContent = "THE 'LOVING COFFEE' PROJECT" ;

})

$('h3').toggleClass('turnblue')