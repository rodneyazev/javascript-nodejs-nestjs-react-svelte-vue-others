import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'orm.config';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(config)],
  controllers: [],
  providers: [],
})
export class AppModule {}
