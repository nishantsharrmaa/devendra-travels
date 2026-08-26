'use client';

import { useState } from 'react';

type Region = {
  id: string;
  name: string;
  title: string;
  description: string;
  highlights: string[];
  x: number;
  y: number;
};

const regions: Region[] = [
  {
    id: 'golden-triangle',
    name: 'Golden Triangle',
    title: 'Delhi • Agra • Jaipur',
    description: 'Classic heritage circuit with forts, palaces, and vibrant street life.',
    highlights: ['Red Fort', 'Taj Mahal', 'Amber Fort'],
    x: 220,
    y: 220,
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    title: 'Jaipur • Jodhpur • Udaipur',
    description: 'Royal deserts, lake palaces, and timeless cuisine.',
    highlights: ['Desert safari', 'Lake Palace', 'Blue City'],
    x: 320,
    y: 360,
  },
  {
    id: 'himachal',
    name: 'Himachal',
    title: 'Shimla • Manali • Dalhousie',
    description: 'Mountain air, pine forests, and scenic road trips.',
    highlights: ['Snow views', 'Ropeway', 'River valleys'],
    x: 395,
    y: 250,
  },
  {
    id: 'south',
    name: 'South India',
    title: 'Kerala • Goa • Coorg',
    description: 'Backwaters, beaches, spice gardens, and easy-going escapes.',
    highlights: ['Houseboats', 'Beaches', 'Tea estates'],
    x: 280,
    y: 560,
  },
];

export default function IndiaMapExplorer() {
  const [activeRegion, setActiveRegion] = useState<Region>(regions[0]);

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-saffron-600 font-body font-medium tracking-widest uppercase text-sm mb-3">
            Explore By Region
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-4">
            Pick a travel zone and start planning
          </h2>
          <p className="font-body text-earth-600 text-lg max-w-2xl mx-auto">
            Hover over the highlighted destinations to see the most loved routes and experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_0.95fr] gap-8 items-start">
          <div className="rounded-[2rem] border border-earth-100 bg-white p-6 shadow-lg">
            <svg viewBox="0 0 600 720" className="w-full h-auto" role="img" aria-label="India map explorer">
              <rect x="30" y="30" width="540" height="660" rx="28" fill="#fffdf9" />
              <path
                d="M188 157c-23 4-44 25-49 47-6 27 6 50 24 72 16 20 22 45 22 70 0 21-3 42-14 59-10 16-24 29-40 40-11 8-22 20-17 35 4 11 15 18 26 22 10 4 21 8 31 13 10 5 20 13 29 8 9-4 12-16 17-25 8-14 18-27 33-34 15-7 32-7 46-14 13-6 24-19 33-30 11-14 20-30 31-43 15-17 36-29 45-49 9-20 5-44-7-63-12-20-29-36-47-49-14-10-30-19-46-24-17-6-35-7-52-4-10 2-19 6-28 11-10 5-19 12-29 17-12 6-24 11-36 16z"
                fill="#f7e7c8"
                stroke="#2d6a4f"
                strokeWidth="8"
              />

              {regions.map((region) => (
                <g key={region.id}>
                  <circle
                    cx={region.x}
                    cy={region.y}
                    r="18"
                    fill={activeRegion.id === region.id ? '#ff8106' : '#f6c68b'}
                    stroke="#2d6a4f"
                    strokeWidth="3"
                    className="cursor-pointer transition-all duration-200"
                    onMouseEnter={() => setActiveRegion(region)}
                    onFocus={() => setActiveRegion(region)}
                  />
                  <circle
                    cx={region.x}
                    cy={region.y}
                    r="30"
                    fill="none"
                    stroke={activeRegion.id === region.id ? '#ff8106' : '#ff8106'}
                    strokeOpacity="0.18"
                    strokeWidth="10"
                  />
                </g>
              ))}
            </svg>
          </div>

          <div className="rounded-[2rem] border border-earth-100 bg-white p-7 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-saffron-600">
                  Selected Route
                </p>
                <h3 className="font-display text-2xl font-bold text-earth-900">{activeRegion.name}</h3>
              </div>
              <div className="rounded-full bg-saffron-500/10 px-3 py-1 text-sm font-body font-semibold text-saffron-700">
                {activeRegion.title}
              </div>
            </div>

            <p className="font-body text-earth-600 leading-8 mb-6">{activeRegion.description}</p>

            <div className="space-y-3">
              {activeRegion.highlights.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-earth-100 bg-cream px-4 py-3">
                  <span className="text-saffron-600 text-lg">✦</span>
                  <span className="font-body font-medium text-earth-800">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-earth-900 p-5 text-white">
              <p className="font-body text-sm uppercase tracking-[0.2em] text-saffron-300">
                Suggested For
              </p>
              <p className="font-display text-xl font-semibold mt-2">
                Family trips, heritage tours, and scenic getaways
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
