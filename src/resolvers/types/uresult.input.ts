import { UpdateResult } from "typeorm";
import { Field, ObjectType } from "type-graphql";


@ObjectType()
export class UResult extends UpdateResult {

    @Field()
    affected?: number;

}