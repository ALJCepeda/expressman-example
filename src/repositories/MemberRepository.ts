import {injectable} from "expressman";

export class Member {
  constructor(
    public firstname: string,
    public lastname: string
  ) {
  }
}

@injectable()
export default class MemberRepository {
  getMembers():Member[] {
    return [
      new Member('Alfred', 'Cepeda')
    ];
  }
}
