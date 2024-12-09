export default class News {
    constructor({
        id,
        title,
        description,
        image_path = null,
        createdAt,
        message = null,
        username = null,
        avatar = null,
        creator = {},
        comments = [],
    }) {
        this.id = id;
        this.title = title || "Tidak ada judul";
        this.description = description || "Tidak ada deskripsi";
        this.imagePath = image_path;
        this.createdAt = new Date(createdAt);
        this.message = message;
        this.username = username;
        this.avatar = avatar;

        // Creator
        this.creator = {
            id: creator.id,
            name: creator.name || "Tidak ada nama",
            email: creator.email || "Tidak ada email",
            imagePath: creator.image_path,
        };

        // Comments
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
     * Properti terhitung untuk mendapatkan jumlah komentar
     * @returns {number}
     */
    get totalComments() {
        return this.comments.length;
    }

    /**
     * Properti terhitung untuk memformat tanggal pembuatan berita
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
     * Properti terhitung untuk mendapatkan nama pembuat
     * @returns {string}
     */
    get creatorName() {
        return this.creator.name;
    }

    /**
     * Properti terhitung untuk memeriksa apakah berita memiliki komentar
     * @returns {boolean}
     */
    get hasComments() {
        return this.totalComments > 0;
    }
}
