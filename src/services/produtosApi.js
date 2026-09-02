const API_URL = "/produtos.json"; 

export async function buscarProdutos() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`Erro ao buscar produtos: ${response.status}`);
  }

  const dados = await response.json();
  return dados;
}