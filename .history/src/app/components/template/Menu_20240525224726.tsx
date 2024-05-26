import { IconHome } from "@tabler/icons-react"
import Link from "next/link"

function MenuItem(){
    return(
        <Link href="/">
            <IconHome/>
            <span>Início</span>
        </Link>
    )
}

export default function Menu(){
    return (
    <aside className="w-72 bg-zinc-900 h-screen">
         <nav className="flex flex-col">
            <MenuItem/>
             <MenuItem/>
              <MenuItem/>
               <MenuItem/>
         </nav>
    </aside>
    )
}
