import { Usuario } from "@/core/model/Usuario"
import Image from "next/image"

export interface LinhaUsuarioProps {
    usuario: Usuario
}

export default function LinhaUsuario(props: LinhaUsuarioProps){
    return(
        <div className="flex bg-zinc-900 items-center gap-5 p-4 bg-zinc-200 rounded-md">
            <Image
            src="data:image/jpeg;base64,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"
            width={80}
            height={80}
            className="rounded-full"    
            alt="Avatar"
            />
            
            
            
            <div className=" flex flex-col">
              <span className="text-xl font-black">{props.usuario.nome}</span>
              <span className="text-sm text-zinc-500">{props.usuario.email}</span>
            </div>
            

        </div>
    )
}