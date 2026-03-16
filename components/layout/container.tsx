import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "article" | "main" | "header" | "footer" | "nav";
  narrow?: boolean;
}

export function Container({
  as: Tag = "div",
  narrow = false,
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8",
        narrow && "max-w-[800px]",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
