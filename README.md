# Course Search App

This is a demo RESTful API solution that provides information about offered courses. Utilizes Express, Handlebars, and Bootstrap.

## Start
The RESTful API is deployed [here](https://course-search-restapi.herokuapp.com/api), but can also be hosted locally.

After making sure that npm is installed in the root folder, running the command `node js/restapi.js` will run the api locally. To use the front-end when the API is hosted locally, the variable `source` in the `js/index.js` file needs to be changed to `localhost:3000/api`.

## Usage

The API provides five parameterized routes in order to query the list of available courses:
- `/api/by_course_code/<code>`: This route returns the list of courses with the provided course code or code prefix.
- `/api/by_title/<title>`: This route returns the list of courses with matching or partially matching titles.
- `/api/by_instructor/<name>`: This route will return courses taught by the provided instructor name. Includes partial matches.
- `/api/by_level/<level>`: This route returns courses based on the level of the courses (graduate, undergraduate, all).
- `/api/combined_query/<name>/<level>`: This route returns courses that contain courses taught by the provided instructor name and are of the provided course level. This supports exact matches and partial matches of the instructor name. The level can be used to filter by 'undergraduate, 'graduate', or 'all' courses.

## Demo Site

In order to use the combined query, the user must enter enter in information for the course instructor and select the level before pressing the combined button. To use the other search functions, the user just needs to click the search button next to each input.

The clear button clears all inputs and displays the full list of courses.
