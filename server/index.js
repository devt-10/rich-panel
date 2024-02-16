const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
mongoose
  .connect(
    "mongodb+srv://devthakkarlm10:Z2KRkJFepIYsqDqi@cluster0.kjhykks.mongodb.net/?retryWrites=true&w=majority",//environment variable kept here for ease
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.get("/users", async (req, res) => {
  try {
    const allUsers = await User.find();
    if (allUsers.length === 0) {
      return res.status(404).send("No users found");
    }
    res.send(allUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const allUsers = await User.find();
  const foundUser = await User.findOne({ email: email });
  if (foundUser) {
    //hash the password
    const isMatch = await bcrypt.compare(password, foundUser.password);
    if (isMatch) {
      const token = jwt.sign(
        { email: foundUser.email },
        "e3391b50de573922368e49234f4bae74d990c4bc0562dff670b3f81c11ac9fee", //environment variable kept here for ease
        {
          expiresIn: "1h",
        }
      );
      res.json({ token });
    } else {
      res.send("Password is incorrect");
    }
  } else {
    res.send(allUsers);
  }
});

app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({
      username,
      email,
      password,
    });
    await user.save();
  } catch (err) {
    res.send("User already exists");
    console.log(err);
  }
  res.send("User Created!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
