import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType() // => GraphQL type: User
@Entity() // => TypeORM entity: users table
export class User {
  @Field(() => Int) // GraphQL field
  @PrimaryGeneratedColumn() // Tạo cột id tự tăng trong DB
  id: number;

  @Field() // GraphQL field
  @Column() // Tạo cột name trong DB
  name: string;

  @Field()
  @Column({ unique: true }) // Cột email, không được trùng
  email: string;

  @Field({ nullable: true }) // Có thể null trong GraphQL
  @Column({ nullable: true }) // Có thể null trong DB
  avatar?: string;
}
