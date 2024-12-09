export default class Donation {
    constructor({
        id,
        title,
        description,
        donation_count = 0,
        target = 0,
        image_path = null,
        payments = [],
        username,
        message,
        avatar = null,
        comments = [],
        createdAt,
    }) {
        this.id = id;
        this.title = title || "Tidak ada judul";
        this.description = description || "Tidak ada deskripsi";
        this.donationCount = donation_count;
        this.createdAt = new Date(createdAt);
        this.target = target;
        this.imagePath = image_path;
        this.avatar = avatar;
        this.username = username;
        this.message = message;

        // Perbaikan: Mengubah payments menjadi array yang benar
        this.payments = payments.map(payment => ({
            id: payment.id,
            total: payment.total,
            from: payment.from ? {
                id: payment.from.id,
                image_path: payment.from.image_path,
            } : null, // Jika 'from' tidak ada, beri nilai null
        }));
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
     * Properti terhitung untuk menghitung total donasi yang terkumpul
     * @returns {number}
     */
    get totalDonations() {
        return this.payments.reduce((total, payment) => total + payment.total, 0);
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
     * Properti terhitung untuk menghitung persentase donasi yang terkumpul
     * @returns {number}
     */
    get donationProgress() {
        return Math.min(((this.totalDonations / this.target) * 100).toFixed(2), 100);
    }

    /**
     * Properti terhitung untuk memeriksa apakah target donasi telah tercapai
     * @returns {boolean}
     */
    get isTargetReached() {
        return this.totalDonations >= this.target;
    }

    /**
     * Properti terhitung untuk memeriksa apakah ada pembayaran terkait
     * @returns {boolean}
     */
    get hasPayments() {
        return this.payments.length > 0;
    }
}
