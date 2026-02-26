# @krakaw/types

Shared TypeScript types for the Krakaw ecosystem.

Used across: second-brain, calendr, psych-transcribe, roundup, and more.

## Installation

```bash
npm install @krakaw/types
# or
pnpm add @krakaw/types
```

## Usage

### Import everything

```typescript
import type { Agent, KanbanCard, WebhookPayload, ApiResponse } from '@krakaw/types';
```

### Import from sub-paths

```typescript
import type { Agent, AgentStatus, AgentActivity } from '@krakaw/types/agent';
import type { KanbanCard, KanbanColumn, KanbanBoard } from '@krakaw/types/kanban';
import type { WebhookPayload, WebhookEvent } from '@krakaw/types/webhook';
import type { ApiResponse, PaginatedResponse } from '@krakaw/types/api';
```

## Type Modules

### Agent (`@krakaw/types/agent`)

Types for the Locotec agent system:

- `Agent` — registered agent record
- `AgentStatus` — `'offline' | 'idle' | 'working' | 'error'`
- `AgentType` — `'opencode' | 'claude-code' | 'clawdbot' | 'nanobot' | 'service'`
- `AgentAction` — activity log action types
- `AgentActivity` — activity log entry
- `AgentWithTask` — agent with populated current task info
- `RegisterAgentPayload`, `UpdateAgentPayload`, `LogActivityPayload`

### Kanban (`@krakaw/types/kanban`)

Types for the second-brain kanban board:

- `KanbanCard` — a card with all its fields
- `KanbanColumn` — a column containing cards
- `KanbanBoard` — the full board
- `KanbanCardRef` — minimal reference (id + title) for parent/child links
- `AgentPresence` — live agent presence stored on a card
- `KanbanAttachment` — file attachment on a card
- `CardComment`, `TimelineEvent` — card history

### Webhook (`@krakaw/types/webhook`)

Types for the Krakaw webhook delivery system:

- `WebhookPayload<TEvent>` — standard delivery envelope
- `WebhookEvent` — base event type (alias for `string`)
- `Webhook<TEvent>` — registered webhook record
- `CreateWebhookInput`, `UpdateWebhookInput` — CRUD payloads
- `WebhookConfig`, `DeliveryResult`

### API (`@krakaw/types/api`)

Common API response types:

- `ApiResponse<T>` — standard `{ ok, data?, error? }` envelope
- `PaginatedResponse<T>` — paginated list response
- `PaginationParams`, `SortParams`, `ListParams`

## Development

```bash
npm install
npm run build
```

## License

MIT
