import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const hotels = [
  { name: "Delight Hotel & Suites", image: "/delight.jpeg", stars: 5, reviews: "⭐⭐⭐⭐⭐ Excellent service and luxurious rooms.", link: "/book" },
  { name: "Queens Court Hotel", image: "/queens.jpeg", stars: 5, reviews: "⭐⭐⭐⭐⭐ Top-tier hospitality with modern facilities.", link: "/book" },
  { name: "Towlab Hotel & Suites", image: "/towlab.jpeg", stars: 5, reviews: "⭐⭐⭐⭐⭐ Amazing ambiance and world-class comfort.", link: "/book" },
  { name: "Onikoyi Hotel", image: "/onikoyi.jpg", stars: 5, reviews: "⭐⭐⭐⭐⭐ Home for comfort...Improving lives", link: "/book" },
  { name: "Prosperous Royal Hotel & Resort", image: "/prosperous.jpeg", stars: 5, reviews: "⭐⭐⭐⭐⭐ A wonderful stay with exceptional amenities.", link: "/book" },
  { name: "Mauv Haus & Suites", image: "/mauv.jpeg", stars: 5, reviews: "⭐⭐⭐⭐⭐ Highly recommended for business and leisure.", link: "/book" },
  { name: "Foda Palace Hotel", image: "/foda.jpeg", stars: 4, reviews: "⭐⭐⭐⭐ Great customer service and clean rooms.", link: "/book" },
  { name: "Sadiat Executive Hotel", image: "/sadiat.jpeg", stars: 4, reviews: "⭐⭐⭐⭐ Cozy and comfortable with friendly staff.", link: "/book" },
  { name: "Anisulowo Hotels Limited", image: "/anisulowo.jpeg", stars: 4, reviews: "⭐⭐⭐⭐ Affordable and convenient.", link: "/book" },
  { name: "Pathfinder Hotel & Holiday Inn", image: "/pathfinder.jpeg", stars: 4, reviews: "⭐⭐⭐⭐ A decent stay with good hospitality.", link: "/book" },
  { name: "Midas Hotel Limited", image: "/midas.jpeg", stars: 4, reviews: "⭐⭐⭐⭐ Spacious rooms and great location.", link: "/book" },
  { name: "Lovely Guest Annex", image: "/lovely.jpeg", stars: 3, reviews: "⭐⭐⭐ Simple and budget-friendly.", link: "/book" },
  { name: "Royal Parklane Hotel", image: "/royal.jpeg", stars: 3, reviews: "⭐⭐⭐ Decent services at a reasonable price.", link: "/book" },
  { name: "Simbol Hotel Suites", image: "/simbol.jpeg", stars: 3, reviews: "⭐⭐⭐ Good for short stays.", link: "/book" },
  { name: "Nulge Guest House", image: "/nulge.jpeg", stars: 3, reviews: "⭐⭐⭐ Quiet and comfortable.", link: "/book" },
  { name: "Prime Guest House", image: "/prime.jpeg", stars: 3, reviews: "⭐⭐⭐ Value for money.", link: "/book" },
  { name: "Festmag Hotel", image: "/festmag.jpeg", stars: 2, reviews: "⭐⭐ Basic but clean accommodations.", link: "/book" },
  { name: "Luxury Landing Apartments", image: "/luxury.jpeg", stars: 2, reviews: "⭐⭐ Great for extended stays.", link: "/book" }
];

export default function HotelsList() {
  return (
    <div className="min-h-screen bg-gray-100 text-black p-6 md:p-12 overflow-hidden">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-green-500 drop-shadow-lg">
        Best Hotels in Ekiti
      </h1>
      <p className="text-lg text-center mb-8 text-gray-700 max-w-2xl mx-auto">
        Discover top-tier hospitality with the finest hotels, offering world-class comfort and service.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {hotels.map((hotel, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-2xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <Image
              src={hotel.image}
              alt={hotel.name}
              width={500}
              height={300}
              className="w-full h-72 object-cover"
            />
            <div className="p-6">
              <h2 className="text-3xl font-bold text-purple-900 mb-2">{hotel.name}</h2>
              <div className="flex items-center gap-2">
                <Image src="/location-icon.png" alt="Location" width={20} height={20} />
                <p className="text-md text-gray-600">  {hotel.name === "Onikoyi Hotel" ? "Ikun-Ekiti" : "Ado-Ekiti"}</p>
              </div>
              <p className="text-lg font-semibold text-red-600 mt-3">
                ⭐ {hotel.stars}-Star Hotel
              </p>
              <p className="text-gray-700 mt-3 italic leading-relaxed">
                &ldquo;{hotel.reviews}&rdquo;
              </p>
              <Link href={`/attractions/hotels/${encodeURIComponent(hotel.name.replace(/\s+/g, '-').toLowerCase())}`}>
  <button className="mt-5 w-full bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all text-lg">
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
