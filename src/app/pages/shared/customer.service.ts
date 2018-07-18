import { Injectable, ViewChild } from "@angular/core";
import { CUSTOMER_DB } from "./mock-list";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { MatPaginator, MatSort, MatDialogRef, Sort } from "@angular/material";
import { Subject } from "rxjs/Subject";
import { map, filter } from "rxjs/operators";
import 'rxjs/add/observable/range';
import { IEmployee } from "./interface";
import { ConfirmationEdit } from "../profile/confirmation-edit/confirmation-edit.component";

@Injectable()
export class CustomerService {

    // get database to component
    getAdmins(): Observable<IEmployee[]> {
        return Observable.of(CUSTOMER_DB.slice(0, 4));
    }

    //get single data from database to component
    getAdmin(id: number): Observable<IEmployee> {
        return Observable.of(CUSTOMER_DB.find(x => x.id === id));

    }

    //add new admin in form and save
    addAdmin(body: any) {
        let max = Math.max(...CUSTOMER_DB.map(x => x.id));
        body.id = max + 1;
        CUSTOMER_DB.push(body);
        return body;
    }

    deleteMultiple() {
        let data = CUSTOMER_DB;
        Observable.range(0, this.selected.length)
            .pipe(
                map(delIndex => data.findIndex(x => x.id === this.selected[delIndex])),
                filter(index => index > -1)
            )
            .subscribe(index => {
                data.splice(index, 1);
            });
    }

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    selected: number[];
    CUSTOMER_DB: {
        id: number;
        imageUrl: string;
        email: string;
        userName: string;
        password: string;
        repeatPassword: string;
        role: string;
        color: string[];
        status: number;
        Country: string;
    }[];

    dialogRef: MatDialogRef<ConfirmationEdit>;
    private subject = new Subject<IEmployee[]>();

    getEmployees(): Observable<IEmployee[]> {
        return Observable.of(CUSTOMER_DB.slice(0));
    }

    getEmployee(id: number): Observable<IEmployee> {
        return Observable.of(CUSTOMER_DB.find(x => x.id === id));
    }

    onSingleDelete(id: number): Observable<IEmployee[]> {
        let data = CUSTOMER_DB.slice(0);
        let index = data.findIndex(x => x.id === id);

        if (index > -1) {
            data.splice(index, 1);
        }
        return Observable.of(data);
    }

    onEdit(body: any): Observable<IEmployee[]> {
        let index = CUSTOMER_DB.findIndex(x => x.id === body.id);

        if (index > -1) {
            CUSTOMER_DB[index] = body;
            this.CUSTOMER_DB = this.CUSTOMER_DB;
            return Observable.of(CUSTOMER_DB);
        } {
            let max = Math.max(...this.CUSTOMER_DB.map(x => x.id));
            body.id = max + 1;
            CUSTOMER_DB.push(body);
            this.CUSTOMER_DB = this.CUSTOMER_DB;
            return Observable.of(CUSTOMER_DB);
        }
    }

    register(user: any) {
        let max = Math.max(...CUSTOMER_DB.map(x => x.id));
        user.id = max + 1;
        CUSTOMER_DB.push(user);
        return CUSTOMER_DB;
    }

    sortData(sort: Sort, start: number, end: number, filtered?: string): Observable<IEmployee[]> {
        let getFiltered = filtered ? CUSTOMER_DB.filter(x => x.email.toLowerCase()
            .includes(filtered.toLocaleLowerCase())) : CUSTOMER_DB;
        if (!sort.active)
            return Observable.of(getFiltered.slice(start, end));

        getFiltered.sort((a, b) => {
            if (sort.direction === '') {
                return compare(a.id, b.id, true);
            }

            let isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'id': return compare(a.id, b.id, isAsc);
                case 'userName': return compare(a.userName, b.userName, isAsc);
            }
        });
        return Observable.of(getFiltered.slice(start, end));
    }
    Country() {
        return COUNTRY;
    }
    color() {
        return COLOR;
    }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

let COUNTRY = [
    { name: 'Nepal', id: 'A' },
    { name: 'China', id: 'B' },
    { name: 'Bangladesh', id: 'C' },
    { name: 'France', id: 'D' },
    { name: 'USA', id: 'E' },
    { name: 'Italy', id: 'F' },
    { name: 'Germany', id: 'L' },
    { name: 'UK', id: 'M' },
    { name: 'Russia', id: 'N' },
    { name: 'Canada', id: 'O' },
    { name: 'India', id: 'P' },
    { name: 'Bhutan', id: 'Q' },
    { name: 'Finland', id: 'R' },
    { name: 'Iceland', id: 'S' },
    { name: 'Kuwait', id: 'T' },
    { name: 'South Korea', id: 'U' },
    { name: 'Japan', id: 'V' },
    { name: 'Afghanistan', id: 'W' },
    { name: 'Pakistan', id: 'X' },
    { name: 'Maldives', id: 'Y' },
    { name: 'Malaysia', id: 'Z' },
    { name: 'UAE', id: 'AA' },
    { name: 'Qatar', id: 'AB' },
    { name: 'Somalia', id: 'AC' },
    { name: 'North Korea', id: 'AD' },
];

let COLOR = [
    { name: 'red', id: 'A' },
    { name: 'Green', id: 'B' },
    { name: 'Blue', id: 'C' },
    { name: 'Yellow', id: 'D' },
    { name: 'White', id: 'E' },
    { name: 'Black', id: 'F' },
    { name: 'Pink', id: 'G' },
    { name: 'Purple', id: 'H' },
];