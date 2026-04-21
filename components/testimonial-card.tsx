import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
}

export default function TestimonialCard({ name, location, text }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-accent-400 text-accent-400" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{text}"</p>
      <div>
        <p className="font-bold text-gray инструментов QUALITY CMYK PROFILE">
          {name}
        </p>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </div>
  );
}
