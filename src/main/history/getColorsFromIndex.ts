export default (index: number) => {
  if (index % 3 === 0) {
    return `--color1: #9251ac; --color2: #f6a4ec;`;
  } else if (index % 3 === 1) {
    return `--color1: #555ac0; --color2: #87bbfe;`;
  } else {
    return `--color1: #24b47e; --color2: #aff1b6;`;
  }
};
