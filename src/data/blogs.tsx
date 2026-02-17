import {
  Dumbbell, Activity, Timer,
  Shield, Users, TrendingUp, Star,
  Target, Zap, Globe
} from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: React.ReactNode;
  icon: React.ElementType;
  imageUrl?: string;
  author: {
    name: string;
    role: string;
  };
}

export const useBlogs = (): BlogPost[] => {
  const { t } = useTranslation();

  return [
    {
      id: 'stop-churn-digital',
      title: t('blogs.stop_churn_digital_title'),
      category: t('blogs.categories.retention'),
      readTime: "8 min read",
      date: "Feb 10, 2026",
      excerpt: t('blogs.stop_churn_digital_excerpt'),
      author: { name: "Marcus V.", role: "Elite Facility Founder" },
      icon: Dumbbell,
      imageUrl: "/images/playbook/stop-churn-digital.png",
      content: (
        <div className="space-y-6">
          <p>{t('blogs.stop_churn_digital_body.p1', "In the physical gym business, churn is the silent killer. Most owners accept a 30-50% annual turnover as 'industry standard.' At FitNexa, we view that as a failure of infrastructure.")}</p>
          <h2 className="text-2xl font-black text-slate-950">{t('blogs.stop_churn_digital_body.h1', "The Convenience Trap")}</h2>
          <p>{t('blogs.stop_churn_digital_body.p2', "Members don't leave because they hate your equipment; they leave because they've lost the habit. Without a digital layer, your gym only exists for them when they are physically on the floor. A branded app ensures your facility is in their pocket 24/7.")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t('blogs.stop_churn_digital_body.li1', "Automated 'We miss you' triggers based on turnstile data.")}</li>
            <li>{t('blogs.stop_churn_digital_body.li2', "In-app community squads that create social debt.")}</li>
            <li>{t('blogs.stop_churn_digital_body.li3', "Performance tracking that visualizes their 'muscle' growth.")}</li>
          </ul>
          <p className="font-bold">{t('blogs.stop_churn_digital_body.p3', "Strength isn't just in your weights; it's in your retention data.")}</p>
        </div>
      )
    },
    {
      id: 'staff-automation-roi',
      title: t('blogs.staff_automation_roi_title'),
      category: t('blogs.categories.admin'),
      readTime: "6 min read",
      date: "Feb 8, 2026",
      excerpt: t('blogs.staff_automation_roi_excerpt'),
      author: { name: "Sarah J.", role: "Operations Director" },
      icon: Timer,
      imageUrl: "/images/playbook/staff-automation-roi.png",
      content: (
        <div className="space-y-6">
          <p>{t('blogs.staff_automation_roi_body.p1', "If your trainers are spending 20% of their day on WhatsApp scheduling sessions, you are losing money on every rep. Automation isn't about replacing people; it's about freeing them to do what they do best: train.")}</p>
          <h2 className="text-2xl font-black text-slate-950">{t('blogs.staff_automation_roi_body.h1', "Unified Scheduling")}</h2>
          <p>{t('blogs.staff_automation_roi_body.p2', "FitNexa's elite scheduling engine syncs trainer availability directly with member apps. No back-and-forth. No double bookings. Just pure efficiency.")}</p>
          <div className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl">
            <p className="italic font-medium text-slate-700">"{t('blogs.staff_automation_roi_body.quote', "Since automating our PT scheduling, our bookings have increased by 85% because members can book on impulse at 11 PM.")}"</p>
          </div>
        </div>
      )
    },
    {
      id: 'branded-app-vs-generic',
      title: t('blogs.branded_app_vs_generic_title'),
      category: t('blogs.categories.floor'),
      readTime: "10 min read",
      date: "Feb 5, 2026",
      excerpt: t('blogs.branded_app_vs_generic_excerpt'),
      author: { name: "David K.", role: "Brand Strategist" },
      icon: Star,
      imageUrl: "/images/playbook/branded-app-vs-generic.png",
      content: (
        <div className="space-y-6">
          <p>{t('blogs.branded_app_vs_generic_body.p1', "You spent thousands on high-end equipment and interior design. Why would you send your members to a generic third-party app that looks like everyone else's?")}</p>
          <h2 className="text-2xl font-black text-slate-950">{t('blogs.branded_app_vs_generic_body.h1', "The Professionalism Gap")}</h2>
          <p>{t('blogs.branded_app_vs_generic_body.p2', "A white-labeled app isn't just a widget. It's a statement. It tells your members that your facility is an elite tier above the competition. When they see YOUR logo every morning on their lock screen, your brand value compounds.")}</p>
        </div>
      )
    },
    {
      id: 'security-data-governance',
      title: t('blogs.security_data_governance_title'),
      category: t('blogs.categories.governance'),
      readTime: "7 min read",
      date: "Feb 2, 2026",
      excerpt: t('blogs.security_data_governance_excerpt'),
      author: { name: "Elite Security Team", role: "FitNexa Cyber" },
      icon: Shield,
      imageUrl: "/images/playbook/security-data-governance.png",
      content: (
        <div className="space-y-6">
          <p>{t('blogs.security_data_governance_body.p1', "Member data includes financial info, health metrics, and home addresses. A breach isn't just a tech issue; it's an existential threat to your gym empire.")}</p>
          <h2 className="text-2xl font-black text-slate-950">{t('blogs.security_data_governance_body.h1', "Governance by Design")}</h2>
          <p>{t('blogs.security_data_governance_body.p2', "We implement bank-level encryption and multi-factor authentication for all staff access. Your members' data is safe, and your business is compliant.")}</p>
        </div>
      )
    },
    {
      id: 'multi-location-scale',
      title: t('blogs.multi_location_scale_title'),
      category: t('blogs.categories.global'),
      readTime: "12 min read",
      date: "Jan 30, 2026",
      excerpt: t('blogs.multi_location_scale_excerpt'),
      author: { name: "Marcus V.", role: "FitNexa Global" },
      icon: Globe,
      imageUrl: "/images/playbook/multi-location-scale.png",
      content: (
        <div className="space-y-6">
          <p>{t('blogs.multi_location_scale_body.p1', "The jump from 1 to 5 locations is usually where gym owners break. Fragmented data leads to bad decisions. FitNexa provides a 'bird's eye' view that lets you toggle between sites in milliseconds.")}</p>
          <h2 className="text-2xl font-black text-slate-950">{t('blogs.multi_location_scale_body.h1', "Global Permissions")}</h2>
          <p>{t('blogs.multi_location_scale_body.p2', "Update a pricing sheet once. Deploy it to 100 gyms instantly. That's how empires are built.")}</p>
        </div>
      )
    },
    {
      id: 'pt-roi-optimization',
      title: t('blogs.pt_roi_optimization_title'),
      category: t('blogs.categories.revenue'),
      readTime: "9 min read",
      date: "Jan 25, 2026",
      excerpt: t('blogs.pt_roi_optimization_excerpt'),
      author: { name: "Sarah J.", role: "Operations Director" },
      icon: TrendingUp,
      imageUrl: "/images/playbook/pt-roi-optimization.png",
      content: (
        <div className="space-y-6">
          <p>{t('blogs.pt_roi_optimization_body.p1', "Your floor space is expensive. If sessions aren't being tracked and upsold digitally, you're leaving cash on the lobby floor.")}</p>
          <h2 className="text-2xl font-black text-slate-950">{t('blogs.pt_roi_optimization_body.h1', "The Digital Upsell")}</h2>
          <p>{t('blogs.pt_roi_optimization_body.p2', "By integrating training metrics into the member app, members see progress and feel the value, making them 3x more likely to renew their PT packages.")}</p>
        </div>
      )
    },
    {
      id: 'social-loyalty-squads',
      title: t('blogs.social_loyalty_squads_title'),
      category: t('blogs.categories.retention'),
      readTime: "7 min read",
      date: "Jan 20, 2026",
      excerpt: t('blogs.social_loyalty_squads_excerpt'),
      author: { name: "Community Lead", role: "FitNexa Engagment" },
      icon: Users,
      imageUrl: "/images/playbook/social-loyalty-squads.png",
      content: (
        <div className="space-y-6">
          <p>{t('blogs.social_loyalty_squads_body.p1', "People join for the weights, but they stay for the tribe. FitNexa's 'Squad' logic creates micro-communities within your facility.")}</p>
          <h2 className="text-2xl font-black text-slate-950">{t('blogs.social_loyalty_squads_body.h1', "Leaderboard Psychology")}</h2>
          <p>{t('blogs.social_loyalty_squads_body.p2', "Healthy competition leads to consistent attendance. Consistent attendance leads to zero churn.")}</p>
        </div>
      )
    },
    {
      id: 'data-driven-facility',
      title: t('blogs.data_driven_facility_title'),
      category: t('blogs.categories.admin'),
      readTime: "8 min read",
      date: "Jan 15, 2026",
      excerpt: t('blogs.data_driven_facility_excerpt'),
      author: { name: "Data Analyst", role: "FitNexa Intelligence" },
      icon: Activity,
      imageUrl: "/images/playbook/data-driven-facility.png",
      content: (
        <div className="space-y-6">
          <p>{t('blogs.data_driven_facility_body.p1', "Do you know which squat rack is used the most? Or why Tuesdays at 6 PM are busier than Mondays? Data-driven owners don't guess; they know.")}</p>
          <h2 className="text-2xl font-black text-slate-950">{t('blogs.data_driven_facility_body.h1', "Predictive Modeling")}</h2>
          <p>{t('blogs.data_driven_facility_body.p2', "FitNexa analyzes your turnstile data to predict peak congestion, allowing you to optimize staff levels and save on utilities.")}</p>
        </div>
      )
    },
    {
      id: 'peak-performance-scheduling',
      title: t('blogs.peak_performance_scheduling_title'),
      category: t('blogs.categories.floor'),
      readTime: "6 min read",
      date: "Jan 10, 2026",
      excerpt: t('blogs.peak_performance_scheduling_excerpt'),
      author: { name: "Studio Manager", role: "Elite Performance Lab" },
      icon: Target,
      imageUrl: "/images/playbook/peak-performance-scheduling.png",
      content: (
        <div className="space-y-6">
          <p>{t('blogs.peak_performance_scheduling_body.p1', "A full class is great. A line of angry members outside who couldn't get in is a branding nightmare. Our scheduling engine uses intelligent waitlists and 'hot seat' notifications to ensure 100% capacity utilization.")}</p>
        </div>
      )
    },
    {
      id: 'future-ai-gym-ops',
      title: t('blogs.future_ai_gym_ops_title'),
      category: t('blogs.categories.innovation'),
      readTime: "11 min read",
      date: "Jan 5, 2026",
      excerpt: t('blogs.future_ai_gym_ops_excerpt'),
      author: { name: "Tech Director", role: "FitNexa Labs" },
      icon: Zap,
      imageUrl: "/images/playbook/future-ai-gym-ops.png",
      content: (
        <div className="space-y-6">
          <p>{t('blogs.future_ai_gym_ops_body.p1', "AI isn't just for chatbots. In 2026, AI will predict which members are likely to churn 3 months before they even realize they're losing interest. FitNexa is already building that future.")}</p>
        </div>
      )
    },
    {
      id: 'boutique-pivot',
      title: t('blogs.boutique_pivot_title'),
      category: t('blogs.categories.global'),
      readTime: "9 min read",
      date: "Jan 2, 2026",
      excerpt: t('blogs.boutique_pivot_excerpt'),
      author: { name: "David K.", role: "Brand Strategist" },
      icon: Star,
      imageUrl: "/images/playbook/branded-app-vs-generic.png",
      content: (
        <div className="space-y-6">
          <p>{t('blogs.boutique_pivot_body.p1', "Traditional 'big box' gyms are struggling to justify pricing. The future is boutique. But a boutique studio isn't just about small classes; it's about an elite digital experience.")}</p>
          <h2 className="text-2xl font-black text-slate-950">{t('blogs.boutique_pivot_body.h1', "The Amenity of the Mind")}</h2>
          <p>{t('blogs.boutique_pivot_body.p2', "Your app is as much an amenity as your showers or weights. It provides the structure and social scaffolding that members pay a premium for.")}</p>
        </div>
      )
    },
    {
      id: 'lead-gen-muscle',
      title: t('blogs.lead_gen_muscle_title'),
      category: t('blogs.categories.revenue'),
      readTime: "7 min read",
      date: "Dec 28, 2025",
      excerpt: t('blogs.lead_gen_muscle_excerpt'),
      author: { name: "Marketing Lead", role: "FitNexa Growth" },
      icon: Zap,
      imageUrl: "/images/playbook/future-ai-gym-ops.png",
      content: (
        <div className="space-y-6">
          <p>{t('blogs.lead_gen_muscle_body.p1', "A download is a commitment. If someone downloads your branded app but doesn't step on the floor within 48 hours, they are losing interest. Our automated nurture flows ensure they stay focused on their goals—and your facility.")}</p>
        </div>
      )
    },
    {
      id: 'hybrid-revenue-frontier',
      title: t('blogs.hybrid_revenue_frontier_title'),
      category: t('blogs.categories.innovation'),
      readTime: "11 min read",
      date: "Dec 20, 2025",
      excerpt: t('blogs.hybrid_revenue_frontier_excerpt'),
      author: { name: "Marcus V.", role: "Elite Facility Founder" },
      icon: Dumbbell,
      imageUrl: "/images/playbook/stop-churn-digital.png",
      content: (
        <div className="space-y-6">
          <p>{t('blogs.hybrid_revenue_frontier_body.p1', "The gym has walls, but your business shouldn't. Hybrid training allows your trainers to manage members' progress even when they're traveling or at home. It's a second revenue stream that requires zero extra floor space.")}</p>
        </div>
      )
    },
    {
      id: 'financial-automation-mastery',
      title: t('blogs.financial_automation_mastery_title'),
      category: t('blogs.categories.admin'),
      readTime: "8 min read",
      date: "Dec 15, 2025",
      excerpt: t('blogs.financial_automation_mastery_excerpt'),
      author: { name: "Finance Director", role: "FitNexa Ops" },
      icon: Target,
      imageUrl: "/images/playbook/peak-performance-scheduling.png",
      content: (
        <div className="space-y-6">
          <p>{t('blogs.financial_automation_mastery_body.p1', "Failed payments are the primary cause of unintentional churn. Members don't even realize their card expired until their fob stops working—and then they just decide to quit. FitNexa's predictive billing warns them before it happens, keeping your cash flow and their habits intact.")}</p>
        </div>
      )
    },
    {
      id: 'top-tier-talent',
      title: t('blogs.top_tier_talent_title'),
      category: t('blogs.categories.floor'),
      readTime: "10 min read",
      date: "Dec 10, 2025",
      excerpt: t('blogs.top_tier_talent_excerpt'),
      author: { name: "Sarah J.", role: "Operations Director" },
      icon: Users,
      imageUrl: "/images/playbook/social-loyalty-squads.png",
      content: (
        <div className="space-y-6">
          <p>{t('blogs.top_tier_talent_body.p1', "Top-tier training talent is a commodity. They will go where they can make the most money with the least administrative friction. By providing them with FitNexa's Trainer Suite, you make it impossible for them to go back to paper logs and WhatsApp scheduling.")}</p>
        </div>
      )
    },
    {
      id: 'buy-vs-build-cost',
      title: t('blogs.buy_vs_build_cost_title'),
      category: t('blogs.categories.global'),
      readTime: "12 min read",
      date: "Dec 5, 2025",
      excerpt: t('blogs.buy_vs_build_cost_excerpt'),
      author: { name: "Marcus V.", role: "Elite Facility Founder" },
      icon: Globe,
      imageUrl: "/images/playbook/multi-location-scale.png",
      content: (
        <div className="space-y-6">
          <p>{t('blogs.buy_vs_build_cost_body.p1', "Every ambitious gym owner eventually asks: \"Should we just build our own app?\" It sounds like the ultimate brand flex. In reality, for 99% of facilities, it's a fast track to technical bankruptcy.")}</p>
          <h2 className="text-2xl font-black text-slate-950">{t('blogs.buy_vs_build_cost_body.h1', "The Initial Hit")}</h2>
          <p>{t('blogs.buy_vs_build_cost_body.p2', "A professional-grade mobile app starting from zero isn't a weekend project. You're looking at $100k+ in design, engineering, and QA just to get through the door.")}</p>
          <p className="font-bold">{t('blogs.buy_vs_build_cost_body.p3', "Before you've even signed up your first digital member, you've spent an empire's fortune. FitNexa gives you that same infrastructure instantly.")}</p>
        </div>
      )
    },
    {
      id: 'maintenance-nightmare',
      title: t('blogs.maintenance_nightmare_title'),
      category: t('blogs.categories.governance'),
      readTime: "10 min read",
      date: "Nov 28, 2025",
      excerpt: t('blogs.maintenance_nightmare_excerpt'),
      author: { name: "Elite Security Team", role: "FitNexa Cyber" },
      icon: Shield,
      imageUrl: "/images/playbook/security-data-governance.png",
      content: (
        <div className="space-y-6">
          <p>{t('blogs.maintenance_nightmare_body.p1', "You survived the build. The app is live. You think the spending is over. It's actually just beginning. This is what we call 'The Maintenance Weight.'")}</p>
          <h2 className="text-2xl font-black text-slate-950">{t('blogs.maintenance_nightmare_body.h1', "OS Updates & Technical Debt")}</h2>
          <p>{t('blogs.maintenance_nightmare_body.p2', "Apple and Google update their systems annually. If you don't patch your custom code, it breaks. If you don't pay 24/7 engineers, your member data is at risk.")}</p>
          <div className="p-6 bg-red-50 border-l-4 border-red-600 rounded-r-xl">
            <p className="italic font-medium text-red-900">"{t('blogs.maintenance_nightmare_body.quote', "Custom apps are a liability. Enterprise platforms like FitNexa are an asset that evolve for you.")}"</p>
          </div>
        </div>
      )
    },
    {
      id: 'quit-whenever-no-lockin',
      title: t('blogs.quit_whenever_no_lockin_title'),
      category: t('blogs.categories.floor'),
      readTime: "8 min read",
      date: "Nov 20, 2025",
      excerpt: t('blogs.quit_whenever_no_lockin_excerpt'),
      author: { name: "Marcus V.", role: "CEO, FitNexa" },
      icon: Target,
      imageUrl: "/images/playbook/peak-performance-scheduling.png",
      content: (
        <div className="space-y-6">
          <p>{t('blogs.quit_whenever_no_lockin_body.p1', "Most enterprise software companies want to lock you into 3-year \"iron-clad\" contracts. They spend more on their legal team than their product. At FitNexa, we do the opposite.")}</p>
          <h2 className="text-2xl font-black text-slate-950">{t('blogs.quit_whenever_no_lockin_body.h1', "Partnership, Not Prison")}</h2>
          <p>{t('blogs.quit_whenever_no_lockin_body.p2', "We believe if our digital infrastructure isn't making your gym more profitable, you shouldn't be paying for it. That's why we have a strict **Quit Whenever You Want** policy.")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>{t('blogs.quit_whenever_no_lockin_body.li1_strong', "No Multi-Year Lock-ins:")}</strong> {t('blogs.quit_whenever_no_lockin_body.li1', "Use us as long as we provide value.")}</li>
            <li><strong>{t('blogs.quit_whenever_no_lockin_body.li2_strong', "Data Ownership:")}</strong> {t('blogs.quit_whenever_no_lockin_body.li2', "If you leave, you take your member data with you. No ransoms.")}</li>
            <li><strong>{t('blogs.quit_whenever_no_lockin_body.li3_strong', "Performance Guarantee:")}</strong> {t('blogs.quit_whenever_no_lockin_body.li3', "We work to earn your subscription every 30 days.")}</li>
          </ul>
          <div className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl">
            <p className="font-bold text-slate-900 leading-relaxed uppercase tracking-widest text-xs">{t('blogs.quit_whenever_no_lockin_body.quote', "Gym owners value strength and freedom. We give you both.")}</p>
          </div>
        </div>
      )
    },
    {
      id: 'chameleon-identity-roi',
      title: t('blogs.chameleon_identity_roi_title'),
      category: t('blogs.categories.branding'),
      readTime: "9 min read",
      date: "Feb 12, 2026",
      excerpt: t('blogs.chameleon_identity_roi_excerpt'),
      author: { name: "David K.", role: "Brand Strategist" },
      icon: Star,
      imageUrl: "/images/playbook/branded-app-vs-generic.png",
      content: (
        <div className="space-y-6">
          <p>{t('blogs.chameleon_identity_roi_body.p1', "Your brand isn't just a logo; it's a promise of quality. When a member walks into your gym and then opens your app, the transition should be seamless. This is the 'Chameleon Effect'.")}</p>
          <h2 className="text-2xl font-black text-slate-950">{t('blogs.chameleon_identity_roi_body.h1', "Visual Trust")}</h2>
          <p>{t('blogs.chameleon_identity_roi_body.p2', "Inconsistent branding creates friction. If your app looks generic but your gym is premium, you're sending mixed signals. FitNexa allows you to inject your brand's DNA directly into the digital experience, ensuring that every touchpoint reinforces your elite status.")}</p>
          <div className="p-6 bg-green-50 border-l-4 border-green-600 rounded-r-xl">
            <p className="italic font-medium text-slate-700">"{t('blogs.chameleon_identity_roi_body.quote', "Since aligning our digital identity with our facility's high-end aesthetic, our premium membership upgrades have increased by 25%.")}"</p>
          </div>
        </div>
      )
    },
    {
      id: 'scaling-without-friction',
      title: t('blogs.scaling_without_friction_title'),
      category: t('blogs.categories.global'),
      readTime: "11 min read",
      date: "Feb 15, 2026",
      excerpt: t('blogs.scaling_without_friction_excerpt'),
      author: { name: "Marcus V.", role: "CEO, FitNexa" },
      icon: Globe,
      imageUrl: "/images/playbook/multi-location-scale.png",
      content: (
        <div className="space-y-6">
          <p>{t('blogs.scaling_without_friction_body.p1', "Scaling a gym business is deceptively difficult. The processes that work for one location often break at three. Without a centralized digital core, you're not building an empire; you're building a collection of headaches.")}</p>
          <h2 className="text-2xl font-black text-slate-950">{t('blogs.scaling_without_friction_body.h1', "Unified Governance")}</h2>
          <p>{t('blogs.scaling_without_friction_body.p2', "FitNexa provides the governance tools to manage multiple sites as a single entity. Update your class schedule, rollout a new PT package, or change your pricing enterprise-wide in a single click. That's how you scale at speed without the friction.")}</p>
        </div>
      )
    }
  ];
};
