import {
  Scroll,
  Heart,
  Sparkles,
  Briefcase,
  TrendingUp,
  Home,
  Flame,
  Baby,
  Coins,
  HelpCircle,
  Gem,
  Calendar,
  Award,
  UserCheck,
  ShieldCheck,
  Video,
  MessageSquare,
  BookOpen,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  scroll: Scroll,
  heart: Heart,
  sparkles: Sparkles,
  briefcase: Briefcase,
  'trending-up': TrendingUp,
  home: Home,
  flame: Flame,
  baby: Baby,
  coins: Coins,
  'help-circle': HelpCircle,
  gem: Gem,
  calendar: Calendar,
  award: Award,
  'user-check': UserCheck,
  'shield-check': ShieldCheck,
  video: Video,
  'message-square': MessageSquare,
  'book-open': BookOpen,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles;
}
