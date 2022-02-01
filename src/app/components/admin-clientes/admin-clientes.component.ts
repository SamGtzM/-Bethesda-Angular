import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminClientesService } from 'src/app/services/admin-clientes.service'; 

@Component({
  selector: 'app-admin-clientes',
  templateUrl: './admin-clientes.component.html',
  styleUrls: ['./admin-clientes.component.scss']
})
export class AdminClientesComponent implements OnInit {

  user = {

    id_acceso: '2',
    numero_empleado: '2', 
    nombre_completo: 'Prueba Prueba',
    correo_electronico: 'prueba@hotmail.com',
    telefono: '2222222222',
    usuario: 'prueba',
    pass: '12',
    usuario_alta: 'admin',

  }

  password = {
    pass: '12',
  }

  constructor(

    private AdminClientesService: AdminClientesService,
    private router: Router
    
  ) { }

  ngOnInit(): void {
    this.AdminClientesService.getUsers().subscribe( (res:any) =>{
      localStorage.setItem('token', res.token);
      console.log(res);
    });
  }

  singUp(){
    if (this.user.pass === this.password.pass) {
      this.AdminClientesService.singup(this.user).subscribe( (res:any) =>{
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['admin_clientes']);
      });
    } else {
      console.log('Los passwords no coinciden');
    }
  }

}

