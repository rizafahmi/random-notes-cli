# Random Notes CLI

Command-line Interface for random notes.

## Features

* [] Read From File
* [] Write To File
* [] Parse Data
* [x] Create
* [x] Read
* [] Update
* [] Delete
* [] Search

## Usage Example

```
$ node app.js add "Title" "Content" # Create
{_id: 1, title: "Title", content: "Content", createdAt: 2017-12-31T00:14:58.496Z, updatedAt: null}
$ node app.js list # Read
[
{_id: 1, title: "Title", content: "Content", createdAt: 2017-12-31T00:14:58.496Z, updatedAt: null},
{_id: 2, title: "Yet Another Title", content: "Yet Another Content", createdAt: 2017-12-31T00:14:58.496Z, updatedAt: null}
]
$ node app.js get 2 # Read
{_id: 2, title: "Yet Another Title", content: "Yet Another Content", createdAt: 2017-12-31T00:14:58.496Z, updatedAt: null}
$ node app.js edit 1 "New Title" "New Content" # Update
{_id: 1, title: "New Title", content: "New Content", createdAt: 2017-12-31T00:14:58.496Z, updatedAt: 2017-12-31T01:14:58.496Z}
$ node app.js remove 2 # Delete
[ {_id: 1, title: "Title", content: "Content", createdAt: 2017-12-31T00:14:58.496Z, updatedAt: null} ]
$ node app.js count
56
$ node app.js filter "title: new && content: new" # Search
[ {_id: 1, title: "New Title", content: "New Content", createdAt: 2017-12-31T00:14:58.496Z, updatedAt: 2017-12-31T01:14:58.496Z} ]
```
