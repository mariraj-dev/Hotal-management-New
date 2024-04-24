import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { UserEntity } from "../../user/entities/user.entities";
import { FeaturesEntity } from "../../features/entities/features.entities";

@Entity('bookings') // Specify the table name
export class BookingEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    customerid: number;

    @Column({ nullable: true })
    hostid: number;

    @Column({ nullable: true })
    listingid: number;

    @Column()
    startdate: Date;

    @Column()
    enddate: Date;

    @Column()
    totalprice: number;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
    updated_at: Date;

    @ManyToOne(type => UserEntity, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'customerid' })
    customer: UserEntity;

    @ManyToOne(type => FeaturesEntity, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'listingid' })
    listing: FeaturesEntity;

    @ManyToOne(type => UserEntity, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'hostid' })
    host: UserEntity;
  
}
