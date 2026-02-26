/**
 * @krakaw/types - Kanban types
 *
 * Shared kanban board types used across all Krakaw projects.
 * Sourced from: second-brain/types/kanban.ts
 */

import type { AgentType, AgentStatus } from './agent.js';

export interface KanbanAttachment {
  id: string;
  cardId: string;
  filename: string;
  /** Relative path from BRAIN_DIR */
  filepath: string;
  mimetype: string;
  /** File size in bytes */
  size: number;
  createdAt: string;
}

/** Pending attachment before card is saved */
export interface PendingAttachment {
  id: string;
  tempId: string;
  filename: string;
  mimetype: string;
  size: number;
  tempPath: string;
}

/** Minimal card reference for parent/child display */
export interface KanbanCardRef {
  id: string;
  title: string;
  columnId?: string;
  columnTitle?: string;
}

/** Live agent presence data stored as JSON in the agent_presence column */
export interface AgentPresence {
  agentId: string;
  agentName: string;
  status: 'active' | 'stale' | 'stalled';
  /** ISO timestamp */
  lastSeen: string;
  /** ISO timestamp */
  startedAt: string;
}

export interface KanbanCard {
  id: string;
  title: string;
  description?: string;
  /** Link to project document */
  projectSlug?: string;
  tags?: string[];
  assignee?: string;
  priority?: 'low' | 'medium' | 'high';
  dueDate?: string;
  /** e.g. "In progress", "Blocked", "PR created" */
  status?: string;
  /** GitHub repository URL */
  repo?: string;
  /** Pull request URL */
  pr?: string;
  /** JSON string containing additional metadata */
  metadata?: string;
  attachments?: KanbanAttachment[];
  /** Parent card ID for hierarchical nesting */
  parentId?: string;
  /** Populated parent reference */
  parent?: KanbanCardRef;
  /** Populated child references */
  children?: KanbanCardRef[];
  /** Persisted agent presence data (stored as JSON in agent_presence column) */
  agentPresence?: AgentPresence;
  agent?: {
    id: string;
    name: string;
    type: AgentType;
    status: AgentStatus;
  };
}

export interface KanbanColumn {
  id: string;
  title: string;
  cards: KanbanCard[];
  /** Total card count (used when cards are lazy-loaded) */
  cardCount?: number;
}

export interface KanbanBoard {
  id: string;
  title: string;
  columns: KanbanColumn[];
  updated?: string;
}

export interface CardComment {
  id: string;
  cardId: string;
  author: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface TimelineEvent {
  id: string;
  cardId: string;
  eventType: string;
  author?: string;
  oldValue?: string;
  newValue?: string;
  metadata?: string;
  createdAt: string;
}
