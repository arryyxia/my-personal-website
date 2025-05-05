import { ChevronUp, Mail } from "lucide-react";
import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="w-11/12 mx-auto z-50">
            <div className="fixed top-10 flex justify-between items-center w-11/12">
                <ModeToggle></ModeToggle>

                <Card className="p-4 backdrop-filter backdrop-blur-lg bg-opacity-30 border dark:border-[#1D202A] shadow-sm border-gray-300 z-50">
                    <CardContent>
                        <ul className="flex">
                            <li>
                                <Button
                                    variant="outline"
                                    className="mr-2"
                                    size={"icon"}>
                                    <ChevronUp></ChevronUp>
                                </Button>
                            </li>
                            <li>
                                <Button variant="ghost">About</Button>
                            </li>
                            <li>
                                <Button variant="ghost">Works</Button>
                            </li>
                            <li>
                                <Button variant="ghost">Benefits</Button>
                            </li>
                            <li>
                                <Button variant="ghost">Services</Button>
                            </li>
                            <li>
                                <Button variant="ghost">
                                    <Link to="/blogs">Blogs</Link>
                                </Button>
                            </li>
                            <li>
                                <Button variant="ghost">Contacts</Button>
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                <Button className="w-[56px] h-[56px] border dark:border-[#1D202A] shadow-sm  hover:dark:text-black p-0 backdrop-filter hover:bg-gray-50 hover:text-black backdrop-blur-lg bg-opacity-30 dark:text-white text-black">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                </Button>
            </div>
        </div>
    );
}
