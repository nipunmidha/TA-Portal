import {User} from '../models/user.model.client';

export class UserServiceClient {
 url = 'https://taportal-backend.herokuapp.com';
 // url = 'http://localhost:3000';
  //  private user = new User();
  // public $toggle = this.user.asObservable();
  findUserById(userId) {
    return fetch(this.url + '/api/user/' + userId)
      .then(response => response.json());
  }

  login(email, password) {
    const credentials = {
      email: email,
      password: password
    };
    return fetch(this.url + '/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  logout() {
    return fetch(this.url + '/api/logout', {
      method: 'post',
      credentials: 'include'
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
