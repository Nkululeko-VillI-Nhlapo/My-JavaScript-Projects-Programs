window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('purchase-btn').addEventListener('click', calculateChange);
});

function calculateChange() {
    const cid = [
        ["PENNY", 1], // 1 cent
        ["NICKEL", 5], // 5 cents
        ["DIME", 10], // 10 cents
        ["QUARTER", 25], // 25 cents
        ["ONE", 100], // R1
        ["FIVE", 500], // R5
        ["TEN", 1000], // R10
        ["TWENTY", 2000], // R20
        ["ONE HUNDRED", 10000] // R100
    ];

    const price = parseFloat(prompt("Enter the price in Rands:"));
    const cash = parseFloat(document.getElementById('cash').value);

    const changeDue = document.getElementById('change-due');

    const change = (cash * 100) - (price * 100); // Convert Rands to cents for accurate calculations

    if (change < 0) {
        alert("Customer does not have enough money to purchase the item");
    } else if (change === 0) {
        changeDue.textContent = "No change due - customer paid with exact cash";
    } else {
        const changeStatus = getChangeStatus(change, cid);
        changeDue.textContent = changeStatus;
    }
}

function getChangeStatus(change, cid) {
    let changeStatus = "";
    let changeLeft = change;

    const currencyUnits = {
        "PENNY": 1,
        "NICKEL": 5,
        "DIME": 10,
        "QUARTER": 25,
        "ONE": 100,
        "FIVE": 500,
        "TEN": 1000,
        "TWENTY": 2000,
        "ONE HUNDRED": 10000
    };

    const cashInDrawer = Object.fromEntries(cid);

    for (let i = cid.length - 1; i >= 0; i--) {
        const unitName = cid[i][0];
        const unitValue = cid[i][1];
        const unitAvailable = unitValue / currencyUnits[unitName];
        const unitsToGive = Math.min(changeLeft / currencyUnits[unitName], unitAvailable);
        const amountToGive = unitsToGive * currencyUnits[unitName];
        changeLeft = parseFloat((changeLeft - amountToGive).toFixed(2));
        cashInDrawer[unitName] -= amountToGive;

        if (unitsToGive > 0) {
            changeStatus += `${unitName}: R${(amountToGive / 100).toFixed(2)} `;
        }

        if (changeLeft === 0) {
            changeStatus = "Status: OPEN " + changeStatus;
            break;
        }
    }

    if (changeLeft > 0) {
        changeStatus = "Status: INSUFFICIENT_FUNDS";
    }

    return changeStatus.trim();
}

