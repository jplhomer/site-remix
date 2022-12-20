-- Migration number: 0000 	 2022-12-20T12:41:46.180Z
-- Create a sqlite table called
drop table if exists posts;
CREATE TABLE posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  content TEXT,
  description TEXT,
  status TEXT NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
