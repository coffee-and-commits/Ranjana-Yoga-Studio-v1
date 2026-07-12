import { useTranslation } from 'react-i18next';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { FeesBatchDetails } from '@/components/FeesBatchDetails';
import { LotusDivider } from '@/components/LotusDecor';
import { SEO } from '@/components/SEO';
import { tArray } from '@/i18n/i18n';

const levelColors = {
  smallGroup: 'bg-blush/40 text-charcoal',
  onlineGroup: 'bg-gold-pale/40 text-charcoal',
  offlineBatch: 'bg-beige text-charcoal',
  offlineOnly: 'bg-beige text-charcoal',
};

export default function Schedule() {
  const { t } = useTranslation();
  const classSchedule = tArray(t, 'schedulePage.classes');

  return (
    <div data-testid="schedule-page">
      <SEO page="schedule" />
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 bg-beige/30 relative overflow-hidden">
        <div className="blob-pink top-0 right-0" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <p className="font-jost text-xs tracking-[0.2em] uppercase text-gold-soft mb-4">{t('schedulePage.hero.label')}</p>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-charcoal leading-[1.1]">
              {t('schedulePage.hero.heading')}
            </h1>
            <p className="font-jost text-base text-black mt-6 max-w-xl mx-auto leading-relaxed">
              {t('schedulePage.hero.desc')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Schedule Table */}
      <section data-testid="schedule-table" className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-5xl mx-auto px-6">
          {/* Desktop Table */}
          <div className="hidden lg:block">
            <AnimatedSection>
              <div className="bg-beige/50 border border-sand/50 rounded-2xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-sand/50">
                      <th className="font-jost text-xs tracking-[0.15em] uppercase text-gold-soft py-4 px-6 text-left">{t('schedulePage.table.classHeader')}</th>
                      <th className="font-jost text-xs tracking-[0.15em] uppercase text-gold-soft py-4 px-6 text-left">{t('schedulePage.table.formatHeader')}</th>
                      <th className="font-jost text-xs tracking-[0.15em] uppercase text-gold-soft py-4 px-6 text-left">{t('schedulePage.table.timeHeader')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {classSchedule.map((cls) =>
                      cls.slots.map((slot, si) => (
                        <tr key={`${cls.name}-${si}`} className="border-b border-sand/20 hover:bg-beige/80 transition-colors duration-200">
                          {si === 0 && (
                            <td rowSpan={cls.slots.length} className="font-cormorant text-lg font-semibold text-charcoal py-4 px-6 align-middle border-r border-sand/20">
                              {cls.name}
                            </td>
                          )}
                          <td className="py-4 px-6">
                            <span className={`font-jost text-xs px-3 py-1 rounded-full ${levelColors[slot.levelKey]}`}>
                              {slot.level}
                            </span>
                          </td>
                          <td className="font-jost text-sm text-black py-4 px-6">{slot.time}</td>
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
              {classSchedule.map((cls) => (
                <StaggerItem key={cls.name}>
                  <div className="bg-beige/50 border border-sand/50 rounded-2xl p-5">
                    <h3 className="font-cormorant text-xl font-semibold text-charcoal mb-4">{cls.name}</h3>
                    <div className="space-y-3">
                      {cls.slots.map((slot, si) => (
                        <div key={si} className="bg-ivory rounded-xl p-4 border border-sand/20">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-jost text-sm font-medium text-charcoal">{slot.time}</span>
                            <span className={`font-jost text-xs px-3 py-0.5 rounded-full ${levelColors[slot.levelKey]}`}>
                              {slot.level}
                            </span>
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

      <FeesBatchDetails className="bg-beige/20" />

    </div>
  );
}
