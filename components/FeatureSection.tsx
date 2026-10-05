import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const featuresList = [

  {
    title: "Wirkspace forex signals",
    description: "We offer our subscribers great risk-to-rewards on trades given on Fx/futures with an accuracy of over 92%.",
    imageSrc: "/WirkSpace forex 1.png",
    imageAlt: "Wirkspace forex signals",
  },
  {
    title: "Wirkspace Airdrops",
    description: "Claim rubies daily on wirkspace to access whitelist specs, convert to airtime and access to various benefits.",
    imageSrc: "/Air.png",
    imageAlt: "Wirkspace Airdrops",
  },
  {
    title: "Web3 CV/Resume creation",
    description: "We will setup your CV/Resume with our all-in-one digital course on wirkspace. Acquire all skills needed to earn and sell.",
    imageSrc: "/resume 1.png",
    imageAlt: "Web3 CV/Resume creation",
  },
  {
    title: "Wirkspace giftcard",
    description: "Trade your gift cards safely on our secure P2P exchange platform for smooth transactions and fast payouts.",
    imageSrc: "/giftcards 1.png",
    imageAlt: "Wirkspace giftcard",
  },
  {
    title: "Wirkspace payment",
    description: "Receive payments worldwide with our cashapp, paypal and other payment services. Earn commission for inviting users.",
    imageSrc: "/payments 1.png",
    imageAlt: "Wirkspace payment",
  },
  {
    title: "Wirkspace exchange (P2P)",
    description: "Subscribe to WirkSpace to have access to our fast and secure exchange platform. With best market rates for smooth transactions. Register on the exchange to earn a commission of 50% on each trade you close.",
    imageSrc: "/wirkspace.png",
    imageAlt: "Wirkspace exchange (P2P)",
  },
  {
    title: "Wirkspace payment",
    description: "Receive payments worldwide with our cashapp, paypal and other payment services. Earn commission for inviting users.",
    imageSrc: "/payments 1.png",
    imageAlt: "Wirkspace payment",
  },
]

const FeaturesSection = () => {
  return (
    <section className="w-full bg-black py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {featuresList.map((feature, index) => {
          const isEven = index % 2 === 0
          return (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row items-center justify-between gap-8 ${
                isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
        
              <div className="w-full lg:w-1/2 flex flex-col gap-2">
                <h3 className="text-lg md:text-xl font-bold text-[#D3AB5E] tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="pt-1">
                  <Link href="#" className="text-[#D3AB5E] hover:opacity-80 text-xs font-semibold flex items-center gap-1 transition-opacity">
                    Get started <span className="text-xs">&gt;</span>
                  </Link>
                </div>
              </div>

              <div className="w-full lg:w-[42%] h-45 md:h-50 bg-[#111622] border border-gray-800/80 rounded-xl relative overflow-hidden shadow-md">
                <Image
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FeaturesSection