import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from 'src/app/interface/producto-completo.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

producto: ProductoDescripcion;
id: string;

// se muestran los parámetros que recibimos por url
  constructor(private route: ActivatedRoute, 
    public productoService: ProductosService) { }

  ngOnInit() {
// se muestran los parámetros que recibimos por url
    this.route.params

      .subscribe( parametros => {

        this.productoService.getProducto(parametros['id'])
        .subscribe( (producto: ProductoDescripcion) => {

          this.id = parametros['id'];
          this.producto = producto;
          console.log(producto);
      });
      });
  }
}
