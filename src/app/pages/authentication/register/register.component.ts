import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { OnInit, Component, ChangeDetectorRef } from "@angular/core";
import { Router } from "@angular/router";
import { PasswordValidation } from "./match-other-validator";
import { MatSnackBar } from '@angular/material';
import { CustomerService } from "../../shared/customer.service";

@Component({
  templateUrl: 'register.component.html',
  styles: [`
  .button {
    cursor:pointer;
  }
    `],
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  fileToUpload: File = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private adminService: CustomerService,
    public snackBar: MatSnackBar,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      id: [0],
      imageUrl: [null, Validators.required],
      role: [null, Validators.required],
      color: [null, Validators.required],
      status: [null, Validators.required],
      country: [null, Validators.required],
      userName: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      repeatPassword: [null, [Validators.required]],
    }, {
        validator: PasswordValidation.MatchPassword // your validation method
      });
  }

  
  imageUpload(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
        const [imageUrl] = event.target.files;
        reader.readAsDataURL(imageUrl);

        reader.onload = () => {
            this.registerForm.patchValue({
                imageUrl: reader.result
            });
            // need to run CD since file load runs outside of zone
            this.cd.markForCheck();
        };
    }
}

  register() {
    this.adminService.register(this.registerForm.value);
    this.router.navigate(['/login']);
    console.log('registered Successfully!!');
    this.snackBar.open('Registerd Successfully!', 'Got it!', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
  }

  cancel() {
    this.router.navigate(['login']);
  }
}
