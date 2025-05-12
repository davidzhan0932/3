class Sheet {
  constructor(fileInputOrContent) {
    this.content = typeof fileInputOrContent === "string" ? fileInputOrContent : "";
    this.data2d = [];
    this.heading = [];
    this.numberOfRows = 0;
    this.numberOfCols = 0;
    this.filename = "";
    this.mismatch = [];
    this.matchColumns = -1;
    this.mergeColumns = [];
    this.otherSheet = null;

    if (typeof fileInputOrContent === "string") {
      this.parseCSV(fileInputOrContent);
    } else if (fileInputOrContent instanceof File) {
      this.filename = fileInputOrContent.name;
      const reader = new FileReader();
      reader.onload = (event) => {
        this.content = event.target.result;
        this.parseCSV(this.content);
      };
      reader.readAsText(fileInputOrContent);
    }
  }

  parseCSV(content) {
    const lines = content.trim().split("\n").map(line => line.split(","));
    this.heading = lines[0];
    this.data2d = lines.slice(1);
    this.numberOfRows = this.data2d.length;
    this.numberOfCols = this.heading.length;
  }
}
