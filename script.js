let transactions = [];
let notifications = [];
let dailyLimit = 0;
let lastDeleted = null;
let undoTimer = null;

const nameEl = document.getElementById("name");
const typeEl = document.getElementById("type");
const amountEl = document.getElementById("amount");
const limitEl = document.getElementById("limit");

const listEl = document.getElementById("list");
const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const savingsEl = document.getElementById("savings");
const barFill = document.getElementById("barFill");

const notifyPanel = document.getElementById("notifyPanel");
const overlay = document.getElementById("overlay");
const notifyCount = document.getElementById("notifyCount");
const notifyList = document.getElementById("notifyList");
const toast = document.getElementById("toast");

document.getElementById("themeToggle").onclick =
  () => document.body.classList.toggle("dark");

document.getElementById("notifyBtn").onclick = () => {
  notifyPanel.classList.add("show");
  overlay.classList.add("show");
};
overlay.onclick = closeNotify;
function closeNotify() {
  notifyPanel.classList.remove("show");
  overlay.classList.remove("show");
}

function setBudget() {
  dailyLimit = Number(limitEl.value) || dailyLimit;
}

function addTransaction() {
  const name = nameEl.value.trim();
  const type = typeEl.value;
  const amount = Number(amountEl.value);

  if (!name || !amount) return;

  transactions.push({ name, type, amount });
  nameEl.value = "";
  amountEl.value = "";

  render();
  checkLimit();
}

function render() {
  listEl.innerHTML = "";
  let income = 0, expense = 0;

  transactions.forEach((t, index) => {
    listEl.innerHTML += `
      <tr>
        <td>${t.name}</td>
        <td style="color:${t.type==="income"?"green":"red"}">
          ${t.type==="income"?"₹":"-₹"}${t.amount}
        </td>
        <td>
          <button class="del-btn" onclick="deleteTransaction(${index})">🗑</button>
        </td>
      </tr>
    `;
    t.type==="income" ? income+=t.amount : expense+=t.amount;
  });

  incomeEl.textContent = income;
  expenseEl.textContent = expense;
  savingsEl.textContent = income - expense;
  balanceEl.textContent = "₹" + (income - expense);

  const spent = expense;
  if (dailyLimit) {
    const percent = Math.min(100, (spent / dailyLimit) * 100);
    barFill.style.width = percent + "%";

    if (percent < 70) {
      barFill.style.background = "linear-gradient(90deg,#22c55e,#14b8a6)";
    } else if (percent < 100) {
      barFill.style.background = "linear-gradient(90deg,#facc15,#f59e0b)";
    } else {
      barFill.style.background = "linear-gradient(90deg,#ef4444,#dc2626)";
    }
  } else {
    barFill.style.width = "0%";
  }
}

function deleteTransaction(index) {
  lastDeleted = { item: transactions[index], index };
  transactions.splice(index, 1);
  render();
  showUndoToast("Transaction deleted");
}

function showUndoToast(msg) {
  toast.innerHTML = `${msg}
    <button onclick="undoDelete()" style="background:none;border:none;color:#fff;font-weight:600;cursor:pointer;">UNDO</button>`;
  toast.classList.add("show");
  clearTimeout(undoTimer);
  undoTimer = setTimeout(()=>toast.classList.remove("show"),4000);
}

function undoDelete() {
  if (!lastDeleted) return;
  transactions.splice(lastDeleted.index,0,lastDeleted.item);
  lastDeleted = null;
  toast.classList.remove("show");
  render();
}

function checkLimit() {
  const spent = transactions.filter(t=>t.type==="expense")
    .reduce((a,b)=>a+b.amount,0);

  if (dailyLimit && spent > dailyLimit) {
    showUndoToast("Daily budget exceeded!");
    addNotification("Budget exceeded by ₹" + (spent - dailyLimit));
  }
}

function addNotification(msg) {
  notifications.push(msg);
  notifyCount.textContent = notifications.length;
  const li = document.createElement("li");
  li.textContent = msg;
  notifyList.appendChild(li);
}
