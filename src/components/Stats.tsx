import CountUp from "@/components/CountUp";

const stats = [
  { value: 0, suffix: "+", singular: "Active Volunteer", plural: "Active Volunteers" },
  { value: 0, suffix: "+", singular: "Student Helped", plural: "Students Helped" },
  { value: 2, suffix: "+", singular: "Resource Shared", plural: "Resources Shared" },
  { value: 0, suffix: "+", singular: "Branch", plural: "Branches" },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 max-w-3xl mx-auto">
      {stats.map((stat) => (
        <div key={stat.plural} className="text-center">
          <p className="font-display text-4xl font-bold text-ink">
            <CountUp to={stat.value} suffix={stat.suffix} />
          </p>
          <p className="mt-1 text-xs text-ink/60">
            {stat.value === 1 ? stat.singular : stat.plural}
          </p>
        </div>
      ))}
    </div>
  );
}
