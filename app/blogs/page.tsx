"use client";

import { useState } from "react";

type Post = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
    role: string;
  };
};

type Testimonial = {
  id: number;
  name: string;
  country: string;
  occupation: string;
  message: string;
};

const PostCard = ({ post }: { post: Post }) => (
  <div className="border-b pb-8 mb-8">
    <h2 className="text-4xl font-bold leading-tight tracking-tight text-green-700">
      {post.title}
    </h2>
    <p className="text-lg text-gray-800 mt-2 leading-relaxed">{post.excerpt}</p>
    <p className="text-md text-gray-500 mt-3 italic">
      {post.date} &mdash; {post.author.name}, {post.author.role}
    </p>
  </div>
);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="mb-8">
    <p className="text-2xl font-semibold">
      {testimonial.name} ({testimonial.country})
    </p>
    <p className="text-md text-gray-500 italic">{testimonial.occupation}</p>
    <p className="text-lg text-gray-800 mt-2 leading-relaxed">
      {testimonial.message}
    </p>
  </div>
);

const BlogPage = () => {
  const [showMore, setShowMore] = useState(false);

  const [blogPosts] = useState<Post[]>([
    {
      id: 1,
      title: "Exploring the Beauty of Ikogosi Warm Springs",
      excerpt:
        "Ikogosi Warm Springs remains one of Nigerias most fascinating natural wonders. The unique phenomenon of warm and cold water merging at a confluence is breathtaking. Tourists can explore the lush forests, relax in eco-friendly resorts, and experience the serenity of nature. This site is perfect for travelers looking to escape the chaos of city life.",
      date: "March 1, 2025",
      author: { name: "Alex Johnson", role: "Travel Blogger" },
    },
    {
      id: 2,
      title: "Top 5 Must-Visit Waterfalls in Ekiti",
      excerpt:
        "Ekiti is home to some of the most breathtaking waterfalls in Nigeria. Erin Ijesha, Arinta, and Olosunta waterfalls offer scenic views, cool breezes, and the perfect environment for hiking and relaxation. Each of these waterfalls has its own cultural history, making the experience even richer.",
      date: "February 25, 2025",
      author: { name: "Sarah Lee", role: "Nature Enthusiast" },
    },
  ]);

  const [testimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: "Michael Brown",
      country: "United Kingdom",
      occupation: "Travel Photographer",
      message:
        "Visiting Ikogosi Warm Springs was an unforgettable experience! The sight of warm and cold water merging naturally is simply magical. I also had the chance to explore the local markets and taste traditional Ekiti delicacies, which made my trip even more special.",
    },
    {
        id: 6,
        name: "Aisha Bello",
        country: "Nigeria",
        occupation: "Journalist",
        message:
          "Ekiti is truly a hidden gem! I visited the Arinta Waterfalls and was blown away by its beauty. The fresh, cool water and lush green surroundings made it a perfect place to relax. The friendly locals made my trip even more memorable!",
      },
      {
        id: 7,
        name: "Daniel O'Connor",
        country: "United States",
        occupation: "Adventure Tour Guide",
        message:
          "Hiking through the hills of Ekiti was one of the best outdoor experiences I've had in Africa. The Olosunta Rock offered breathtaking views, and the cultural stories behind these landmarks made the journey even more fascinating!",
      },      
    {
      id: 2,
      name: "Fatima Al-Hassan",
      country: "United Arab Emirates",
      occupation: "Business Consultant",
      message:
        "Ekiti landscapes are breathtaking! From the misty hills to the serene waterfalls, every moment felt like stepping into a postcard. The local hospitality was heartwarming, and the cultural depth of the festivals was incredible.",
    },
  ]);

  return (
    <div className="p-10 bg-green-50 text-gray-900 max-w-3xl mx-auto leading-relaxed font-serif">
      <h1 className="text-5xl font-bold mb-8 text-center tracking-tight text-green-700">
       ADVENTURES & BLOG
      </h1>
      <p className="text-xl text-gray-700 text-center mb-10">
        Discover the breathtaking beauty, rich culture, and hidden gems of Ekiti through the eyes of passionate travelers.
      </p>

      
      {blogPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}

      <h2 className="text-4xl font-bold mt-12 mb-6 text-center text-green-700">
        What Tourists Say About Ekiti
      </h2>
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}

      <h2 className="text-4xl font-bold mt-12 mb-6 text-green-700">
        Why Visit Ekiti?
      </h2>
      <p className="text-lg text-gray-800 leading-relaxed">
        Ekiti is not just about breathtaking landscapes; it is a cultural hub filled with history, adventure, and serenity. Whether you are a nature lover, history enthusiast, or adventure seeker, Ekiti offers something for everyone.
      </p>

   
      <div className="mt-12">
        <button
          onClick={() => setShowMore(!showMore)}
          className="w-full bg-green-700 text-white text-xl font-semibold py-3 rounded-lg"
        >
          {showMore ? "Hide Other Tourist Attractions" : "Show Other Tourist Attractions"}
        </button>

        {showMore && (
  <div className="mt-6 p-6 bg-green-900 text-white rounded-lg">
    <h2 className="text-3xl font-bold mb-4">Other Must-Visit Places in Nigeria</h2>
    <p className="text-lg mb-6">
      Nigeria is a country filled with breathtaking landscapes, rich cultural heritage, and unique natural wonders.
      Whether you are a nature lover, an adventure seeker, or a history enthusiast, these destinations offer unforgettable experiences.
      Here are some of the most fascinating places to visit across the country:
    </p>

    <ul className="list-disc list-inside space-y-4">
      <li>
        <span className="font-semibold">Obudu Mountain Resort:</span> Nestled in the hills of Cross River, Obudu Mountain Resort is a paradise for tourists.
        With its lush green mountains, cable car rides, and cold weather, this resort is perfect for relaxation, hiking, and sightseeing.
      </li>
      <li>
        <span className="font-semibold">Yankari National Park:</span> Located in Bauchi State, Yankari is the largest national park in Nigeria.
        It is home to a wide variety of wildlife, including elephants, lions, baboons, and hippos. The warm Wikki Springs within the park also provide a unique swimming experience.
      </li>
      <li>
        <span className="font-semibold">Olumo Rock:</span> This historical rock in Abeokuta, Ogun State, is a symbol of strength and resilience for the Egba people.
        Visitors can climb to the top and enjoy a stunning panoramic view of the city while learning about the rock's historical significance.
      </li>
      <li>
        <span className="font-semibold">Zuma Rock:</span> Often referred to as the "Gateway to Abuja," Zuma Rock is an iconic monolith in Niger State.
        It is known for its massive size and unique human-like face markings. It is a must-visit site for photography and cultural exploration.
      </li>
      <li>
        <span className="font-semibold">Lekki Conservation Centre:</span> A haven for nature lovers, this reserve in Lagos is home to diverse wildlife,
        including monkeys, peacocks, and rare bird species. It features the longest canopy walkway in Africa, offering a thrilling view of the lush environment.
      </li>
      <li>
        <span className="font-semibold">Awhum Waterfall and Cave:</span> Located in Enugu, Awhum is famous for its stunning waterfall that flows from a towering rock formation.
        The serene environment makes it a popular spot for meditation, picnics, and spiritual retreats.
      </li>
      <li>
        <span className="font-semibold">Kajuru Castle:</span> A medieval-style castle built in the hills of Kaduna. This luxurious private resort offers a fairytale-like experience,
        with breathtaking views, a swimming pool, and German-style architecture.
      </li>
      <li>
        <span className="font-semibold">Erin Ijesha Waterfall:</span> Also known as Olumirin Waterfall, this seven-step waterfall in Osun State is a spectacular sight.
        The crystal-clear water and cool breeze make it a perfect destination for adventure seekers and nature lovers.
      </li>
      <li>
        <span className="font-semibold">Ogbunike Caves:</span> These ancient caves in Anambra State are a UNESCO heritage site known for their rich history and spiritual significance.
        Tourists must remove their footwear before entering, as the caves are considered sacred.
      </li>
      <li>
        <span className="font-semibold">Nike Art Gallery:</span> Located in Lagos, this is the largest art gallery in West Africa.
        It showcases stunning traditional and contemporary African artworks, sculptures, and textile designs.
      </li>
      <li>
        <span className="font-semibold">Sukur Kingdom:</span> A UNESCO World Heritage Site in Adamawa State, known for its terraced hills, ancient structures, and rich cultural heritage.
      </li>
    </ul>

    <p className="text-lg mt-6">
      These destinations showcase Nigeria's diverse landscapes and cultural richness. Whether you seek adventure, history, or relaxation,
      Nigeria has something for everyone. Plan your next trip and explore the beauty of the country!
    </p>
  </div>
)}

      </div>
    </div>
  );
};

export default BlogPage;
