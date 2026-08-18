"use client";;
import { CanvasText } from "@/components/ui/canvas-text";

export function CanvasTextDemo({text}) {
  return (
    <div
      className="flex items-center justify-center bg-transparent p-0 dark:bg-transparent">
      <CanvasText
        text={text}
        className="text-3xl font-bold md:text-3xl lg:text-3xl"
        backgroundClassName="bg-black dark:bg-neutral-700"
        colors={[
          "var(--color-blue-500)",
          "var(--color-sky-500)",
          "var(--color-violet-500)",
          "var(--color-teal-500)",
        ]}
        lineGap={6}
        animationDuration={10} />
    </div>
  );
}
