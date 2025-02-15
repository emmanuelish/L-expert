import type { FC } from "react"
import Image from "next/image"
import { Check } from "lucide-react"

const features = [
  {
    category: "Design intuitif",
    items: ["Créez facilement vos cours", "Thèmes, fichiers, etc."],
  },
  {
    category: "Templates personnalisables",
    items: ["Adaptez chaque cours à vos besoins spécifiques"],
  },
  {
    category: "Branding sur mesure",
    items: ["Ajoutez votre logo, vos couleurs et personnalisez votre site"],
  },
  {
    category: "Paiements accessibles",
    items: ["Acceptez les cartes bancaires, PayPal Money et bien plus"],
  },
]

const EverythingYouNeed: FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#2D1155] mb-8">Tout ce dont vous avez besoin pour réussir</h2>
            <div className="grid gap-8">
              {features.map((feature, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-[#2D1155] mb-2">{feature.category}</h3>
                  {feature.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-600">
                      <Check className="w-5 h-5 text-green-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Features and capabilities illustration"
              fill
              className="object-cover rounded-2xl"
            />
            <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
              <span className="text-sm font-medium">Nouvelle section</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EverythingYouNeed

