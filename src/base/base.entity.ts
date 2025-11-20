import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)'
    })
    createdAt: Date

    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)'
    })
    updatedAt: Date;


    @DeleteDateColumn({
        nullable: true,
    })
    deletedAt: Date;
}