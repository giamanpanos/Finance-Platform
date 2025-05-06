import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
// instead of just using a ternary operator to assign some extra styles to the Button component when isActive is true, we used the cn function of TailWind that accepts as 1st argument the styling to apply in all cases and as 2nd the styles to apply once a condition is met (we can put also extra styles if the condition is not met. This is better as TailWind will never ignore it)

type Props = {
  href: string;
  label: string;
  isActive?: boolean;
};

export const NavButton = ({ href, label, isActive }: Props) => {
  return (
    <Button
      asChild
      size="sm"
      variant="outline"
      className={cn(
        "w-full lg:w-auto justify-between font-normal hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition",
        isActive ? "bg-white/10 text-white" : "bg-transparent"
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};
