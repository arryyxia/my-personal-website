import { useEffect, useState } from "react";
import * as api from "@/lib/apiHelpers";
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";


export default function Blog() {
    const [blogs, setBlogs] = useState<any[]>([]);
    const [firstBlog, setFirstBlog] = useState<any>(null);
    const [currentPage, setCurrentPage] = useState(1); // Track the current page
    const [totalPages, setTotalPages] = useState(1); // Track the total number of pages

    const getBlog = async (page: number) => {
        try {
            const response = await fetch(`${api.url}blog?page=${page}`);
            const data = await response.json();
            setBlogs(data.data);
            setTotalPages(data.last_page); // Assuming your API returns pagination metadata
        } catch (error) { 
            console.error("Error fetching blog posts:", error);
        }
    };

    const getFirstBlog = async () => {
        try {
            const response = await fetch(`${api.url}blog/first`);
            const data = await response.json();
            setFirstBlog(data);
        } catch (error) {
            console.error("Error fetching first blog post:", error);
        }
    };

    useEffect(() => {
        getBlog(currentPage); // Fetch blogs for the current page 
        getFirstBlog(); // Fetch the first blog
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    return (
        <>
            <div className="col-span-12 grid-cols-2 grid gap-4">
                <Card className="col-span-1"></Card>
                {firstBlog && (
                    <div>
                        <p className="font-bold">{firstBlog.title}</p>
                        <p>{firstBlog.description}</p>
                        <p className="text-sm text-gray-500">
                            {formatDate(firstBlog.created_at)}{" "}
                        </p>
                    </div>
                )}
            </div>
            {blogs.map((blog: any) => (
                <Card className="col-span-4" key={blog.id}>
                    <CardHeader>
                        <p className="font-bold">{blog.title}</p>
                    </CardHeader>
                </Card>
            ))}
            <div className="col-span-12 flex justify-center items-center mt-4 space-x-4">
                <Button
                    variant="outline"
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}>
                    Previous
                </Button>
                <p>
                    Page {currentPage} of {totalPages}
                </p>
                <Button
                    variant="outline"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}>
                    Next
                </Button>
            </div>
        </>
    );
}
