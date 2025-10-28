const amount = document.getElementById('amount')
const intrestRate = document.getElementById('rate');
const term = document.getElementById('term');
const resultBox = document.getElementById("resultBox")
const repayment = document.getElementById("repayment")
const interestOpt = document.getElementById("interest")

function calculatePayment() {
    let monthly = null;
    let amt = parseFloat(amount.value);
    let newOverAll = amt;
    let ter = parseInt(term.value);
    let interest = parseFloat(intrestRate.value);
    if (repayment.checked) {
        monthly = amt / (ter * 12);
    } else {
        monthly = amt / (ter * 12);
        monthly = monthly + (monthly * (interest / 100));
        newOverAll = amt + (amt * (interest / 100))
    }
    document.getElementById("newMonthly").innerText = new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'}).format(monthly);
    document.getElementById("newOverall").innerText = "£" + newOverAll;
    resultBox.style.display = "block";
}

document.getElementById("calcBtn").addEventListener("click", calculatePayment)