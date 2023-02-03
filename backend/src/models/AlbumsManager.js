const AbstractManager = require("./AbstractManager");

class AlbumManager extends AbstractManager {
  constructor() {
    super({ table: "albums" });
  }

  findAll() {
    return this.connection.query(`SELECT * FROM ${this.table}`);
  }

  find(id) {
    return this.connection.query(`SELECT * FROM  ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  insert(albums) {
    return this.connection.query(
      `insert into ${this.table} ( name, user_id) values (?, ?)`,
      [albums.name, albums.user_id]
    );
  }

  update(albums) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      albums,
      albums.id,
    ]);
  }
}

module.exports = AlbumManager;
