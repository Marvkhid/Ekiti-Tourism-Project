import Footer from "@/components/Footer";
import Image from "next/image";

const attractions = [
  { name: "Ikogosi Warm Springs", image: "/ikogosiii.jpeg", history: "A unique natural wonder where warm and cold springs meet, forming a confluence with distinct temperatures. It is a major tourist attraction with a resort for relaxation." },
  { name: "Arinta Waterfalls", image: "/arintaa.jpeg", history: "A breathtaking waterfall located in Ipole-Iloro, surrounded by lush greenery and perfect for relaxation. It is known for its multiple cascades and therapeutic ambiance." },
  { name: "Fajuyi Memorial Park", image: "/fajuyii.jpeg", history: "A historical park dedicated to the late Colonel Adekunle Fajuyi, Nigeria's first military governor of the Western Region. The park serves as a recreational center and a place of remembrance." },
  { name: "Olosunta Hills", image: "/olosunta.jpeg", history: "A sacred hill in Ikere-Ekiti, popular for hiking and cultural significance. It is associated with annual festivals and traditional rites performed by the locals." },
  { name: "Esa Cave", image: "/esa-cave.jpeg", history: "An ancient cave in Ijero-Ekiti, known for its historical and spiritual significance. It is believed to have been a hiding place during ancient wars and is a site for archaeological exploration." },
  { name: "Olosunta Rock", image: "/olosunta-rock.jpeg", history: "A famous rock formation that attracts climbers and tourists seeking adventure. The rock is tied to many myths and stories of the Ikere-Ekiti people." },
  { name: "Erin Ayonigba Sacred Fish River", image: "/erin-river.jpeg", history: "A river in Efon-Alaaye where sacred fish are protected and hold cultural significance. Legend says the fish are reincarnations of ancestors and are never harmed." },
  { name: "Ureje Dam", image: "/ureje.jpeg", history: "A man-made dam providing water to Ado-Ekiti and offering scenic beauty. It is a great spot for sightseeing and relaxation." },
  { name: "Ewi Palace", image: "/ewi-palace.jpeg", history: "The residence of the Ewi of Ado-Ekiti, showcasing traditional architecture and history. It is a center of governance, culture, and heritage." },
  { name: "Ekiti State Pavilion", image: "/pavillion.jpeg", history: "A major landmark for events and cultural celebrations in the state capital. It hosts major state functions and festivals." },
  { name: "Iworoko Hill", image: "/iworoko.jpeg", history: "A towering hill in Iworoko-Ekiti, known for its challenging climb and panoramic views of the town below. It is a favored location for adventure seekers." },
  { name: "Ogun Onire Grove", image: "/ogun-onire.jpeg", history: "A sacred forest in Ire-Ekiti dedicated to the deity Ogun, the god of iron. It is an important site for traditional worship and cultural festivals." },
  { name: "Ero Dam", image: "/ero-dam.jpeg", history: "A large dam in Ekiti State that supplies water to many towns. It also serves as a fishing hub and an attractive site for nature lovers." },
  { name: "Ogbese River", image: "/ogbese.jpeg", history: "A significant river that runs through Ekiti, serving as an economic resource for fishermen and farmers. The river is surrounded by lush landscapes and offers scenic views." },
  { name: "Okemesi War Site", image: "/okemesi-war.jpeg", history: "A historical site where the famous Kiriji War took place. It is a reminder of the Yoruba intertribal wars and the resilience of the Ekiti people." },
  { name: "Ikun Diary Farm", image: "/diary.jpg", history: "Established in the early 1980s during President Shehu Shagari administration. The farm was developed as an integrated agro-allied project aimed at job creation and boosting local economy nthrough diary production" }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black  mt-4 p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-4 mt-0">Explore Ekiti State</h1>
      <p className="text-lg text-center mb-6">Discover the best places to visit as a tourist or foreigner</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {attractions.map((place, index) => (
          <div key={index} className="bg-white text-black rounded-xl shadow-lg overflow-hidden">
            <Image src={place.image} alt={place.name} width={400} height={250} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h2 className="text-xl text-green-500 font-bold">{place.name}</h2>
              <p className="text-sm  mt-2">{place.history}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
