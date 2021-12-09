/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
var spelStatus = SPELEN;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler
var vijandX = 300; // x-positie van vijand
var vijandY = 50; // y-positie van vijand
var vijandX1 = 300; // x-positie van vijand1
var vijandY1 = 50; // y-positie van vijand1
var vijandX2 = 900; // x-positie van vijand2
var vijandY2 = 50; // y-positie van vijand2
var hp = 1; // health points
var punten = 0; //points
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // vijand
  vijandY = vijandY + 6;
  vijandY1 = vijandY1 + 6;
  vijandY2 = vijandY2 + 6;
  // kogel


  // speler
  if (keyIsDown(LEFT_ARROW)) {
    spelerX = spelerX - 10;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    spelerX = spelerX + 10;
  }
  if (keyIsDown(UP_ARROW)) {
    spelerY = spelerY - 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    spelerY = spelerY + 10;
  }

};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten vijanden
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand

  for (var i = 0; i < 8; i = i + 1) {
    if
    (vijandX+i*100 - spelerX > -50
    &&
    vijandX+i*100 - spelerX < 50
    &&
    vijandY - spelerY > -50
      &&
      vijandY - spelerY < 50
    ) {
      console.log("botsing")
      hp = hp - 1;
    }
  }






  // botsing kogel tegen vijand


  // botsing muur speler
  if (spelerX >= 1280) {
    spelerX = 1280;
  }
  if (spelerX <= 0) {
    spelerX = 0;
  }
  if (spelerY <= 0) {
    spelerY = 0;
  }
  if (spelerY >= 720) {
    spelerY = 720;
  }
  //botsing muur vijanden 
  if (vijandY >= 720) {
    vijandY = 0;
  }
  if (vijandY1 >= 720) {
    vijandY1 = 0;
  }
  if (vijandY2 >= 720) {
    vijandY2 = 0;
  }

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  background('lightblue');
  // vijand
  for (var i = 0; i < 8; i = i + 1) {
    fill("white")
    rect(vijandX + (i * 100), vijandY - 25, 50, 50);

    fill("lightblue");
    ellipse(vijandX + (i * 100) + 23, vijandY + 2, 10, 10);

    fill("yellow")
    rect(vijandX + (i * 100), vijandY - 21, 50, 10);
  }

  // kogel


  // speler

  fill("darkred");
  rect(spelerX - 25, spelerY - 25, 50, 50);

  fill("black");
  ellipse(spelerX, spelerY, 10, 10);

  fill("black")
  rect(spelerX - 25, spelerY - 21, 50, 10);


  // punten en health
  textSize(90);
  text(hp, 50, 100);
  punten = punten + 1 / 50;
  text('punten: \n' + floor(punten), 900, 80);
};
/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  if (hp == 0) {
    return true;
  }
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
    background('black')
    textSize(150)
    fill('lightblue')
    text("GameOver >:]", 170, 360)
    textSize(90)
    fill('lightblue')
    text("Score:" + floor(punten), 170, 540)
  }
}
