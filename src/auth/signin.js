// export const signInUser = async (data) => {
//   const response = await fetch('http://127.0.0.1:3000/sign-in', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//     body: JSON.stringify(data),
//   });
//   const json = await response.json();
//   if (response.ok) {
//     return json.token;
//   } else {
//     throw new Error(json.message);
//   }
// };

export const signInUser = async (data) => {
  const response = await fetch('http://127.0.0.1:3000/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  if (response.ok) {
    return json; // Return the entire response object
  } else {
    throw new Error(json.message);
  }
};
