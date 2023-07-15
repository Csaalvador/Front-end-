import Item from './itens'

function list () {

    return (
        <>
            <h1>
                minha Lista
            </h1>

            <ul>
            <Item marca = 'Ferrari' ano_lancamento={1992} />
            <Item  />
            </ul>
        </>
    )
}

export default list