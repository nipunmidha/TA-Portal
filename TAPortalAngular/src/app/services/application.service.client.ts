
export class ApplicationServiceClient {
  url = 'http://localhost:3000';
  // findPositionById(id) {
  //   return fetch(this.url + '/api/ica/' + id + '/details' )
  //     .then(response => response.json());
  // }
  findAllApplication() {
    return fetch(this.url + '/api/aa/', {
      credentials: 'include'
    } );
  }
  findAllApplicationsForAPosition(icaId) {
    return fetch(this.url + '/api/ica/' + icaId + '/aa/', {
      credentials: 'include'
    } );
  }
  findAllApplicationsForApplicant() {
    return fetch(this.url + '/api/applicant/aa/', {
      credentials: 'include'
    } ).then(res => { return res.json(); } );
  }
  updateIsSelected(icaId) {
    return fetch(this.url + '/api/aa/' + icaId + '/updateselected?status=true', {
      credentials: 'include'
    } );
  }
  createApplication(position, user) {
    return fetch(this.url + '/api/applicant/ica/' + position._id + '/aa' , {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
  // deleteIca(id) {
  //   return fetch(this.url + '/api/ica/' + id, {
  //     method: 'delete',
  //     credentials: 'include',
  //   });
  // }
  // updatePosition(ica) {
  //   return fetch(this.url + '/api/ica/' + ica._id, {
  //     body: JSON.stringify(ica),
  //     credentials: 'include', // include, same-origin, *omit
  //     method: 'put',
  //     headers: {
  //       'content-type': 'application/json'
  //     }
  //   });
  // }
  // updatePositionFilled(id) {
  //   return fetch(this.url + '/api/ica/' + id + '/updatePositionFilled?status=true', {
  //     credentials: 'include',
  //     method: 'put',
  //     headers: {
  //       'content-type': 'application/json'
  //     }
  //   });
  // }
  // profile() {
  //   return fetch(this.url + '/api/profile',
  //     {
  //       credentials: 'include', // include, same-origin, *omit
  //     })
  //     .then((response) => {
  //       if (response.status === 401) { return response; }
  //       return response.json(); });
  // }

}
