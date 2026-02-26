/**
 * @krakaw/types - Webhook types
 *
 * Shared webhook event types used across all Krakaw projects.
 * Sourced from: Krakaw/webhooks/src/types.ts
 */

/**
 * Base structure for all webhook events.
 * Projects can define their own event unions:
 *
 * @example
 * ```typescript
 * export type CalendrEvent =
 *   | 'booking.created'
 *   | 'booking.confirmed'
 *   | 'booking.cancelled';
 *
 * // Then use: WebhookPayload<CalendrEvent>
 * ```
 */
export type WebhookEvent = string;

/**
 * Standard webhook payload structure.
 * All webhook deliveries follow this format.
 */
export interface WebhookPayload<TEvent extends WebhookEvent = string> {
  /** Unique delivery ID for idempotency */
  deliveryId: string;
  /** The event that triggered this delivery */
  event: TEvent;
  /** UTC timestamp of the event (ISO 8601) */
  timestamp: string;
  /** Event-specific data */
  data: Record<string, unknown>;
}

/**
 * Webhook registration record.
 * Stored in the database and returned by API endpoints.
 */
export interface Webhook<TEvent extends WebhookEvent = string> {
  id: string;
  userId: string;
  name: string;
  url: string;
  secret: string;
  events: TEvent[];
  enabled: boolean;
  lastDeliveredAt: Date | null;
  lastDeliveryStatus: number | null;
  lastFailedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Webhook creation payload.
 */
export interface CreateWebhookInput<TEvent extends WebhookEvent = string> {
  url: string;
  name?: string;
  events?: TEvent[];
}

/**
 * Webhook update payload.
 */
export interface UpdateWebhookInput<TEvent extends WebhookEvent = string> {
  name?: string;
  url?: string;
  events?: TEvent[];
  enabled?: boolean;
  rotateSecret?: boolean;
}

/**
 * Configuration for the webhook delivery service.
 */
export interface WebhookConfig {
  /** Maximum number of delivery attempts */
  maxRetries?: number;
  /** Timeout per delivery attempt (ms) */
  timeoutMs?: number;
  /** Base delay for exponential back-off (ms) */
  retryBaseDelayMs?: number;
  /** Custom logger instance */
  logger?: {
    info: (obj: unknown, msg: string) => void;
    warn: (obj: unknown, msg: string) => void;
    error: (obj: unknown, msg: string) => void;
  };
}

/**
 * Delivery result.
 */
export interface DeliveryResult {
  status: number;
  ok: boolean;
}
