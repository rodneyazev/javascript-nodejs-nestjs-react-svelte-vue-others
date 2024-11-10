import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'sqlite',
  database: 'db/db.sql',
  synchronize: true, // synchronize: true - only development environment
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
};