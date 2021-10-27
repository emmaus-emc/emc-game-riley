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
var vijandX = 600; // x-positie van vijand
var vijandY = 50; // y-positie van vijand
var hp = 100; // health points

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // vijand
  vijandY = vijandY + 6;

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
  if
  (vijandX - spelerX > -50
  &&
  vijandX - spelerX < 50
  &&
  vijandY - spelerY > -50
    &&
    vijandY - spelerY < 50
  ) {
    console.log("botsing")
  }


  // botsing kogel tegen vijand


  // botsing muur
  if (spelerX >= 1280) {
    spelerX = 1280;
  }
  if (spelerX <= 0) {
    spelerX = 0;
  }
  if (spelerY <= 0) {
    spelerY = 0;
  }
  if (vijandY >= 720) {
    vijandY = 0;
    vijandX = random(0, 1280);
  }


};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  background('lightblue');
  // vijand

  fill("white")
  rect(vijandX - 25, vijandY - 25, 50, 50);

  fill("lightblue");
  ellipse(vijandX, vijandY, 10, 10);

  fill("yellow")
  rect(vijandX - 25, vijandY - 21, 50, 10);


  // kogel


  // speler

  fill("darkred");
  rect(spelerX - 25, spelerY - 25, 50, 50);

  fill("black");
  ellipse(spelerX, spelerY, 10, 10);

  fill("black")
  rect(spelerX - 25, spelerY - 21, 50, 10);


  // punten en health

}
/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
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

  }
}
