// src/app.module.ts
import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [AuthModule, UsersModule, ProductsModule],
})
export class AppModule {}
