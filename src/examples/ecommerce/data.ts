import { type BlockData, type BlockCard } from '@shared/interfaces';

const componentContent = [
  `import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'example-ecommerce-1',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  template: \`\n  <section class="py-20 px-4 bg-gray-50 dark:bg-gray-900">\n    <div class="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">\n      @for (product of products; track $index) {\n        <mat-card class="p-4 flex flex-col animate-fade-in">\n          <img [src]="product.image" [alt]="product.name" class="h-48 w-full object-cover rounded mb-4" />\n          <h3 class="text-lg font-semibold mb-2">{{ product.name }}</h3>\n          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ product.price }}</p>\n          <button mat-raised-button color="primary">Add to cart</button>\n        </mat-card>\n      }\n    </div>\n  </section>\n  \`,
})
export default class Ecommerce1 {
  products = [
    { name: 'Product 1', price: '$29', image: 'https://placehold.co/400x300' },
    { name: 'Product 2', price: '$49', image: 'https://placehold.co/400x300' },
    { name: 'Product 3', price: '$19', image: 'https://placehold.co/400x300' },
  ];
}`,
  `import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'example-ecommerce-2',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  template: \`\n  <section class="py-20 px-4">\n    <div class="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 items-center">\n      <img src="https://placehold.co/600x400" alt="Product" class="rounded-lg w-full h-auto" />\n      <div>\n        <h2 class="text-3xl font-bold mb-4">Premium Headphones</h2>\n        <p class="text-gray-600 dark:text-gray-300 mb-6">High-fidelity sound with noise cancellation.</p>\n        <div class="text-2xl font-bold mb-6">$199</div>\n        <button mat-raised-button color="primary" class="mr-2">Add to cart</button>\n        <button mat-stroked-button>Buy Now</button>\n      </div>\n    </div>\n  </section>\n  \`,
})
export default class Ecommerce2 {}
`,
  `import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'example-ecommerce-3',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  template: \`\n  <section class="py-20 px-4 bg-gray-50 dark:bg-gray-800">\n    <div class="max-w-3xl mx-auto">\n      <h2 class="text-2xl font-bold mb-6">Shopping Cart</h2>\n      <div class="space-y-4">\n        @for (item of cart; track $index) {\n          <mat-card class="p-4 flex items-center justify-between">\n            <div class="flex items-center gap-4">\n              <img [src]="item.image" [alt]="item.name" class="w-16 h-16 rounded" />\n              <div>\n                <h3 class="font-medium">{{ item.name }}</h3>\n                <p class="text-sm text-gray-600 dark:text-gray-300">Qty: {{ item.qty }}</p>\n              </div>\n            </div>\n            <div class="font-semibold">{{ item.price }}</div>\n          </mat-card>\n        }\n        <div class="text-right text-xl font-bold mt-6">Total: {{ total }}</div>\n        <button mat-raised-button color="primary" class="w-full mt-4">Checkout</button>\n      </div>\n    </div>\n  </section>\n  \`,
})
export default class Ecommerce3 {
  cart = [
    { name: 'Product 1', qty: 1, price: '$29', image: 'https://placehold.co/100' },
    { name: 'Product 2', qty: 2, price: '$49', image: 'https://placehold.co/100' },
  ];
  get total() {
    return '$127';
  }
}
`,
  `import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'example-ecommerce-4',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  template: \`\n  <section class="py-20 px-4">\n    <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">\n      <form class="space-y-4">\n        <h2 class="text-2xl font-bold mb-4">Shipping Info</h2>\n        <mat-form-field appearance="fill" class="w-full">\n          <mat-label>Name</mat-label>\n          <input matInput />\n        </mat-form-field>\n        <mat-form-field appearance="fill" class="w-full">\n          <mat-label>Address</mat-label>\n          <input matInput />\n        </mat-form-field>\n        <mat-form-field appearance="fill" class="w-full">\n          <mat-label>City</mat-label>\n          <input matInput />\n        </mat-form-field>\n      </form>\n      <mat-card class="p-6">\n        <h2 class="text-2xl font-bold mb-4">Order Summary</h2>\n        <div class="flex justify-between mb-2">\n          <span>Subtotal</span>\n          <span>$127</span>\n        </div>\n        <div class="flex justify-between mb-4">\n          <span>Shipping</span>\n          <span>$10</span>\n        </div>\n        <div class="flex justify-between text-xl font-semibold mb-6">\n          <span>Total</span>\n          <span>$137</span>\n        </div>\n        <button mat-raised-button color="primary" class="w-full">Place Order</button>\n      </mat-card>\n    </div>\n  </section>\n  \`,
})
export default class Ecommerce4 {}
`,
];

export const ecommerceBlocks: BlockCard[] = [
  {
    id: '1',
    title: 'Product Grid',
    description: 'Responsive product card grid for storefronts',
    previewUrl: 'blocks/ecommerce/ecommerce-1.webp',
    iframeUrl: '/examples/ecommerce/1',
  },
  {
    id: '2',
    title: 'Product Showcase',
    description: 'Featured product layout with actions',
    previewUrl: 'blocks/ecommerce/ecommerce-2.webp',
    iframeUrl: '/examples/ecommerce/2',
  },
  {
    id: '3',
    title: 'Cart Summary',
    description: 'Shopping cart summary with totals',
    previewUrl: 'blocks/ecommerce/ecommerce-3.webp',
    iframeUrl: '/examples/ecommerce/3',
  },
  {
    id: '4',
    title: 'Checkout Summary',
    description: 'Checkout form with order summary',
    previewUrl: 'blocks/ecommerce/ecommerce-4.webp',
    iframeUrl: '/examples/ecommerce/4',
  },
];

