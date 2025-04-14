import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

export function DynamicField({
    field,
    formField,
}: {
    field: any;
    formField: any;
}) {
    return (
        <FormItem>
            <FormLabel>{field.label}</FormLabel>
            <FormControl>
                {field.type === "text" || field.type === "password" ? (
                    <Input
                        type={field.type}
                        placeholder={field.placeholder}
                        {...formField}
                    />
                ) : field.type === "select" ? (
                    <Select
                        onValueChange={formField.onChange}
                        defaultValue={formField.value}>
                        <SelectTrigger>
                            <SelectValue placeholder={field.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                            {field.options.map((option: string) => (
                                <SelectItem key={option} value={option}>
                                    {option}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                ) : field.type === "date" ? (
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !formField.value && "text-muted-foreground"
                                )}>
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {formField.value ? (
                                    format(formField.value, "PPP")
                                ) : (
                                    <span>{field.placeholder}</span>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={formField.value}
                                onSelect={formField.onChange}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                ) : null}
            </FormControl>
            <FormMessage />
        </FormItem>
    );
}
