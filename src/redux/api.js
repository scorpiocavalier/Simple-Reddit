export const getPosts = async () => {
  return fetch("http://localhost:3000").then(res => res.json())
}

export const postPosts = async (posts) => {
  return fetch("http://localhost:3000", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(posts)
  }).then(res => res.json())
}