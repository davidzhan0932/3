mergeColumns() {
  if (!this.otherSheet) return;

  this.otherSheet.data2d.forEach((row, rowIndex) => {
    if (!this.data2d[rowIndex]) {
      this.data2d[rowIndex] = Array(this.numberOfCols).fill("");
    }
    this.data2d[rowIndex] = this.data2d[rowIndex].concat(row);
  });

  this.heading = this.heading.concat(this.otherSheet.heading);
  this.numberOfCols = this.heading.length;
}
