import { Slide } from "react-awesome-reveal";

const TheStories = () => {
  const stories = [
    {
      name: "Sarah Ahmed",
      city: "Dhaka",
      story: "Found a wonderful roommate within 2 days. Highly recommended!",
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Rafi Hossain",
      city: "Chattogram",
      story: "The platform is very easy to use. It saved me so much time.",
      image: "https://i.pravatar.cc/150?img=36",
    },
    {
      name: "Ayesha Siddika",
      city: "Sylhet",
      story:
        "I loved the filter features. It matched me with the perfect person.",
      image: "https://i.pravatar.cc/150?img=48",
    },
    {
      name: "Ayesha Siddika",
      city: "Sylhet",
      story:
        "I loved the filter features. It matched me with the perfect person.",
      image: "https://i.pravatar.cc/150?img=48",
    },
    {
      name: "Ayesha Siddika",
      city: "Sylhet",
      story:
        "I loved the filter features. It matched me with the perfect person.",
      image: "https://i.pravatar.cc/150?img=48",
    },
  ];

  return (
    <section className="bg-white py-12 px-4 rounded-3xl shadow-lg my-10 max-w-7xl mx-auto">
      <Slide triggerOnce>
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">
          Success Stories from Our Users
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((s, i) => (
            <div
              key={i}
              className="bg-indigo-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-14 h-14 rounded-full border-2 border-indigo-600"
                />
                <div>
                  <p className="font-semibold text-indigo-700">{s.name}</p>
                  <p className="text-sm text-gray-500">{s.city}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">“{s.story}”</p>
            </div>
          ))}
        </div>
      </Slide>
    </section>
  );
};
export default TheStories;
