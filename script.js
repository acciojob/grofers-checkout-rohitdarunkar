const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all price elements
  const prices = document.querySelectorAll(".price");

  let total = 0;

  // Calculate total price
  prices.forEach((price) => {
    total += Number(price.textContent);
  });

  // Get the table
  const table = document.querySelector("table");

  // Create new row and cell
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: Rs ${total}`;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

