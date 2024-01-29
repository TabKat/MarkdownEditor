import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @MinLength(2, {
    message: 'First name is too short',
  })
  @MaxLength(30, {
    message: 'First name is too long',
  })
  firstName: string;

  @Column()
  @IsNotEmpty()
  @MinLength(2, {
    message: 'Last name is too short',
  })
  @MaxLength(30, {
    message: 'Last name is too long',
  })
  lastName: string;

  @Column()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
