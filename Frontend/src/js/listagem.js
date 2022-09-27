const url = "http://localhost:3000/products" 

const tableBody = document.querySelector('#tableBody')

async  function getProdutos(){

    const response = await fetch(url) 
    
    const data = await response.json()

    data.map((produto) => {

        const tr = document.createElement('tr')  
        const tdTitle = document.createElement('td')
        const tdDescription = document.createElement('td')
        const tdPrice = document.createElement('td')
        
        tdTitle.innerText = produto.title
        tdDescription.innerText = produto.description
        tdPrice.innerText = produto.price

        tr.appendChild(tdTitle)
        tr.appendChild(tdDescription)
        tr.appendChild(tdPrice)

        tableBody.appendChild(tr)


    })
    
}

getProdutos()
