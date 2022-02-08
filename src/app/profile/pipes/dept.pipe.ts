import { Pipe, PipeTransform } from '@angular/core';
import { Department } from '../models/profile.model';

@Pipe({
  name: 'dept'
})
export class DeptPipe implements PipeTransform {

  transform(value: number, depts: Department[]): string | undefined {
    return depts?.find(x => x.id == value)?.name;
  }

}
