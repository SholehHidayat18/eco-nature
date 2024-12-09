export default class Relawan {
    constructor({
        id,
        name,
        email = "Tidak ada email",
        alamat = "Tidak ada alamat",
        no_handphone = "Tidak ada nomor handphone",
        createdAt,
        creator,
    }) {
        this.id = id;
        this.name = name || "Tidak ada nama";
        this.email = email;
        this.alamat = alamat;
        this.noHandphone = no_handphone;
        this.createdAt = createdAt ? new Date(createdAt) : null;

        // Creator
        this.creator = creator
            ? {
                id: creator.id,
                name: creator.name || "Tidak ada nama",
                email: creator.email || "Tidak ada email",
                imagePath: creator.image_path || null,
            }
            : null; // Jika creator tidak ada, beri nilai null
    }

    /**
     * Properti terhitung untuk memformat tanggal pembuatan
     * @returns {string}
     */
    get formattedDate() {
        if (!this.createdAt) return "Tanggal tidak tersedia";
        return this.createdAt.toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "long",
            year: "numeric",
        });
    }

    /**
     * Properti terhitung untuk memeriksa apakah relawan memiliki informasi kontak
     * @returns {boolean}
     */
    get hasContactInfo() {
        return this.email !== "Tidak ada email" || this.noHandphone !== "Tidak ada nomor handphone";
    }

    /**
     * Properti terhitung untuk mendapatkan nama lengkap creator
     * @returns {string}
     */
    get creatorName() {
        return this.creator?.name || "Tidak ada data creator";
    }

    /**
     * Properti terhitung untuk memeriksa apakah ada creator yang terkait
     * @returns {boolean}
     */
    get hasCreator() {
        return !!this.creator;
    }
}
