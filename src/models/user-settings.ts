import { Entity, Field, Fields } from "remult";
import { User } from "./user";

@Entity("user-settings", { allowApiCrud: true })
export class UserSettings {
  @Fields.cuid()
  id=''
  @Field(() => User, { lazy: true })
  user!: User;
  @Fields.boolean()
  isNavbarOpen = false;
}
