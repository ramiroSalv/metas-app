import { Component } from '@angular/core';
import { EncabezamientoComponent } from '../../layout/encabezamiento/encabezamiento.component';
import { PrincipalComponent } from '../../layout/principal/principal.component';
import { PieComponent } from '../../layout/pie/pie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EncabezamientoComponent, PrincipalComponent, PieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-metas';
}
