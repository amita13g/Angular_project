import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProductsService {

  products: Object[] = [
    {
      id: 1,
      title: 'Test Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam urna a pulvinar tempus. Duis et sollicitudin diam. Ut consectetur nec neque at euismod. Integer vel consequat tellus, eget commodo eros.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Rubik%27s_cube.svg/1200px-Rubik%27s_cube.svg.png',
      price: 340
    },
    {
      id: 2,
      title: 'Test Product 2',
      description: 'Fusce ac sem fermentum, luctus leo eu, condimentum dui. Morbi ultricies euismod risus, at faucibus purus venenatis sed. Quisque sollicitudin pharetra risus, id ultrices dui.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Rubik%27s_cube.svg/1200px-Rubik%27s_cube.svg.png',
      price: 500
    },
    {
      id: 3,
      title: 'Test Product 3',
      description: 'Fusce ac sem fermentum, luctus leo eu, condimentum dui. Morbi ultricies euismod risus, at faucibus purus venenatis sed. Quisque sollicitudin pharetra risus, id ultrices dui.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Rubik%27s_cube.svg/1200px-Rubik%27s_cube.svg.png',
      price: 540
    },
    {
      id: 4,
      title: 'Test Product 4',
      description: 'Proin maximus facilisis quam nec finibus. Curabitur condimentum quam sit amet sapien pharetra, vel ultricies felis facilisis. Vivamus aliquet finibus tellus, ut congue lectus',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Rubik%27s_cube.svg/1200px-Rubik%27s_cube.svg.png',
      price: 550
    },
    {
      id: 5,
      title: 'Test Product 5',
      description: 'Proin maximus facilisis quam nec finibus. Curabitur condimentum quam sit amet sapien pharetra, vel ultricies felis facilisis. Vivamus aliquet finibus tellus, ut congue lectus',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Rubik%27s_cube.svg/1200px-Rubik%27s_cube.svg.png',
      price: 550
    }
  ];

  constructor() { }

  getProducts(): Observable<Object[]> {
    //API Call might be here
    //We might be using Http.get for getting data from URL instead of the static array.
    return of(this.products);
  }

  getSingleProduct(id): Observable<Object> {
    for(let i=1; i<this.products.length; i++) {
      if(i == id) {
        return of(this.products[i-1]);
      }
    }    
  }

}
