"use client";
import { PlusIcon, EllipsisIcon } from "lucide-react";
import { Task } from "@/types/task";


interface SwimlaneProps {
  status: Task["status"];
  title: string;
}

export default function Swimlane({ status, title }: SwimlaneProps) {

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
    <div className="flex-1 min-w-0 w-full lg:w-auto border-2">
      <div className={`bg-white px-3 border-b-2 lg:px-4 py-2 lg:py-3`}>
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
    </div>
  );
}
