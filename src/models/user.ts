import { Entity, Fields } from "remult"

@Entity("users",{allowApiCrud:true})
export class User {
  @Fields.string()
  id=''
  @Fields.string()
  name=''
}