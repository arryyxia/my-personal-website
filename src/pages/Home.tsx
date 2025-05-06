import Container from "@/components/myComponents/Container";
import Blog from "../components/myComponents/Blog";
import Hero from "@/components/myComponents/Hero";
import About from "@/components/myComponents/About";
import Header from "@/components/myComponents/Header";
import Works from "@/components/myComponents/Works";
import { Faqs } from "@/components/myComponents/Faqs";

export default function Home() {
	
    return (
		<>
			<Hero />
			<Container>
				<Header title="About Me"></Header>
				<About></About>
			</Container>
			<Container>
				<Header title="Works"></Header>
				<Works></Works>
			</Container>
			<Container>
				<Header title="Blogs"></Header>
				<Blog />
			</Container>
			<Container>
				<Header title="FAQ's"></Header>
				<Faqs />
			</Container>
		</>
	);
}
