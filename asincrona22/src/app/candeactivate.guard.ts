import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

//crear una interfaz para canDeactivate
interface Desactivar {
  SalirDeRuta: () => Observable<boolean> | boolean
}

@Injectable({
  providedIn: 'root'
})
export class CandeactivateGuard implements CanDeactivate<Desactivar> {
  canDeactivate(component: Desactivar) {
    return component.SalirDeRuta ? component.SalirDeRuta() : true;
  }
}
