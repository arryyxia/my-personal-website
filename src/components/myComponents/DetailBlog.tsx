import { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import Container from "./Container";
import * as api from "@/lib/apiHelpers";

export default function DetailBlog() {
	const blogId = window.location.pathname.split("/").pop();
	const [blog, setBlog] = useState<any>(null);
	const [loading, setLoading] = useState(true);

	const getBlog = async () => {
		try {
			const response = await fetch(`${api.url}blog/${blogId}`);
			const data = await response.json();
			setBlog(data);
			setLoading(false);
		} catch (error) {
			console.error("Error fetching blog post:", error);
		}
	};
	
	useEffect(() => {
		getBlog();
	}, []);

	
	return (
        <>
            {loading && (
                <div className="flex justify-center items-center h-screen">
                    <p className="text-lg">Loading...</p>
                </div>
            )}

            {!loading && blog && (
                <div className="flex justify-center items-center h-screen">
                    <Card className="w-4/12 mx-auto mt-40 p-4 z-10">
                        <CardContent>
                            <h1 className="text-lg">{blog.title}</h1>
                            <p>{blog.content}</p>
                        </CardContent>
                    </Card>
                </div>
            )}
        </>
    );
}