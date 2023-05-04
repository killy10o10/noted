export const signInUser = async (data) => (
  await (await fetch('http://127.0.0.1:3000/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  })).json()
);