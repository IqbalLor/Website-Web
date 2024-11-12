// Event listener untuk mengirim formulir kontak
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Mengambil nilai dari input formulir
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Menampilkan umpan balik ke pengguna
    var feedbackElement = document.getElementById('form-feedback');
    feedbackElement.innerHTML = `
        <div class="alert alert-success" role="alert">
            Terima kasih, ${name}! Pesan Anda telah dikirim. Kami akan menghubungi Anda melalui ${email} segera.
        </div>
    `;

    // Reset formulir setelah pengiriman
    document.getElementById('contact-form').reset();
});
