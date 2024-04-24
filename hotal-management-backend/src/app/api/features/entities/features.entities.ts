import { group } from "console";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "../../user/entities/user.entities";


@Entity('listings')
export class FeaturesEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    creator_id: number;

    @ManyToOne(type => UserEntity, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'creator_id' })
    creator: UserEntity;

    @Column()
    category: string;

    @Column()
    type: string;

    @Column()
    streetaddress: string;

    @Column()
    aptsuite: string;

    @Column()
    city: string;

    @Column()
    province: string;

    @Column()
    country: string;

    @Column()
    guestcount: number;

    @Column()
    bedroomcount: number;

    @Column()
    bedcount: number;

    @Column()
    bathroomcount: number;

    @Column("simple-array")
    amenities: string[];

    @Column("simple-array")
    listingphotopaths: string[];

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    highlight: string;

    @Column()
    highlightdesc: string;

    @Column()
    price: number;
   
    @CreateDateColumn({name : 'created_at', type: 'timestamp with time zone'})
    createdAt : Date

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
    updateAt: Date   
}
