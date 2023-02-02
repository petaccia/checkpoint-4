const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  findAll() {
    return this.connection.query(`SELECT * FROM ${this.table}`);
  }

  find(id) {
    return this.connection.query(`SELECT * FROM  ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  insert(users) {
    return this.connection.query(
      `insert into ${this.table} (email, login, password, profilPicture, firstname, lastname) values (?, ?, ?, ?, ?, ?)`,
      [
        users.email,
        users.login,
        users.password,
        users.profilPicture,
        users.firstname,
        users.lastname,
      ]
    );
  }

  update(users) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      users,
      users.id,
    ]);
  }
}

module.exports = UsersManager;
