CREATE TABLE user(id INTEGER PRIMARY KEY,
	username TEXT,
	passhash TEXT
);

CREATE TABLE items(id INTEGER PRIMARY KEY,
	title TEXT,
	description TEXT,
	image TEXT,
	category TEXT
);