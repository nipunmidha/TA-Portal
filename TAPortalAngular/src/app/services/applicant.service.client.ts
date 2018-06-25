export class ApplicantServiceClient {
  url = 'http://localhost:3000';
  findUserById(userId) {
    return fetch(this.url + '/api/applicant/' + userId + '/profile')
      .then(response => {return response.json(); } );
  }
  findAllInstructors() {
    return fetch(this.url + '/api/applicant/', {
      credentials: 'include'
    } )
      .then(response => response.json());
  }
  createApplicant(applicant) {
    const newIns = { email: applicant.email, firstName: applicant.firstName, lastName: applicant.lastName,
      password: applicant.password,  confirmPassword: applicant.password }
    return fetch(this.url + '/api/school/' + applicant.school._id + '/applicant/', {
      method: 'post',
      body: JSON.stringify(newIns),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
  deleteApplicant(id) {
    return fetch(this.url + '/api/applicant/' + id, {
      method: 'delete',
      credentials: 'include',
    });
  }
  updateApplicant(applicant) {
    return fetch(this.url + '/api/applicant/' + applicant._id, {
      body: JSON.stringify(applicant),
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
