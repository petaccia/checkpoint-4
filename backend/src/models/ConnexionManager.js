const AbstractManager = require("./AbstractManager");

class ConnexionManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(connexion) {
    return this.connection.query(
      `INSERT INTO ${this.table} (email, hashedPassword ) VALUES (?, ?)`,
      [connexion.utilisateur, connexion.hashedPassword]
    );
  }

  login(utilisateur) {
    return this.connection.query("select * from users where firstname = ?", [
      utilisateur,
    ]);
  }
}

module.exports = ConnexionManager;
