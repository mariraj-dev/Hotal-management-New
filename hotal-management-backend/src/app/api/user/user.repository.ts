import { EntityRepository, Repository } from "typeorm";
import { UserEntity } from "./entities/user.entities";


@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {}