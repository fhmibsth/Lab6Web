
/* LATIHAN 1: Mengubah teks */
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
const tombolAksi = document.getElementById("tombolAksi");

if (judul && pesan && tombolAksi) {
    tombolAksi.addEventListener("click", function () {
        judul.textContent = "Halo, Saya Sedang Belajar DOM!";
        pesan.textContent =
            "Berhasil! Teks diubah menggunakan JavaScript.";
    });
}


/* LATIHAN 2: Mengubah gaya teks */
/* Dijalankan jika elemen Latihan 2 tersedia di HTML */
const tombolHighlight = document.getElementById("tombolHighlight");
const tombolUkuran = document.getElementById("tombolUkuran");
const teksLatihan = document.getElementById("teksLatihan");

if (tombolHighlight && tombolUkuran && teksLatihan) {
    tombolHighlight.addEventListener("click", function () {
        teksLatihan.classList.toggle("highlight");
    });

    tombolUkuran.addEventListener("click", function () {
        teksLatihan.classList.toggle("teks-besar");
    });
}


/* LATIHAN 3: Penghitung karakter */
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

if (namaInput && jumlahKarakter) {
    namaInput.addEventListener("input", function () {
        jumlahKarakter.textContent = namaInput.value.length;
    });
}


/* LATIHAN 4: Validasi form */
const formPendaftaran = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

if (formPendaftaran && pesanForm) {
    formPendaftaran.addEventListener("submit", function (event) {
        event.preventDefault();

        const nama = document.getElementById("nama").value.trim();
        const email = document.getElementById("email").value.trim();
        const usiaInput = document.getElementById("usia").value;
        const usia = Number(usiaInput);

        if (nama === "" || email === "" || usiaInput === "") {
            pesanForm.textContent = "Semua kolom wajib diisi!";
            pesanForm.style.color = "red";
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            pesanForm.textContent = "Format email tidak valid!";
            pesanForm.style.color = "red";
            return;
        }

        if (!Number.isInteger(usia) || usia < 17 || usia > 100) {
            pesanForm.textContent =
                "Usia harus berupa bilangan bulat antara 17 sampai 100 tahun.";
            pesanForm.style.color = "red";
            return;
        }

        pesanForm.textContent = "Pendaftaran berhasil!";
        pesanForm.style.color = "green";
    });
}


/* LATIHAN 5: To-do List */
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

if (inputTugas && tambahTugas && daftarTugas && pesanTugas) {
    tambahTugas.addEventListener("click", function () {
        const teks = inputTugas.value.trim();

        if (teks === "") {
            pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
            pesanTugas.style.color = "red";
            inputTugas.focus();
            return;
        }

        // Membuat elemen tugas
        const item = document.createElement("li");
        const label = document.createElement("span");
        const selesai = document.createElement("button");
        const hapus = document.createElement("button");

        // Mengisi teks tugas
        label.textContent = teks + " ";

        // Membuat tombol tandai selesai
        selesai.type = "button";
        selesai.textContent = "Tandai selesai";

        selesai.addEventListener("click", function () {
            item.classList.toggle("selesai");

            selesai.textContent = item.classList.contains("selesai")
                ? "Batalkan selesai"
                : "Tandai selesai";
        });

        // Membuat tombol hapus
        hapus.type = "button";
        hapus.textContent = "Hapus";

        hapus.addEventListener("click", function () {
            item.remove();
        });

        // Memasukkan elemen ke dalam daftar
        item.appendChild(label);
        item.appendChild(selesai);
        item.appendChild(hapus);
        daftarTugas.appendChild(item);

        // Mengosongkan input setelah tugas ditambahkan
        inputTugas.value = "";
        pesanTugas.textContent = "Tugas berhasil ditambahkan!";
        pesanTugas.style.color = "green";
        inputTugas.focus();
    });
}


/* MINI PROJECT: Pendaftaran workshop */
const formWorkshop = document.getElementById("formWorkshop");
const namaWorkshop = document.getElementById("namaWorkshop");
const emailWorkshop = document.getElementById("emailWorkshop");
const sesiWorkshop = document.getElementById("sesiWorkshop");
const hitungKarakter = document.getElementById("hitungKarakter");
const ringkasanSesi = document.getElementById("ringkasanSesi");
const pesanWorkshop = document.getElementById("pesanWorkshop");

if (
    formWorkshop &&
    namaWorkshop &&
    emailWorkshop &&
    sesiWorkshop &&
    hitungKarakter &&
    ringkasanSesi &&
    pesanWorkshop
) {
    // Menghitung karakter nama
    namaWorkshop.addEventListener("input", function () {
        hitungKarakter.textContent = namaWorkshop.value.length;
    });

    // Menampilkan sesi yang dipilih
    sesiWorkshop.addEventListener("change", function () {
        ringkasanSesi.textContent =
            sesiWorkshop.value || "Belum ada sesi dipilih.";
    });

    // Validasi pendaftaran workshop
    formWorkshop.addEventListener("submit", function (event) {
        event.preventDefault();

        const nama = namaWorkshop.value.trim();
        const email = emailWorkshop.value.trim();
        const sesi = sesiWorkshop.value;

        if (nama.length < 3) {
            pesanWorkshop.textContent =
                "Nama harus terdiri dari minimal 3 karakter.";
            pesanWorkshop.style.color = "red";
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            pesanWorkshop.textContent = "Masukkan email yang valid.";
            pesanWorkshop.style.color = "red";
            return;
        }

        if (sesi === "") {
            pesanWorkshop.textContent = "Silakan pilih sesi workshop.";
            pesanWorkshop.style.color = "red";
            return;
        }

        pesanWorkshop.textContent =
            "Pendaftaran berhasil! Nama: " + nama +
            " | Email: " + email +
            " | Sesi: " + sesi;

        pesanWorkshop.style.color = "green";
    });

    // Mengatur ulang tampilan setelah form di-reset
    formWorkshop.addEventListener("reset", function () {
        setTimeout(function () {
            hitungKarakter.textContent = "0";
            ringkasanSesi.textContent = "Belum ada sesi dipilih.";
            pesanWorkshop.textContent = "";
        }, 0);
    });
}


/* EKSPERIMEN: Sembunyikan dan tampilkan paragraf */
const tombolToggle = document.getElementById("tombolToggle");
const paragrafToggle = document.getElementById("paragrafToggle");

if (tombolToggle && paragrafToggle) {
    tombolToggle.addEventListener("click", function () {
        const tersembunyi =
            paragrafToggle.style.display === "none";

        paragrafToggle.style.display = tersembunyi ? "block" : "none";

        tombolToggle.textContent = tersembunyi
            ? "Sembunyikan Paragraf"
            : "Tampilkan Paragraf";
    });
}
