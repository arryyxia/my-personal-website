import { useEffect, useState } from "react";
import * as api from "@/lib/apiHelpers"
import { Card, CardHeader } from "@/components/ui/card";

export default function Blog() {
    const [blogs, setBlogs] = useState<any[]>([]);

    const getBlog = async () => {
        try {
            const response = await fetch(api.url + "blog");
            const data = await response.json();
            setBlogs(data.data);
        } catch (error) {
            console.error("Error fetching blog posts:", error);
        }
    };

    useEffect(() => {
        getBlog();
    }, []);

    return (
        <>
            {blogs.map((blog: any) => (
                <Card className="col-span-4" key={blog.id}>
                    <CardHeader>
                        <p>{blog.title}</p>
                    </CardHeader>
                </Card>
            ))}
        </>
    );
}
