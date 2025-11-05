import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Task, TaskStore } from '@/types/task';

// Create Zustand store with persistence
export const useTaskStore = create<TaskStore>()(
  persist(
    (set, get) => ({
      tasks: [], // Store all tasks
      searchQuery: '', // Current search input
      
      // Set all tasks
      setTasks: (tasks: Task[]) => set({ tasks }),
      
      // Update task status by ID
      updateTaskStatus: (id: string, status: Task['status']) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, status } : task
          ),
        })),
      
      // Update search query
      setSearchQuery: (query: string) => set({ searchQuery: query }),
      
      // Get filtered tasks based on search query
      getFilteredTasks: () => {
        const { tasks, searchQuery } = get();
        if (!searchQuery.trim()) return tasks; // Return all if empty
        
        const query = searchQuery.toLowerCase();
        return tasks.filter(
          (task) =>
            task.title.toLowerCase().includes(query) ||
            task.description.toLowerCase().includes(query) ||
            task.assignee.toLowerCase().includes(query) ||
            task.tags.some((tag) => tag.toLowerCase().includes(query))
        );
      },
      
      // Get tasks filtered by status
      getTasksByStatus: (status: Task['status']) => {
        const filteredTasks = get().getFilteredTasks();
        return filteredTasks.filter((task) => task.status === status);
      },
    }),
    {
      name: 'task-list',
      partialize: (state) => ({ tasks: state.tasks }),
    }
  )
);