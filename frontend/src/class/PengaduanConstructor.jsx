export default class Pengaduan {
    constructor({
        id,
        name,
        title,
        email = "Tidak ada email",
        jenis_sampah = "Tidak ada jenis sampah",
        image_path = null,
        no_handphone = "Tidak ada nomor handphone",
        alamat = "Tidak ada alamat",
        description = "Tidak ada deskripsi",
        provinsi,
        status,
        createdAt,
        creator,
        comments = [],
    }) {
        this.id = id;
        this.name = name || "Tidak ada nama";
        this.email = email;
        this.title = title;
        this.jenisSampah = jenis_sampah;
        this.provinsi = provinsi;
        this.status = status;
        this.imagePath = image_path || null;  // Jika tidak ada gambar, beri nilai null
        this.noHandphone = no_handphone;
        this.alamat = alamat;
        this.description = description;
        this.createdAt = createdAt ? new Date(createdAt) : null;

        // Creator
        this.creator = creator
            ? {
                id: creator.id,
                name: creator.name || "Tidak ada nama",
                email: creator.email || "Tidak ada email",
                imagePath: creator.image_path || null,
            }
            : null;

        this.comments = comments.map(comment => ({
            id: comment.id,
            title: comment.title || "Tidak ada judul",
            message: comment.message || "Tidak ada pesan",
            createdAt: new Date(comment.createdAt),
            owner: comment.owner
                ? {
                    id: comment.owner.id,
                    name: comment.owner.name || "Tidak ada nama",
                    imagePath: comment.owner.image_path,
                }
                : null,
        }));
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
            weekday: "long", // Untuk nama hari (misalnya: Senin, Selasa)
        });
    }


    /**
     * Properti terhitung untuk memeriksa apakah pengaduan memiliki deskripsi
     * @returns {boolean}
     */
    get hasDescription() {
        return this.description !== "Tidak ada deskripsi";
    }

    /**
     * Properti terhitung untuk memeriksa apakah pengaduan memiliki gambar
     * @returns {boolean}
     */
    get hasImage() {
        return !!this.imagePath;
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
