const countEl = document.querySelector("#count");
const incrementBtn = document.querySelector("#increment");
const resetBtn = document.querySelector("#reset");

let count = 0;

function render() {
  countEl.textContent = String(count);
}

incrementBtn.addEventListener("click", () => {
  count += 1;
  render();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  render();
});

render();
