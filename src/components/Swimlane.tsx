"use client";
import { PlusIcon, EllipsisIcon } from "lucide-react";
import { Task } from "@/types/task";
import TaskCard from "./TaskCard";
import { useDroppable } from "@dnd-kit/core";

// Component props
interface SwimlaneProps {
  status: Task["status"];
  title: string;
  tasks: Task[];
}

export default function Swimlane({ status, tasks, title }: SwimlaneProps) {
  // Makes this column droppable for drag and drop
  const { isOver, setNodeRef } = useDroppable({
    id: status,
    data: {
      type: "swimlane",
      status,
    },
  });
  const getHeaderColor = (status: string) => {
    switch (status) {
      case "todo":
        return "bg-[var(--status-todo)] text-text-natural-3";
      case "in-progress":
        return "bg-[var(--status-in-progress)] text-text-natural-3";
      case "approved":
        return "bg-[var(--status-approved)] text-text-natural-3";
      case "reject":
        return "bg-[var(--status-reject)] text-white";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="flex-1 min-w-64 border border-gray-200 bg-white shadow-sm">
      <div className={`px-3 border-b-2 lg:px-4 py-2 lg:py-3 rounded-t-lg`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h2
              className={`font-medium ${getHeaderColor(
                status
              )} text-xs lg:text-sm px-6 py-1 rounded-full tracking-wide`}
            >
              {title}
            </h2>
          </div>
          <div className="flex items-center space-x-1 lg:space-x-2">
            <button className="p-1 hover:bg-white/50 rounded">
              <PlusIcon className="h-3 w-3 lg:h-4 lg:w-4 text-text-natural-3 stroke-[3]" />
            </button>
            <button className="p-1 hover:bg-white/50 rounded">
              <EllipsisIcon className="h-3 w-3 lg:h-4 lg:w-4 text-text-natural-3 stroke-[3]" />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={setNodeRef}
        className={`
          min-h-[400px] lg:min-h-[500px] p-3 lg:p-4 bg-gray-50 rounded-b-lg transition-colors duration-200
          ${isOver ? "bg-blue-100" : ""}
        `}
      >
        <div className="space-y-2 lg:space-y-3">
          {tasks.length === 0 ? (
            // Show message when no tasks
            <div className="text-center text-gray-400 text-xs lg:text-sm py-6 lg:py-8">
              No tasks in this column
            </div>
          ) : (
            // Render all tasks
            tasks.map((task) => <TaskCard key={task.id} task={task} />)
          )}
        </div>
      </div>
    </div>
  );
}