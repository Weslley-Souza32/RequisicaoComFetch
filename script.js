document.getElementById("tirar-carta").addEventListener('click', () => {
  tirarUmaCartaAleatoriaDoBaralho();
})

async function criarBaralhoEmbaralhado(){
  const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
  const response = await fetch(url);
  return await response.json();
  
}

async function tirarUmaCarta(deck_id){
  const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`;
  const response = await fetch(url);
  return await response.json();
}

async function tirarUmaCartaAleatoriaDoBaralho(){
  const baralho = await criarBaralhoEmbaralhado()
  const carta = await tirarUmaCarta(baralho.deck_id)
  const imagemCarta = carta.cards[0].image;
  document.getElementById("carta").src = imagemCarta;
  const nomeCarta = carta.cards[0].suit;
  const valorCarta = carta.cards[0].value;
  document.getElementById("nome-carta").value = `${valorCarta} ${nomeCarta}`;
}

tirarUmaCartaAleatoriaDoBaralho();

