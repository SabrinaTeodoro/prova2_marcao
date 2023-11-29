const axios = require('axios')

test('Testando busca', async () => {
    const response = await axios.get('http://localhost:3001/latas')

    expect(response.status).toBe(200)
})

test('Testando busca por id', async () => {
    const response = await axios.get('http://localhost:3001/latas/1123')

    expect(response.status).toBe(204)
})

test('Testando criar uma lata', async () => {
    const lata = {
        descricao: "Lata muito grande",
        volume: 150
    }

    const response = await axios.post('http://localhost:3001/latas', lata)

    expect(response.status).toBe(200)
    expect(response.data.descricao).toBe("Lata muito grande")
    expect(response.data.volume).toBe(150)
})
test('Testando excluir uma lata', async () => {
    const lata = {
        descricao: "Lata leite condensado",
        volume: 350
    }
    const responsePOST = await axios.post('http://localhost:3001/latas', lata)
    //console.log(responsePOST);
    
    const responseDESTROY = await axios.delete(`http://localhost:3001/latas/${responsePOST.id}`)
    expect(responseDESTROY.status).toBe(200);
    
})
test('Testando atualizar uma lata', async () => {//nao esta funcionando
    
    const lata = {
        descricao: "Lata leite condensado",
        volume: 350
    }
    const responsePOST = await axios.post('http://localhost:3001/latas', lata)
    const lataAtualizada = {
        descricao: "Lata leite moça",
        volume: 350
    }
    
    const responseUPDATE = await axios.put(`http://localhost:3001/latas`, lataAtualizada)
    expect(responseUPDATE.status).toBe(200);
    
})
test('Testando um erro ao criar uma lata', async () => {//nao esta funcionando
    
    const lata = {
        
    }
    const responsePOST = await axios.post('http://localhost:3001/latas', lata)
   console.log(responsePOST)
    expect(responsePOST.status).toBe(500);
    
})