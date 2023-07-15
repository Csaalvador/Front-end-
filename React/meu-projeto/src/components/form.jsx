function Form() {


    function cadastrarUser (e) {
        e.preventDefault()
        console.log('Cadastrado!')
    }

    return(
        <div>
        <h1>Meu Cadastro</h1>

        <form onSubmit={cadastrarUser}>
            <input type="text" placeholder="Digitite seu nome:" />
        <div>
            <input type="submit" value='Cadastrar' />
        </div>
        </form>
        </div>
    )
}

export default Form