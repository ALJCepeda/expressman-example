import {injectable} from "expressman";

export interface Member {
  firstname:string;
  lastname:string;
}

@injectable()
export default class MemberRepository {
  getMembers():Member[] {
    return [
      { firstname:'Alfred', lastname:'Cepeda' }
    ];
  }
}
