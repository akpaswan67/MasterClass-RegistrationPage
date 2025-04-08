import Link from "next/link"
import Image from "next/image"
import { CalendarDays, Clock, MapPin, CheckCircle, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function MasterclassPage() {
  return (
    <div className="flex min-h-screen flex-col ml-2">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between ml-2">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="rounded-md bg-purple-600 p-1 text-white ">MC</span>
            <span>MasterClass</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-purple-600 transition-colors">
              About
            </Link>
            <Link href="#instructor" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Instructor
            </Link>
            <Link href="#schedule" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Schedule
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Testimonials
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-purple-600 transition-colors">
              FAQ
            </Link>
          </nav>

          <Link href="#register">
            <Button  className="hidden md:inline-flex mr-2">Register Now</Button>
          </Link>
          <Button variant="outline" size="icon" className="md:hidden">
            <ChevronDown className="h-4 w-4" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-600 opacity-90" />
          <div className="container relative py-20 md:py-32 text-white">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
                  Limited Seats Available
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Advanced UX Design Masterclass
                </h1>
                <p className="max-w-[600px] text-white/80 md:text-xl">
                  Learn how to create exceptional user experiences that drive engagement and conversion from industry
                  experts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-5 w-5 text-purple-300" />
                    <span>May 15-16, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-purple-300" />
                    <span>10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-purple-300" />
                    <span>Online Live</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 m-2">
                <Link href="#register"><Button  size="lg" className="bg-white text-purple-900 hover:bg-white/10">
                    Register Now
                  </Button></Link>
                  <Link href="#about"><Button size="lg" variant="outline" className="border-white text-purple-900 hover:bg-white/10">
                    Learn More
                  </Button></Link>
                </div>
              </div>
              <div className="relative hidden md:block">
                <div className="absolute -right-4 -top-4 h-72 w-72 rounded-full bg-purple-500 blur-3xl opacity-30"></div>
                <Image
                  src="/images/excited-students.png"
                  width={600}
                  height={600}
                  alt="Excited students at UX Design Masterclass"
                  className="relative rounded-lg border-4 border-white/10 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y bg-muted/50">
          <div className="container py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-purple-600">20+</h3>
                <p className="text-sm text-muted-foreground">Hours of Content</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-purple-600">15+</h3>
                <p className="text-sm text-muted-foreground">Practical Exercises</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-purple-600">5,000+</h3>
                <p className="text-sm text-muted-foreground">Graduates</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-purple-600">4.9/5</h3>
                <p className="text-sm text-muted-foreground">Student Rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What You'll Learn</h2>
              <p className="mt-4 text-muted-foreground">
                This comprehensive masterclass will equip you with the skills and knowledge to create exceptional user
                experiences.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">UX Research Methods</h3>
                <p className="text-muted-foreground">
                  Learn how to conduct effective user research to inform your design decisions and create user-centered
                  products.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Interaction Design</h3>
                <p className="text-muted-foreground">
                  Master the principles of interaction design to create intuitive and engaging user interfaces.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Usability Testing</h3>
                <p className="text-muted-foreground">
                  Discover how to plan and conduct usability tests to identify issues and improve your designs.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Information Architecture</h3>
                <p className="text-muted-foreground">
                  Learn how to organize and structure information to create clear and logical user flows.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Prototyping</h3>
                <p className="text-muted-foreground">
                  Master different prototyping techniques to effectively communicate and test your design ideas.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Design Systems</h3>
                <p className="text-muted-foreground">
                  Learn how to create and maintain design systems to ensure consistency and efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Instructor Section */}
        <section id="instructor" className="border-t py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet Your Instructor</h2>
              <p className="mt-4 text-muted-foreground">
                Learn from industry experts with years of experience in UX design and product development.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 items-center">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -right-4 -top-4 h-72 w-72 rounded-full bg-purple-500 blur-3xl opacity-10"></div>
                <Image
                  src="/images/JonsonSir.jpeg"
                  width={500}
                  height={500}
                  alt="Sarah Johnson"
                  className="relative rounded-lg shadow-xl"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Sarah Johnson</h3>
                <p className="text-purple-600 font-medium">Lead UX Designer at DesignCraft</p>
                <p className="text-muted-foreground">
                  Sarah Johnson is a seasoned UX designer with over 15 years of experience working with Fortune 500
                  companies and startups alike. She has led design teams at Google, Airbnb, and now serves as the Lead
                  UX Designer at DesignCraft.
                </p>
                <p className="text-muted-foreground">
                  Her work has been recognized with multiple industry awards, and she's passionate about sharing her
                  knowledge to help the next generation of designers create exceptional user experiences.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    View Portfolio
                  </Button>
                  <Button variant="outline" size="sm">
                    LinkedIn Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Masterclass Schedule</h2>
              <p className="mt-4 text-muted-foreground">
                A comprehensive two-day program designed to take your UX skills to the next level.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold">Day 1: May 15, 2025</h3>
                <ul className="space-y-4">
                  <li className="grid grid-cols-[100px_1fr] gap-4 border-b pb-4">
                    <span className="font-medium">10:00 AM</span>
                    <div>
                      <p className="font-medium">Welcome and Introduction</p>
                      <p className="text-sm text-muted-foreground">
                        Overview of the masterclass and setting expectations
                      </p>
                    </div>
                  </li>
                  <li className="grid grid-cols-[100px_1fr] gap-4 border-b pb-4">
                    <span className="font-medium">10:30 AM</span>
                    <div>
                      <p className="font-medium">UX Research Fundamentals</p>
                      <p className="text-sm text-muted-foreground">Understanding user needs and behaviors</p>
                    </div>
                  </li>
                  <li className="grid grid-cols-[100px_1fr] gap-4 border-b pb-4">
                    <span className="font-medium">12:00 PM</span>
                    <div>
                      <p className="font-medium">Lunch Break</p>
                      <p className="text-sm text-muted-foreground">Networking opportunity with fellow participants</p>
                    </div>
                  </li>
                  <li className="grid grid-cols-[100px_1fr] gap-4 border-b pb-4">
                    <span className="font-medium">1:00 PM</span>
                    <div>
                      <p className="font-medium">Information Architecture</p>
                      <p className="text-sm text-muted-foreground">Creating logical and intuitive structures</p>
                    </div>
                  </li>
                  <li className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="font-medium">3:00 PM</span>
                    <div>
                      <p className="font-medium">Practical Workshop</p>
                      <p className="text-sm text-muted-foreground">Hands-on exercises applying the day's learnings</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold">Day 2: May 16, 2025</h3>
                <ul className="space-y-4">
                  <li className="grid grid-cols-[100px_1fr] gap-4 border-b pb-4">
                    <span className="font-medium">10:00 AM</span>
                    <div>
                      <p className="font-medium">Interaction Design</p>
                      <p className="text-sm text-muted-foreground">Creating intuitive and engaging interfaces</p>
                    </div>
                  </li>
                  <li className="grid grid-cols-[100px_1fr] gap-4 border-b pb-4">
                    <span className="font-medium">11:30 AM</span>
                    <div>
                      <p className="font-medium">Prototyping Techniques</p>
                      <p className="text-sm text-muted-foreground">From low-fidelity to high-fidelity prototypes</p>
                    </div>
                  </li>
                  <li className="grid grid-cols-[100px_1fr] gap-4 border-b pb-4">
                    <span className="font-medium">12:30 PM</span>
                    <div>
                      <p className="font-medium">Lunch Break</p>
                      <p className="text-sm text-muted-foreground">Networking opportunity with fellow participants</p>
                    </div>
                  </li>
                  <li className="grid grid-cols-[100px_1fr] gap-4 border-b pb-4">
                    <span className="font-medium">1:30 PM</span>
                    <div>
                      <p className="font-medium">Usability Testing</p>
                      <p className="text-sm text-muted-foreground">
                        Methods and best practices for testing your designs
                      </p>
                    </div>
                  </li>
                  <li className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="font-medium">3:00 PM</span>
                    <div>
                      <p className="font-medium">Final Project & Conclusion</p>
                      <p className="text-sm text-muted-foreground">Applying all concepts in a comprehensive project</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="border-t py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Students Say</h2>
              <p className="mt-4 text-muted-foreground">
                Hear from professionals who have transformed their careers after taking our masterclass.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/AlexChain.jpeg"
                    width={60}
                    height={60}
                    alt="Alex Chen"
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-bold">Alex Chen</h4>
                    <p className="text-sm text-muted-foreground">Product Designer at Spotify</p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  "This masterclass completely transformed my approach to UX design. The practical exercises and
                  real-world examples made complex concepts easy to understand and apply in my daily work."
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/maria.png"
                    width={60}
                    height={60}
                    alt="Maria Rodriguez"
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-bold">Maria Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">UX Lead at Adobe</p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  "Even as an experienced designer, I gained valuable insights from this masterclass. Sarah's teaching
                  style is engaging and the content is cutting-edge. Highly recommend to designers at all levels."
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/James.jpeg"
                    width={60}
                    height={60}
                    alt="James Wilson"
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-bold">James Wilson</h4>
                    <p className="text-sm text-muted-foreground">Freelance UI/UX Designer</p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  "As a freelancer, this masterclass gave me the confidence and skills to take on more complex projects.
                  The investment has already paid for itself many times over through new client work."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section id="register" className="py-16 md:py-24 bg-gradient-to-r from-purple-900 to-purple-600 text-white">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Secure Your Spot Today</h2>
                <p className="text-white/80">
                  Don't miss this opportunity to learn from industry experts and take your UX design skills to the next
                  level.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-300" />
                    <span>Live interactive sessions with Q&A</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-300" />
                    <span>Lifetime access to recorded sessions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-300" />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-300" />
                    <span>Exclusive resources and templates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-300" />
                    <span>Community access for networking</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold">$499</div>
                  <div className="text-lg line-through text-white/60">$699</div>
                  <div className="rounded-full bg-white/20 px-3 py-1 text-sm">Early Bird Discount</div>
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="mb-4 text-xl font-bold">Register for the Masterclass</h3>
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input
                        id="first-name"
                        placeholder="Enter your first name"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input
                        id="last-name"
                        placeholder="Enter your last name"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company / Organization
                    </label>
                    <Input
                      id="company"
                      placeholder="Enter your company name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="experience" className="text-sm font-medium">
                      Experience Level
                    </label>
                    <select
                      id="experience"
                      className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="beginner" className="bg-purple-900">
                        Beginner (0-1 years)
                      </option>
                      <option value="intermediate" className="bg-purple-900">
                        Intermediate (1-3 years)
                      </option>
                      <option value="advanced" className="bg-purple-900">
                        Advanced (3+ years)
                      </option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="goals" className="text-sm font-medium">
                      What do you hope to achieve from this masterclass?
                    </label>
                    <Textarea
                      id="goals"
                      placeholder="Share your goals..."
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 min-h-[100px]"
                    />
                  </div>
                  <Button className="w-full bg-white text-purple-900 hover:bg-white/90">Register Now</Button>
                  <p className="text-xs text-center text-white/60">
                    By registering, you agree to our{" "}
                    <Link href="#" className="underline underline-offset-2">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="underline underline-offset-2">
                      Privacy Policy
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-4 text-muted-foreground">Find answers to common questions about the masterclass.</p>
            </div>
            <div className="mt-16 mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is this masterclass suitable for beginners?</AccordionTrigger>
                  <AccordionContent>
                    Yes, this masterclass is designed for designers at all levels. Beginners will gain a solid
                    foundation in UX design principles, while more experienced designers will benefit from advanced
                    techniques and best practices.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Will I receive a certificate upon completion?</AccordionTrigger>
                  <AccordionContent>
                    Yes, all participants who complete the masterclass will receive a certificate of completion that can
                    be shared on LinkedIn and other professional platforms.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What if I can't attend the live sessions?</AccordionTrigger>
                  <AccordionContent>
                    All sessions will be recorded and made available to registered participants. You'll have lifetime
                    access to the recordings, so you can watch them at your convenience.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Do I need any specific software for this masterclass?</AccordionTrigger>
                  <AccordionContent>
                    We recommend having access to design software like Figma or Adobe XD for the practical exercises.
                    However, we'll provide alternatives for those who don't have access to these tools.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Is there a refund policy?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer a full refund if requested within 7 days of purchase, provided you haven't accessed
                    more than 20% of the course content.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Will there be opportunities for networking?</AccordionTrigger>
                  <AccordionContent>
                    We'll have dedicated networking sessions during breaks, and all participants will be invited to join
                    our exclusive community platform where you can connect with fellow designers and the instructor.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t py-12 md:py-16 bg-muted/30">
          <div className="container text-center">
            <div className="mx-auto max-w-3xl space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your UX Skills?</h2>
              <p className="text-muted-foreground">
                Join us for this exclusive masterclass and take your design career to the next level.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Register Now
                </Button>
                <Button size="lg" variant="outline">
                  Download Syllabus
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} MasterSkill. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
