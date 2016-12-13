import $ from 'jquery';
import { browserHistory } from 'react-router';

export const userRegisterRequest = (data) => (
  dispatch => (
    $.post('http://localhost:3000/api/v1/users', data)
  )
)

export const userLoginRequest = (data) => (
  dispatch => (
    $.post('http://localhost:3000/oauth/token', { ...data, grant_type: "password" })
        .done((response) => {
          const token = response.access_token;
          localStorage.setItem('token', token);
          $.ajax({
            method: 'GET',
            url: 'http://localhost:3000/api/v1/users/me',
            beforeSend: function (request) {
                request.setRequestHeader('Authorization', `Bearer ${token}`)
            },
          }).done((data) => {
            localStorage.setItem('name', data.name)
            localStorage.setItem('email', data.email)
          })
          browserHistory.push("/")
        })
  )
)
