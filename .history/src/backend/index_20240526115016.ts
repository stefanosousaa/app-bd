import salvarUsuario from "./usuario/salvarUsuario"
import obterTodos from "./usuario/obterTodos"

//padrao facede

export default class Backend{
    static readonly usuarios = {
        salvarUsuario,
        obterTodos,
    }
}