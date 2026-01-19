import Navbar from "@/components/navbar"
import HeroModern from "@/components/hero-modern"
import About from "@/components/about"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
	return (
		<>
			<Navbar />
			<main>
				<HeroModern />
				<About />
				<Projects />
				<Experience />
				<Contact />
			</main>
			<Footer />
		</>
	)
}