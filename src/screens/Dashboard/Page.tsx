"use client";

import { useEffect, useState } from 'react'
import AdminLayout from '../layout'
import Swimlane from '@/components/Swimlane'
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from '@dnd-kit/core';
import { Task } from '@/types/task';
import { useTaskStore } from '@/store/taskStore';
import TaskCard from '@/components/TaskCard';
import tasksDetails from "@/data/tasks.json";

export default function Page() {
  const { tasks, setTasks, updateTaskStatus, getTasksByStatus } =
    useTaskStore();
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  useEffect(() => {
    // Always load the latest data from JSON file
    setTasks(tasksDetails as Task[]);
  }, [setTasks]);

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const task = active.data.current?.task;
    if (task) {
      setActiveTask(task);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveTask(null);

    if (!over) return;

    const taskId = active.id as string;
    const newStatus = over.id as Task["status"];

    const currentTask = tasks.find((task) => task.id === taskId);
    if (currentTask && currentTask.status !== newStatus) {
      updateTaskStatus(taskId, newStatus);
    }
  };

  const swimlanes = [
    {
      status: "todo" as const,
      title: "To Do",
      color: "bg-gray-500",
      tasks: getTasksByStatus("todo"),
    },
    {
      status: "in-progress" as const,
      title: "In Progress",
      color: "bg-orange-500",
      tasks: getTasksByStatus("in-progress"),
    },
    {
      status: "approved" as const,
      title: "Approved",
      color: "bg-green-500",
      tasks: getTasksByStatus("approved"),
    },
    {
      status: "reject" as const,
      title: "Reject",
      color: "bg-red-500",
      tasks: getTasksByStatus("reject"),
    },
  ];

  return (
    <AdminLayout>
      <div className="flex-1 overflow-x-auto mobile-scroll">
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 min-w-max touch-manipulation">
            {swimlanes.map((swimlane) => (
              <Swimlane
                key={swimlane.status}
                status={swimlane.status}
                tasks={swimlane.tasks}
                title={swimlane.title}
              />
            ))}
          </div>

          <DragOverlay>
            {activeTask ? <TaskCard task={activeTask} /> : null}
          </DragOverlay>
        </DndContext>
      </div>
    </AdminLayout>
  )
}
