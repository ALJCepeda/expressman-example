import {API, GET, Header, Swagger} from "expressman";
import MemberService from "../services/MemberService";
import {Member} from "../repositories/MemberRepository";

class GETMembersInput {
  limit:number;
  skip:number;
}

@API('/')
export default class GETMember {
  constructor(
    private memberService:MemberService
  ) { }

  @Swagger()
  @GET('/members')
  handle(payload:GETMembersInput): Member {
    return this.memberService.getActiveMembers()[0];
  }
}
