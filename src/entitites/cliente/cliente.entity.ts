import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('cliente')
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string;

    @Column()
    cpf: string;

    @Column()
    telefone: string;

    @Column()
    email: string;
}