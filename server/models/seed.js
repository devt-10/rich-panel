const mongoose = require("mongoose");
const User = require("../models/User");
mongoose
  .connect(
    "mongodb+srv://devthakkarlm10:Z2KRkJFepIYsqDqi@cluster0.kjhykks.mongodb.net/yourDatabaseName",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(async () => {
    console.log("Connected to MongoDB"); // Call the seed function after the connection is established
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });

const seed = async () => {
  const user = new User({
    username: "devthakkarlm30",
    email: "abc2@example.com",
    password: "1234",
  });
  await user.save();
  console.log("User Created");
};

seed();
