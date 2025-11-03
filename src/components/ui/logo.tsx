import { cn } from "@/lib/utils";

interface RRMLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const RRMLogo = ({ size = "md", className }: RRMLogoProps) => {
  let textSizeClass = "text-2xl";
  let iconSizeClass = "h-6 w-6";

  switch (size) {
    case "sm":
      textSizeClass = "text-xl";
      iconSizeClass = "h-5 w-5";
      break;
    case "md":
      textSizeClass = "text-2xl";
      iconSizeClass = "h-6 w-6";
      break;
    case "lg":
      textSizeClass = "text-3xl";
      iconSizeClass = "h-8 w-8";
      break;
    case "xl":
      textSizeClass = "text-4xl";
      iconSizeClass = "h-10 w-10";
      break;
  }

  return (
    <div className={cn("flex items-center space-x-2 font-bold text-primary", className)}>
      {/* Simple pressure washer icon representation */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={cn(iconSizeClass, "text-accent")}
      >
        <path d="M12 2a10 10 0 0 0-9.95 9h-2.05a12 12 0 0 1 24 0h-2.05a10 10 0 0 0-9.95-9zm0 18a8 8 0 0 0 7.95-7h2.05a10 10 0 0 1-20 0h2.05a8 8 0 0 0 7.95 7zm-1-10h2v-6h-2v6zm-4 0h2v-6h-2v6zm8 0h2v-6h-2v6z" />
      </svg>
      <span className={textSizeClass}>R.R.M</span>
    </div>
  );
};

export default RRMLogo;
