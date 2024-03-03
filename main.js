const container = document.querySelector("#container");

function createRow(perRow = 16) {
  const row = document.createElement("div");
  row.classList.add("row");

  for (let i = 1; i <= perRow; i++) {
    const rowItem = document.createElement("div");
    rowItem.classList.add("row-item");
    rowItem.textContent = i;

    rowItem.addEventListener("mouseover", () => {
      rowItem.style.backgroundColor = "black";
    });

    row.appendChild(rowItem);
  }

  return row;
}

for (let i = 1; i <= 16; i++) {
  container.appendChild(createRow());
}
