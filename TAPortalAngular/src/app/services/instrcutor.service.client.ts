
export class InstructorServiceClient {
  url = 'http://localhost:3000';
  findUserById(userId) {
    return fetch(this.url + '/api/user/' + userId)
      .then(response => response.json());
  }
  findAllInstructors() {
    return fetch(this.url + '/api/instructors/', {
      credentials: 'include'
    } )
      .then(response => response.json());
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
  // createUser(username, password) {
  //   const user = {
  //     username: username,
  //     password: password
  //   };
  //   return fetch(this.url + '/api/user', {
  //     body: JSON.stringify(user),
  //     credentials: 'include', // include, same-origin, *omit
  //     method: 'post',
  //     headers: {
  //       'content-type': 'application/json'
  //     }
  //   });
  // }
  // updateUser(newUser) {
  //   return fetch(this.url + '/api/user', {
  //     body: JSON.stringify(newUser),
  //     credentials: 'include', // include, same-origin, *omit
  //     method: 'put',
  //     headers: {
  //       'content-type': 'application/json'
  //     }
  //   });
  // }
}
