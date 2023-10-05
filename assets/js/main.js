

function convertPokemonLi(pokemon){
    return`
    <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>

                    <img src="https://archives.bulbagarden.net/media/upload/2/24/001Bulbasaur_Dream_4.png" 
                    alt=${pokemon.name}>
                </div>
                
                
            </li>
    `
}

const pokemonList= document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
   pokemonList.innerHTML += pokemons.map(convertPokemonLi).join('')
})
   



