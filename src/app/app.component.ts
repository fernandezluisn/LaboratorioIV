import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clase1';

  usuario={email:'', pass:''};

  Ingresar(){
    console.log(this.usuario);
  }
}
