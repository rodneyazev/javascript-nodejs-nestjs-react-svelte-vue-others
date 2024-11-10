import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsuarioRepository } from "./Usuario.Repository";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.DTO";
import { UsuarioEntity } from "./Usuario.Entity";
import { ListaUsuarioDTO } from "./dto/ListaUsuario.DTO";
import { v4 as uuid } from 'uuid';
import { AtualizaUsuarioDTO } from "./dto/AtualizaUsuario.DTO";

@Controller('usuario')
export class UsuarioController {

    constructor(private usuariosRepository: UsuarioRepository){}

    @Post()
    async criaUsuario(@Body() dadosUsuario: CriaUsuarioDTO) {
        const usuarioEntity = new UsuarioEntity();
        usuarioEntity.nome = dadosUsuario.nome;
        usuarioEntity.email = dadosUsuario.email;
        usuarioEntity.senha = dadosUsuario.senha;
        usuarioEntity.id = uuid();
        this.usuariosRepository.salvar(usuarioEntity);
        return {
            id: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
            message:'Usuário criado com sucesso.'
        }
    }

    @Get()
    async listaUsuarios() {
        const usuariosSalvos = await this.usuariosRepository.listar();
        const usuariosLista = usuariosSalvos.map(
            usuario => new ListaUsuarioDTO(usuario.id, usuario.nome)
        );
        return usuariosLista;
    }

    @Put('/:id')
    async atualizaUsuario(@Param('id') id: string, @Body() novosDados: AtualizaUsuarioDTO){
        const usuarioAtualizado = await this.usuariosRepository.atualiza(id, novosDados);
        return {
            usuario: usuarioAtualizado,
            message: 'Usuário atualizado com sucesso.'
        }
    }

    @Delete('/:id')
    async removeUsuario(@Param('id') id: string){
        const usuarioRemovido = await this.usuariosRepository.remove(id);
        return {
            usuario: usuarioRemovido,
            message: 'Usuário removido com sucesso.'
        }
    }

}