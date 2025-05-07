import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const users = []; // This should be replaced with a database like MongoDB or MySQL in production.

app.post("/api/register", async (req, res) => {
  const { firstName, lastName, username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { firstName, lastName, username, password: hashedPassword };
  users.push(newUser);

  res.status(201).json({ message: "User registered successfully!" });
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username);

  if (!user) return res.status(400).json({ message: "User not found!" });

  const match = await bcrypt.compare(password, user.password);

  if (!match) return res.status(400).json({ message: "Invalid credentials!" });

  const token = jwt.sign({ id: user.username }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ message: "Login successful!", token });
});

app.listen(5000, () => console.log("Server running on port 5000"));
