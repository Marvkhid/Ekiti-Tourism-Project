"use client";

import Image from "next/image";
import React from "react";

const foodsAndCultures = [
  {
    type: "food",
    title: "Pounded Yam & Egusi Soup",
    description: "Pounded yam is a beloved delicacy in Ekiti, prepared by boiling yam until tender and then pounding it into a smooth, stretchy consistency. This dish is often paired with Egusi soup, a rich and hearty soup made from ground melon seeds, palm oil, vegetables, and assorted meats. The combination of pounded yam and Egusi soup creates a satisfying, flavorful meal that is deeply embedded in Ekiti culture. It is not just a meal but a symbol of hospitality, served at gatherings, celebrations, and special occasions to welcome guests with warmth and generosity.",
    image: "/pounded-yam-egusi.jpeg",
  },
  {
    type: "culture",
    title: "Ekiti Traditional Festivals",
    description: "The people of Ekiti hold their traditions dearly, and this is evident in their vibrant festivals. One of the most significant celebrations is the Udiroko Festival, which marks the traditional New Year in Ado-Ekiti. These festivals serve as a time for communal bonding, cultural display, and ancestral reverence. Drummers, dancers, and masquerades fill the streets, while the Oba and chiefs preside over rituals that reinforce the heritage and unity of the people. Other festivals, such as Ogun and Olosunta, also highlight Ekiti’s spiritual and social traditions.",
    image: "/ekiti-festival.jpeg",
  },
  {
    type: "food",
    title: "Efo Riro",
    description: "Efo Riro is a rich and delicious Yoruba vegetable soup enjoyed widely in Ekiti. Made with finely chopped spinach, peppers, palm oil, and a variety of proteins, this dish stands out for its bold flavors and deep nutritional value. Unlike other vegetable soups, Efo Riro is cooked with minimal water to retain its thickness and enhance its taste. It is commonly served with pounded yam, fufu, or rice, making it a must-have delicacy at home and during celebrations.",
    image: "/efo riro.jpeg",
  },
  {
    type: "culture",
    title: "Ekiti Traditional Attire",
    description: "Aso Oke is the pride of Ekiti traditional fashion, symbolizing prestige, identity, and cultural heritage. This handwoven fabric is worn during weddings, festivals, and other significant ceremonies. The fabric’s intricate patterns and vibrant colors distinguish different family lineages and societal status. Men often wear Agbada, a flowing robe, while women adorn themselves in stylish Iro and Buba, complemented with Gele head ties. Ekiti people take pride in their attire, ensuring that traditional dressing remains an essential part of their cultural expression.",
    image: "/ekiti-aso-oke.jpeg",
  },
  {
    type: "food",
    title: "Ikokore",
    description: "Ikokore, also known as Ifokore, is a special delicacy in Ekiti made from grated water yam. Cooked in a rich blend of palm oil, peppers, and assorted proteins such as fish, crayfish, and beef, this dish has a thick, porridge-like texture that makes it highly satisfying. Ikokore is not only delicious but also a nutritious meal, often enjoyed by both the young and old. It is a staple dish served at family gatherings, cultural events, and festive occasions.",
    image: "/ikokore.jpeg",
  },
  {
    type: "culture",
    title: "Ekiti Royalty and Chieftaincy",
    description: "The traditional governance system in Ekiti is deeply respected, with Obas (kings) and Chiefs playing vital roles in leadership, decision-making, and conflict resolution. The Oba, often referred to as the custodian of culture, oversees the affairs of the land, ensuring peace and harmony among the people. The chieftaincy titles are highly revered, and each titleholder has specific duties and responsibilities that contribute to the growth and stability of the community. Royalty in Ekiti is not just a title; it is a commitment to the welfare and cultural preservation of the people.",
    image: "/ekiti-royalty.jpeg",
  },
  {
    type: "food",
    title: "Ofada Rice and Ayamase Sauce",
    description: "Ofada rice is a locally grown variety of rice that is well-loved for its aromatic and earthy flavor. It is typically served with Ayamase sauce, a deeply spiced green pepper stew made with palm oil, locust beans, and assorted meats. The combination of Ofada rice and Ayamase sauce offers a unique taste that delights the palate. This dish is a favorite at parties, special events, and traditional feasts, embodying the richness of Yoruba cuisine.",
    image: "/ofada-rice.jpeg",
  },
  {
    type: "culture",
    title: "Okorobo Festival",
    description: "The Okorobo Festival is a prominent cultural event celebrated in Ifaki-Ekiti, a central town in Ekiti State, Nigeria. This festival serves as a vibrant expression of the community's rich heritage and traditions. Historically, the Okorobo Festival has been associated with the New Yam Celebration, symbolizing gratitude for a bountiful harvest and the community's cultural wealth.In recent times, the festival has gained significant momentum, attracting both locals and visitors who come together to partake in the festivities. The event is marked by various cultural displays, including traditional music, dance, and other performances that showcase the unique identity of the Ifaki-Ekiti people. For instance, the edition of the Okorobo Festival was scheduled for September 7th, emphasizing its importance in the community's annual calendar.The festival not only serves as a platform for cultural expression but also fosters unity and communal harmony among the people of Ifaki-Ekiti. It offers an opportunity for indigenes and visitors alike to experience and appreciate the town's rich cultural tapestry",
    image: "/okorobo.jpeg",
  },
  {
    type: "food",
    title: "Moin-Moin (Bean Cake)",
    description: "Moin-Moin is a nutritious steamed bean pudding made by blending peeled beans with peppers, onions, and fish. It is often wrapped in banana leaves or foil before steaming to give it a unique flavor. Moin-Moin is commonly served as a side dish with rice or bread and is an essential part of traditional meals in Ekiti. Packed with protein and essential nutrients, it remains a popular breakfast or snack option for both young and old.",
    image: "/moin-moin.jpeg",
  },
  {
    type: "culture",
    title: "Ekiti Traditional Music and Dance",
    description: "Music and dance are fundamental elements of Ekiti culture. Traditional instruments such as the talking drum, gangan, and bata drums create rhythmic beats that accompany various dances. During festivals, social gatherings, and ceremonies, dancers move gracefully in sync with the drumbeats, narrating stories and expressing emotions through movement. These cultural performances are not just entertainment; they are a means of preserving the rich history and identity of the Ekiti people.",
    image: "/ekitii.jpeg",
  }
];

const FoodCulturePage = () => {
  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold text-center text-green-800 mb-12">
        Ekiti Food & Culture
      </h1>
      <div className="space-y-16">
        {foodsAndCultures.map((item, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:space-x-6`}>  
            <Image src={item.image} alt={item.title} width={500} height={300} className="rounded-lg object-cover" />
            <div className="p-12 flex-1 text-lg text-green-900">
              <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCulturePage;
