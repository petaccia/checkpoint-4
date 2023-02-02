const AbstractManager = require("./AbstractManager");

class PicturesManager extends AbstractManager {
  constructor() {
    super({ table: "pictures" });
  }

  findAll() {
    return this.connection.query(`SELECT * FROM ${this.table}`);
  }

  find(id) {
    return this.connection.query(`SELECT * FROM  ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  insert(pictures) {
    return this.connection.query(
      `insert into ${this.table} (path, name, album_id) values (?, ?, ?)`,
      [pictures.path, pictures.name, pictures.album_id]
    );
  }

  update(pictures) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      pictures,
      pictures.id,
    ]);
  }
}

module.exports = PicturesManager;
