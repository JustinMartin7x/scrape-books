const pool = require('../lib/utils/pool');

module.exports = class Book {
  id;
  name;
  imageUrl;
  rating;
  price;
  inStock

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.imageUrl = row.image_url;
    this.rating = row.rating;
    this.price = row.price;
    this.inStock  = row.in_stock;
  }

  static async insert({name, imageUrl, rating, price, inStock}) {
    const { rows } = await pool.query(
      'INSERT into books (name, image_url, rating, price, in_stock) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, imageUrl, rating, price, inStock]
    );

    return new Book(rows[0]);
  }

  static async find() {
    const { rows } = await pool.query(
      'SELECT * FROM books'
    );
    return rows.map(row => new Book(row));
  }

  static async findById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM books WHERE id=$1',
      [id]
    );

    if(!rows[0]) return null;
    else return new Book(rows[0]);
  }

  static async update(id, {name, imageUrl, rating, price, inStock}) {
    const { rows } = await pool.query(
      `UPDATE logs
       SET name=$1,
           image_url=$2,
           rating=$3,
           price=$4,
           in_stock=$5
       WHERE id=$6
       RETURNING *
      `,
      [name, imageUrl, rating, price, inStock, id]
    );

    return new Book(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM books WHERE id=$1 RETURNING *',
      [id]
    );

    return new Book(rows[0]);
  }
};
