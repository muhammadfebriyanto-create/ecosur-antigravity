// AeroScent - WhatsApp Integration Logic

function orderViaWhatsApp() {
    // Contact Person provided by user
    const phoneNumber = "6288295088081";
    
    // Pre-filled message to make ordering seamless for the customer
    const message = "Halo, saya tertarik untuk memesan produk AeroScent Shoe Dryer. Saya ingin bertanya lebih lanjut tentang proses pemesanannya.";
    
    // Encode the URI to handle spaces and special characters safely
    const encodedMessage = encodeURIComponent(message);
    
    // Construct the WhatsApp API format
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open in a new tab to avoid navigating away from the landing page completely
    window.open(whatsappUrl, '_blank');
}

// Expose the function to the global window scope so HTML inline onclick handlers can reach it
window.orderViaWhatsApp = orderViaWhatsApp;

// Init script
document.addEventListener('DOMContentLoaded', () => {
    // Any future initialization logic goes here.
    console.log("AeroScent landing page loaded successfully.");
});
