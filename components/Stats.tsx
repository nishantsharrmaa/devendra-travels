const stats = [
  { value: "20+", label: "Years of Experience", icon: "🏆" },
  { value: "5000+", label: "Happy Travellers", icon: "😊" },
  { value: "50+", label: "Tour Destinations", icon: "📍" },
  { value: "100%", label: "Satisfaction Rate", icon: "⭐" },
];

export default function Stats() {
  return (
    <section className="bg-white py-16 border-b border-earth-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="font-display text-4xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="font-body text-earth-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
