import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/Usuario.Module';

@Module({
  imports: [UsuarioModule]
})
export class AppModule {}
