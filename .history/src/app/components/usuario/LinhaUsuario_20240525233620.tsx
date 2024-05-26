import { Usuario } from "@/core/model/Usuario"

export interface LinhaUsuarioProps {
    usuario: Usuario
}

export default function LinhaUsuario(props: LinhaUsuarioProps){
    return(
        <div className="flex p-4 bg-zinc-200 rounded-md">
            <div className=" flex flex-col">
              <span>{props.usuario.nome}</span>
              <span className="text-sm text-zinc-400">{props.usuario.email}</span>
            </div>
            

        </div>
    )
}