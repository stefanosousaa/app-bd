"use server"

import { Usuario } from "@/core/model/Usuario";
import Id from "@/core/utils/Id";
import RepositorioUsuario from "./RepositorioUsuario";

export default function salvarUsuario(usuario: Usuario){
     const novoUsuario = {
        ...usuario,
        id: usuario.id ?? Id.novo,
     }

     RepositorioUsuario.salvar(novoUsuario)
}