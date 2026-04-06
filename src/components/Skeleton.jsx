import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Common cn utility for merging classes.
 */
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Skeleton = ({ className, ...props }) => {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-gray-100", className)}
      {...props}
    />
  );
};

export const StatCardSkeleton = () => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-[120px]">
    <Skeleton className="h-4 w-24 mb-4" />
    <div className="flex justify-between items-baseline mt-4">
      <Skeleton className="h-8 w-32" />
      <Skeleton className="h-5 w-16 rounded-full" />
    </div>
  </div>
);

export const ChartSkeleton = () => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-[450px]">
    <div className="flex justify-between mb-8">
      <div>
        <Skeleton className="h-6 w-48 mb-2" />
        <Skeleton className="h-4 w-36" />
      </div>
      <div className="flex space-x-2">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-16 rounded-full" />
      </div>
    </div>
    <Skeleton className="h-[300px] w-full mt-4" />
  </div>
);

export const TableSkeleton = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
    <div className="flex justify-between mb-6">
      <Skeleton className="h-6 w-48" />
      <Skeleton className="h-10 w-32 rounded-xl" />
    </div>
    <div className="space-y-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <Skeleton key={i} className="h-12 w-full rounded-lg" />
      ))}
    </div>
  </div>
);

export default Skeleton;
