if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {

let highestZ = 1;

class Paper {
  constructor(paperElement) {
    this.paper = paperElement;
    this.holding = false;
    this.startX = 0;
    this.startY = 0;
    this.offsetX = 0;
    this.offsetY = 0;
    this.rotation = (Math.random() * 30 - 15); // Random rotation once
    this.hasRotated = false;

    this.init();
  }

  init() {
    this.paper.addEventListener("touchstart", (e) => {
      if (e.touches.length > 1) return;
      e.preventDefault();

      this.holding = true;
      this.paper.style.zIndex = highestZ++;

      const touch = e.touches[0];
      this.startX = touch.clientX - this.offsetX;
      this.startY = touch.clientY - this.offsetY;

      if (!this.hasRotated) {
        this.paper.style.transform += ` rotate(${this.rotation}deg)`;
        this.hasRotated = true;
      }
    }, { passive: false });

    this.paper.addEventListener("touchmove", (e) => {
      if (!this.holding) return;
      e.preventDefault();

      const touch = e.touches[0];
      this.offsetX = touch.clientX - this.startX;
      this.offsetY = touch.clientY - this.startY;

      this.paper.style.transform = `translate(${this.offsetX}px, ${this.offsetY}px) rotate(${this.rotation}deg)`;
    }, { passive: false });

    this.paper.addEventListener("touchend", () => {
      this.holding = false;
    });
  }

  reset() {
    this.offsetX = 0;
    this.offsetY = 0;
    this.paper.style.transform = `translate(0px, 0px) rotate(${this.rotation}deg)`;
  }
}

// Initialize all papers
const paperElements = Array.from(document.querySelectorAll(".paper"));
const paperInstances = paperElements.map(paper => new Paper(paper));

}

