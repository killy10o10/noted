export const postTodo = async (data) => (
  await (await fetch('http://127.0.0.1:3000/todo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  })).json()
);

// export const getTodos = async(userId) => {
//   const response = await fetch(`http://127.0.0.1:3000/todo-list`, {
//     headers: {
//       Authorization: `Bearer ${userId}`,
//     },
//   });
//   const data = await response.json();
//   return data;
// } 

// export const getTodos = async () => {
//   try {
//     const response = await fetch('http://127.0.0.1:3000/todo-list', {
//       method: 'GET',
//       credentials: 'include'
//     });
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// }

export const getTodos = async () => {
  try {
    const response = await fetch('http://127.0.0.1:3000/todo-list', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNzEwZWIxYjYtZTliMy00ODZkLTg0ZDctZWEzYjM1YjA4NGRjIiwiaWF0IjoxNjgzMzE0OTI3LCJleHAiOjE3MjY1MTQ5Mjd9.1mB2wHFWnbg2dys-EcYCMqXOII3ur9VB4rEZU8V0vyE`,
            },
      credentials: 'include'
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
