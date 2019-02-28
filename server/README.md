# dBCloud: Track Description v1.0

## <a style="color: #333333">Table of Contents</a>
* [**Description.artistInfo**](#descriptionartistinfo)
    * [GET /api/artistinfo/:artist_id](#get-apiartistinfoartist_id)
    * [POST /api/artistinfo](#post-apiartistinfo)
    * [PUT /api/artistinfo/:artist_id](#put-apiartistinfoartist_id)
    * [DELETE /api/artistinfo/:artist_id](#delete-apiartistinfoartist_id)
* [**Description.artistInfo**](#descriptionsonginfo)
    * [GET /api/songinfo/:song_id](#get-apisonginfosong_id)
    * [POST /api/songinfo](#post-apisonginfo)
    * [PUT /api/songinfo/:song_id](#put-apisonginfosong_id)
    * [DELETE /api/songinfo/:song_id](#delete-apisonginfosong_id)
* [**Change History**](#change-history)
<hr>

## Description.artistInfo
### `GET /api/artistinfo/:artist_id`

Returns `{ artistInfo }` at a given artist id.

**URL Params**
  * `artist_id` _(Number)_ : ID of artist to read 

**Success Response:**
  * **Status Code:** 200 OK
  * **Content:** Will return `{ artistInfo }` with the following format:

  |Key                |Type    |
  |:----------------- |:------ |
  |`id`               |Number  |
  |`artist_name`      |String  |
  |`avatar_picture`   |String  |
  |`no_of_followers`  |Number  |
  |`no_of_tracks`     |Number  |
  |`pro_status`       |Number  |

**Error Response:**
* **Status Code:** 400 Bad Request error
* **Content:** `{ error : "Bad Request error" }`

### `POST /api/artistinfo`
Returns the `id` of the artist information created in the database.

**Payload Params**
  * Valid `{ JSON }` object conforming to the following format:

  |Key                |Type    |
  |:----------------- |:------ |
  |`artist_name`      |String  |
  |`avatar_picture`   |String  |
  |`no_of_followers`  |Number  |
  |`no_of_tracks`     |Number  |
  |`pro_status`       |Number  |

**Success Response:**
  * **Status Code:** 201 Created
  * **Content:** `{ id: id (Number) }`
 
**Error Response:**
  * **Status Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

### `PUT /api/artistinfo/:artist_id`
Returns the `id` of the artist information edited in the database.

**URL Params**
  * `artist_id` _(Number)_ : ID of the artist to update

**Payload Params**
  * Valid `{ JSON }` object conforming to the following format:

  |Key                |Type    |
  |:----------------- |:------ |
  |`artist_name`      |String  |
  |`avatar_picture`   |String  |
  |`no_of_followers`  |Number  |
  |`no_of_tracks`     |Number  |
  |`pro_status`       |Number  |

**Success Response:**
  * **Status Code:** 200 OK
  * **Content:** `{ id: id (Number) }`
 
**Error Response:**
  * **Status Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

### `DELETE /api/artistinfo/:artist_id`
Returns the `{ artistInfo }` deleted from the database.

**URL Params**
  * `artist_id` _(Number)_ : ID of the artist to delete

**Success Response:**
  * **Status Code:** 200 OK
  * **Content:** `{ artistInfo }` conforming to the following format:

  |Key                |Type    |
  |:----------------- |:------ |
  |`id`               |Number  |
  |`artist_name`      |String  |
  |`avatar_picture`   |String  |
  |`no_of_followers`  |Number  |
  |`no_of_tracks`     |Number  |
  |`pro_status`       |Number  |
 
**Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

---
## Description.songInfo
### `GET /api/songinfo/:song_id`

Returns { songInfo } at a given artist id.

**URL Params**
  * `song_id` _(Number)_ : ID of artist to read

**Success Response:**
  * **Status Code:** 200 OK
  * **Content:** Will return `{ songInfo }` with the following format:

  |Key                |Type    |
  |:----------------- |:------ |
  |`id`               |Number  |
  |`artist_name`      |String  |
  |`license`          |String  |
  |`description_text` |String  |
  |`released_by`      |String  |
  |`release_date`     |Date    |
  |`p_line`           |String  |
  |`tags`             |String  |


**Error Response:**
* **Status Code:** 400 Bad Request error
* **Content:** `{ error : "Bad Request error" }`

### `POST /api/songinfo`
Returns the `id` of the song information created in the database.

**Payload Params**
  * Valid `{ JSON }` object conforming to the following format:

  |Key                |Type    |
  |:----------------- |:------ |
  |`artist_name`      |String  |
  |`license`          |String  |
  |`description_text` |String  |
  |`released_by`      |String  |
  |`release_date`     |Date    |
  |`p_line`           |String  |
  |`tags`             |String  |

**Success Response:**
  * **Status Code:** 201 Created
  * **Content:** `{ id: id (Number) }`
 
**Error Response:**
  * **Status Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

### `PUT /api/songinfo/:song_id`
Returns the `id` of the song information edited in the database.

**URL Params**
  * `song_id` _(Number)_ : ID of the song to update

**Payload Params**
  * Valid `{ JSON }` object conforming to the following format:

  |Key                |Type    |
  |:----------------- |:------ |
  |`id`               |Number  |
  |`artist_name`      |String  |
  |`license`          |String  |
  |`description_text` |String  |
  |`released_by`      |String  |
  |`release_date`     |Date    |
  |`p_line`           |String  |
  |`tags`             |String  |

**Success Response:**
  * **Status Code:** 200 OK
  * **Content:** `{ id: id (Number) }`
 
**Error Response:**
  * **Status Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

### `DELETE /api/songinfo/:song_id`
Returns the `{ songInfo }` deleted from the database.

**URL Params**
  * `song_id` _(Number)_ : ID of the artist to delete

**Success Response:**
  * **Status Code:** 200 OK
  * **Content:** `{ songInfo }` conforming to the following format:

  |Key                |Type    |
  |:----------------- |:------ |
  |`id`               |Number  |
  |`artist_name`      |String  |
  |`license`          |String  |
  |`description_text` |String  |
  |`released_by`      |String  |
  |`release_date`     |Date    |
  |`p_line`           |String  |
  |`tags`             |String  |
 
**Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

<hr>
## Change History
|Name                                 |Version    |Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|Description     |
|:----------------------------------- |:--------- |:--------- |:------- |
|[@jackylei94](https://github.com/ecuyle) |1.0        |2019-02-27 |