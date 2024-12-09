export default class User {
    constructor({
        id,
        name,
        jenis_kelamin = null,
        tanggal_lahir = null,
        pekerjaan = null,
        no_handphone = null,
        alamat = null,
        email,
        role,
        image_path = null,
        createdAt,
        updatedAt,
        deletedAt = null,
    }) {
        this.id = id;
        this.name = name;
        this.jenis_kelamin = jenis_kelamin;
        this.tanggal_lahir = tanggal_lahir;
        this.pekerjaan = pekerjaan;
        this.no_handphone = no_handphone;
        this.alamat = alamat;
        this.email = email;
        this.role = role;
        this.image_path = image_path;
        this.createdAt = new Date(createdAt);
        this.updatedAt = new Date(updatedAt);
        this.deletedAt = deletedAt ? new Date(deletedAt) : null;
    }
}