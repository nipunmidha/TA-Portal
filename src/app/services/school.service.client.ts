
export class SchoolServiceClient {
  url = 'https://taportal-backend.herokuapp.com';
  findSchoolById(schoolId) {
    return fetch(this.url + '/api/school/' + schoolId + '/details')
      .then(response => response.json());
  }
  findAllSchools() {
    return fetch(this.url + '/api/school/', {
      credentials: 'include'
    } )
      .then(response => response.json());
  }
  createSchool(school) {
    return fetch(this.url + '/api/school/', {
      method: 'post',
      body: JSON.stringify(school),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
  deleteSchool(id) {
    return fetch(this.url + '/api/school/' + id, {
      method: 'delete',
      credentials: 'include',
    });
  }
  updateSchool(newSchool) {
    return fetch(this.url + '/api/school/' + newSchool._id, {
      body: JSON.stringify(newSchool),
      credentials: 'include', // include, same-origin, *omit
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
  searchSchool(name) {
    const school = {name}
    return fetch(this.url + '/api/school/search', {
      body: JSON.stringify(school),
      credentials: 'include',
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
