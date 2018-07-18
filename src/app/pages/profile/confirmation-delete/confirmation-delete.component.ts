import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  template: `
  <h1 mat-dialog-title>Confirm</h1>
  <div mat-dialog-content>{{confirmMessage}}</div>
  <div mat-dialog-actions>
    <button mat-button style="color: #fff;background-color: #153961;" 
    (click)="dialogRef.close(true)">Confirm</button>
    <button  mat-button (click)="dialogRef.close(false)">Cancel</button>
  </div>
  `,
})
export class ConfirmationDelete {
  constructor(
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ConfirmationDelete>) { }
  confirmMessage: string = "Are you sure you want to delete?";

}
