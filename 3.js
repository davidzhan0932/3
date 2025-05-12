matchColumn(anotherSheet) {
  this.otherSheet = anotherSheet;

  const factor = (col1, col2) => {
    const thisSet = new Set(this.data2d.map(row => row[col1]));
    const otherSet = new Set(anotherSheet.data2d.map(row => row[col2]));

    const inBoth = [...thisSet].filter(x => otherSet.has(x)).length;
    const distinctThis = thisSet.size;
    const distinctOther = otherSet.size;

    return inBoth * 2 + distinctThis + distinctOther;
  };

  const matches = [];
  for (let i = 0; i < this.numberOfCols; i++) {
    for (let j = 0; j < anotherSheet.numberOfCols; j++) {
      matches.push([i, j, factor(i, j)]);
    }
  }

  matches.sort((a, b) => b[2] - a[2]);
  return matches.slice(0, 3);
}
