import { Calendar, CalendarDays, CalendarRange, TrendingUp, Inbox, CheckCircle, Clock, MessageSquare } from 'lucide-react';
import type { EnquiryStats } from '@/lib/enquiryService';

interface AdminStatsCardsProps {
  stats: EnquiryStats;
  activePeriod: string;
  onPeriodSelect: (period: string) => void;
}

export function AdminStatsCards({ stats, activePeriod, onPeriodSelect }: AdminStatsCardsProps) {
  const cards = [
    {
      id: 'today',
      title: 'आज की पूछताछ',
      titleEn: 'Today',
      count: stats.today,
      icon: Calendar,
      gradient: 'from-amber-500/10 to-gold-500/20',
      border: 'border-gold-300/60',
      textColor: 'text-amber-800',
      badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
      badgeText: 'आज दर्ज',
      description: 'आज 00:00 से अब तक',
    },
    {
      id: 'week',
      title: 'इस सप्ताह',
      titleEn: 'This Week',
      count: stats.thisWeek,
      icon: CalendarRange,
      gradient: 'from-blue-500/10 to-indigo-500/20',
      border: 'border-blue-200',
      textColor: 'text-blue-900',
      badgeBg: 'bg-blue-100 text-blue-900 border-blue-200',
      badgeText: 'पिछले 7 दिन',
      description: 'सप्ताहिक कुल पूछताछ',
    },
    {
      id: 'month',
      title: 'इस महीने',
      titleEn: 'This Month',
      count: stats.thisMonth,
      icon: CalendarDays,
      gradient: 'from-emerald-500/10 to-teal-500/20',
      border: 'border-emerald-200',
      textColor: 'text-emerald-900',
      badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-200',
      badgeText: 'वर्तमान माह',
      description: 'मासिक कुल पूछताछ',
    },
    {
      id: 'year',
      title: 'इस वर्ष',
      titleEn: 'This Year',
      count: stats.thisYear,
      icon: TrendingUp,
      gradient: 'from-purple-500/10 to-pink-500/20',
      border: 'border-purple-200',
      textColor: 'text-purple-900',
      badgeBg: 'bg-purple-100 text-purple-900 border-purple-200',
      badgeText: 'वार्षिक रिकॉर्ड',
      description: 'वार्षिक कुल पूछताछ',
    },
    {
      id: 'all',
      title: 'कुल पूछताछ',
      titleEn: 'Total Enquiries',
      count: stats.total,
      icon: Inbox,
      gradient: 'from-maroon-500/10 to-maroon-700/20',
      border: 'border-maroon-200',
      textColor: 'text-maroon-900',
      badgeBg: 'bg-maroon-100 text-maroon-900 border-maroon-200',
      badgeText: 'आजीवन कुल',
      description: 'संपूर्ण रिकॉर्ड्स',
    },
  ];

  return (
    <div className="space-y-4">
      {/* 5-Card Stats Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {cards.map((c) => {
          const Icon = c.icon;
          const isSelected = activePeriod === c.id;
          return (
            <button
              key={c.id}
              onClick={() => onPeriodSelect(c.id)}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-4 sm:p-5 text-left transition-all duration-200 bg-gradient-to-br ${
                c.gradient
              } ${
                isSelected
                  ? 'ring-2 ring-maroon-700 shadow-md bg-white'
                  : 'hover:border-maroon-300 hover:shadow-sm bg-white/90'
              } ${c.border}`}
            >
              <div className="flex items-center justify-between">
                <div className={`rounded-xl p-2.5 bg-white shadow-sm border ${c.border}`}>
                  <Icon className={`h-5 w-5 ${c.textColor}`} />
                </div>
                <span
                  className={`rounded-full border px-2 py-0.5 text-[11px] font-medium tracking-wide ${c.badgeBg}`}
                >
                  {c.badgeText}
                </span>
              </div>

              <div className="mt-4">
                <p className="text-xs font-semibold text-navy-600 sm:text-sm font-devanagari" lang="hi">
                  {c.title}
                </p>
                <p className="text-[11px] text-navy-400 font-sans">{c.titleEn}</p>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="font-display text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
                    {c.count}
                  </span>
                  <span className="text-xs text-navy-500">पूछताछ</span>
                </div>
              </div>

              <div className="mt-3 border-t border-navy-100/60 pt-2 text-[11px] text-navy-500">
                {c.description}
              </div>
            </button>
          );
        })}
      </div>

      {/* Quick Status Pill Bar */}
      <div className="flex flex-wrap items-center gap-2 rounded-xl bg-white/80 p-3 border border-maroon-100/60 shadow-xs text-xs text-navy-700">
        <span className="font-semibold text-navy-900 flex items-center gap-1.5 pr-2 border-r border-navy-200">
          <Clock className="h-3.5 w-3.5 text-maroon-700" />
          स्थिति अनुसार विभाजन:
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-blue-800 border border-blue-200">
          <span className="h-2 w-2 rounded-full bg-blue-500"></span>
          नई पूछताछ: <strong>{stats.byStatus.new}</strong>
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-amber-800 border border-amber-200">
          <span className="h-2 w-2 rounded-full bg-amber-500"></span>
          संपर्क किया: <strong>{stats.byStatus.contacted}</strong>
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-purple-50 px-2.5 py-1 text-purple-800 border border-purple-200">
          <span className="h-2 w-2 rounded-full bg-purple-500"></span>
          प्रक्रियाधीन: <strong>{stats.byStatus.in_progress}</strong>
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-emerald-800 border border-emerald-200">
          <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
          पूर्ण (Resolved): <strong>{stats.byStatus.completed}</strong>
        </span>
        <div className="ml-auto flex items-center gap-2 text-navy-500 text-[11px]">
          <span>अपॉइंटमेंट्स: <strong>{stats.byType.appointment}</strong></span>
          <span>•</span>
          <span>सामान्य: <strong>{stats.byType.contact}</strong></span>
        </div>
      </div>
    </div>
  );
}
