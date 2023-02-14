addPokemon = () => {
  const pokemon = document.getElementById('pokemons');
  let img = document.createElement('img');
  numberPokemon = Math.trunc(Math.random()*251)
  img.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ numberPokemon +'.png';
  img.alt = 'Pokemon';
  img.height='300';
  
  pokemon.appendChild(img);
}

removePokemon = () => {
  const pokemon = document.getElementById('pokemons');
  pokemon.removeChild(pokemon.lastChild);
}

mudarEstilo = (propriedade, valor) => {
  const pokemon = document.getElementById('pokemons');
  pokemon.style[propriedade] = valor;
}