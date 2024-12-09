export default class Education {
    constructor({
        id,
        title,
        description,
        quotes = null,
        image_path = null,
        createdAt,
        creator = {},
        comments = [],
    }) {
        this.id = id;
        this.title = title || "Tidak ada judul";
        this.description = description || "Tidak ada deskripsi";
        this.quotes = quotes || "Tidak ada kutipan";
        this.imagePath = image_path;
        this.createdAt = new Date(createdAt); // Konversi ke objek Date
        this.creator = {
            id: creator.id,
            name: creator.name || "Tidak diketahui",
            email: creator.email || "Tidak diketahui",
            imagePath: creator.image_path || null,
        };
        this.comments = comments.map((comment) => ({
            id: comment.id,
            title: comment.title || "Tidak ada judul",
            message: comment.message || "Tidak ada pesan",
            createdAt: new Date(comment.createdAt),
            owner: {
                id: comment.owner.id,
                name: comment.owner.name || "Tidak diketahui",
                imagePath: comment.owner.image_path || null,
            },
        }));
    }

    /**
     * Properti terhitung untuk mendapatkan URL gambar lengkap
     * @returns {string|null}
     */
    get fullImagePath() {
        return this.imagePath ? `${process.env.BASE_URL}${this.imagePath}` : null;
    }

    /**
     * Properti terhitung untuk mendapatkan nama singkat kreator (contoh: "A. Admin")
     * @returns {string}
     */
    get shortCreatorName() {
        if (!this.creator.name) return "Tidak diketahui";
        const parts = this.creator.name.split(" ");
        if (parts.length > 1) {
            return `${parts[0].charAt(0)}. ${parts[1]}`;
        }
        return this.creator.name;
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
     * Properti terhitung untuk memeriksa apakah gambar tersedia
     * @returns {boolean}
     */
    get hasImage() {
        return !!this.imagePath;
    }

    /**
     * Properti terhitung untuk mendapatkan jumlah komentar
     * @returns {number}
     */
    get commentCount() {
        return this.comments.length;
    }

    /**
     * Properti terhitung untuk mendapatkan detail komentar dalam format yang mudah dibaca
     * @returns {Array}
     */
    get formattedComments() {
        return this.comments.map((comment) => ({
            title: comment.title,
            message: comment.message,
            createdAt: comment.createdAt.toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }),
            ownerName: comment.owner.name,
            ownerImagePath: comment.owner.imagePath,
        }));
    }
}
