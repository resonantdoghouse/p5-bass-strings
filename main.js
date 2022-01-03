import './style.css';

const sketch = (s) => {
  let eStringSound, aStringSound, dStringSound, gStringSound;
  let mouseY = 0;
  let posX = 200;
  let xoff = 0.0;

  // sine wave animation
  let offset = 0;
  let strum = 6;

  let aYPos, eYPos, dYPos, gYPos;

  s.setup = () => {
    s.createCanvas(400, 400);
    eYPos = s.height * 0.6;
    aYPos = s.height * 0.5;
    dYPos = s.height * 0.4;
    gYPos = s.height * 0.3;
  };

  s.preload = () => {
    console.log('preload');
    eStringSound = s.loadSound('./audio/e.mp3');
    aStringSound = s.loadSound('./audio/a.mp3');
    dStringSound = s.loadSound('./audio/d.mp3');
    gStringSound = s.loadSound('./audio/g.mp3');
  };

  s.draw = () => {
    xoff = xoff + 0.001;
    // let n = s.noise(xoff) * s.width;

    s.background(0);
    s.noFill();
    s.strokeWeight(2);

    // ball
    s.stroke('gold');
    s.circle(posX, mouseY || 200, 10);

    // sine wave animation

    offset += 0.1;

    // e string
    s.beginShape();
    s.stroke('green');
    s.vertex(0, eYPos);
    if (eStringSound.isPlaying()) {
      for (let x = 0; x < s.width; x++) {
        let angle = offset + x * 0.01;
        let y = s.map(s.sin(angle), -strum, strum, eYPos - 10, eYPos + 10);
        s.vertex(x, y);
      }
    }
    s.vertex(s.width, eYPos);
    s.endShape();

    // a string
    s.beginShape();
    s.stroke('red');
    s.vertex(0, aYPos);
    if (aStringSound.isPlaying()) {
      for (let x = 0; x < s.width; x++) {
        let angle = offset + x * 0.01;
        let y = s.map(
          s.sin(angle * 1.1),
          -strum,
          strum,
          aYPos - 10,
          aYPos + 10
        );
        s.vertex(x, y);
      }
    }
    s.vertex(s.width, aYPos);
    s.endShape();

    // d string
    s.beginShape();
    s.stroke('tan');
    s.vertex(0, dYPos);
    if (dStringSound.isPlaying()) {
      for (let x = 0; x < s.width; x++) {
        let angle = offset + x * 0.01;
        let y = s.map(
          s.sin(angle * 1.2),
          -strum,
          strum,
          dYPos - 10,
          dYPos + 10
        );
        s.vertex(x, y);
      }
    }
    s.vertex(s.width, dYPos);
    s.endShape();

    // g string
    s.beginShape();
    s.stroke('purple');
    s.vertex(0, gYPos);
    if (gStringSound.isPlaying()) {
      for (let x = 0; x < s.width; x++) {
        let angle = offset + x * 0.01;
        let y = s.map(
          s.sin(angle * 1.3),
          -strum,
          strum,
          gYPos - 10,
          gYPos + 10
        );
        s.vertex(x, y);
      }
    }
    s.vertex(s.width, gYPos);
    s.endShape();

    // follow mouse y
    if (s.mouseY !== 0) {
      mouseY = s.mouseY;
    }

    // e string pluck
    if (
      mouseY >= eYPos - 5 &&
      mouseY <= eYPos + 5 &&
      !eStringSound.isPlaying()
    ) {
      eStringSound.play();
    }
    // a string
    if (
      mouseY >= aYPos - 5 &&
      mouseY <= aYPos + 5 &&
      !aStringSound.isPlaying()
    ) {
      aStringSound.play();
    }
    // d string
    if (
      mouseY >= dYPos - 5 &&
      mouseY <= dYPos + 5 &&
      !dStringSound.isPlaying()
    ) {
      dStringSound.play();
    }
    // g string
    if (
      mouseY >= gYPos - 5 &&
      mouseY <= gYPos + 5 &&
      !gStringSound.isPlaying()
    ) {
      gStringSound.play();
    }
  };
};

const sketchInstance = new p5(sketch);
