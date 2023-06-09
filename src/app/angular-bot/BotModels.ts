export interface BotRequest {
  UserPrompt?: string;
  SystemRole?: string;
  Product?: string;
  Area: string;
  PreviousMessages?: ChatMessage[];
}

export interface ChatMessage {
  role: Role;
  content: string;
}

export interface Role {
  label: string;
}

export interface BotResponse {
  lastMessage?: string;
  previousMessages?: ChatMessage[];
}
