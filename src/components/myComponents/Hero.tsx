import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Eye } from "lucide-react";

export default function Hero() {
    return (
        <>
            <Card className="w-4/12 mx-auto mt-40 p-4 z-10">
                <CardContent>
                    <p className="text-lg">
                        This is a simple blog application.
                    </p>
                </CardContent>
            </Card>

            <h1 className="w-6/12 mx-auto text-center text-[76px] mt-6 font-semibold dark:bg-gradient-to-bl dark:from-white dark:via-white dark:text-transparent dark:to-gray-500 dark:bg-clip-text">
                Hi, it's me Arryyxia, FullStack Developer
            </h1>
            <p className="w-6/12 mx-auto text-center text-lg dark:text-gray-400">
                I'm a full stack developer with a passion for creating
                innovative and user-friendly web applications.
            </p>

            <div className="w-6/12 mx-auto flex justify-center mt-10">
                <Button>
					<Eye></Eye>
					<Link to="/resume">My Resume</Link>
				</Button>
            </div>
        </>
    );
}
