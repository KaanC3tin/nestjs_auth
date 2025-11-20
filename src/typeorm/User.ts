import { BaseEntity } from "src/base/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
    @Column({ type: 'varchar', nullable: true })
    name: string;
}