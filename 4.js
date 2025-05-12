matchRows() {
  if (!this.otherSheet) return [];

  const mismatches = [];

  this.data2d.forEach((row, rowIndex) => {
    const otherRow = this.otherSheet.data2d[rowIndex];
    if (otherRow) {
      const rowMismatch = row.map((cell, colIndex) =>
        cell !== otherRow[colIndex] ? [cell, otherRow[colIndex]] : null
      ).filter(Boolean);

      if (rowMismatch.length > 0) {
        mismatches.push({ row: rowIndex, mismatched: rowMismatch });
      }
    }
  });

  this.mismatch = mismatches;
  return mismatches;
}
