/**
 * @krakaw/types - Agent types
 *
 * Shared agent types used across all Krakaw projects.
 * Sourced from: second-brain/types/agent.ts
 */

export type AgentType = 'opencode' | 'claude-code' | 'clawdbot' | 'nanobot' | 'service';

export type AgentStatus = 'offline' | 'idle' | 'working' | 'error';

export type AgentAction = 'started' | 'progress' | 'completed' | 'failed' | 'heartbeat';

export interface Agent {
  id: string;
  name: string;
  type: AgentType;
  status: AgentStatus;
  currentTaskId?: string;
  workspace?: string;
  host?: string;
  lastHeartbeat?: string;
  metadata?: Record<string, unknown>;
  createdAt: string;
}

export interface AgentActivity {
  id: string;
  agentId: string;
  cardId?: string;
  action: AgentAction;
  message?: string;
  metadata?: Record<string, unknown>;
  createdAt: string;
}

/** Agent activity with agent name and card title populated */
export interface AgentActivityWithName extends AgentActivity {
  agentName?: string;
  cardTitle?: string;
}

/** Agent with populated current task info */
export interface AgentWithTask extends Agent {
  currentTask?: {
    id: string;
    title: string;
    columnId: string;
    columnTitle: string;
  };
}

/** Agent registration payload */
export interface RegisterAgentPayload {
  id: string;
  name: string;
  type: AgentType;
  workspace?: string;
  host?: string;
  metadata?: Record<string, unknown>;
}

/** Agent update payload */
export interface UpdateAgentPayload {
  name?: string;
  status?: AgentStatus;
  workspace?: string;
  host?: string;
  metadata?: Record<string, unknown>;
}

/** Activity log payload */
export interface LogActivityPayload {
  cardId?: string;
  action: AgentAction;
  message?: string;
  metadata?: Record<string, unknown>;
}

/** Agent cleanup result */
export interface CleanupResult {
  deleted: number;
  agentIds: string[];
}
