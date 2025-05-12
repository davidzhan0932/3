maketable() {
  if (!this.data2d.length) return "<table></table>";

  let html = "<table border='1'>";
  html += "<thead><tr>";
  this.heading.forEach(col => {
    html += `<th>${col}</th>`;
  });
  html += "</tr></thead><tbody>";

  this.data2d.forEach(row => {
    html += "<tr>";
    row.forEach(cell => {
      html += `<td>${cell}</td>`;
    });
    html += "</tr>";
  });

  html += "</tbody></table>";
  return html;
}
