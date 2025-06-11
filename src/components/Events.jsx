import React from 'react';
import EventCard from './EventCard';

const Events = () => {
  // Event data for QML4Africa Workshop
  const qmlEvent = {
    title: "QML4Africa Workshop at DeepLearning Indaba Conference 2025",
    date: "22 August 2025",
    location: "Kigali, Rwanda",
    image: "/qml4africa-poster.png", // Assuming you'll add this image to the public folder
    description: "🚀 Call for Abstracts — Be Part of Africa's First Quantum Machine Learning Workshop! 🌍✨\n\nWe're thrilled to announce \"Quantum Machine Learning for Africa\", the first-ever QML workshop dedicated to the African continent, happening on 22 August 2025 in Kigali, Rwanda, as part of Deep Learning Indaba 2025, proudly powered by IBM Research Africa.\n\n🔬 This immersive half-day workshop will explore:\n\nQuantum Machine Learning (QML)\nQuantum Data Preprocessing\nQuantum Natural Language Processing (QNLP)\nQuantum Algorithms & Optimization\nAI for Quantum Computing\n\n🎯 Whether you're a budding researcher or a seasoned quantum explorer, this is your opportunity to connect, collaborate, and shape the future of quantum innovation in Africa.\n\n💬 Want to showcase your 💡research?\n➡️ Submit your poster abstract by 30 June 2025 for a prestigious opportunity to present your work!\n\n📅 Join us at #DLI2025 from 17th–22nd August 2025\n\n🤝 Co-organised by\nStephanie Muller · Nouhaila Innan · MUNA NUMAN · Ndivhuwo Nyase · Aviwe Kohlakala · Yousra Farhani · Walid El Maouaki · Lebohang Mashatola\n\n💜 Let's build the future of Quantum4Africa, together. 🌍",
    registrationLink: "https://lnkd.in/dUJvAMJZ",
    abstractLink: "https://lnkd.in/dUJvAMJZ"
  };

  return (
    <section id='event' className="flex flex-col justify-center items-center min-h-screen bg-primary py-16">
      <h1 className="text-6xl font-bold text-white mb-12">
        <span className="text-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Our Events
        </span>
      </h1>
      
      {/* Event Card */}
      <EventCard 
        title={qmlEvent.title}
        date={qmlEvent.date}
        location={qmlEvent.location}
        image={qmlEvent.image}
        description={qmlEvent.description}
        registrationLink={qmlEvent.registrationLink}
        abstractLink={qmlEvent.abstractLink}
      />
      
      {/* Additional events can be added here */}
    </section>
  );
};

export default Events;
