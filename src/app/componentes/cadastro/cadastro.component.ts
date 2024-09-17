import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar'; // Importa MatSnackBar


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  cadastroForm: FormGroup;
  successMessage: string = ''; 

  constructor(private fb: FormBuilder, private router:Router, private snackBar: MatSnackBar) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', Validators.required]
    }, { validator: this.senhaMatcher });
  }

  senhaMatcher(form: FormGroup) {
    const senha = form.get('senha')?.value;
    const confirmarSenha = form.get('confirmarSenha')?.value;
    return senha === confirmarSenha ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      this.snackBar.open('Cadastro realizado com sucesso, você será direcionado à página inicial.', 'Fechar', {
        duration: 3000, // Duração em milissegundos
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });

      // Redirecionar após o Snackbar ser fechado
      setTimeout(() => {
        this.router.navigate(['home']);
      }, 3000); // Ajuste o tempo conforme necessário
    } else {
      console.log('Formulário inválido');
    }
  }
}