import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const bars = [
  { name: "Dynamic Lounge", image: "/dynamic.jpeg", location: "Ado-Ekiti", specialty: "Cocktails & Live Music", link: "#" },
  { name: "Soccer City", image: "/soccer.jpeg", location: "Ikere-Ekiti", specialty: "Grilled Delights & Fine Wines", link: "#" },
  { name: "Lush Garden Bar", image: "/lush.jpeg", location: "Ilawe-Ekiti", specialty: "Outdoor Vibes & Exotic Drinks", link: "#" },
  { name: "Lounge Dealva", image: "/dealva.jpeg", location: "Ado-Ekiti", specialty: "Nightclub & Dance Floor", link: "#" },
  { name: "Neon Lights Lounge", image: "/neon.jpeg", location: "Oye-Ekiti", specialty: "DJ Nights & Signature Cocktails", link: "#" },
  { name: "Lazora Bar", image: "/lazora.jpeg", location: "Efon-Alaaye", specialty: "Rooftop Dining & Whiskey Collection", link: "#" },
  { name: "Lagranita Bars & Lounge", image: "/lagranita.jpeg", location: "Iworoko", specialty: "Craft Beer & Local Spirits", link: "#" },
  { name: "Signature Spot", image: "/signature.jpeg", location: "Ikogosi", specialty: "VIP Lounge & Champagne Bar", link: "#" },
  { name: "Baytown Bar", image: "/baytown.jpeg", location: "Ipole-Iloro", specialty: "Beachfront Experience & Seafood", link: "#" }
];

export default function BarsAndLounge() {
  return (
    <div className="min-h-screen bg-white text-white p-6">
      <h1 className="text-5xl font-extrabold text-center my-6 text-yellow-300">Best Bars & Lounges in Ekiti</h1>
      <p className="text-lg text-center mb-8 text-gray-900">Enjoy top-rated bars and lounges with great ambiance, music, and drinks.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {bars.map((bar, index) => (
          <div key={index} className="bg-white text-black rounded-2xl shadow-2xl overflow-hidden transform transition duration-300 hover:scale-105">
            <Image src={bar.image} alt={bar.name} width={400} height={250} className="w-full h-60 object-cover" />
            <div className="p-5">
              <h2 className="text-2xl font-bold text-purple-900">{bar.name}</h2>
              <p className="text-md text-gray-600 mt-2">📍 {bar.location}</p>
              <p className="text-lg font-semibold text-red-600 mt-2">🍸 {bar.specialty}</p>
              <Link href={bar.link}>
                <button className="mt-4 w-full bg-green-400 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all">
                  Visit Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <Footer />
    </div>
  );
}
