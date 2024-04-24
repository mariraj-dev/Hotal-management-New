import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({ default: '' })
    profileimagepath: string;

    @Column('text', { array: true, default: [] })
    triplist: string[];

    @Column('text', { array: true, default: [] })
    wishlist: string[];

    @Column('text', { array: true, default: [] })
    propertylist: string[];

    @Column('text', { array: true, default: [] })
    reservationlist: string[];

    @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
    updatedAt: Date;

    // Reference annotations
    // This user can be referenced by bookings as a customer
    // This user can be referenced by bookings as a host
    // This user can be referenced by listings as a creator
}

