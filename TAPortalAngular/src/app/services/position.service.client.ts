
export class PositionServiceClient {
  url = 'http://localhost:3000';
  findPositionById(id) {
    return fetch(this.url + '/api/ica/' + id + '/details' )
      .then(response => response.json());
  }
  findAllIcas() {
    return fetch(this.url + '/api/ica/', {
      credentials: 'include'
    } )
      .then(response => response.json());
  }
  findAllIcasForInstructor() {
    return fetch(this.url + '/api/instructor/ica/', {
      credentials: 'include'
    } );
  }
  createPosition(position) {
    const newIns = { classStrength: position.classStrength, noOfTa: position.noOfTa, syllabus: position.syllabus,
      sectionName: position.sectionName,  year: position.year, semester: position.semester }
    return fetch(this.url + '/api/instructor/course/' + position.course._id , {
      method: 'post',
      body: JSON.stringify(newIns),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
  deleteIca(id) {
    return fetch(this.url + '/api/ica/' + id, {
      method: 'delete',
      credentials: 'include',
    });
  }
  updatePosition(ica) {
    return fetch(this.url + '/api/ica/' + ica._id, {
      body: JSON.stringify(ica),
      credentials: 'include', // include, same-origin, *omit
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
  updatePositionFilled(id) {
    return fetch(this.url + '/api/ica/' + id + '/updatePositionFilled?status=true', {
      credentials: 'include',
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
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
