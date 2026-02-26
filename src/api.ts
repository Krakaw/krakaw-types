/**
 * @krakaw/types - Common API types
 *
 * Shared API response types used across all Krakaw projects.
 */

/**
 * Standard API response envelope.
 */
export interface ApiResponse<T = unknown> {
  ok: boolean;
  data?: T;
  error?: string;
  message?: string;
}

/**
 * Paginated API response.
 */
export interface PaginatedResponse<T = unknown> {
  ok: boolean;
  data: T[];
  total: number;
  offset: number;
  limit: number;
  hasMore: boolean;
}

/**
 * Pagination query parameters.
 */
export interface PaginationParams {
  offset?: number;
  limit?: number;
}

/**
 * Standard sort direction.
 */
export type SortDirection = 'asc' | 'desc';

/**
 * Sort parameters.
 */
export interface SortParams {
  sortBy?: string;
  sortDir?: SortDirection;
}

/**
 * Combined query parameters for list endpoints.
 */
export interface ListParams extends PaginationParams, SortParams {
  q?: string;
}
