import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselDemo() {
    return (
            <Carousel className="col-span-12">
                <CarouselContent>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
						<Card className="w-full h-full">
							<CardContent className="flex flex-col items-center justify-center h-full">
								<h2 className="text-lg font-bold">Item 1</h2>
								<p className="text-sm">Description for item 1</p>
							</CardContent>
						</Card>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
						<Card className="w-full h-full">
							<CardContent className="flex flex-col items-center justify-center h-full">
								<h2 className="text-lg font-bold">Item 1</h2>
								<p className="text-sm">Description for item 1</p>
							</CardContent>
						</Card>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
						<Card className="w-full h-full">
							<CardContent className="flex flex-col items-center justify-center h-full">
								<h2 className="text-lg font-bold">Item 1</h2>
								<p className="text-sm">Description for item 1</p>
							</CardContent>
						</Card>
                    </CarouselItem>
                </CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
            </Carousel>
    );
}
