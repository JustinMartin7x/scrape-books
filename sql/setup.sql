DROP TABLE IF EXISTS books CASCADE;

CREATE TABLE books(
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    image_url TEXT NOT NULL,
    rating INT CHECK(rating > 0 AND rating < 6),
    price TEXT NOT NULL,
    in_stock BOOLEAN 
)