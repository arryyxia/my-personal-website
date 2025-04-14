import axios from "axios";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Form, FormField } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import * as api from "@/lib/apiHelpers";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DynamicField } from "@/components/myComponents/DynamicField";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string(),
});

export default function Login() {
    const [isLoading, setIsLoading] = useState(false); // Use state for loading
	const [error, setError] = useState<{ isError: boolean; message: string }>({
		isError: false,
		message: "",
	});
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true);
        try {
            const data = await axios.post(api.url + "auth/login", values);
            console.log("Login Berhasil:", data);
            localStorage.setItem("token", data.data.accessToken);
        } catch (error:any) {
            console.error("Login Gagal:", error);
			setError({
                isError: true,
                message: error.response?.data?.message,
            });
        } finally {
            setIsLoading(false);
        }
    };

    const fields = [
        {
            name: "email",
            label: "Email",
            type: "text",
            placeholder: "Your Email",
        },
        {
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "Your Password",
        },
    ];

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <Card className="w-[350px] mx-auto">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Login to your account</CardDescription>
                </CardHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8">
                        <CardContent>
                            {fields.map((field) => (
                                <FormField
                                    key={field.name}
                                    control={form.control}
                                    name={field.name}
                                    render={({ field: formField }) => (
                                        <DynamicField
                                            field={field}
                                            formField={formField}
                                        />
                                    )}
                                />
                            ))}
                            <p className="text-md text-red-500">
                                {error.isError && error.message}
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="w-full">
                                {isLoading && (
                                    <Loader2 className="animate-spin"></Loader2>
                                )}
                                Login
                            </Button>
                        </CardFooter>
                    </form>
                </Form>
            </Card>
        </div>
    );
}
