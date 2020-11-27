DROP TABLE IF EXISTS item;
DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS location;
DROP TABLE IF EXISTS supplier;
DROP TABLE IF EXISTS uom;

CREATE TABLE item (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  image_url TEXT,
  category_id INTEGER,
  supplier_id INTEGER,
  uom_id INTEGER,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE category (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE location (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  quantity INTEGER,
  item_id INTEGER,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE supplier (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  email TEXT,
  phone TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE uom (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO item (
  name,
  description,
  image_url,
  category_id,
  supplier_id,
  uom_id
) VALUES (
  "104.234.323.123",
  "Black swade shoes",
  "http://www.fillmurray.com/100/100",
  "1",
  "1",
  "1"
);
INSERT INTO item (
  name,
  description,
  image_url,
  category_id,
  supplier_id,
  uom_id
) VALUES (
  "002.321.654.098",
  "Chine Tea set",
  "http://www.fillmurray.com/100/100",
  "2",
  "2",
  "2"
);
INSERT INTO item (
  name,
  description,
  image_url,
  category_id,
  supplier_id,
  uom_id
) VALUES (
  "032.864.567.256",
  "Pine Desk",
  "http://www.fillmurray.com/100/100",
  "3",
  "3",
  "3"
);
INSERT INTO item (
  name,
  description,
  image_url,
  category_id,
  supplier_id,
  uom_id
) VALUES (
  "345.234.326.109",
  "Bath Towels",
  "http://www.fillmurray.com/100/100",
  "4",
  "4",
  "4"
);

INSERT INTO category (
  name,
  description
) VALUES (
  "shoes",
  "shoes for adults"
);
INSERT INTO category (
  name,
  description
) VALUES (
  "cultlrey",
  "Exotic cutlery sets"
);
INSERT INTO category (
  name,
  description
) VALUES (
  "furnature",
  "Wooden furnature sets"
);
INSERT INTO category (
  name,
  description
) VALUES (
  "bathroom",
  "bathroom accesories"
);

INSERT INTO location (
  name,
  description,
  quantity,
  item_id
) VALUES (
  "405-150-00",
  "Asile 4-5, location 150, floor",
  "10",
  "1"
);
INSERT INTO location (
  name,
  description,
  quantity,
  item_id
) VALUES (
  "502-300-10",
  "Asile 5-1, location 300, first shelf",
  "4",
  "2"
);
INSERT INTO location (
  name,
  description,
  quantity,
  item_id
) VALUES (
  "310-610-15",
  "Asile 3-10, location 610, second shelf",
  "100",
  "3"
);
INSERT INTO location (
  name,
  description,
  quantity,
  item_id
) VALUES (
  "403-100-10",
  "Asile 4-3, location 100, first shelf",
  "50",
  "4"
);
INSERT INTO location (
  name,
  description,
  quantity,
  item_id
) VALUES (
  "302-400-00",
  "Asile 3-2, location 400, floor",
  "10",
  "1"
);
INSERT INTO location (
  name,
  description,
  quantity,
  item_id
) VALUES (
  "204-150-10",
  "Asile 2-4, location 150, first shelf",
  "4",
  "2"
);
INSERT INTO location (
  name,
  description,
  quantity,
  item_id
) VALUES (
  "508-515-15",
  "Asile 5-8, location 515, second shelf",
  "20",
  "3"
);
INSERT INTO location (
  name,
  description,
  quantity,
  item_id
) VALUES (
  "506-120-00",
  "Asile 5-6, location 120, floor",
  "70",
  "4"
);

INSERT INTO supplier (
  name,
  description,
  email,
  phone
) VALUES (
  "King Shoes",
  "The shoe king",
  "shoe@king.com",
  "0450121212"
);
INSERT INTO supplier (
  name,
  description,
  email,
  phone
) VALUES (
  "China Products",
  "Everything",
  "everything@buy.com",
  "0450121212"
);
INSERT INTO supplier (
  name,
  description,
  email,
  phone
) VALUES (
  "Forest Killers",
  "No more forrests",
  "ahhh@no.com",
  "0450121212"
);
INSERT INTO supplier (
  name,
  description,
  email,
  phone
) VALUES (
  "Bathrooms Galore",
  "come to bathrooms Galore",
  "wish@wash.com",
  "0450121212"
);

INSERT INTO uom (
  name,
  description
) VALUES (
  "ea",
  "Each"
);
INSERT INTO uom (
  name,
  description
) VALUES (
  "L",
  "Liters"
);
INSERT INTO uom (
  name,
  description
) VALUES (
  "Ton",
  "Tons"
);
INSERT INTO uom (
  name,
  description
) VALUES (
  "Pack",
  "Full Packs"
);
INSERT INTO uom (
  name,
  description
) VALUES (
  "Pc",
  "Pieces"
);
