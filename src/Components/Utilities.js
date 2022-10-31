export function getDarkColor() {
    let randomCol = '#';
    for (let i = 0; i < 6; i++) {
      randomCol += Math.floor(Math.random() * 10);
    }
    return randomCol;
  }