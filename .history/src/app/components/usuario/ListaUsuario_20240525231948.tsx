import usuarios from '../../data/constants/usuarios'

export default function ListaUsuario(){
    return(
        <div className="flex flex-col">
            {usuarios}

        </div>
    )
}