fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((res) => res.json())
  .then((resEnJson) => {
    console.log(resEnJson);
  })
  .catch((err) => {
    console.log(err);
  });
