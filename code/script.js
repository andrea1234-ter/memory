
let simboli = [
    ["🍎", "🍎", "⭐", "⭐"],
    ["🍀", "🍀", "🔥", "🔥"]
];


let scoperta = [
    [false, false, false, false],
    [false, false, false, false]
];


let game = document.getElementById("game");


let r1 = -1, c1 = -1;
let r2 = -1, c2 = -1;
let blocco = false;


for (let r = 0; r < 2; r++) {
    for (let c = 0; c < 4; c++) {
        game.innerHTML +=
            "<div class='card' id='c" + r + c + "'>?</div>";
    }
}


for (let r = 0; r < 2; r++) {
    for (let c = 0; c < 4; c++) {

        let carta = document.getElementById("c" + r + c);

        carta.onclick = function () {

            if (blocco || scoperta[r][c] == true) {
                return;
            }

           
            carta.innerHTML = simboli[r][c];
            scoperta[r][c] = true;

          
            if (r1 == -1) {
                r1 = r;
                c1 = c;
            }
         
            else {
                r2 = r;
                c2 = c;
                blocco = true;

                setTimeout(function () {

                  
                    if (simboli[r1][c1] != simboli[r2][c2]) {
                        document.getElementById("c" + r1 + c1).innerHTML = "?";
                        document.getElementById("c" + r2 + c2).innerHTML = "?";
                        scoperta[r1][c1] = false;
                        scoperta[r2][c2] = false;
                    }

                
                    r1 = -1; c1 = -1;
                    r2 = -1; c2 = -1;
                    blocco = false;

                }, 800);
            }
        };
    }
}
