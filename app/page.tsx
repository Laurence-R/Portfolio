import Navbar from "@/components/layout/navbar"
import HeroModern from "@/components/sections/hero-modern"
import About from "@/components/sections/about"
import Projects from "@/components/sections/projects"
import Experience from "@/components/sections/experience"
import Contact from "@/components/sections/contact"
import Footer from "@/components/layout/footer"

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