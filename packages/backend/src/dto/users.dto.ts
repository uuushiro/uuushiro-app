import { Field, InputType } from "@nestjs/graphql";

export class GetUserDTD {
  id: number
}

@InputType()
export class CreateUserDTO {
  @Field()
  firstName: string;

  @Field()
  lastName: string;
  
  @Field()
  password: string;
}

export class LoginUserDTO {
  firstName: string;
  lastName: string;
  password: string;
}