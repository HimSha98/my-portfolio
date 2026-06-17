// components/hero/Hero.tsx

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-[#050816] text-white">
        {/* Glow Image */}
        <Image
            src="/images/hero-glow-bg.png"
            alt="bg-glow"
            width={1800}
            height={1800}
            priority
            className="
                absolute
                top-0
                left-1/2
                -translate-x-1/2
                opacity-80
                pointer-events-none
                -z-0
            "
        />

        <div className="container mx-auto px-6">

            <div className="flex min-h-screen flex-col items-center justify-center text-center">

            {/* Badge */}
            <div className="mb-8 mt-4 rounded-md border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-md flex items-center gap-2">
                <Image src="/images/instant-frame.png" alt="instant-frame" width={26} height={26}/>
                <span className="text-sm text-gray-300">
                    Building Better Software, Seamlessly Together
                </span>
            </div>

            {/* Heading */}

            <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
                Clean Code. Scalable Apps.
                <br />
                Reliable Delivery.
            </h1>

            {/* Description */}

            <p className="mt-8 max-w-2xl text-lg text-gray-400">
                I'm a software engineer who transforms complex ideas into
                performant, scalable, and user-friendly web applications.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <Link
                href="/resume.pdf"
                className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold backdrop-blur-md transition hover:bg-white/10"
                >
                Download Resume
                </Link>

                <Link
                href="#projects"
                className="rounded-xl bg-violet-600 px-8 py-4 font-semibold shadow-[0_0_30px_rgba(124,58,237,.4)] transition hover:bg-violet-500"
                >
                View My Work
                </Link>

            </div>

            </div>
        </div>
    </section>
  );
}