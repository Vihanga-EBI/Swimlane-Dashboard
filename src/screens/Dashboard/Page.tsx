import React from 'react'
import AdminLayout from '../layout'
import Swimlane from '@/components/Swimlane'

export default function Page() {

  const swimlanes = [
    {
      status: "todo" as const,
      title: "To Do",
      color: "bg-gray-500",
    },
    {
      status: "in-progress" as const,
      title: "In Progress",
      color: "bg-orange-500",
    },
    {
      status: "approved" as const,
      title: "Approved",
      color: "bg-green-500",
    },
    {
      status: "reject" as const,
      title: "Reject",
      color: "bg-red-500",
    },
  ];

  return (
    <AdminLayout>
      <div className="flex-1 p-3 lg:p-6 overflow-x-auto mobile-scroll">
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 min-w-max touch-manipulation">
          {swimlanes.map((swimlane) => (
            <Swimlane
              key={swimlane.status}
              status={swimlane.status}
              title={swimlane.title}
            />
          ))}
        </div>
      </div>
    </AdminLayout>
  )
}
