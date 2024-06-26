const Users = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const UserController = {
  signup: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      const errors = {};

      if (!name) {
        errors.name = "Name is required";
      }
  
      if (!password) {
        errors.password = "Password is required";
      }
  
      let check = await Users.findOne({
        email: req.body.email,
      });

      if (!email) {
        errors.email = "Email is required";
      }
      else if (check) 
        errors.email = "Email already used";

      if (Object.keys(errors).length > 0) {
        return res.status(400).json({
          success: false,
          errors: errors,
        });
      }

      const user = new Users({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      // generate salt to hash password
      const salt = await bcrypt.genSalt(10);

      // set the user password to the hashed password
      user.password = await bcrypt.hash(user.password, salt);

      // save the user to the database
      const userValue = await user.save();

      // jwt authentication
      const data = {
        user: {
          id: userValue._id,
        },
      };

      const token = jwt.sign(data, "secret_ecom");
      res.status(201).json({
        success: true,
        message: "User account has been created",
        data: userValue,
        token: token,
      });
    } catch (error) {
      console.error("Error: User account cannot be created", error);
      res.status(500).json({
        success: false,
        error: "User account cannot be created",
      });
    }
  },

  login: async (req, res) => {
    try {

      const errors = {};

      let user = await Users.findOne({
        email: req.body.email,
      });

      if (user) {
        const passCompare = await bcrypt.compare(req.body.password, user.password);
        if (passCompare) {
          const data = {
            user: {
              userId: user._id,
            },
          };

          const token = jwt.sign(data, "secret_ecom",{ expiresIn: "12h" } );

          res.status(200).json({ 
            success: true, 
            message: "Successfully login",
            email: user.email,
            token: token, });

        } else {
          errors.passCompare = "Wrong Password";
        }
      } else {
        errors.user = "User is not registered";
      }

      if (Object.keys(errors).length > 0) {
        res.status(401).json({
          success: false,
          errors: errors,
        })
      }

    } catch (error) {
      console.error("Error: Cannot login User", error);
      res.status(500).json({
        success: false,
        error: "Cannot login User",
      });
    }
  },
};

module.exports = UserController;
