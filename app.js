const url = 'http://localhost:3000/produtos'
fetch(url)
 .then((req) => req.json())
 .then((data) => mostraProdutos(data));

function mostraProdutos(produtos){
 const htmlProdutos = produtos.map(
 (produto) =>`
 <img src=${produto.imagem} width=100% height=100%><br>
`
 );
 document.getElementById('app').innerHTML = htmlProdutos;
}
