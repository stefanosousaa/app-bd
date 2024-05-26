import { ElementType } from "react"

export interface TituloProps {
    principal: string
    secundario: string
    icone: ElementType
}

export default function Titulo(props: TituloProps){
    return(
          <div className="flex gap-2">
            <props.icone/>
            <div className="flex flex-col">
                <h1>{props.principal}</h1>
                <h2>{props.secundario}</h2>
            </div>

          </div>
    )
}