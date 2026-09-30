import { Component, OnInit, OnDestroy, signal, computed, effect, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { Subject, takeUntil, debounceTime } from 'rxjs';
import { Product } from '@app/shared/models/product.model';
import { ProductService } from '@app/shared/services/product.service';
import { ProductCardComponent } from '@app/shared/components/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatChipsModule,
    ProductCardComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit, OnDestroy {
  private readonly productService = inject(ProductService);
  private readonly snackBar = inject(MatSnackBar);
  private readonly destroy$ = new Subject<void>();
  private readonly searchTerm$ = new Subject<string>();

  readonly products = signal<Product[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly error = signal<string | null>(null);
  readonly searchTerm = signal<string>('');
  readonly selectedCategory = signal<string>('all');
  readonly sortBy = signal<'name' | 'price' | 'rating'>('name');
  readonly viewMode = signal<'grid' | 'list'>('grid');

  readonly filteredProducts = computed(() => {
    let result = this.products();
    const term = this.searchTerm().toLowerCase();
    const category = this.selectedCategory();

    if (term) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.description?.toLowerCase().includes(term)
      );
    }

    if (category !== 'all') {
      result = result.filter(p => p.category === category);
    }

    const sort = this.sortBy();
    return [...result].sort((a, b) => {
      switch (sort) {
        case 'price':
          return (a.price || 0) - (b.price || 0);
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        default:
          return (a.name || '').localeCompare(b.name || '');
      }
    });
  });

  readonly categories = computed(() => {
    const cats = new Set(this.products().map(p => p.category).filter(Boolean));
    return ['all', ...Array.from(cats)];
  });

  readonly productCount = computed(() => this.filteredProducts().length);

  constructor() {
    effect(() => {
      const count = this.productCount();
      console.log(`[ProductList] Mostrando ${count} productos`);
    });
  }

  ngOnInit(): void {
    this.loadProducts();
    this.setupSearchDebounce();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadProducts(): void {
    this.isLoading.set(true);
    this.error.set(null);

    this.productService.getProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (products) => {
          this.products.set(products);
          this.isLoading.set(false);
        },
        error: (err) => {
          this.error.set('Error al cargar los productos. Por favor, intente de nuevo.');
          this.isLoading.set(false);
          this.showErrorNotification('Error al cargar productos');
        }
      });
  }

  private setupSearchDebounce(): void {
    this.searchTerm$.pipe(
      debounceTime(300),
      takeUntil(this.destroy$)
    ).subscribe(term => {
      this.searchTerm.set(term);
    });
  }

  onSearch(term: string): void {
    this.searchTerm$.next(term);
  }

  onCategoryChange(category: string): void {
    this.selectedCategory.set(category);
  }

  onSortChange(sort: 'name' | 'price' | 'rating'): void {
    this.sortBy.set(sort);
  }

  onViewModeChange(mode: 'grid' | 'list'): void {
    this.viewMode.set(mode);
  }

  onProductClick(product: Product): void {
    console.log(`[ProductList] Producto seleccionado: ${product.id}`);
  }

  onAddToCart(product: Product): void {
    this.showSuccessNotification(`${product.name} añadido al carrito`);
  }

  onRefresh(): void {
    this.loadProducts();
  }

  private showErrorNotification(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 5000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['error-snackbar']
    });
  }

  private showSuccessNotification(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['success-snackbar']
    });
  }

  trackByProductId(index: number, product: Product): string {
    return product.id;
  }
}