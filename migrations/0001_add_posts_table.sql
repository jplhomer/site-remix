-- Migration number: 0001 	 2022-12-19T12:41:46.180Z
-- Create a sqlite table called
drop table if exists posts;
CREATE TABLE posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  content TEXT,
  description TEXT,
  status TEXT NOT NULL,
  userId INTEGER NOT NULL,
  createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
