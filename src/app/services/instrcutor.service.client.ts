
export class InstructorServiceClient {
  url = 'https://taportal-backend.herokuapp.com';
  findUserById(userId) {
    return fetch(this.url + '/api/user/' + userId)
      .then(response => response.json());
  }
  findAllInstructors() {
    return fetch(this.url + '/api/instructor/', {
      credentials: 'include'
    } )
      .then(response => response.json());
  }
  createInstructor(instructor) {
    const newIns = { email: instructor.email, firstName: instructor.firstName, lastName: instructor.lastName,
      password: instructor.password,  confirmPassword: instructor.password }
    return fetch(this.url + '/api/school/' + instructor.school._id + '/instructor/', {
      method: 'post',
      body: JSON.stringify(newIns),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
  deleteInstructor(id) {
    return fetch(this.url + '/api/instructor/' + id, {
      method: 'delete',
      credentials: 'include',
    });
  }
  updateInstructor(instructor) {
    return fetch(this.url + '/api/instructor/' + instructor._id, {
      body: JSON.stringify(instructor),
      credentials: 'include', // include, same-origin, *omit
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
  profile() {
    return fetch(this.url + '/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then((response) => {
        if (response.status === 401) { return response; }
        return response.json(); });
  }

}
