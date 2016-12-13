import $ from 'jquery';

const token = localStorage.getItem("token");

export const videoCreateRequest = (data) => { 
 return dispatch => (
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/videos',
      beforeSend: function (request) {
        request.setRequestHeader('Authorization', `Bearer ${token}`)
      },
      data: data,
    })
  )
}

export const videoGetRequest = (data) => {
  return dispatch => (
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/videos',
      beforeSend: function (request) {
        request.setRequestHeader('Authorization', `Bearer ${token}`)
      },
    })
  )
}
