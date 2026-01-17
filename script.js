const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Get all price cells (Cypress expects .prices)
  const prices = document.querySelectorAll(".prices");

  let total = 0;

  prices.forEach((p) => {
    total += Number(p.textContent);
  });

  // Check if total row already exists
  let ansCell = document.getElementById("ans");

  if (!ansCell) {
    const table = document.querySelector("table");
    const row = document.createElement("tr");
    ansCell = document.createElement("td");

    ansCell.id = "ans";
    ansCell.colSpan = 2;

    row.appendChild(ansCell);
    table.appendChild(row);
  }

  ansCell.textContent = total;
};

getSumBtn.addEventListener("click", getSum);
