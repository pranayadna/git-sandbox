class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);

  //   return fetch(url).then((response) => {
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
  //   });
}

// Ask for a user name until github returns a valid user
async function demoGithubUser() {
  let name = prompt("Enter a name?", "iliakan");

  try {
    let response = await loadJson(`https://api.github.com/users/${name}`);
    alert(`Full name: ${response.name}.`);
  } catch (error) {
    if (err instanceof HttpError && err.response.status == 404) {
      alert("No such user, please reenter.");
      return demoGithubUser();
    } else {
      throw err;
    }
  }

  //     .then((user) => {
  //       return user;
  //     })
  //     .catch((err) => {
  //     });
}

demoGithubUser();
