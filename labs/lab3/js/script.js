let inventory = [
    { name: "Reaver Vandal", type: "Vandal", price: 1775, quantity: 28, description: "Premium skin in Reaver bundle." },
    { name: "Oni Phantom", type: "Phantom", price: 1775, quantity: 39, description: "Premium skin in Oni bundle." },
    { name: "Prime Vandal", type: "Vandal", price: 1775, quantity: 50, description: "Premium skin in Prime bundle." },
    { name: "Xerofang knife", type: "Knife", price: 4350, quantity: 2, description: "Premium knife in Xerofang bundle." },
    { name: "Gaia's Vengeance Vandal", type: "Vandal", price: 1775, quantity: 24, description: "Premium skin in Gaia's Vengeance bundle." },
    { name: "Neo Frontier Sheriff", type: "Sheriff", price: 2175, quantity: 30, description: "Exclusive skin in Neo Frontier bundle." },
    { name: "Prime Odin", type: "Odin", price: 1775, quantity: 80, description: "Premium skin in Prime bundle." },
    { name: "Xerofang Vandal", type: "Vandal", price: 1775, quantity: 2, description: "Premium skin in Xerofang bundle." },
    { name: "Gaia's Vengeance Marshal", type: "Marshal", price: 1775, quantity: 34, description: "Premium skin in Gaia's Vengeance bundle." },
    { name: "Oni Vandal", type: "Vandal", price: 1775, quantity: 99, description: "Premium skin in Oni bundle." },
];

function addItem() {
    let name = document.getElementById("skinName").value;
    let type = document.getElementById("gunType").value;
    let price = parseFloat(document.getElementById("skinPrice").value);
    let quantity = parseInt(document.getElementById("skinQuantity").value);
    let description = document.getElementById("skinDescription").value;

    if (name && type && !isNaN(price) && !isNaN(quantity) && description) {
        let item = { name, type, price, quantity, description };
        inventory.push(item);
        listItems();
    } else {
        alert("Please fill in all fields correctly.");
    }
}

function removeItem(itemName) {
    inventory = inventory.filter(item => item.name !== itemName);
    listItems();
}

function getItem(itemName) {
    return inventory.find(item => item.name === itemName);
}

function listItems() {
    let inventoryDiv = document.getElementById("inventory");
    inventoryDiv.innerHTML = "";
    inventory.forEach(item => {
        let itemDiv = document.createElement("div");
        itemDiv.innerHTML = `<strong>${item.name}</strong> (${item.type}) - ${item.price} VP x${item.quantity} <br> ${item.description}`;
        let removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";
        removeBtn.onclick = () => removeItem(item.name);
        itemDiv.appendChild(removeBtn);
        inventoryDiv.appendChild(itemDiv);
    });
}

function searchItems() {
    let query = document.getElementById("searchBox").value.toLowerCase();
    let filteredItems = inventory.filter(item => item.name.toLowerCase().includes(query) || item.type.toLowerCase().includes(query));
    let inventoryDiv = document.getElementById("inventory");
    inventoryDiv.innerHTML = "";
    filteredItems.forEach(item => {
        let itemDiv = document.createElement("div");
        itemDiv.innerHTML = `<strong>${item.name}</strong> (${item.type}) - ${item.price} VP x${item.quantity} <br> ${item.description}`;
        inventoryDiv.appendChild(itemDiv);
    });
}

function calculateTotalValue() {
    let total = inventory.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert("Total Inventory Value: VP" + total.toFixed(2));
}

listItems();
