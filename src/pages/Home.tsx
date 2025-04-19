import Container from "@/components/myComponents/Container";
import Blog from "../components/myComponents/Blog";
import Hero from "@/components/myComponents/Hero";
import About from "@/components/myComponents/About";
import Header from "@/components/myComponents/Header";

export default function Home() {
	
    return (
		<>
			<Hero />
			<Container>
				<Header title="About Me" useLink={false}></Header>
				<About></About>
			</Container>
			<Container>
				<Header title="Blogs" useLink={true}></Header>
				<Blog />
			</Container>
		</>
	);
}
