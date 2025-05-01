import { useEffect, useState } from "react";
import * as api from "@/lib/apiHelpers";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";


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

    // {sudah mi cerita ryan sedikit tentang redflag ta kak jadi 
    // saya mau tanya yakin ki tidak dekat sedekat itu lagi ke cowo}

    return (
        <>
            <div className="col-span-12 grid-cols-2 grid gap-4 items-center">
                <Card className="col-span-1">
                    <CardHeader>
                        <img
                            src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                            alt=""
                            className="h-56 w-full object-cover"
                        />
                    </CardHeader>
                </Card>
                {firstBlog && (
                    <div className="col-span-1 flex flex-col justify-center items-start p-4">
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
                        <img
                            src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                            alt=""
                            className="h-56 w-full object-cover"
                        />
                        <div className="h-14">
                            <p className="text-sm text-wrap">
                                {blog.category.name}
                            </p>
                            <p className="text-lg font-bold text-wrap">
                                {blog.title}
                            </p>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="truncate w-full overflow-hidden">
                            {blog.description}
                        </p>
                        <p className="text-sm text-gray-500">
                            {formatDate(blog.created_at)}{" "}
                        </p>
                    </CardContent>
                </Card>
            ))}
            <div className="col-span-12 flex justify-center items-center mt-4 space-x-4">
                <Button
                    variant="outline"
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}>
                    <ArrowLeft></ArrowLeft>
                </Button>
                <p>
                    Page {currentPage} of {totalPages}
                </p>
                <Button
                    variant="outline"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}>
                    <ArrowRight></ArrowRight>
                </Button>
            </div>
        </>
    );
}
