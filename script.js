document.addEventListener("DOMContentLoaded", function () {
    // Form kontak
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Pesan berhasil dikirim! Kami akan menghubungi Anda segera.");
            contactForm.reset();
        });
    }

    // Form pemesanan
    const orderForm = document.getElementById("orderForm");
    if (orderForm) {
        orderForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Ambil data dari form
            const nama = document.getElementById("nama").value.trim();
            const email = document.getElementById("email").value.trim();
            const layanan = document.getElementById("layanan").value;
            const deskripsi = document.getElementById("deskripsi").value.trim();

            // Buat pesan yang terformat rapi
            let pesan = `Halo, saya ingin memesan layanan berikut:\n`;
            pesan += `Nama: ${nama}\n`;
            pesan += `Email: ${email}\n`;
            pesan += `Layanan: ${layanan}\n`;
            pesan += `Deskripsi Proyek: ${deskripsi}`;

            // Encode pesan supaya aman dikirim lewat URL
            const encodedPesan = encodeURIComponent(pesan);

            // Nomor WhatsApp tujuan (628 di depan nomor Indonesia)
            const nomorWA = "6281943470864";

            // Buat URL WhatsApp dengan pesan
            const waURL = `https://wa.me/${nomorWA}?text=${encodedPesan}`;

            // Reset form dulu
            orderForm.reset();

            // Buka WhatsApp di tab baru
            window.open(waURL, "_blank");
        });
    }
});
