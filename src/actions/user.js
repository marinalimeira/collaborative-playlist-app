import $ from 'jquery';

export const userRegisterRequest = (data) => (
  dispatch => (
    $.post('http://localhost:3000/api/v1/users', data)
  )
)

export const userLoginRequest = (data) => (
  dispatch => (
    $.post('http://localhost:3000/oauth/token', { ...data, grant_type: "password" })
        .done((data) => localStorage.setItem('token', data.access_token))
  )
)
