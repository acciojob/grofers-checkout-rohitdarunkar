const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach(p => {
    total += Number(p.textContent);
  });

  let ans = document.getElementById("ans");

  if (!ans) {
    const table = document.querySelector("table");
    const row = document.createElement("tr");
    ans = document.createElement("td");

    ans.id = "ans";
    ans.colSpan = 2;

    row.appendChild(ans);
    table.appendChild(row);
  }

  ans.textContent = total;
};

getSumBtn.addEventListener("click", getSum);
