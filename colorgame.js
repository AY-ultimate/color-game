var colordisplay = document.querySelector('#colordisplay');
var displaymessage = document.querySelector('#displaymessage');
var squares = document.querySelectorAll('.squares');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset')

var colors = generaterandomcolors(6);
var pickedcolor = colors[Math.floor(Math.random() * 5)]
// rgb( 255, 176, 83)
game();

function game() {
    colordisplay.innerHTML = pickedcolor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];

        squares[i].addEventListener('click', function(){
            var squarescolor = this.style.backgroundColor;

            if(squarescolor == pickedcolor){
                displaymessage.innerHTML = "correct";
                for(var i = 0; i < squares.length; i++){
                    squares[i].style.backgroundColor = squarescolor;
                }
                h1.style.background = squarescolor;
                resetButton.innerHTML = "PLAY AGAIN"
            }else{
                displaymessage.innerHTML = 'try again';
                this.style.backgroundColor = 'indianred'
            }
        })
     
    }

}
resetButton.addEventListener('click', function(){
colors = generaterandomcolors(6);
pickedcolor = colors[Math.floor(Math.random() * 5)]
game();
})



function generaterandomcolors(numbers){
    var arr = [];
    for(var i = 0; i < numbers; i++){
        var r = Math.floor(Math.random()* 255);
        var g = Math.floor(Math.random()* 255);
        var b = Math.floor(Math.random()* 255);
        var color ="rgb("+ r +", "+ g +", "+ b +")";

        arr.push(color);

    }
    return arr;
}