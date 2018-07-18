import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import 'rxjs/add/operator/switchMap';
import { CustomerService } from "../../shared/customer.service";
import { IEmployee } from "../../shared/interface";

@Component({
    moduleId: module.id,
    selector: 'employee-detail',
    templateUrl: 'customer-detail.component.html',
})

export class CustomerDetailComponent {
    employee: IEmployee;
    pageTitle: string = 'Profile Details';
    selectedEmployeeId: number = null;
    imageWidth: number = 270;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        public employeeService: CustomerService,
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe((params: Params) => {
            let id = parseInt(params.get('id'));
            this.selectedEmployeeId = id;
            this.employeeService.getEmployee(id).subscribe((employee: IEmployee) => {
                this.employee = employee;
            })
        })
    }

    goPrevious() {
        let prevoiusId = this.selectedEmployeeId - 1;
        this.router.navigate(['details', prevoiusId]);
    }

    goNext() {
        let nextId = this.selectedEmployeeId + 1;
        this.router.navigate(['details', nextId]);
    }

    goToCustomer(){
        this.router.navigate(['profile']);
    }

    // showSetting(){
    //     this.router.navigate(['setting'] , {relativeTo: this.route});
    // }
  
    // showContact(){
    //     this.router.navigate(['contact'] , {relativeTo: this.route});
    // }
}
