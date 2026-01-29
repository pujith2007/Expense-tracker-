# 💸 Expense Tracker Web App

A clean, modern, and interactive **Expense Tracker** built using **pure HTML, CSS, and JavaScript**.  
This project helps users track income and expenses, manage a daily budget, and visualize spending in real time — all without any external libraries or frameworks.

---

## 📌 Overview

Managing daily expenses is important, but most tools are either too complex or cluttered.  
This Expense Tracker focuses on **simplicity, usability, and clean UI**, while still offering powerful features like budget limits, notifications, dark mode, and undo actions.

The project is built as a **single-page web application** using vanilla technologies to strengthen core frontend concepts such as DOM manipulation, event handling, and UI state management.

---

## ✨ Features

### 💰 Transaction Management
- Add **Income** and **Expense** entries
- Instantly updates totals and balance
- Delete transactions with a safe **Undo** option

### 📊 Financial Summary
- Real-time calculation of:
  - Total Income
  - Total Expense
  - Savings
  - Current Balance
- Clear visual distinction between income and expenses

### 📈 Budget Tracking
- Set a **daily budget limit**
- Animated progress bar showing budget usage
- Color indicators:
  - 🟢 Green → Safe zone
  - 🟡 Yellow → Nearing limit
  - 🔴 Red → Budget exceeded

### 🔔 Notifications System
- Slide-in notification panel
- Alerts when budget is exceeded
- Notification count badge

### 🌙 Dark / Light Mode
- One-click theme toggle
- Uses CSS variables for smooth theme switching

### 🎨 User Experience
- Modern card-based UI
- Smooth hover effects & transitions
- Toast messages for actions and alerts
- Responsive layout for different screen sizes

---

## 🗂️ Project Structure

expense-tracker/
├── index.html # HTML structure
├── style.css # Styling, themes, layout, animations
└── script.js # JavaScript logic & DOM handling



---

## 🛠️ Technologies Used

| Technology | Purpose |
|---------|--------|
| HTML5 | Page structure |
| CSS3 | Styling, dark mode, animations |
| JavaScript (Vanilla) | Logic, DOM manipulation, events |

> No frameworks, no libraries — 100% core web technologies.

---

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Edge, Firefox, etc.)

### Installation & Run
1. Download or clone the repository
2. Ensure all files are in the same folder
3. Open `index.html` in your browser

```bash
git clone <repository-url>
cd expense-tracker



🧠 How It Works (Logic Overview)

Transactions are stored in a JavaScript array

Income and expenses are recalculated on every change

Budget usage is derived from total expenses

UI updates dynamically using DOM manipulation

Notifications and toast messages improve feedback

Dark mode is handled via CSS variables and class toggling

🧪 Example Use Case

Add your daily income

Add expense entries (food, travel, etc.)

Set a daily budget

Monitor spending through the progress bar

Receive alerts when budget is exceeded

Undo accidental deletions instantly

🔮 Future Enhancements

💾 Save data using localStorage

📅 Monthly & yearly budget tracking

🏷️ Expense categories (Food, Travel, Shopping)

📊 Charts & analytics

📱 Mobile-first / PWA support
