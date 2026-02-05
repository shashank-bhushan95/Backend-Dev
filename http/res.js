function createUser(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).send("All fields are required");
    }

    let users = [];

    if (fs.existsSync("users.json")) {
      const data = fs.readFileSync("users.json", "utf-8");
      users = JSON.parse(data);


       const isUser = users.find(u => u.email === email);
       if (isUser) {
           return res.status(409).send("User already exists");
        }
    }

    const newUser = { id: Date.now(), name, email, password };

    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

    res.status(201).send("User created successfully");

  } catch (error) {
    res.status(500).send("Server error");
  }
}

module.exports = createUser;