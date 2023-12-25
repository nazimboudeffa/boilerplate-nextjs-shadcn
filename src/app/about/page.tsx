import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { fontHeading } from "@/lib/fonts"

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="flex flex-col min-h-screen">
                <div className="mt-10 flex flex-col items-center gap-10 text-center">
                    <h1
                        className={`text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl ${fontHeading.variable}`}
                    >
                        About
                    </h1>
                    <p className="max-w-[500px] text-lg text-muted-foreground sm:text-xl">
                        About this project
                    </p>
                </div>
            </main>
            <Footer />
        </>
    )
}