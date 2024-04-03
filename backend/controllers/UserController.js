const Users = require("../models/User");
const jwt = require("jsonwebtoken");

const UserController = {
  signup: async (req, res) => {
    let check = await Users.findOne({
      email: req.body.email,
    });

    if (check) {
      return res.status(400).json({
        success: false,
        error: "Email already used",
      });
    }

    const user = new Users({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    await user.save();

    // jwt authentication
    const data = {
      user: {
        id: user.id,
      },
    };

    const token = jwt.sign(data, "secret_ecom");
    res.json({
      success: true,
      token,
    });
  },

  login: async (req, res) => {
    let user = await Users.findOne({
      email: req.body.email,
    });
    if (user) {
      const passCompare = req.body.password === user.password;
      if (passCompare) {
        const data = {
          user: {
            id: user.id,
          },
        };
        const token = jwt.sign(data, "secret_ecom");
        res.json({ success: true, token });
      } else {
        res.json({ success: false, errors: "Wrong Password" });
      }
    } else {
      res.json({ success: false, errors: "Wrong Email Id" });
    }
  },
};

module.exports = UserController;
