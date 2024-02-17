import { cn } from "@/lib/utils"

const Skeleton = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={cn("animate-pulse rounded-md bg-neutral-200 dark:bg-neutral-800", className)}
            {...props}
        />
    )
}

export default Skeleton;