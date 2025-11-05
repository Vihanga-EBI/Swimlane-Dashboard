"use client";
import { PencilIcon } from "lucide-react";
import BaseIcon from "../../public/icons/BaseIcon";

export default function SwimlaneHeader() {
  return (
    <div className="bg-white border-gray-200 px-4 lg:px-6 py-4 lg:py-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
              Sport Xi Project
            </h1>
            <span className="px-4 py-1 bg-accent text-text-natural-3 text-xs font-medium rounded-lg">
              In progress
            </span>
          </div>
          <p className="text-text-natural-5 mb-4 text-sm lg:text-base">
            event production
          </p>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-2 lg:gap-4">
              <div className="flex items-center gap-3">
                <span className="text-sm text-text-natural-5">assigned</span>
                <div className="flex -space-x-2">
                  <div className="w-5 h-5 lg:w-8 lg:h-8 bg-text-natural-3 rounded-full border-2 border-white justify-center flex items-center">
                    <BaseIcon className="w-3 h-3" />
                  </div>
                  <div className="w-5 h-5 lg:w-8 lg:h-8 bg-text-natural-3 rounded-full border-2 border-white justify-center flex items-center">
                    <BaseIcon className="w-3 h-3" />
                  </div>
                  <div className="w-5 h-5 lg:w-8 lg:h-8 bg-text-natural-3 rounded-full border-2 border-white justify-center flex items-center">
                    <BaseIcon className="w-3 h-3" />
                  </div>
                  <div className="w-5 h-5 lg:w-8 lg:h-8 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center font-bold text-xs text-text-natural-3">
                    +2
                  </div>
                </div>
                <button className="flex items-center gap-2 px-6 py-2 hover:bg-gray-200 border border-gray-200 rounded-full text-gray-600 text-sm font-mediumtransition-colors duration-200">
                  <span className="text-text-natural-5 text-xs">Manage</span>
                  <PencilIcon className="h-3 text-2xl text-text-natural-5 w-3" />
                </button>
              </div>
            </div>
          </div>

          <hr className="mt-4" />

          <div className="text-xs mt-3 lg:text-xs text-text-natural-5">
            Last updated on: 04 April, 2022
          </div>
        </div>
      </div>
    </div>
  );
}