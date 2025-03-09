async function fetchQRCode() {
    try {
        const response = await fetch("http://localhost:3000/generate_qr"); // Call backend
        const data = await response.json(); // Get JSON response
        
        document.getElementById("qrImage").src = data.qrCode; // Set image source
    } catch (error) {
        console.error("Error fetching QR Code:", error);
    }
}