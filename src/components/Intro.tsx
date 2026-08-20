export default function Intro() {
  return (
    <section className="bg-[#f8dde5] px-6 py-24 font-body lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-body text-xs font-normal uppercase tracking-[0.2em] text-[#2e3a32]">
            Who are we
          </p>
          <h2 className="mt-4 font-display text-5xl font-bold leading-none text-[#2e3a32] sm:text-6xl lg:text-7xl">
            Education Without Borders.
          </h2>
          <p className="mt-10 max-w-lg font-body text-xl leading-relaxed text-[#2e3a32]">
            Project Astera is a volunteer-led nonprofit on a mission to make
            high-quality study materials free and accessible to every student,
            regardless of where they live or what they can afford.
          </p>
          <p className="mt-8 max-w-lg font-body text-xl leading-relaxed text-[#2e3a32]">
            We do this by building an open library of notes, worksheets, and
            past papers filed by country, curriculum, grade, and subject.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 shrink-0">
          {[
            {
              label: "Free Forever",
              desc: "No paywalls, no sign-up required to browse.",
              color: "bg-[#bacdaf]",
            },
            {
              label: "Volunteer built",
              desc: "Every resource is submitted and verified by our global team.",
              color: "bg-[#ffbedd]",
            },
            {
              label: "Curriculum Aligned",
              desc: "Organized by country, syllabus, grade, and chapter.",
              color: "bg-[#ffbedd]",
            },
            {
              label: "Always Growing",
              desc: "New notes added every week by volunteers worldwide.",
              color: "bg-[#bacdaf]",
            },
          ].map((item) => (
            <div
              key={item.label}
              className={`${item.color} rounded-[2.5rem] px-8 py-8`}
            >
              <h4 className="font-display text-3xl font-bold text-[#2e3a32]">
                {item.label}
              </h4>
              <p className="mt-5 font-body text-base leading-relaxed text-[#2e3a32]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
