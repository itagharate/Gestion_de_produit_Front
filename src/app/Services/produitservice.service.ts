import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../interfaces/produit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitserviceService {

  constructor(private serviceProduit : HttpClient) 
  {}

  getProduits(): Observable<Produit[]>{
    return this.serviceProduit.get<Produit[]>("https://localhost:7270/Produitall");
  }
}
