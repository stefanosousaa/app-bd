import Link from "next/link"
import { ElementType } from "react"

export interface MenuItemProps{
    icone: ElementType
    text: string
    url: string
}


export default function MenuItem(props : MenuItemProps){
    return(
        <Link href={props.url} className="flex gap-2 px-4 py-2 hover:bg-white ">
            <props.icone className= "bg-zinc-200" size={24} stroke={1}/>
            <span className= "bg-zinc-200">Início</span>
        </Link>
    )
}