import Header from "@/components/Header"
import Link from "next/link"
import { CheckCircle2 } from 'lucide-react';
import { fontHeading } from "@/lib/fonts"
import Footer from "@/components/Footer";

const Solutions = async function () {

    const allSolutions = [
        {
            id: "0",
            name: "Feature 1",
            description:
                "This is the feature 1.",
            icon: <CheckCircle2 />,
            color: "green",
            link: "#",
        },
    ]
    
    return (
        <>
        <Header />
            <main className="flex flex-col min-h-screen">
            <header className="mt-10 flex flex-col items-center gap-10 text-center">
                <h1
                    className={`text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl ${fontHeading.variable}`}
                >
                    What we offer
                </h1>
                <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
                    We provide services, tools and other features to answer your needs.
                </p>
            </header>
            <section className="flex flex-col items-center gap-10">
            <div className="ml-5 mr-5 mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
                {allSolutions.map((solution) => (
                    <div
                        key={solution.id}
                        className="p-5 shadow rounded-[12px] dark:shadow-slate-900"
                    >
                        <Link
                            href={solution.link}
                            className="flex flex-row items-center gap-2 text-2xl font-bold tracking-tight"
                        >
                            <span className={`text-${solution.color}-500 dark:text-${solution.color}-700`}>
                                {solution.icon}
                            </span>
                            <div className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">
                                {solution.name}
                            </div>
                        </Link>
                        <p className="ml-8 mt-2 text-muted-foreground">
                            {solution.description}
                        </p>
                    </div>
                ))}
            </div>
            </section>
            </main>
        <Footer />
        </>
    )
}

export default Solutions