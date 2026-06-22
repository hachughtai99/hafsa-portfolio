export default function Home() {
  return (
    <main className="bg-[#F8F6F3] text-[#111111]">
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <p className="uppercase tracking-[0.3em] text-sm mb-6">
          Content Strategist | Social Media Consultant
        </p>

        <h1 className="text-6xl md:text-8xl font-bold max-w-5xl leading-tight">
          Helping brands become impossible to ignore.
        </h1>

        <p className="mt-8 max-w-2xl text-xl text-gray-600">
          I help businesses grow through strategic content, social media,
          storytelling, and SEO.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href="mailto:ha.chughtai99@gmail.com"
            className="bg-black text-white px-8 py-4 rounded-full"
          >
            Work With Me
          </a>

          <a href="#portfolio" className="border border-black px-8 py-4 rounded-full">
            View Portfolio
          </a>
        </div>
      </section>

      <section className="py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-10">Marketing is psychology.</h2>

        <p className="text-xl leading-relaxed text-gray-700 max-w-4xl">
          My background in Applied Psychology and digital marketing allows me
          to understand how people think, engage, and buy. I have spent years
          leading content initiatives, managing editorial calendars, writing
          SEO-focused content, and helping brands build meaningful connections
          with their audiences.
        </p>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16">Services</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              [
                "Content Strategy",
                "Content plans, editorial calendars, audience research, positioning, and content systems."
              ],
              [
                "Social Media Management",
                "Strategy, content planning, captions, analytics, community management, and growth."
              ],
              [
                "SEO Copywriting",
                "Blog content, landing pages, website copy, email campaigns, and SEO optimization."
              ]
            ].map(([title, body]) => (
              <article key={title} className="p-8 border rounded-3xl">
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-gray-700">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16">Experience</h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold">Editor & Marketing Coordinator</h3>
            <p className="text-gray-600">Encoders Studio | 2023-2025</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Content Marketing Team Lead</h3>
            <p className="text-gray-600">Dexter Solutions | 2021-2023</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Co-Founder</h3>
            <p className="text-gray-600">Mood Studio</p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-black text-white text-center px-6">
        <h2 className="text-5xl font-bold mb-8">Let's build something remarkable.</h2>

        <p className="text-xl mb-10 text-gray-300">
          Available for content strategy, social media management, SEO
          copywriting, and consulting.
        </p>

        <a
          href="mailto:ha.chughtai99@gmail.com"
          className="bg-white text-black px-8 py-4 rounded-full inline-block"
        >
          Get In Touch
        </a>
      </section>
    </main>
  );
}
