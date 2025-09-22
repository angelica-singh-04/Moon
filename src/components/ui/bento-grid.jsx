import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils";

const BentoGrid = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className="flex justify-center w-full py-8">
      <div
        className={cn("grid w-[80%] auto-rows-[24rem] h-[32rem] grid-cols-3 gap-4", className)}
        {...props}>
        {children}
      </div>
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  backgroundImage,
  description,
  cta,
  href,
  ...props
}) => (
  <div
    key={name}
className={cn(
  "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
  // Base dark theme background and border
  "transform-gpu bg-neutral-900/70 border border-neutral-900",
  // Existing inner shadow
  "dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
  // === NEW: Shady gradient ===
  "after:absolute after:inset-x-0 after:bottom-0 after:h-1/2 after:bg-gradient-to-t after:from-black after:to-transparent after:opacity-90",
  className
)}
    {...props}>
    {backgroundImage && (
      <img
        src={backgroundImage}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover z-0"
      />
    )}
    <div>{background}</div>
    <div className="p-4 flex">
      <div
        className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10">
        <h3 className="text-md font-semibold text-neutral-300 dark:text-neutral-300">
          {name}
        </h3>
        <p className="max-w-lg text-white/60 text-sm font-regular">{description}</p>
      </div>

      <div
        className={cn(
          "lg:hidden pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-20"
        )}>
        <Button variant="link" asChild size="sm" className="pointer-events-auto p-0 text-yellow-500 underline underline-offset-4 decoration-2 decoration-white/80 hover:decoration-white">
          <a href={href}>
            {cta}
            <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
          </a>
        </Button>

      </div>
    </div>

    <div
      className={cn(
        "hidden lg:flex pointer-events-none absolute bottom-0 w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-20"
      )}>
      <Button variant="link" asChild size="sm" className="pointer-events-auto p-0 text-white underline underline-offset-4 decoration-2 decoration-white/80 hover:decoration-white">
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
        </a>
      </Button>
    </div>

    <div
      className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
