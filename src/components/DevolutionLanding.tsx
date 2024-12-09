"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Cpu, Calendar, MapPin, Zap, Rocket, Award, Twitter, Menu } from 'lucide-react'
import { PCWindow, AnimatedBox, FloatingElement, GlitchText, TypewriterText, RotatingElement, HoverLiftElement, PCWindow2 } from './UIComponents'
import { useState } from 'react'

export default function DevolutionLanding() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setMobileMenuOpen(false);
        }
    };

    interface FormDataEntries {
        [key: string]: FormDataEntryValue;
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data: FormDataEntries = Object.fromEntries(formData.entries());

        try {
            const response: Response = await fetch("/api/discord-webhook", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert("Your submission has been sent successfully!");
            } else {
                alert("Failed to submit. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-[#f5e6d3] font-mono text-[#1a1a1a] overflow-x-hidden scroll-smooth">
            <div className="zigzag-bg fixed inset-0 z-0 opacity-20"></div>
            <header className="sticky top-0 z-50 bg-[#ff6b6b] text-[#1a1a1a] p-4 border-b-4 border-[#1a1a1a]">
                <nav className="container mx-auto flex justify-between items-center lg:px-16">
                    <div className="flex items-center space-x-2">
                        <RotatingElement className="w-12 h-12 bg-[#4ecdc4] rounded-full flex items-center justify-center border-2 border-[#1a1a1a]">
                            <span className="text-2xl font-bold">D</span>
                        </RotatingElement>
                        <span className="text-2xl font-bold retro-text">Dev-o-lution</span>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        {[
                            "About",
                            "Timeline",
                            "Tracks",
                            "Team",
                            "Sponsors",
                            "FAQs",
                            "Contact",
                        ].map((item) => (
                            <HoverLiftElement key={item}>
                                <button
                                    onClick={() => handleScroll(item.toLowerCase())}
                                    className="hover:underline"
                                >
                                    {item}
                                </button>
                            </HoverLiftElement>
                        ))}
                    </div>
                    <div className="md:hidden">
                        <Button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="bg-[#1a1a1a] text-[#f5e6d3]"
                        >
                            <Menu />
                        </Button>
                    </div>
                    <HoverLiftElement>
                        <Button className="hidden md:block bg-[#1a1a1a] text-[#f5e6d3] hover:bg-[#4ecdc4] hover:text-[#1a1a1a] transition-colors border-2 border-[#1a1a1a]">
                            Register Now
                        </Button>
                    </HoverLiftElement>
                </nav>
                {mobileMenuOpen && (
                    <div className="md:hidden bg-[#ff6b6b] border-t-2 border-[#1a1a1a] py-2">
                        {[
                            "About",
                            "Timeline",
                            "Tracks",
                            "Team",
                            "Sponsors",
                            "FAQs",
                            "Contact",
                        ].map((item) => (
                            <button
                                key={item}
                                onClick={() => handleScroll(item.toLowerCase())}
                                className="block py-2 px-4 hover:bg-[#4ecdc4]"
                            >
                                {item}
                            </button>
                        ))}
                        <Button className="w-full mt-2 bg-[#1a1a1a] text-[#f5e6d3] hover:bg-[#4ecdc4] hover:text-[#1a1a1a] transition-colors border-2 border-[#1a1a1a]">
                            Register Now
                        </Button>
                    </div>
                )}
            </header>

            <main className="container mx-auto px-4 py-16 relative z-10 lg:px-16">
                <section id="about" className="text-center mb-32">
                    <GlitchText
                        text="Dev-o-lution"
                        className="text-6xl md:text-8xl font-bold mb-4 retro-text text-[#1a1a1a]"
                    />
                    <TypewriterText
                        text="Where Code Evolves and Innovation Thrives"
                        className="text-xl md:text-2xl mb-8"
                    />
                    <Button className="bg-[#ff6b6b] text-[#1a1a1a] hover:bg-[#4ecdc4] text-lg px-8 py-4 rounded-none border-4 border-[#1a1a1a] transform hover:translate-x-2 hover:-translate-y-2 transition-transform shadow-neo pulse-animation">
                        Join the Evolution
                    </Button>
                </section>

                <PCWindow title="About Dev-o-lution" className="mb-32">
                    <p id="about" className="text-lg mb-4">
                        Dev-o-lution is where coding meets creativity, and innovation breaks free from convention.
                        Join us for workshops, talks, and mind-expanding sessions that will revolutionize your dev skills!
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        {[
                            { icon: Code, text: "Cutting-edge Tech" },
                            { icon: Cpu, text: "AI & Machine Learning" },
                            { icon: Calendar, text: "January 19, 2025" },
                            { icon: MapPin, text: "DAIICT Campus" }
                        ].map(({ icon: Icon, text }, index) => (
                            <AnimatedBox key={index} className="flex items-center space-x-2 bg-[#ff6b6b] p-2 border-2 border-[#1a1a1a]">
                                <Icon className="text-[#1a1a1a]" />
                                <span>{text}</span>
                            </AnimatedBox>
                        ))}
                    </div>
                </PCWindow>

                <PCWindow2 title="Event Timeline" className="mb-32">
                    <div id='timeline' className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                        {[
                            { date: "Dec 12, 2024", event: "Speaker Registration Opens", icon: Zap },
                            { date: "Dec 31, 2024", event: "Speaker Registration Closes", icon: Rocket },
                            { date: "Jan 1, 2025", event: "Participant Registration Opens", icon: Code },
                            { date: "Jan 19, 2025", event: "Dev-o-lution Event", icon: Award }
                        ].map(({ date, event, icon: Icon }, index) => (
                            <FloatingElement key={index} className="text-center" delay={index * 0.2}>
                                <div className="bg-[#4ecdc4] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[#1a1a1a]">
                                    <Icon className="text-[#1a1a1a] w-8 h-8" />
                                </div>
                                <p className="font-bold">{date}</p>
                                <p>{event}</p>
                            </FloatingElement>
                        ))}
                    </div>
                </PCWindow2>

                <section id="tracks" className="mb-32">
                    <h2 className="text-4xl font-bold mb-8 retro-text text-[#1a1a1a]">Dev-o-lution Tracks</h2>
                    <Tabs defaultValue="web3" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-[#4ecdc4] p-2 border-4 border-[#1a1a1a]">
                            <TabsTrigger value="web3" className="data-[state=active]:bg-[#ff6b6b] border-2 border-[#1a1a1a] hover-lift">Web3</TabsTrigger>
                            <TabsTrigger value="ai" className="data-[state=active]:bg-[#ff6b6b] border-2 border-[#1a1a1a] hover-lift">AI/ML</TabsTrigger>
                            <TabsTrigger value="mobile" className="data-[state=active]:bg-[#ff6b6b] border-2 border-[#1a1a1a] hover-lift">Mobile</TabsTrigger>
                            <TabsTrigger value="iot" className="data-[state=active]:bg-[#ff6b6b] border-2 border-[#1a1a1a] hover-lift">IoT</TabsTrigger>
                        </TabsList>
                        <TabsContent value="web3" className="bg-[#ff6b6b] p-6 mt-4 border-4 border-[#1a1a1a] slide-in-animation">
                            <h3 className="text-2xl font-bold mb-4">Web3 & Blockchain</h3>
                            <p>Explore decentralized applications and the future of the web.</p>
                        </TabsContent>
                        <TabsContent value="ai" className="bg-[#ff6b6b] p-6 mt-4 border-4 border-[#1a1a1a] slide-in-animation">
                            <h3 className="text-2xl font-bold mb-4">Artificial Intelligence & Machine Learning</h3>
                            <p>Dive into intelligent systems and algorithms to solve complex problems.</p>
                        </TabsContent>
                        <TabsContent value="mobile" className="bg-[#ff6b6b] p-6 mt-4 border-4 border-[#1a1a1a] slide-in-animation">
                            <h3 className="text-2xl font-bold mb-4">Mobile Development</h3>
                            <p>Create innovative mobile applications for iOS and Android platforms.</p>
                        </TabsContent>
                        <TabsContent value="iot" className="bg-[#ff6b6b] p-6 mt-4 border-4 border-[#1a1a1a] slide-in-animation">
                            <h3 className="text-2xl font-bold mb-4">Internet of Things</h3>
                            <p>Connect devices and build smart systems for the interconnected world.</p>
                        </TabsContent>
                    </Tabs>
                </section>

                <PCWindow title="Join the Conversation" className="mb-32">
                    <div className="text-center">
                        <p className="text-2xl font-bold mb-4">Use our hashtag and win prizes!</p>
                        <div className="flex items-center justify-center space-x-4">
                            <Twitter className="w-8 h-8" />
                            <span className="text-3xl font-bold">#dev-o-lution</span>
                        </div>
                        <p className="mt-4">Share your excitement, ideas, or projects on Twitter using our hashtag for a chance to win amazing prizes!</p>
                    </div>
                </PCWindow>

                <PCWindow2 title="Our Team" className="mb-32">
                    <div id='team' className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold mb-4">Core Team</h3>
                            <ul className="space-y-2">
                                <li>Abhishek Abbi</li>
                                <li>Parth Vadodaria</li>
                                <li>Jash Shah</li>
                                <li>Harsh Gajjar</li>
                                <li>Dhruv Jain</li>
                                <li>Pranshu Patel</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold mb-4">Website Design & Development</h3>
                            <ul className="space-y-2">
                                <li>Aditya Dave</li>
                                <li>Atik</li>
                                <li>Tirth Patel</li>
                                <li>Param Savjani</li>
                                <li>Kalp Chaniyara</li>
                                <li>Agrim Sharma</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold mb-4">PR & Sponsorship</h3>
                            <ul className="space-y-2">
                                <li>Neel Khatri</li>
                                <li>Nisarg</li>
                                <li>Anushree</li>
                                <li>Anandita</li>
                                <li>Prakriti Pandey</li>
                            </ul>
                        </div>
                    </div>
                </PCWindow2>

                <PCWindow title="Our Sponsors" className="mb-32">
                    <div id='sponsors' className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {['Sponsor1', 'Sponsor2', 'Sponsor3', 'Sponsor4'].map((sponsor, index) => (
                            <FloatingElement key={sponsor} className="flex items-center justify-center bg-[#f5e6d3] p-4 border-2 border-[#1a1a1a]" delay={index * 0.15}>
                                <Image src={`/placeholder.svg?height=80&width=160`} alt={sponsor} width={160} height={80} className="opacity-70 hover:opacity-100 transition-opacity" />
                            </FloatingElement>
                        ))}
                    </div>
                </PCWindow>

                <PCWindow2 title="Frequently Asked Questions" className="mb-32">
                    <div id='faqs' className="space-y-8">
                        {[
                            { q: "Who can participate?", a: "Dev-o-lution is open to all students and recent graduates passionate about technology and innovation." },
                            { q: "Is there a participation fee?", a: "Yes, There is!" },
                            { q: "What should I bring?", a: "Bring your laptop, charger, and any other devices you need for development. We'll provide food, drinks, and a great coding atmosphere!" },
                            { q: "Can I join as a speaker?", a: "We welcome speakers to share their knowledge. Check our timeline for speaker registration dates." }
                        ].map(({ q, a }, index) => (
                            <AnimatedBox key={index} className="bg-[#4ecdc4] p-4 border-2 border-[#1a1a1a]">
                                <h3 className="text-xl font-bold mb-2 text-[#1a1a1a]">{q}</h3>
                                <p>{a}</p>
                            </AnimatedBox>
                        ))}
                    </div>
                </PCWindow2>

                <PCWindow title="Ready to Evolve?" className="mb-32">
                    {/* <form className="space-y-4">
                        <Input type="text" placeholder="Name" className="bg-[#f5e6d3] border-2 border-[#1a1a1a] text-[#1a1a1a] placeholder-[#1a1a1a]" />
                        <Input type="email" placeholder="Email" className="bg-[#f5e6d3] border-2 border-[#1a1a1a] text-[#1a1a1a] placeholder-[#1a1a1a]" />
                        <Button type="submit" className="w-full bg-[#ff6b6b] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#f5e6d3] border-2 border-[#1a1a1a] transition-colors shadow-neo hover-lift">
                            Register for Dev-o-lution
                        </Button>
                    </form> */}
                    <div className="text-center">
                        <p className="text-xl mb-4">Registration for Dev-o-lution are coming soon!</p>
                        <p className="text-2xl font-bold">See you at the event!</p>
                    </div>
                </PCWindow>

                <PCWindow title="Want to Share Your Knowledge?" className="mb-32">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input name="name" type="text" placeholder="Name" className="bg-[#f5e6d3] border-2 border-[#1a1a1a] text-[#1a1a1a] placeholder-[#1a1a1a]" />
                        <Input name="email" type="email" placeholder="Email" className="bg-[#f5e6d3] border-2 border-[#1a1a1a] text-[#1a1a1a] placeholder-[#1a1a1a]" />
                        <Input name="talkTitle" type="text" placeholder="Talk Title" className="bg-[#f5e6d3] border-2 border-[#1a1a1a] text-[#1a1a1a] placeholder-[#1a1a1a]" />
                        <textarea
                            name="description"
                            placeholder="Brief description of your talk"
                            className="w-full min-h-[100px] bg-[#f5e6d3] border-2 border-[#1a1a1a] text-[#1a1a1a] placeholder-[#1a1a1a] rounded-md p-2"
                        />
                        <Button type="submit" className="w-full bg-[#ff6b6b] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#f5e6d3] border-2 border-[#1a1a1a] transition-colors shadow-neo hover-lift">
                            Submit Speaker Proposal
                        </Button>
                    </form>
                </PCWindow>
                <PCWindow title="Contact Us" className="mb-32">
                    <div id='contact' className="text-center">
                        <p className="text-xl mb-4">For any queries, please contact us:</p>
                        <p className="text-2xl font-bold">Phone: 7041180305</p>
                        <p className="text-2xl font-bold">Email: dsc@daiict.ac.in</p>
                    </div>
                </PCWindow>
            </main>

            <footer className="bg-gray-950 text-[#f5e6d3] py-8">
                <div className="container mx-auto text-center">
                    <p>&copy; 2025 Dev-o-lution | Organized by GDG on DAIICT campus</p>
                    <div className="flex justify-center space-x-4 mt-4 z-10">
                        <Link href="https://github.com/ossdaiict" className="text-[#4ecdc4] hover:text-[#ff6b6b] transition-colors hover-lift">
                            OSS GitHub
                        </Link>
                        <Link href="https://github.com/gdg-da" className="text-[#4ecdc4] hover:text-[#ff6b6b] transition-colors hover-lift">
                            GDG GitHub
                        </Link>
                        <Link href="https://www.linkedin.com/company/gdg-on-campus-daiict/" className="text-[#4ecdc4] hover:text-[#ff6b6b] transition-colors hover-lift">
                            LinkedIn
                        </Link>
                        <Link href="https://www.instagram.com/gdg.daiict/" className="text-[#4ecdc4] hover:text-[#ff6b6b] transition-colors hover-lift">
                            Instagram
                        </Link>
                        <Link href="https://x.com/gdgdaiict" className="text-[#4ecdc4] hover:text-[#ff6b6b] transition-colors hover-lift">
                            X (Twitter)
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}