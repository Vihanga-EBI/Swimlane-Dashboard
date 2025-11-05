"use client";
import { useTaskStore } from "@/store/taskStore";
import { PlusIcon, SearchIcon, SlidersHorizontal, BellIcon } from "lucide-react";
import BaseIcon from "../../public/icons/BaseIcon";

export default function Header() {
    const { searchQuery, setSearchQuery } = useTaskStore();

    return (
        <div className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4">
            <div className="flex items-center justify-end">
                <div className="flex items-center space-x-2 lg:space-x-4 flex-1 lg:flex-none gap">
                    <button className="flex items-center px-3 lg:px-3 py-3 bg-primary gap-2 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold">
                        <span className="hidden sm:inline">Create new board</span>
                        <span className="sm:hidden">Create</span>
                        <PlusIcon className="h-4 w-4 text-white" />
                    </button>

                    <div className="relative flex-1 max-w-xs">
                        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 lg:h-5 lg:w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search tasks ..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-9 lg:pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        />
                    </div>
                </div>

                <div className="flex items-center space-x-1 lg:space-x-1 lg:pl-2">
                    <button className="p-2 text-gray-600 hover:bg-gray-100  unded-lg">
                        <SlidersHorizontal className="h-4 w-4 lg:h-5 lg:w-5" />
                    </button>

                    <button className="flex items-center px-3 py-2 text-sm text-text-secondary hover:bg-gray-100 rounded-lg relative">
                        <BellIcon className="h-4 w-4 lg:h-5 lg:w-5" />
                        <span className="absolute top-2 left-6 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>

                    <div className="w-7 h-7 lg:w-8 lg:h-8 bg-gray-700 rounded-full flex items-center justify-center">
                        <BaseIcon className="h-4 w-4 text-white" />
                    </div>
                </div>
            </div>
        </div>
    );
}
