"use client";

import { Task } from "@/types/task";
import { BoltIcon, LinkIcon, CircleAlert, BellIcon, MessageCircleMoreIcon, CalendarRangeIcon } from "lucide-react";
import BaseIcon from "../../public/icons/BaseIcon";

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  console.log("TaskCard task data:", task);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Reserch":
        return "bg-[var(--category-research)]";
      case "Design":
        return "bg-[var(--category-design)]";
      case "Other":
        return "bg-[var(--category-other)]";
      case "Feedback":
        return "bg-[var(--category-feedback)]";
      case "Presentation":
        return "bg-[var(--category-presentation)]";
      case "interface":
        return "bg-[var(--category-interface)]";
      default:
        return "bg-gray-500";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === tomorrow.toDateString()) {
      return "Due: Tomorrow";
    }

    return `Due: ${date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })}`;
  };

  const getSpecialActionIcon = (type: string, count: number) => {
    switch (type) {
      case "reports":
        return (
          <>
            <CircleAlert className="h-3 w-3 mr-1 text-[var(--category-design)]" />
            <span className="text-[var(--category-design)] font-medium">{count}</span>
            <span className="text-[var(--category-design)] font-medium">Reports</span>
          </>
        );
      case "stream":
        return (
          <>
            <BellIcon className="h-3 w-3 text-primary" />
            <span className="text-primary font-medium">Stream</span>
          </>
        );
      case "group-call":
        return (
          <>
            <BellIcon className="h-3 w-3 text-primary" />
            <span className="text-primary font-medium">Group Call</span>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 lg:p-4 cursor-grab hover:shadow-md transition-shadow duration-200">
      {task.category && (
        <div className="flex items-center mb-3">
          <div
            className={`w-2 h-2 ${getCategoryColor(task.category)} mr-2`}
            style={{ borderRadius: "3px" }}
          ></div>
          <span className="text-xs text-text-natural-5">{task.category}</span>
        </div>
      )}

      <h3 className="font-semibold text-gray-900 text-sm mb-3 leading-tight">
        {task.title}
      </h3>

      <div className="flex items-center mb-3">
        <div className="w-8 h-8 bg-text-natural-3 rounded-full mr-3 flex items-center justify-center">
          <span className="text-xs text-white">
            <BaseIcon />
          </span>
        </div>

        <span
          className={`
            px-2 py-1 text-xs font-medium rounded text-text-natural-5 flex items-center capitalize bg-text-natural-7`}
        >
          <BoltIcon className="h-3 w-3 mr-1 text-text-natural-5 stroke-[2]" />
          {task.priority}
        </span>
      </div>

      {task.hasImage && (
        <div className="mb-3 bg-text-natural-3 h-16 lg:h-20 rounded flex items-center justify-center">
          <span className="text-xs text-white">
            <BaseIcon />
          </span>
        </div>
      )}
      <div className="border-t border-gray-100 mb-3"></div>

      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center space-x-3">
          {(task?.links ?? 0) > 0 && (
            <div className="flex items-center text-xs text-gray-500">
              <LinkIcon className="h-3 w-3 mr-1 stroke-[2]" />
              <span className="font-medium text-text-natural-4">
                {task.links ?? 0}
              </span>
            </div>
          )}

          <div className="flex items-center text-xs text-gray-500">
            <MessageCircleMoreIcon className="h-3 w-3 mr-1 stroke-[2]" />
            <span className="font-medium text-text-natural-4">
              {task.comments || 0}
            </span>
          </div>

          {task.specialActions && task.specialActions.length > 0 ? (
            <>
              {task.specialActions.map((action, index) => (
                <div key={index} className="flex items-center gap-1">
                  {getSpecialActionIcon(action.type, action.count ?? 0)}
                </div>
              ))}
            </>
          ) : (
            <div className="flex items-center">
              <CalendarRangeIcon className="h-3 w-3 mr-1 stroke-[2]" />
              <span className="font-medium text-text-natural-4">
                {formatDate(task.dueDate)}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
