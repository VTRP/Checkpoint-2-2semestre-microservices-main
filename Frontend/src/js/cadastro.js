const url = 'http://localhost:3000/products'


async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json(); 
  }


function cadastroProduto(){
   
    let produto = document.querySelector('#inputProduto').value
    let descricao = document.querySelector('#inputDescricao').value
    let preco = document.querySelector('#inputPreco').value
    
    console.log(produto);
    console.log(descricao);
    console.log(preco);
  

    postData(url, {
        "title" : produto, 
        "description" : descricao,
        "price" : preco
    })
    .then((data) => {
      console.log(data); 
    });


}