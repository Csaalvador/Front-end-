import { useState } from "react"

function Form() {


    function cadastrarUser (e) {
        e.preventDefault()
        console.log(name)
        console.log(idade)
        console.log(password)
        alert('Opaaaaaaaaa')
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [idade, setIdade] = useState()

    return(
        <div>
        <h1>Meu Cadastro</h1>

        <form onSubmit={cadastrarUser}>
            <label htmlFor="name">Nome: </label>
            <input 
            type="text"
             placeholder="Digitite seu nome:"
             onChange = {(e) => setName(e.target.value) }
             /> <br />
           <br />
            <label htmlFor="number">Idade: </label> 
            <input 
            type="number" 
            placeholder="digite sua idade"
            onChange={(e) => setIdade (e.target.value)}
             /> <br />
        <br />
                   
            <label htmlFor="password">Senha: </label> 
            <input type="password"
             placeholder="digite sua idade"
             onChange={(e) => setPassword (e.target.value)}
              />
        
        <div>
            <input type="submit" value='Cadastrar' />
        </div>
        </form>
        </div>
    )
}

export default Form