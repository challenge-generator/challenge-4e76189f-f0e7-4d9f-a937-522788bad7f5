export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  imageUrl: string;
  thumbnailUrl: string;
  category: ProductCategory;
  subcategory?: string;
  sku: string;
  stock: number;
  stockStatus: StockStatus;
  rating: ProductRating;
  tags: string[];
  attributes: ProductAttribute[];
  pricing: ProductPricing;
  availability: ProductAvailability;
  metadata: ProductMetadata;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  parentId?: string;
  level: number;
}

export type StockStatus = 'in_stock' | 'low_stock' | 'out_of_stock' | 'preorder';

export interface ProductRating {
  average: number;
  count: number;
  reviews: number;
  distribution: RatingDistribution;
}

export interface RatingDistribution {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
}

export interface ProductAttribute {
  name: string;
  value: string;
  displayName: string;
}

export interface ProductPricing {
  basePrice: number;
  salePrice?: number;
  discountPercentage?: number;
  discountAmount?: number;
  currency: string;
  taxIncluded: boolean;
  taxRate?: number;
}

export interface ProductAvailability {
  available: boolean;
  availableDate?: Date;
  preorderDate?: Date;
  shippingEstimate?: ShippingEstimate;
}

export interface ShippingEstimate {
  minDays: number;
  maxDays: number;
  freeShipping: boolean;
  expressShipping: boolean;
}

export interface ProductMetadata {
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  version: number;
}

export interface ProductFilters {
  category?: string;
  subcategory?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  rating?: number;
  tags?: string[];
  search?: string;
  sortBy?: ProductSortBy;
  sortOrder?: SortOrder;
  page?: number;
  limit?: number;
}

export type ProductSortBy = 'price' | 'name' | 'rating' | 'createdAt' | 'popularity';
export type SortOrder = 'asc' | 'desc';

export interface PaginatedResponse<T> {
  data: T[];
  pagination: PaginationInfo;
}

export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface ProductCreateRequest {
  name: string;
  description: string;
  price: number;
  categoryId: string;
  sku: string;
  stock: number;
  imageUrl: string;
  tags?: string[];
  attributes?: ProductAttribute[];
}

export interface ProductUpdateRequest {
  name?: string;
  description?: string;
  price?: number;
  categoryId?: string;
  stock?: number;
  imageUrl?: string;
  tags?: string[];
  attributes?: ProductAttribute[];
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
  timestamp: string;
  path?: string;
}

export const PRODUCT_VALIDATION = {
  NAME_MIN_LENGTH: 3,
  NAME_MAX_LENGTH: 200,
  DESCRIPTION_MIN_LENGTH: 10,
  DESCRIPTION_MAX_LENGTH: 5000,
  PRICE_MIN: 0.01,
  PRICE_MAX: 999999.99,
  STOCK_MIN: 0,
  SKU_PATTERN: /^[A-Z0-9-]{3,50}$/i,
} as const;

export function validateProduct(product: Partial<Product>): string[] {
  const errors: string[] = [];

  if (!product.name || product.name.length < PRODUCT_VALIDATION.NAME_MIN_LENGTH) {
    errors.push(`El nombre debe tener al menos ${PRODUCT_VALIDATION.NAME_MIN_LENGTH} caracteres`);
  }

  if (product.name && product.name.length > PRODUCT_VALIDATION.NAME_MAX_LENGTH) {
    errors.push(`El nombre no puede exceder ${PRODUCT_VALIDATION.NAME_MAX_LENGTH} caracteres`);
  }

  if (!product.description || product.description.length < PRODUCT_VALIDATION.DESCRIPTION_MIN_LENGTH) {
    errors.push(`La descripción debe tener al menos ${PRODUCT_VALIDATION.DESCRIPTION_MIN_LENGTH} caracteres`);
  }

  if (product.description && product.description.length > PRODUCT_VALIDATION.DESCRIPTION_MAX_LENGTH) {
    errors.push(`La descripción no puede exceder ${PRODUCT_VALIDATION.DESCRIPTION_MAX_LENGTH} caracteres`);
  }

  if (product.price === undefined || product.price < PRODUCT_VALIDATION.PRICE_MIN) {
    errors.push(`El precio debe ser mayor a ${PRODUCT_VALIDATION.PRICE_MIN}`);
  }

  if (product.price && product.price > PRODUCT_VALIDATION.PRICE_MAX) {
    errors.push(`El precio no puede exceder ${PRODUCT_VALIDATION.PRICE_MAX}`);
  }

  if (product.stock !== undefined && product.stock < PRODUCT_VALIDATION.STOCK_MIN) {
    errors.push(`El stock no puede ser negativo`);
  }

  if (product.sku && !PRODUCT_VALIDATION.SKU_PATTERN.test(product.sku)) {
    errors.push('El SKU debe contener solo letras, números y guiones (3-50 caracteres)');
  }

  return errors;
}

export function mapStockStatus(stock: number): StockStatus {
  if (stock <= 0) return 'out_of_stock';
  if (stock <= 5) return 'low_stock';
  return 'in_stock';
}

export function calculateDiscountPercentage(basePrice: number, salePrice: number): number {
  if (basePrice <= 0 || salePrice >= basePrice) return 0;
  return Math.round(((basePrice - salePrice) / basePrice) * 100);
}