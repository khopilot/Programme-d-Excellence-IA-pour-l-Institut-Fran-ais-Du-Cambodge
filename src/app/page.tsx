import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-blue-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70 z-10"></div>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-6">Bienvenue à l'Institut Français</h1>
          <p className="text-xl mb-8">Découvrez la langue et la culture française</p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Découvrir nos cours
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Cours de Français</h3>
              <p className="text-gray-600">Des cours adaptés à tous les niveaux, du débutant au plus avancé.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Événements Culturels</h3>
              <p className="text-gray-600">Expositions, concerts, projections de films et conférences.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <p className="text-gray-600">Préparation aux examens DELF et DALF.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Événements à Venir</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Exposition d'Art Contemporain",
                date: "15 Mars 2024",
                description: "Une exposition mettant en vedette des artistes français émergents."
              },
              {
                title: "Soirée Cinéma Français",
                date: "22 Mars 2024",
                description: "Projection de films français primés avec sous-titres."
              },
              {
                title: "Atelier de Cuisine",
                date: "29 Mars 2024",
                description: "Apprenez à préparer des plats français authentiques."
              }
            ].map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-blue-600 mb-4">{event.date}</p>
                <p className="text-gray-600">{event.description}</p>
                <button className="mt-4 text-blue-600 hover:text-blue-800">
                  En savoir plus →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Restez Informé</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Inscrivez-vous à notre newsletter pour recevoir les dernières actualités
            et informations sur nos événements.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-2 rounded-full text-gray-900"
            />
            <button className="bg-white text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              S'inscrire
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
