import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ProduitserviceService} from '../Services/produitservice.service';
import { Produit } from '../interfaces/produit';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css',

})

export class ProduitComponent {
   dataarray : Produit[] = [];

  constructor(private service:ProduitserviceService)
  {
    this.service.getProduits().subscribe(data => this.dataarray = data as Produit[]);

  }

}
