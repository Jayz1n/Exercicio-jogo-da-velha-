function MensagemConsole() {
    function mostrarMensage() {
        console.log("Mensagem legal")
    }
    
    return(
        <div id="BotaoConsole">
            <button onClick={mostrarMensage}>Exibir mensagem</button>
        </div>
    )
}

export default MensagemConsole;