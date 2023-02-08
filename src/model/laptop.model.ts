import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Laptop {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string
    @Column()
    price: number
    @Column()
    id_brand: number
    @Column()
    quantity: number
}