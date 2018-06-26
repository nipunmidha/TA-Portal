export class CourseServiceClient {
  url = 'https://taportal-backend.herokuapp.com';
  findCourseById(courseId) {
    return fetch(this.url + '/api/course/' + courseId)
      .then(response => response.json());
  }
  findAllCourses() {
    return fetch(this.url + '/api/course/', {
      credentials: 'include'
    } )
      .then(response => response.json());
  }
  createCourse(course) {
    return fetch(this.url + '/api/school/' + course.school._id + '/course/', {
      method: 'post',
      body: JSON.stringify(course),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
  deleteCourse(id) {
    return fetch(this.url + '/api/course/' + id, {
      method: 'delete',
      credentials: 'include',
    });
  }
  updateCourse(course) {
    return fetch(this.url + '/api/course/' + course._id, {
      body: JSON.stringify(course),
      credentials: 'include', // include, same-origin, *omit
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  searchCourses(name, schoolId) {
    const course = {searchField: name, school: schoolId};
    return fetch(this.url + '/api/course/search', {
      body: JSON.stringify(course),
      credentials: 'include',
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

}
