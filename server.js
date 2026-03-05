const express = require("express");
const path = require("path");
const app = express();

/* VERY IMPORTANT */
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

/* TEST ROUTE */
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "home.html"));
});

/* PRODUCTS API */
app.get("/api/products", (req, res) => {
    res.json({
        products: [
            { name: "Sucralsain", cost: 850 },
            { name: "Dolo-650", cost: 95 },
            { name: "Paracetamol", cost: 60 },
            { name: "Multivitamin", cost: 420 },
            { name: "Becovit-z syrup", cost: 180 },
            { name: "Metformin", cost: 110 },
            { name: "Cetirizine", cost: 75 },
            { name: "Ciprofloxacin", cost: 210 },
            { name: "Aspirin", cost: 50 },
            { name: "Pantoprazole", cost: 150 },
            { name: "Azithromycin", cost: 320 },
            { name: "Mephtol", cost: 140 },
            { name: "Netcold", cost: 95 },
            { name: "Swich 100", cost: 600 },
            { name: "Levocetirizine 5mg", cost: 130 }
        ],
        bestsellers: [
            { name: "Dolo-650", cost: 95 },
            { name: "Paracetamol", cost: 60 },
            { name: "Azithromycin", cost: 320 },
            { name: "Metformin", cost: 110 },
            { name: "Multivitamin", cost: 420 }
        ]
    });
});

app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});