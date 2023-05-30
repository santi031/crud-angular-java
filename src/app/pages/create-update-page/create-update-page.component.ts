import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeUser } from 'src/app/interfaces/type-user';
import { User } from 'src/app/interfaces/user';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-update-page',
  templateUrl: './create-update-page.component.html',
  styleUrls: ['./create-update-page.component.css']
})
export class CreateUpdatePageComponent {

  public editMode: boolean = false;
  public required: boolean = false;
  public showToast: boolean = false;
  public textButton: string = "Crear";
  public user: User = {
    email: "",
    idUsers: 0,
    lastname: "",
    name: "",
    phone: 0,
    typeUser: {
      idTypeUsers: 0,
      name: ""
    }
  };

  public typeUsers: TypeUser[] = [];

  public constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let hasParams = this.route.snapshot.paramMap.keys.length > 0;
    if (hasParams) {
      this.route.params.subscribe((param) => {
        if (param !== null) {
          let id = param['id'];
          let finalId = parseInt(id)
          this.editMode = true;
          this.required = false;
          this.textButton = "Editar"
          this.httpService.getUser(finalId).subscribe((res) => {
            this.user = res;
          });
        }
      })
    }
    this.httpService.getTypeUsers().subscribe((res) => {
      this.typeUsers = res;
    });
  }

  public saveUser() {
    if (this.user.typeUser.name == "Estudiante") {
      this.user.typeUser.idTypeUsers = 2;
    } else {
      this.user.typeUser.idTypeUsers = 1;
    }

    this.httpService.saveUser(this.user).subscribe(() => {
      this.success();
      this.router.navigate(['/']);
    });
  }

  public success() {
    Swal.fire('Cambio Exitoso!', 'Tus cambios han sido agregados correctamente', 'success');
  }
  
  public returnPage() {
    this.router.navigate(['/']);
  }
}