export const ecommerceSectionsData = {
  title: 'UI Ecommerce Collection',
  description: 'Product displays, cart interfaces and checkout layouts.',
  path: 'ecommerce',
  blocks: [...ecommerceBlocks],
};

export const ecommerceBlocksWithViews: BlockData[] = ecommerceBlocks.map(
  (block, index) => {
    const codeTemplates: any = {
      '1': {
        template: `<section class="py-20 px-4 bg-gray-50 dark:bg-gray-900">
  <div class="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    <mat-card class="p-4 flex flex-col" *ngFor="let product of products">
      <img [src]="product.image" [alt]="product.name" class="h-48 w-full object-cover rounded mb-4" />
      <h3 class="text-lg font-semibold mb-2">{{ product.name }}</h3>
      <p class="text-gray-600 dark:text-gray-300 mb-4">{{ product.price }}</p>
      <button mat-raised-button color="primary">Add to cart</button>
    </mat-card>
  </div>
</section>`,
        component: `import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule]
})
export class ProductGridComponent {
  products = [
    { name: 'Product 1', price: '$29', image: 'https://placehold.co/400x300' },
    { name: 'Product 2', price: '$49', image: 'https://placehold.co/400x300' },
    { name: 'Product 3', price: '$19', image: 'https://placehold.co/400x300' }
  ];
}`,
        styles: ``,
      },
      '2': {
        template: `<section class="py-20 px-4">
  <div class="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 items-center">
    <img src="https://placehold.co/600x400" alt="Product" class="rounded-lg w-full h-auto" />
    <div>
      <h2 class="text-3xl font-bold mb-4">Premium Headphones</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-6">High-fidelity sound with noise cancellation.</p>
      <div class="text-2xl font-bold mb-6">$199</div>
      <button mat-raised-button color="primary" class="mr-2">Add to cart</button>
      <button mat-stroked-button>Buy Now</button>
    </div>
  </div>
</section>`,
        component: `import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-showcase',
  templateUrl: './product-showcase.component.html',
  styleUrls: ['./product-showcase.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule]
})
export class ProductShowcaseComponent {}`,
        styles: ``,
      },
      '3': {
        template: `<section class="py-20 px-4 bg-gray-50 dark:bg-gray-800">
  <div class="max-w-3xl mx-auto">
    <h2 class="text-2xl font-bold mb-6">Shopping Cart</h2>
    <div class="space-y-4">
      <mat-card class="p-4 flex items-center justify-between" *ngFor="let item of cart">
        <div class="flex items-center gap-4">
          <img [src]="item.image" [alt]="item.name" class="w-16 h-16 rounded" />
          <div>
            <h3 class="font-medium">{{ item.name }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">Qty: {{ item.qty }}</p>
          </div>
        </div>
        <div class="font-semibold">{{ item.price }}</div>
      </mat-card>
      <div class="text-right text-xl font-bold mt-6">Total: {{ total }}</div>
      <button mat-raised-button color="primary" class="w-full mt-4">Checkout</button>
    </div>
  </div>
</section>`,
        component: `import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule]
})
export class CartSummaryComponent {
  cart = [
    { name: 'Product 1', qty: 1, price: '$29', image: 'https://placehold.co/100' },
    { name: 'Product 2', qty: 2, price: '$49', image: 'https://placehold.co/100' }
  ];

  get total() {
    return '$127';
  }
}`,
        styles: ``,
      },
      '4': {
        template: `<section class="py-20 px-4">
  <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
    <form class="space-y-4">
      <h2 class="text-2xl font-bold mb-4">Shipping Info</h2>
      <mat-form-field appearance="fill" class="w-full">
        <mat-label>Name</mat-label>
        <input matInput />
      </mat-form-field>
      <mat-form-field appearance="fill" class="w-full">
        <mat-label>Address</mat-label>
        <input matInput />
      </mat-form-field>
      <mat-form-field appearance="fill" class="w-full">
        <mat-label>City</mat-label>
        <input matInput />
      </mat-form-field>
    </form>
    <mat-card class="p-6">
      <h2 class="text-2xl font-bold mb-4">Order Summary</h2>
      <div class="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>$127</span>
      </div>
      <div class="flex justify-between mb-4">
        <span>Shipping</span>
        <span>$10</span>
      </div>
      <div class="flex justify-between text-xl font-semibold mb-6">
        <span>Total</span>
        <span>$137</span>
      </div>
      <button mat-raised-button color="primary" class="w-full">Place Order</button>
    </mat-card>
  </div>
</section>`,
        component: `import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-checkout-summary',
  templateUrl: './checkout-summary.component.html',
  styleUrls: ['./checkout-summary.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule]
})
export class CheckoutSummaryComponent {}`,
        styles: ``,
      },
    };

    return {
      ...block,
      content: componentContent[index],
      views: [
        {
          label: 'Template',
          content: codeTemplates[block.id].template,
          language: 'html',
        },
        {
          label: 'Component',
          content: codeTemplates[block.id].component,
          language: 'typescript',
        },
        {
          label: 'Styles',
          content: codeTemplates[block.id].styles,
          language: 'css',
        },
      ],
    };
  }
);
