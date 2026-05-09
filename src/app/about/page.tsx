import React from 'react';

export default function AboutPage() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center px-gutter py-margin-page w-full max-w-container-max mx-auto pb-24 md:pb-margin-page">
      <div className="w-full max-w-3xl text-center flex flex-col items-center gap-stack-lg">
        {/* Hero / Mission */}
        <div className="flex flex-col items-center gap-stack-md pt-12">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-surface-container-high border border-outline-variant/30 mb-4 shadow-[0_0_40px_rgba(195,192,255,0.1)]">
            <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">Curated Excellence.</h1>
          <p className="font-headline-md text-headline-md text-on-surface-variant max-w-2xl mt-4 font-normal">
            Helping people discover only the best open-source tools.
          </p>
        </div>

        {/* Philosophy Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md w-full mt-12">
          <div className="glass-panel rounded-xl p-8 flex flex-col items-start text-left gap-4 transition-transform duration-300 hover:scale-[1.02]">
            <span className="material-symbols-outlined text-primary text-2xl">filter_list</span>
            <h3 className="font-headline-md text-headline-md text-on-surface">Quality Over Quantity</h3>
            <p className="font-body-base text-body-base text-on-surface-variant">
              The open-source ecosystem is vast, but often cluttered. We meticulously sift through repositories to present only tools that demonstrate exceptional technical merit, active maintenance, and clear utility.
            </p>
          </div>
          <div className="glass-panel rounded-xl p-8 flex flex-col items-start text-left gap-4 transition-transform duration-300 hover:scale-[1.02]">
            <span className="material-symbols-outlined text-primary text-2xl">visibility</span>
            <h3 className="font-headline-md text-headline-md text-on-surface">Signal, No Noise</h3>
            <p className="font-body-base text-body-base text-on-surface-variant">
              Our platform is designed to remove distractions. By focusing on a minimalist, editorial experience, we allow the intrinsic value of the software to take center stage, making discovery effortless.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 flex flex-col items-center gap-stack-sm bg-surface-container-low w-full rounded-xl p-12 border border-outline-variant/10">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Know a tool that belongs here?</h2>
          <p className="font-body-base text-body-base text-on-surface-variant mb-6 text-center max-w-md">
            We rely on the community to uncover hidden gems. Submit a project for our editorial review.
          </p>
          <button className="bg-primary-container text-on-primary-container font-label-sm text-label-sm px-6 py-3 rounded-DEFAULT hover:bg-primary transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
            Submit a Tool
          </button>
        </div>
      </div>
    </main>
  );
}
