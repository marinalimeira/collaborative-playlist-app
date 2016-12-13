import $ from 'jquery';

export const videoCreateRequest = (data) => {
  dispatch => (
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
  dispatch => (
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/videos',
      beforeSend: function (request) {
        request.setRequestHeader('Authorization', `Bearer ${token}`)
      },
    })
  )
}
