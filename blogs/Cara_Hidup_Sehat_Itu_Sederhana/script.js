let lastScrollTop = 0; // Menyimpan posisi scroll terakhir
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Jika scroll ke bawah, sembunyikan navbar
    navbar.style.top = "-60px"; // Menyembunyikan navbar (sesuaikan dengan tinggi navbar)
  } else {
    // Jika scroll ke atas, tampilkan navbar
    navbar.style.top = "0";
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Untuk mencegah scroll negatif
});

document.addEventListener("DOMContentLoaded", () => {
  const content = `
        <section>
            <article>
                Hidup sehat adalah keinginan banyak orang, namun seringkali kita merasa bahwa mencapai kesehatan optimal membutuhkan usaha yang besar dan rumit. Padahal, cara hidup sehat itu sebenarnya sangat sederhana dan bisa dimulai dari langkah kecil yang mudah diterapkan dalam kehidupan sehari-hari. Berikut adalah beberapa cara hidup sehat yang bisa Anda coba:
            </article>
            <ol>
                <li>
                    <article>
                        <strong>Makan dengan Porsi yang Seimbang</strong><br>
                        Makanan adalah sumber energi dan nutrisi bagi tubuh, namun penting untuk memperhatikan keseimbangan dalam pola makan. Cobalah untuk:
                    </article>
                    <ul>
                        <li>Makan sayur dan buah di setiap hidangan.</li>
                        <li>Kurangi makanan olahan dan makanan dengan gula tinggi.</li>
                        <li>Makan dalam porsi yang tepat, hindari makan berlebihan.</li>
                    </ul>
                </li>
                <li>
                    <article>
                        <strong>Rutin Berolahraga</strong><br>
                        Olahraga bukan hanya untuk menurunkan berat badan, tetapi juga untuk menjaga kesehatan jantung, otot, dan tulang. Anda tidak perlu berolahraga secara ekstrem, cukup lakukan aktivitas fisik ringan seperti:
                    </article>
                    <ul>
                        <li>Berjalan kaki 30 menit setiap hari.</li>
                        <li>Berlarian ringan atau mengikuti yoga.</li>
                        <li>Gunakan tangga daripada lift.</li>
                    </ul>
                </li>
                <li>
                    <article>
                        <strong>Cukup Tidur</strong><br>
                        Tidur yang cukup sangat penting untuk pemulihan tubuh dan kesehatan mental. Usahakan untuk tidur antara 7 hingga 8 jam setiap malam. Tidur yang berkualitas membantu Anda lebih fokus dan produktif di keesokan harinya.
                    </article>
                </li>
                <li>
                    <article>
                        <strong>Minum Air Putih yang Cukup</strong><br>
                        Tidur yang cukup sangat penting untuk pemulihan tubuh dan kesehatan mental. Usahakan untuk tidur antara 7 hingga 8 jam setiap malam. Tidur yang berkualitas membantu Anda lebih fokus dan produktif di keesokan harinya.
                    </article>
                </li>
                <li>
                    <article>
                        <strong>Kelola Stres dengan Baik</strong><br>
                        Stres yang tidak terkelola dengan baik dapat berdampak negatif pada kesehatan. Carilah cara untuk mengurangi stres, seperti:
                    </article>
                    <ul>
                        <li>Melakukan meditasi atau pernapasan dalam.</li>
                        <li>Menghabiskan waktu dengan orang yang disayangi.</li>
                        <li>Melakukan hobi atau aktivitas yang Anda nikmati.</li>
                    </ul>
                </li>
                <li>
                    <article>
                        <strong>Jaga Kebersihan Diri dan Lingkungan</strong><br>
                        Kebersihan tubuh dan lingkungan sekitar juga memengaruhi kesehatan. Cuci tangan dengan sabun secara rutin, mandi secara teratur, dan pastikan lingkungan rumah Anda bersih dari kuman dan debu
                    </article>
                </li>
                <li>
                    <article>
                        <strong>Periksa Kesehatan Secara Berkala</strong><br>
                        Meskipun Anda merasa sehat, pemeriksaan rutin tetap penting untuk mendeteksi masalah kesehatan sejak dini. Kunjungi dokter setidaknya setahun sekali untuk memeriksa tekanan darah, kadar gula darah, dan kolesterol.
                    </article>
                </li>
                <li>
                    <article>
                        <strong>Bersyukur dan Tetap Positif</strong><br>
                        Mempunyai pola pikir positif dapat meningkatkan kualitas hidup Anda. Luangkan waktu untuk bersyukur atas hal-hal baik yang Anda miliki. Kebiasaan ini dapat meningkatkan kesehatan mental dan fisik Anda
                    </article>
                </li>
            </ol>
            <article>
                Hidup sehat tidak harus rumit atau mahal. Dengan menjalani kebiasaan sederhana seperti makan seimbang, rutin berolahraga, tidur cukup, dan mengelola stres dengan baik, Anda sudah berada di jalur yang tepat menuju hidup yang lebih sehat dan bahagia. Ingatlah, perubahan kecil yang konsisten bisa membawa dampak besar bagi kesehatan Anda.
            </article>
            <br>
            <article>
                <strong>Keyword:</strong><br>
                Hidup Sehat, Pola Makan Seimbang, Olahraga Rutin, Tidur Cukup, Hidrasi Tubuh, Kelola Stres, Kebersihan Diri, Pemeriksaan Kesehatan, Pikiran Positif
            </article>
            <br>
            <article>
                <strong>Referensi:</strong><br>
                <a href="https://www.halodoc.com/kesehatan/hidup-sehat?srsltid=AfmBOooSyPA7Ui9Z7I_Lq5cWn8LN5j6JKfa7f8MIXnAtFj6Dyr0X_Ok1">
                    https://www.halodoc.com/kesehatan/hidup-sehat?srsltid=AfmBOooSyPA7Ui9Z7I_Lq5cWn8LN5j6JKfa7f8MIXnAtFj6Dyr0X_Ok1
                </>
            </article>
        </section>
    `;

  document.getElementById("content").innerHTML = content;
});
