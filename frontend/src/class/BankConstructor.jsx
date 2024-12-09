export default class Bank {
    constructor({
        id,
        an,
        brand,
        no_rek,
        createdBy,
        createdAt,
        updatedAt,
        image_path = null,
        deletedAt = null,
        owner = null, // Pemilik data
    }) {
        this.id = id; // ID Bank
        this.an = an; // Nama pemilik rekening
        this.brand = brand; // Nama bank
        this.imagePath = image_path; // Path logo bank
        this.no_rek = no_rek; // Nomor rekening
        this.createdBy = createdBy; // ID pembuat data
        this.createdAt = createdAt ? new Date(createdAt) : null; // Tanggal data dibuat
        this.updatedAt = updatedAt ? new Date(updatedAt) : null; // Tanggal data diperbarui
        this.deletedAt = deletedAt ? new Date(deletedAt) : null; // Tanggal data dihapus (jika soft-delete)
        this.owner = owner
            ? {
                id: owner.id,
                name: owner.name,
                email: owner.email,
            }
            : null; // Detail pemilik
    }
}
