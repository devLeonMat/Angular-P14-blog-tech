import {FormControl, FormGroup} from '@angular/forms';
import {Component, Input, Output} from '@angular/core';
import * as EventEmitter from 'events';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
  loading: any;

  submit = () => {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }
}
