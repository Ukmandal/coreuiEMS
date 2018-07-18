import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatRadioModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
} from "@angular/material";
import { CustomerService } from "../shared/customer.service";
import { CustomerListComponent } from "./customer-list.component";
import { CustomerDetailComponent } from "./details/customer-detail.component";
import { ConfirmationEdit } from "./confirmation-edit/confirmation-edit.component";
import { ConfirmationDelete } from "./confirmation-delete/confirmation-delete.component";
import { ExpansionComponent } from "./expand/expansion.component";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatDialogModule,
        MatCardModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSnackBarModule,
        MatSortModule,
        MatPaginatorModule,
        MatCheckboxModule,
        MatRadioModule,
        MatListModule,
        MatExpansionModule,
        MatTableModule,
        MatMenuModule, 
        MatFormFieldModule, 
        MatSelectModule,
    ],
    declarations: [
        CustomerListComponent,
        ConfirmationDelete,
        ConfirmationEdit,
        ExpansionComponent,
        CustomerDetailComponent,
    ],

    entryComponents: [
        ExpansionComponent,
        ConfirmationDelete,
        ConfirmationEdit],

    providers: [CustomerService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomerModule { }
