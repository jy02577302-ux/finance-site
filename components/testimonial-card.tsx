import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
}

export default function TestimonialCard({ name, location, text }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-platinum-200 hover:border-accent-300 hover:shadow-xl transition-all duration-300">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-accent-500 text-accent-500" />
        ))}
      </div>
      <p className="text-primary-700 mb-6 italic leading-relaxed text-lg">"{text}"</p>
      <div className="border-t border-platinum-200 pt-4">
        <p className="font-bold text-primary-900 text-lg">{name}</p>
        <p className="text-sm text-accent-600">{location}</p>
      </div>
    </div>
  );
}
