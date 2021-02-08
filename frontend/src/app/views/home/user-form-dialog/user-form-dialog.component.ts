import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-form-dialog',
  templateUrl: './user-form-dialog.component.html',
  styleUrls: ['./user-form-dialog.component.css']
})
export class UserFormDialogComponent implements OnInit {

  public userForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    public dialogRef: MatDialogRef<UserFormDialogComponent>
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required]
    })
  }

  createUser(){
    this.userService.registerUser(this.userForm.value).subscribe(result => {});
    this.dialogRef.close();
    this.userForm.reset();

    window.location.reload();
  }

  cancel(): void {
    this.dialogRef.close();
    this.userForm.reset();
  }

}
