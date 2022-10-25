import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { AppToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private toastService: AppToastService,
    private apiService: ApiService,
    private authService: AuthService
  ) { }

  public form: FormGroup = new FormGroup({
    email: new FormControl('joao.scarpa@designa.com', [Validators.required]),
    password: new FormControl('123456', [Validators.required]),
  })

  public login(): void {
    if (this.form.valid) {
      this.apiService.post<User>('sessions', this.form.value).then( data => {
        this.authService.login(data)
      }).catch( response => {
        this.toastService.show('Atenção', response.error.error)
      })
    } else {
      this.toastService.show('Atenção', 'Preencha o formulário antes de continuar')
    }
  }

}
