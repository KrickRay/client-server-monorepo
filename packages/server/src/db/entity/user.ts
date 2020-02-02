import { Entity, CreateDateColumn, UpdateDateColumn, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    chatId: number;

    @Column()
    username: string;
}
