const models = require("../models");
const validateConnection = require("../services/users");

const validateUser = (req, res) => {
  const { user } = req.body;
  const error = validateConnection(user);
  if (error) {
    res.status(422).send(error);
  } else {
    models.users.login(user).then();
  }
  res.status(201).cookie("access_token", "connection validate", {
    httpOnly: true,
  });
  res.status(200).json({ email: user.email, name: user.name });
};

const createUser = (req, res) => {
  res.sendStatus(200);
};

const browse = (req, res) => {
  models.users
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.users
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const users = req.body;

  // TODO validations (length, format...)

  models.users
    .insert(users)
    .then(([result]) => {
      res.location(`/users/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const user = req.body;

  // TODO validations (length, format...)

  user.id = parseInt(req.params.id, 10);

  models.users
    .update(user)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { browse, read, add, edit, validateUser, createUser };
