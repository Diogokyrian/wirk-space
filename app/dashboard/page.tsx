
import Image from "next/image";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import Navbar from "@/components/Navbar";
import LogoutButton from "@/components/LogoutButton";

const quickServices = [
  {
    title: "Withdraw",
    description: "Request withdrawal",
    icon: "💸",
    href: "/withdraw",
  },
  {
    title: "Connect",
    description: "Connect your account",
    icon: "🌐",
    href: "/connect",
  },
  {
    title: "Tasks",
    description: "Complete tasks",
    icon: "⚙️",
    href: "/tasks",
  },
];

const dashboardCards = [
  {
    title: "Digital program",
    image: "/digital-program.png",
    href: "/digital-program",
  },
  {
    title: "Free airdrops",
    image: "/crypto-free.png",
    href: "/airdrops",
  },
  {
    title: "Free courses",
    image: "/free-courses.png",
    href: "/courses",
  },
  {
    title: "Free airdrop updates",
    image: "/free-airdrops.png",
    href: "/airdrops",
  },
  {
    title: "Cash exchange",
    image: "/p2p-payment.png",
    href: "/exchange",
  },
  {
    title: "Movie channel",
    image: "/movie-channel.png",
    href: "/movies",
  },
  {
    title: "Web3 jobs",
    image: "/web3-job.png",
    href: "/jobs",
  },
  {
    title: "Web3 CV Resume",
    image: "/web3-cv.png",
    href: "/resume",
  },
  {
    title: "Crypto exchange",
    image: "/crypto-exchange.png",
    href: "/exchange",
  },
];

export default async function DashboardPage() {
  await auth.protect();

  return (
    <main className="min-h-screen bg-[#090909] text-white">
      <Navbar />

      <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
     
        <section className="mb-6">
          <p className="text-xs text-neutral-500">Welcome</p>
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Xpress <span className="text-[#d5ae57]">.0</span>
          </h1>
        </section>

        <section className="mb-8 grid grid-cols-1 gap-3 md:grid-cols-[1.2fr_0.8fr]">
          <div className="min-h-40 rounded-xl border border-[#202020] bg-[#151515] p-5 sm:min-h-48">
            <p className="text-xs text-neutral-500">Account overview</p>

            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#8d7037] bg-[#211b10] text-lg">
                ✦
              </div>

              <div>
                <h2 className="text-sm font-semibold">Your dashboard</h2>
                <p className="mt-1 text-xs text-neutral-500">
                  Manage your Wirkspace activities
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="rounded-xl border border-[#292929] bg-[#151515] p-4">
              <div className="mb-3 flex items-center justify-between gap-2">
                <h2 className="text-xs font-semibold">Claim your rubies</h2>
                <span className="text-[9px] text-neutral-500">
                  Click an option to continue
                </span>
              </div>

              <div className="grid grid-cols-6 gap-1.5">
                {[10, 20, 30, 40, 50, 60].map((amount) => (
                  <Link
                    key={amount}
                    href="/tasks"
                    className="flex flex-col items-center rounded-md border border-[#292929] bg-[#0b0b0b] px-1 py-2 transition hover:border-[#c9a34e]"
                  >
                    <span className="text-[10px] font-semibold">
                      +{amount}
                    </span>
                    <span className="mt-1 text-xs">💎</span>
                  </Link>
                ))}
              </div>

              <p className="mt-2 text-[9px] text-neutral-500">
                Total rubies: 140
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 rounded-xl border border-[#292929] bg-[#151515] p-3">
              <div>
                <p className="text-[9px] text-neutral-500">Earnings</p>
                <p className="mt-1 text-xs font-semibold text-[#d5ae57]">
                  ₦0.00
                </p>
              </div>

              <div>
                <p className="text-[9px] text-neutral-500">Commission</p>
                <p className="mt-1 text-xs font-semibold text-[#d5ae57]">
                  ₦0.00
                </p>
              </div>

              <div>
                <p className="text-[9px] text-neutral-500">
                  Tasks completed
                </p>
                <p className="mt-1 text-xs font-semibold text-[#d5ae57]">
                  0
                </p>
              </div>
            </div>
          </div>
        </section>

      
        <section className="mb-8">
          <h2 className="mb-4 text-center text-sm font-semibold">
            Quick services
          </h2>

          <div className="mx-auto grid max-w-2xl grid-cols-3 gap-3">
            {quickServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group flex min-h-28 flex-col items-center justify-center rounded-xl border border-[#202020] bg-[#151515] p-3 text-center transition hover:border-[#9a7938] hover:bg-[#1b1b1b]"
              >
                <span className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-[#242018] text-lg">
                  {service.icon}
                </span>

                <h3 className="text-[11px] font-semibold">
                  {service.title}
                </h3>

                <span className="mt-3 flex min-h-6 w-full items-center justify-center rounded border border-[#8d7037] text-[9px] text-[#d5ae57] transition group-hover:bg-[#d5ae57] group-hover:text-black">
                  {service.title === "Withdraw"
                    ? "Withdraw"
                    : service.title === "Connect"
                      ? "Connect"
                      : "Complete"}
                </span>
              </Link>
            ))}
          </div>
        </section>

     
        <section className="mb-8">
          <h2 className="mb-4 text-center text-sm font-semibold">
            User menu
          </h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {dashboardCards.map((card) => (
              <article
                key={card.title}
                className="overflow-hidden rounded-lg border border-[#242424] bg-[#141414] transition hover:border-[#8d7037]"
              >
                <Link href={card.href} className="block">
                  <div className="relative aspect-[2.1/1] w-full overflow-hidden bg-[#1a1a1a]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-300 hover:scale-[1.02]"
                    />
                  </div>
                </Link>

                <div className="flex min-h-10 items-center justify-between gap-2 px-3 py-2">
                  <h3 className="text-[10px] text-neutral-300">
                    {card.title}
                  </h3>

                  <Link
                    href={card.href}
                    className="flex min-h-6 min-w-16 items-center justify-center rounded border border-[#393124] px-2 text-[9px] text-[#d5ae57] transition hover:bg-[#d5ae57] hover:text-black"
                  >
                    Connect
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-6 flex justify-center border-t border-[#222222] py-6">
          <LogoutButton />
        </section>

      
        <footer className="border-t border-[#222222] py-5 text-center">
          <p className="text-[9px] text-neutral-600">
            Copyright 2026 Wirkspace Technologies. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
