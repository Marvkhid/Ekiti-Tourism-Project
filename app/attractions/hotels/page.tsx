import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const hotels = [
  { name: "Delight Hotel & Suites", image: "/delight.jpeg", location: "Ado-Ekiti", stars: 5, reviews: "⭐⭐⭐⭐⭐ Excellent service and luxurious rooms.", link: "/book" },
  { name: "Queens Court Hotel", image: "/queens.jpeg", location: "Ado-Ekiti", stars: 5, reviews: "⭐⭐⭐⭐⭐ Top-tier hospitality with modern facilities.", link: "/book" },
  { name: "Towlab Hotel & Suites", image: "/towlab.jpeg", location: "Ado-Ekiti", stars: 5, reviews: "⭐⭐⭐⭐⭐ Amazing ambiance and world-class comfort.", link: "/book" },
  { name: "Prosperous Royal Hotel & Resort", image: "/prosperous.jpeg", location: "Ado-Ekiti", stars: 5, reviews: "⭐⭐⭐⭐⭐ A wonderful stay with exceptional amenities.", link: "/book" },
  { name: "Mauv Haus & Suites", image: "/mauv.jpeg", location: "Ado-Ekiti", stars: 5, reviews: "⭐⭐⭐⭐⭐ Highly recommended for business and leisure.", link: "/book" },
  { name: "Foda Palace Hotel", image: "/foda.jpeg", location: "Ado-Ekiti", stars: 4, reviews: "⭐⭐⭐⭐ Great customer service and clean rooms.", link: "/book" },
  { name: "Sadiat Executive Hotel", image: "/sadiat.jpeg", location: "Ado-Ekiti", stars: 4, reviews: "⭐⭐⭐⭐ Cozy and comfortable with friendly staff.", link: "/book" },
  { name: "Anisulowo Hotels Limited", image: "/anisulowo.jpeg", location: "Ado-Ekiti", stars: 4, reviews: "⭐⭐⭐⭐ Affordable and convenient.", link: "/book" },
  { name: "Pathfinder Hotel & Holiday Inn", image: "/pathfinder.jpeg", location: "Ado-Ekiti", stars: 4, reviews: "⭐⭐⭐⭐ A decent stay with good hospitality.", link: "/book" },
  { name: "Midas Hotel Limited", image: "/midas.jpeg", location: "Ado-Ekiti", stars: 4, reviews: "⭐⭐⭐⭐ Spacious rooms and great location.", link: "/book" },
  { name: "Lovely Guest Annex", image: "/lovely.jpeg", location: "Ado-Ekiti", stars: 3, reviews: "⭐⭐⭐ Simple and budget-friendly.", link: "/book" },
  { name: "Royal Parklane Hotel", image: "/royal.jpeg", location: "Ado-Ekiti", stars: 3, reviews: "⭐⭐⭐ Decent services at a reasonable price.", link: "/book" },
  { name: "Simbol Hotel Suites", image: "/simbol.jpeg", location: "Ado-Ekiti", stars: 3, reviews: "⭐⭐⭐ Good for short stays.", link: "/book" },
  { name: "Nulge Guest House", image: "/nulge.jpeg", location: "Ado-Ekiti", stars: 3, reviews: "⭐⭐⭐ Quiet and comfortable.", link: "/book" },
  { name: "Prime Guest House", image: "/prime.jpeg", location: "Ado-Ekiti", stars: 3, reviews: "⭐⭐⭐ Value for money.", link: "/book" },
  { name: "Festmag Hotel", image: "/festmag.jpeg", location: "Ado-Ekiti", stars: 2, reviews: "⭐⭐ Basic but clean accommodations.", link: "/book" },
  { name: "Luxury Landing Apartments", image: "/luxury.jpeg", location: "Ado-Ekiti", stars: 2, reviews: "⭐⭐ Great for extended stays.", link: "/book" }
];

export default function HotelsList() {
  return (
    <div className="min-h-screen bg-white mt-4 text-black p-6 overflow-hidden">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-yellow-500">Best Hotels in Ekiti</h1>
      <p className="text-lg text-center mb-8 text-gray-700">Find the perfect place to stay with top-rated hotels offering excellent service and comfort.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {hotels.map((hotel, index) => (
          <div key={index} className="bg-white text-black rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
            <Image src={hotel.image} alt={hotel.name} width={400} height={250} className="w-full h-60 object-cover" />
            <div className="p-5">
              <h2 className="text-2xl font-bold text-purple-900">{hotel.name}</h2>
              <p className="text-md text-gray-600 mt-2">📍 {hotel.location}</p>
              <p className="text-lg font-semibold text-red-600 mt-2">⭐ {hotel.stars}-Star Hotel</p>
              <p className="text-gray-700 mt-2 italic">"{hotel.reviews}"</p>
              <Link href={hotel.link}>
                <button className="mt-4 w-full bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all">
                  Book Now
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
