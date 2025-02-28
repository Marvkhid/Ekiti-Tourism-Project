'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const sections = [
  {
    title: "History of Ekiti",
    content:
      "Ekiti State, located in southwestern Nigeria, was created on October 1, 1996. Historically, it was part of the old Ondo State before gaining independence as an entity. The name 'Ekiti' is derived from 'Okiti', meaning a hilly region, as the state is characterized by undulating hills and lush vegetation. The Ekiti people trace their origins to the Yoruba ethnic group, with strong historical ties to Ile-Ife, the ancestral home of the Yorubas. Over the years, Ekiti has been a land of warriors, scholars, and traders, known for their resilience and communal lifestyle. The state has a rich cultural heritage, deeply rooted in Yoruba traditions, and continues to be a center of historical and anthropological significance."
  },
  {
    title: "Major Towns in Ekiti",
    content:
      "Ekiti State is home to several prominent towns including Ado-Ekiti (the state capital), Ikere-Ekiti, Ijero-Ekiti, Ikole-Ekiti, and Oye-Ekiti. These towns play significant roles in governance, education, commerce, and culture. Ado-Ekiti, the largest city, serves as the economic and political center, while Ikogosi is famous for its warm and cold springs. The state also features smaller but historically significant towns, each with unique traditions and contributions to the overall identity of Ekiti."
  },
  {
    title: "Popular Areas and Landmarks",
    content:
      "Some of the notable places in Ekiti include the Fajuyi Memorial Park, Ikogosi Warm Springs (a rare natural confluence of warm and cold water), and the Arinta Waterfalls in Ipole-Iloro. Other notable attractions include the Olosunta Hills in Ikere-Ekiti, known for their spiritual significance, and the Erin Ayonigba Sacred Fish River in Erijiyan-Ekiti, which is believed to house sacred fishes that must not be killed. Additionally, JMTECH Center in Ikun is a remarkable innovation hub offering free tech education to all, empowering young minds with digital skills to thrive in the modern world. This institution has been pivotal in bridging the digital divide in Ekiti, providing opportunities for aspiring tech enthusiasts and entrepreneurs."
  },
  {
    title: "Universities and Education",
    content:
      "Ekiti is often referred to as the 'Fountain of Knowledge' due to its high literacy rate. The state hosts several higher institutions including Ekiti State University (EKSU), Federal University Oye-Ekiti (FUOYE), and Afe Babalola University (ABUAD), which is renowned for its excellence in law and medicine. Ekiti has produced several prominent academics and professionals recognized worldwide. Beyond universities, Ekiti has a strong tradition of primary and secondary education, with many mission schools and community-driven educational initiatives that emphasize knowledge as a foundation for progress."
  },
  {
    title: "Political Background",
    content:
      "Ekiti's political history is dynamic, with notable leaders emerging from the state. It has witnessed a mix of democratic and military rule and has been a battleground for various political parties. Since its creation, the state has been governed by influential politicians including Niyi Adebayo, Ayodele Fayose, and Kayode Fayemi, who have contributed to the state's development. Political activism has always been a part of Ekiti's identity, with a strong culture of democratic engagement and community-driven governance."
  },
  {
    title: "Superstitious Beliefs and Cultural Practices",
    content:
      "The Ekiti people hold various traditional beliefs, including respect for ancestral spirits, festivals honoring deities, and taboos that guide daily life. The Ogun Festival in Ire-Ekiti celebrates the Yoruba god of iron and war, while the Udiroko Festival in Ado-Ekiti marks the beginning of the new year in the traditional Ekiti calendar. The people also practice indigenous medicine, passed down through generations. These practices remain integral to the social fabric of Ekiti, blending spirituality with daily living."
  },
  {
    title: "Languages Spoken",
    content:
      "The dominant language in Ekiti is Yoruba, specifically the Ekiti dialect, which has slight variations across towns. English is also widely spoken due to its status as Nigeria's official language. In rural areas, indigenous proverbs and idioms are commonly used in communication, preserving the cultural identity of the people. The Ekiti dialect is notable for its unique expressions and pronunciation, distinguishing it from other Yoruba dialects."
  },
  {
    title: "International Recognition and Achievements",
    content:
      "Ekiti State has produced globally recognized individuals, including scholars, athletes, and politicians. Notable figures include legal luminary Afe Babalola, former Minister of Education Babalola Borishade, and internationally recognized academics in various fields. Additionally, Ekiti indigenes have excelled in sports, entertainment, and business, contributing to Nigeria's global recognition. Ekiti's educational and entrepreneurial prowess continues to make waves internationally, with many indigenes leading innovative ventures and groundbreaking research."
  }
];

const About: React.FC = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-16 mt-12 max-w-4xl bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200 rounded-lg shadow-lg">
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        The Rich History of <span className="text-6xl text-green-700">EKITI</span>
      </motion.h1>
      <div className="space-y-6">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <button
              className="flex justify-between items-center w-full px-5 py-4 text-lg font-semibold focus:outline-none"
              onClick={() => toggleSection(index)}
            >
              {section.title}
              {openSection === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openSection === index && (
              <motion.div
                className="px-5 pb-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                {section.content}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
