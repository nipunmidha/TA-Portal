
export class AdminServiceClient {
  url = 'https://taportal-backend.herokuapp.com';
  createAdmin(instructor) {
    return fetch(this.url + '/api/admin/', {
      method: 'post',
      body: JSON.stringify(instructor),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
  // deleteInstructor(id) {
  //   return fetch(this.url + '/api/instructor/' + id, {
  //     method: 'delete',
  //     credentials: 'include',
  //   });
  // }
  updateAdmin(instructor) {
    return fetch(this.url + '/api/admin/' + instructor._id, {
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
