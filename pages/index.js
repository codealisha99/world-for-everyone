const express = require("express");
const QRCode = require("qrcode");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS
app.use(express.json());
app.use(express.static("public")); // Serve static files from 'public' folder

app.get("/", (req, res) => {
    res.send("Hello World");
});

// API Endpoint to Generate QR Code and Save as Image
app.get("/generate_qr", async (req, res) => {
    try {
        const accountInfo = "upi://pay?pa=example@upi&pn=Donation";
        const qrCodeBase64 = await QRCode.toDataURL(accountInfo);

        // Convert base64 to buffer and save as an image file
        const base64Data = qrCodeBase64.replace(/^data:image\/png;base64,/, "");
        const filePath = "./public/qrcode.png"; // Save QR image in 'public' folder

        fs.writeFileSync(filePath, base64Data, "base64");

        // Send the file URL in response
        res.json({ qrCodeUrl: `http://localhost:${PORT}/qrcode.png` });
    } catch (err) {
        res.status(500).json({ error: "Error generating QR code" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
