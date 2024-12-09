export default class Payment {
    constructor({
        id,
        total,
        metode,
        name,
        email,
        no_handphone,
        message,
        status,
        image_path = null,
        createdAt,
        updateAt,
        owner = {},
        bank = {},
        donation = {},
    }) {
        this.id = id;
        this.total = total || 0;
        this.metode = metode || "Tidak ada metode";
        this.name = name || "Tidak ada nama";
        this.email = email || "Tidak ada email";
        this.noHandphone = no_handphone || "Tidak ada nomor handphone";
        this.message = message || "Tidak ada pesan";
        this.status = status || "Tidak ada status";
        this.imagePath = image_path;
        this.createdAt = new Date(createdAt); // Konversi ke objek Date
        this.updateAt = new Date(updateAt); // Konversi ke objek Date
        this.owner = {
            id: owner.id,
            name: owner.name || "Tidak diketahui",
            email: owner.email || "Tidak diketahui",
        };
        this.bank = {
            id: bank.id,
            brand: bank.brand || "Tidak ada brand",
            an: bank.an || "Tidak ada nama pemilik",
            noRek: bank.no_rek || "Tidak ada nomor rekening",
            imagePath: bank.image_path || null,
        };
        this.donation = {
            id: donation.id,
            title: donation.title || "Tidak ada judul donasi",
        };
    }

    /**
     * Properti terhitung untuk mendapatkan URL gambar bukti pembayaran
     * @returns {string|null}
     */
    get fullImagePath() {
        return this.imagePath ? `${process.env.BASE_URL}${this.imagePath}` : null;
    }

    /**
     * Properti terhitung untuk mendapatkan URL gambar logo bank
     * @returns {string|null}
     */
    get bankImagePath() {
        return this.bank.imagePath ? `${process.env.BASE_URL}/images/bank/${this.bank.imagePath}` : null;
    }

    /**
     * Properti terhitung untuk mendapatkan waktu dalam format yang lebih mudah dibaca
     * @returns {string}
     */
    get formattedCreatedAt() {
        return this.createdAt.toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }

    /**
     * Properti terhitung untuk mendapatkan nama singkat pemilik donasi (contoh: "A. Admin")
     * @returns {string}
     */
    get shortOwnerName() {
        if (!this.owner.name) return "Tidak diketahui";
        const parts = this.owner.name.split(" ");
        if (parts.length > 1) {
            return `${parts[0].charAt(0)}. ${parts[1]}`;
        }
        return this.owner.name;
    }

    /**
     * Properti terhitung untuk mendapatkan nama lengkap bank (contoh: "BCA - 1234567890")
     * @returns {string}
     */
    get bankFullName() {
        return `${this.bank.brand} - ${this.bank.noRek}`;
    }
}
