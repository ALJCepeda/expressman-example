import MemberRepository, {Member} from "../repositories/MemberRepository";
import {injectable} from "expressman";

@injectable()
export default class MemberService {
  constructor(
    private memberRepository:MemberRepository
  ) { }

  getActiveMembers():Member[] {
    return this.memberRepository.getMembers();
  }
}
