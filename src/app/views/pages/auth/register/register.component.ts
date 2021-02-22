import {Component, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css' ]
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirm: new FormControl(''),

  });
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
  loading: any;

  submit = () => {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  };

  ngOnInit(): void {
  }
}
