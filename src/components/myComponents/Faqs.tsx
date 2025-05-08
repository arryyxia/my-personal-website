import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader } from "../ui/card";

export function Faqs() {
    return (
        <Card className="col-span-12">
			<CardHeader>
				<h2 className="text-lg font-semibold">Frequently Asked Questions</h2>
				<p className="text-sm text-muted-foreground">
					Here are some common questions and answers about our product. 
				</p>
			</CardHeader>
			<CardContent>
				<Accordion type="single" collapsible className="w-full" >
					<AccordionItem value="item-1">
						<AccordionTrigger>Is it accessible?</AccordionTrigger>
						<AccordionContent>
							Yes. It adheres to the WAI-ARIA design pattern.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>Is it styled?</AccordionTrigger>
						<AccordionContent>
							Yes. It comes with default styles that matches the other
							components&apos; aesthetic.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger>Is it animated?</AccordionTrigger>
						<AccordionContent>
							Yes. It's animated by default, but you can disable it if
							you prefer.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</CardContent>
        </Card>
    );
}
