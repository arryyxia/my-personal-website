import { useEffect, useState } from "react";
import * as api from "@/lib/apiHelpers";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

export default function Blog() {
    const [blogs, setBlogs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [firstBlog, setFirstBlog] = useState<any>(null);
    const [firstLoading, setFirstLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const getBlog = async (page: number) => {
        try {
            const response = await fetch(`${api.url}blog?page=${page}`);
            const data = await response.json();
            setBlogs(data.data);
            setTotalPages(data.last_page);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching blog posts:", error);
        }
    };

    const getFirstBlog = async () => {
        try {
            const response = await fetch(`${api.url}blog/first`);
            const data = await response.json();
            setFirstBlog(data);
            setFirstLoading(false);
        } catch (error) {
            console.error("Error fetching first blog post:", error);
        }
    };

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

    useEffect(() => {
        getBlog(currentPage);
        getFirstBlog();
    }, [currentPage]);


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
                {firstLoading && (
                    <div className="col-span-1 flex flex-col justify-center items-start p-4">
                        {/* <p className="font-bold">{firstBlog.title}</p>
                        <p>{firstBlog.description}</p>
                        <p className="text-sm text-gray-500">
                            {formatDate(firstBlog.created_at)}{" "}
                        </p> */}
                    </div>
                )}

                {!firstLoading && firstBlog && (
                    <div className="col-span-1 flex flex-col justify-center items-start p-4">
                        <Link to={`/blog/${firstBlog.id}`} key={firstBlog.id}>
                            <p className="font-bold">{firstBlog.title}</p>
                            <p>{firstBlog.description}</p>
                            <p className="text-sm text-gray-500">
                                {formatDate(firstBlog.created_at)}{" "}
                            </p>
                        </Link>
                    </div>
                )}
            </div>

            {loading ? (
                <Card className="col-span-4">
                    <CardHeader>
                        <Skeleton className="h-56 w-full rounded-xl" />
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                        </div>
                    </CardContent>
                </Card>
            ) : (
                blogs.map((blog: any) => (
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
                        <Link to={`/blog/${blog.id}`} key={blog.id}>
                            <CardContent>
                                <p className="truncate w-full overflow-hidden">
                                    {blog.description}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {formatDate(blog.created_at)}{" "}
                                </p>
                            </CardContent>
                        </Link>
                    </Card>
                ))
            )}

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
