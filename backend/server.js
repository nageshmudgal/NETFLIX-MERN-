const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());
// for mongodb compass write below line in inverted commas in place of server link
// mongodb://localhost:27017/netflix
// mongodb+srv://adnan:4U0ReRerz4cxeQN3@cluster0.94jxy7f.mongodb.net/netflix?retryWrites=true&w=majority
mongoose
  .connect("mongodb://localhost:27017/netflix", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("server started on port 5000");
});


// 4U0ReRerz4cxeQN3