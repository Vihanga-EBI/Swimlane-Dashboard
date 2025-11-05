export interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "approved" | "reject";
  priority: "low" | "medium" | "high";
  assignee: string;
  dueDate: string;
  tags: string[];
  category?: string;
  comments?: number;
  links?: number;
  hasImage?: boolean;
  specialActions?: {
    type: "reports" | "stream" | "group-call";
    count?: number;
    label: string;
  }[];
}

export interface TaskStore {
  tasks: Task[];
  searchQuery: string;
  setTasks: (tasks: Task[]) => void;
  updateTaskStatus: (id: string, status: Task["status"]) => void;
  setSearchQuery: (query: string) => void;
  getFilteredTasks: () => Task[];
  getTasksByStatus: (status: Task["status"]) => Task[];
}
