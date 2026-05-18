export default function QuoteBlock({ quote }) {
  return (
    <div className="my-14 border-l-4 border-gold pl-6">
      <p className="text-2xl italic text-white/90 leading-relaxed">
        “{quote}”
      </p>
    </div>
  );
}