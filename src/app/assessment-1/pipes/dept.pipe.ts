import { Pipe, PipeTransform } from '@angular/core';
import { UserDept } from '../model/user.model';

@Pipe({
  name: 'dept'
})
export class DeptPipe implements PipeTransform {

    transform(value: number, udepts: UserDept[]): string | undefined {
      return udepts?.find(x => x.id == value)?.name;
    }
}
