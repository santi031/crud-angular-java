import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { HttpService } from 'src/app/services/http.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public users: User[] = [];

  public constructor(
    private httpService: HttpService,
    private router: Router,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.getAll();
  }

  public getAll() {
    this.httpService.getUsers().subscribe((res) => {
      this.users = res;
    });
  }

  public updateUser(id: number) {
    this.router.navigate(['update-user', id])
  }

  public createUser() {
    this.router.navigate(['create-user'])
  }

  public openModal(content: any, id: number) {
    this.modalService.open(content)
      .result.then((result) => {
        console.log(result);
        this.deleteUser(id);
        this.success();
      });
  }
  
  public deleteUser(id: number) {
    this.httpService.deleteUser(id).subscribe(() => {
      this.getAll();
    })
  }

  public success() {
    Swal.fire('Usuario Eliminado!', 'Tu usuario seleccionado ha sido eliminado', 'success');
  } 
}
