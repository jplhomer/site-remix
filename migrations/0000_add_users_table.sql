-- Migration number: 0000 	 2022-12-20T20:18:08.588Z
drop table if exists users;

-- Create the users table in sqlite
create table users (
  id integer primary key autoincrement,
  email text not null unique,
  password text not null,
  email_verified_at datetime,
  created_at datetime not null default current_timestamp,
  updated_at datetime not null default current_timestamp
);
