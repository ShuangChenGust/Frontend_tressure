import { Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name:'employeeTitle'
})

export class EmployeeTitlePipe implements PipeTransform{
    transform(value: string, gender:string):string {
        if(gender == "Male")
            return "Mr." +value;
        else
            return "Miss."+ value;
    }

}