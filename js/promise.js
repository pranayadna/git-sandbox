function delay(ms) {
  return new Promise(function (resolve) {
    let timer = 0;
    timer++;

    if (timer === ms) {
      resolve("done");
    }
  });
}

delay(3000).then(() => alert("runs after 3 seconds"));
