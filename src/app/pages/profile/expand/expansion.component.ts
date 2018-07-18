import { Component, Input } from "@angular/core";
import { CustomerService } from "../../shared/customer.service";
import { IEmployee } from "../../shared/interface";

@Component({
  templateUrl: 'expansion.component.html',
})
export class ExpansionComponent {
  @Input() childData: IEmployee;
  imageWidth: number = 200;

  constructor(private employeeService: CustomerService) { }
}
