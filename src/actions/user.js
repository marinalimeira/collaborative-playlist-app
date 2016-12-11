import $ from 'jquery';

export const userRegisterRequest = (data) => (
  dispatch => (
    $.post('http://localhost:3000/api/v1/users', data)
  )
)
