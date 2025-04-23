async function loadJson(url) {
  let response = await fetch(url);

  //   return response.then((response) => {
  if (response.status == 200) {
    return response.json();

    // let json = await response.json();
    // return json;
    //   } else {
    // }
  }

  throw new Error(response.status);
  //   }
  // );
}

loadJson("https://javascript.info/no-such-user.json").catch(alert); // Error: 404
