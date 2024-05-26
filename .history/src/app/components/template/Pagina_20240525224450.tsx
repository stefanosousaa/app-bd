import Menu from "./Menu"

export interface PaginaProps {
    children: any
}

export default function Pagina(props: PaginaProps){
    return (
     <div>
        <Menu/>
        <main className="p-7">{props.children}</main>
        
    </div>
    )

}


