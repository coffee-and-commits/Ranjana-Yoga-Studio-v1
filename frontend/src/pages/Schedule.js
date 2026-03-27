import { Link } from 'react-router-dom';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { LotusDivider } from '@/components/LotusDecor';
import { ArrowRight, Info } from 'lucide-react';

const schedule = [
  { day: 'Monday', slots: [
    { time: '6:00 AM - 7:00 AM', class: 'Hatha Yoga', level: 'Beginner', duration: '60 min' },
    { time: '7:00 AM - 8:00 AM', class: 'Power Yoga (Weight Loss)', level: 'Intermediate', duration: '60 min' },
    { time: '6:00 PM - 7:00 PM', class: 'Yoga + Pranayama', level: 'All Levels', duration: '60 min' },
  ]},
  { day: 'Tuesday', slots: [
    { time: '6:00 AM - 7:00 AM', class: 'Vinyasa Flow', level: 'Beginner', duration: '60 min' },
    { time: '7:00 AM - 8:00 AM', class: 'Power Yoga (Weight Loss)', level: 'Intermediate', duration: '60 min' },
    { time: '6:00 PM - 7:00 PM', class: 'Meditation & Breathwork', level: 'All Levels', duration: '60 min' },
  ]},
  { day: 'Wednesday', slots: [
    { time: '6:00 AM - 7:00 AM', class: 'Hatha Yoga', level: 'Beginner', duration: '60 min' },
    { time: '7:00 AM - 8:00 AM', class: 'Ayurveda Session', level: 'All Levels', duration: '60 min' },
    { time: '6:00 PM - 7:00 PM', class: 'Yoga + Pranayama', level: 'All Levels', duration: '60 min' },
  ]},
  { day: 'Thursday', slots: [
    { time: '6:00 AM - 7:00 AM', class: 'Vinyasa Flow', level: 'Intermediate', duration: '60 min' },
    { time: '7:00 AM - 8:00 AM', class: 'Power Yoga (Weight Loss)', level: 'Intermediate', duration: '60 min' },
    { time: '6:00 PM - 7:00 PM', class: 'Acupressure Workshop', level: 'All Levels', duration: '60 min' },
  ]},
  { day: 'Friday', slots: [
    { time: '6:00 AM - 7:00 AM', class: 'Hatha Yoga', level: 'Beginner', duration: '60 min' },
    { time: '7:00 AM - 8:00 AM', class: 'Marma Therapy Session', level: 'All Levels', duration: '60 min' },
    { time: '6:00 PM - 7:00 PM', class: 'Yoga + Meditation', level: 'All Levels', duration: '60 min' },
  ]},
  { day: 'Saturday', slots: [
    { time: '6:00 AM - 7:00 AM', class: 'Power Yoga', level: 'All Levels', duration: '60 min' },
    { time: '7:00 AM - 8:00 AM', class: 'Yoga + Pranayama', level: 'All Levels', duration: '60 min' },
    { time: '6:00 PM - 7:00 PM', class: 'Special Wellness Session', level: 'All Levels', duration: '60 min' },
  ]},
  { day: 'Sunday', slots: [
    { time: 'Rest Day', class: 'Rest / Special Session', level: '\u2014', duration: '\u2014' },
  ]},
];

const levelColors = {
  'Beginner': 'bg-blush/40 text-charcoal',
  'Intermediate': 'bg-gold-pale/40 text-charcoal',
  'All Levels': 'bg-beige text-charcoal',
  '\u2014': 'bg-ivory text-taupe',
};

export default function Schedule() {
  return (
    <div data-testid="schedule-page">
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 bg-beige/30 relative overflow-hidden">
        <div className="blob-pink top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <p className="font-jost text-xs tracking-[0.2em] uppercase text-gold-soft mb-4">Timetable</p>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-charcoal leading-[1.1]">
              Class Schedule
            </h1>
            <p className="font-jost text-base text-taupe mt-6 max-w-xl mx-auto leading-relaxed">
              Find a time that fits your life &ndash; and commit to your wellness journey.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Schedule Table */}
      <section data-testid="schedule-table" className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-6xl mx-auto px-6">
          {/* Desktop Table */}
          <div className="hidden lg:block">
            <AnimatedSection>
              <div className="bg-beige/50 border border-sand/50 rounded-2xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-sand/50">
                      <th className="font-jost text-xs tracking-[0.15em] uppercase text-gold-soft py-4 px-6 text-left">Day</th>
                      <th className="font-jost text-xs tracking-[0.15em] uppercase text-gold-soft py-4 px-6 text-left">Time</th>
                      <th className="font-jost text-xs tracking-[0.15em] uppercase text-gold-soft py-4 px-6 text-left">Class</th>
                      <th className="font-jost text-xs tracking-[0.15em] uppercase text-gold-soft py-4 px-6 text-left">Level</th>
                      <th className="font-jost text-xs tracking-[0.15em] uppercase text-gold-soft py-4 px-6 text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.map((day) =>
                      day.slots.map((slot, si) => (
                        <tr key={`${day.day}-${si}`} className="border-b border-sand/20 hover:bg-beige/80 transition-colors duration-200">
                          {si === 0 && (
                            <td rowSpan={day.slots.length} className="font-cormorant text-lg font-semibold text-charcoal py-4 px-6 align-top border-r border-sand/20">
                              {day.day}
                            </td>
                          )}
                          <td className="font-jost text-sm text-taupe py-4 px-6">{slot.time}</td>
                          <td className="font-jost text-sm text-charcoal py-4 px-6 font-medium">{slot.class}</td>
                          <td className="py-4 px-6">
                            <span className={`font-jost text-xs px-3 py-1 rounded-full ${levelColors[slot.level]}`}>
                              {slot.level}
                            </span>
                          </td>
                          <td className="font-jost text-sm text-taupe py-4 px-6">{slot.duration}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden">
            <StaggerContainer className="space-y-6">
              {schedule.map((day) => (
                <StaggerItem key={day.day}>
                  <div className="bg-beige/50 border border-sand/50 rounded-2xl p-5">
                    <h3 className="font-cormorant text-xl font-semibold text-charcoal mb-4">{day.day}</h3>
                    <div className="space-y-3">
                      {day.slots.map((slot, si) => (
                        <div key={si} className="bg-ivory rounded-xl p-4 border border-sand/20">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-jost text-sm font-medium text-charcoal">{slot.class}</span>
                            <span className={`font-jost text-xs px-3 py-0.5 rounded-full ${levelColors[slot.level]}`}>
                              {slot.level}
                            </span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="font-jost text-xs text-taupe">{slot.time}</span>
                            <span className="font-jost text-xs text-taupe">{slot.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      <LotusDivider />

      {/* Batch Info */}
      <section data-testid="batch-info" className="py-16 lg:py-20 bg-beige/20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="bg-ivory border border-sand/50 rounded-2xl p-8 lg:p-12">
              <Info size={28} className="text-gold-soft mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-cormorant text-2xl font-light text-charcoal mb-4">Please Note</h3>
              <p className="font-jost text-sm text-taupe leading-relaxed mb-8">
                All classes are conducted in small, personalized batches to ensure individual attention and effective results. Advance registration is required.
              </p>
              <Link
                to="/contact"
                data-testid="schedule-enquire-cta"
                className="inline-flex items-center gap-2 font-jost text-sm font-medium tracking-[0.08em] px-8 py-3 rounded-full bg-blush border border-gold-soft text-charcoal hover:bg-deep-rose hover:text-ivory transition-all duration-300"
              >
                Enquire to Join a Batch <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
