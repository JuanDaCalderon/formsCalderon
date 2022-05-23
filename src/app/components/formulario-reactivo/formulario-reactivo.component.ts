import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.scss']
})

export class FormularioReactivoComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'remeber': new FormControl(true)
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    let body = this.loginForm.value.email + " | " + this.loginForm.value.password
    this.toastr.success(body, 'Inicio de sesión exitoso');
  }

}
