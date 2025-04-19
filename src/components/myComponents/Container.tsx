export default function Container({...props}: React.ComponentProps<"div">) {
  // This is a simple container component that wraps its children in a div with a specific className
    return (
        <div
            className="w-9/12 mx-auto grid grid-cols-12 gap-4 mt-20"
            {...props}
        />
    );
}