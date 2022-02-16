window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");

  btn.addEventListener("click", function () {
    const bgColor = bgRgbColor();
    root.style.backgroundColor = bgColor;
  });
}

function bgRgbColor() {
  const green = Math.floor(Math.random() * 255);
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${green}, ${red}, ${blue})`;
}
