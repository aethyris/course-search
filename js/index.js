const source = "https://course-search-restapi.herokuapp.com/api";

const updateCourses = async (button) => {

    if (button.dataset.querytype == 'by_course_code') {
        value = document.querySelector('#course-code-query').value;
        api = `${source}/by_course_code/${value}`
    } else if (button.dataset.querytype == 'by_title') {
        value = document.querySelector('#title-query').value;
        api = `${source}/by_title/${value}`;
    } else if (button.dataset.querytype == 'by_name') {
        value = document.querySelector('#name-query').value;
        api = `${source}/by_name/${value}`;
    } else if (button.dataset.querytype == 'by_level') {
        value = document.querySelector('#level-query').value;
        api = `${source}/by_level/${value}`;
    } else if (button.dataset.querytype == 'combined_query') {
        instructor = document.querySelector('#name-query').value;
        level = document.querySelector('#level-query').value;
        api = `${source}/combined_query/${instructor}/${level}`;
    } else {
        document.querySelector('#query-form').reset();
        api = `${source}`;
    }
    const data = await fetch(api);
    const dataJSON = await data.json();
    renderView('#results-view', dataJSON);
}

const renderView = (view, model) => {
    const templateSource = document.querySelector(view).innerHTML;
    const template = Handlebars.compile(templateSource);
    document.querySelector('#app-widget').innerHTML = template(model);
}