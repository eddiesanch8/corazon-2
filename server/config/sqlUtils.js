import connectToDatabase from "./db.js";
const pool = await connectToDatabase();

export const initProductsTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS products (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      category VARCHAR(50),
      location VARCHAR(50),
      details ENUM("Thrifted","Gently Used", "New", "Unknown"),
      price DECIMAL(10,2) NOT NULL,
      image VARCHAR(255),
      description TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  pool.query(query, (err) => {
    if (err) console.error("Error creating products table:", err);
    else console.log("Product table ready ready");
  });
};

export const seedProducts = () => {
  const seedProducts = [
    [
      "Classic White Tee",
      "Tops",
      "Charlotte, NC",
      "Thrifted",
      19.99,
      "/images/white-tee.jpg",
      "Comfortable white tee",
    ],
    [
      "Blue Jeans",
      "Pants",
      49.99,
      "/images/blue-jeans.jpg",
      "Slim fit blue jeans",
    ],
    [
      "Leather Belt",
      "Accessories",
      29.99,
      "/images/leather-belt.jpg",
      "Premium brown leather belt",
    ],
  ];

  pool.query("SELECT COUNT(*) AS count FROM products", (err, results) => {
    if (err) return console.error(err);
    if (results[0].count === 0) {
      const insertQuery =
        "INSERT INTO products (name, category, price, image, description) VALUES ?";
      pool.query(insertQuery, [seedProducts], (err) => {
        if (err) console.error("Error seeding products:", err);
        else console.log("Dummy products inserted");
      });
    }
  });
};

export const getProducts = (category) => {
  return new Promise((resolve, reject) => {
    let query = "SELECT * FROM products";
    const params = [];
    if (category) {
      query += " WHERE category = ?";
      params.push(category);
    }
    pool.query(query, params, (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};
