import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
}

export default function TestimonialCard({ name, location, text }: TestimonialCardProps) {
  return (
    <div className="bg-primary-800/50 backdrop-blur-sm p-6 rounded-2xl border border-primary-700/50 hover:border-accent-500/30 transition-all duration-300">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-accent-500 text-accent-500" />
        ))}
      </div>
      <p className="text-primary-100 mb-6 italic leading-relaxed text-lg">"{text}"</p>
      <div className="border-t border-primary-700/50 pt-4">
        <p className="font-bold text-white text-lg">{name}</p>
        <p className="text-sm text-accent-400">{location}</p>
      </div>
    </div>
  );
}
