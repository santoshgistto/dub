"use client";

import { ReactNode } from "react";
import { nFormatter } from "#/lib/utils";
import Tooltip from "#/ui/tooltip";

export default function Number({
  value,
  unit = "clicks",
  children,
  lastClicked,
}: {
  value?: number | null;
  unit?: string;
  children: ReactNode;
  lastClicked?: Date | null;
}) {
  if ((!value || value < 1000) && !lastClicked) {
    return children;
  }
  return (
    <Tooltip
      content={
        <div className="block max-w-xs px-4 py-2 text-center text-sm text-gray-700">
          <p className="text-sm font-semibold text-gray-700">
            {nFormatter(value || 0, { full: true })} {unit}
          </p>
          {lastClicked && (
            <p className="mt-1 text-xs text-gray-500">
              Last clicked on{" "}
              {new Date(lastClicked).toLocaleDateString("en-us", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          )}
        </div>
      }
    >
      {children}
    </Tooltip>
  );
}