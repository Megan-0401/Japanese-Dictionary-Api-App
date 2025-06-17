# Japanese Dictionary API App

## Overview

A fullstack project for an English-to-Japanese dictionary web application and database API.

Front-end: _HTML, SCSS, TypeScript (vite)_

Back-end: _Java, Spring Boot_

Database: _MySQL_

## Asset Credit

Lined paper sheet - [MarjanNo on pixabay](https://pixabay.com/illustrations/paper-paper-clip-torn-lined-paper-5615944/)

## Front-end: Web application

### HOME PAGE

#### SEARCH

The search bar takes any search term including: English, Romanji, Kanji, Hiragana or Katakana.

The page will display any word that contains the search term.

-   E.g. searching "car" will return you any words that contain the term "car" in the english or romanji.
-   E.g. searching "a" will return you any words that contain the term "a" in the english or romanji.
-   E.g. searching "あ" will return you any words that contain the term "あ" in the hiragana.

#### FILTER

The word class and category filters can either be used together or individually.

Both filters can be cleared with the 'CLEAR' button on the right of the filters, or by manually changing the value in the drop-down box back to 'Select...'

**NOTE: It is not possible to use the search and filter function together. Using one will override the other.**

#### BOOKMARK

If a user is logged in, bookmarked words will appear with an orange icon beside them. Bookmarked words will be shown even when searching and filtering.

Words can be added or removed from a user's bookmarks by the green + or - button respectively.

---

### INFO

Describes what each part of the website does, and how the user can get the most out of each functionality.

---

### BOOKMARKS

An additional filter that is used on the Home Page. Displays all words that the currently logged-in user has bookmarked.

All words can be shown again by simply returning to the Home Page.

---

### LOGIN/SIGN-UP

Allows a user to either log-in with a pre-existing account or sign up with new credentials. The account is solely used to track bookmarks.

#### LOGIN

Checks if the user exists, and if the password is correct before logging the user in. The 'LOGIN/SIGN-UP' button in the top right of the navigation bar will change to 'SIGN OUT'. If clicked, the page is refreshed and the user is signed out.

**NOTE: The account function uses a psuedo-login system. If the page is closed or refreshed while logged in, the user will be logged out and will have to sign in again.**

#### SIGN UP

Checks if the password is an appropriate length (>=8 characters). Prompts the user to log in if details are successfully posted to the database.

---

## Back-end: API

### Word Endpoints

    GET api/words

Returns all words.

    GET api/words/byclass/{class_id}

Returns words by the word class, where {class_id} is the word class id.

    GET api/words/bycategory/{category_id}

Returns words by the category, where {category_id} is the category id.

    GET api/words/byfilters/{class_id},{category_id}

Returns words by both the word class and category.

    GET api/words/bysearch/{search}

Returns all words that either:

-   contain the roman characters (english or romanji) of the search
-   contain the japanese characters (kanji, hiragana or katakana) of the search

---

### Filter Endpoints

    GET api/wordclass

Returns all word classes.

    GET api/categories

Returns all categories.

---

### Account Endpoints

    POST api/users/signup/{username},{password}

Checks if the username already exists in the database, and returns a 400 (bad request) status if true.

Otherwise, encrypts the password and inserts new user into the database. Returns a 200 (OK) status and the new user (id and username only).

    GET api/users/login/{username},{password}

Checks if the username exists in the database, and returns a 404 (not found) status if false.

Otherwise, checks the given password with the password in the database, and returns a 400 (bad request) status if they do not match.

Otherwise, returns a 200 (OK) status and the user (id and username only).

---

### Bookmark Endpoints

    GET api/bookmarks/{user_id}

Returns all words that are bookmarked by a user.

    POST api/bookmarks/add/{user_id},{word_id}

Inserts a new bookmark containing the user id and word id into the database. Returns the new bookmark and a 201 (created) status.

    DELETE api/bookmarks/remove/{user_id},{word_id}

Deletes a bookmark that matches the user id and word id. Returns the deleted bookmark and a 200 (OK) status.
