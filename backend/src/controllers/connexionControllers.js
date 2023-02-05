const jwt = require("jsonwebtoken");
const models = require("../models");
const { verifyHash } = require("../services/auth");
const validateConnexion = require("../services/users");

const validateUser = (req, res) => {
  const { utilisateur } = req.body;

  models.users
    .login(utilisateur)
    .then(async ([user]) => {
      if (user[0]) {
        if (await verifyHash(user[0].hashedPassword, req.body.mot_de_passe)) {
          const myUser = { ...user[0] };
          delete myUser.hashedPassword;
          const token = jwt.sign(myUser, process.env.JWT_SECRET, {
            expiresIn: "24h",
          });

          res
            .status(201)
            .cookie("access_token", token, {
              httpOnly: true,
            })
            .json(myUser);
        } else {
          res.sendStatus(401);
        }
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const createUser = (req, res) => {
  const connexion = req.body;
  const error = validateConnexion(connexion);
  if (error) {
    res.status(422).send(error);
  } else {
    models.connexion
      .insert(connexion)
      .then(([result]) => {
        res.location(`/register/${result.insertId}`).status(201).send(result);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};

module.exports = { validateUser, createUser };
