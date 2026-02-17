import { useTranslation } from 'react-i18next';

export interface GymStory {
    location: string;
    owner: string;
    metrics: { label: string; val: string; iconType: 'users' | 'trending' | 'dumbbell' | 'star' | 'timer' | 'trophy' | 'award' }[];
    challenge: string;
    solution: string;
    result: string;
}

export interface GymTheme {
    id: string;
    name: string;
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
        surface: string;
    };
    story: GymStory;
}

export const useGymThemes = (): Record<string, GymTheme> => {
    const { t } = useTranslation();

    return {
        irontemple: {
            id: 'irontemple',
            name: 'Iron Temple Gym',
            colors: {
                primary: '#1e40af', // Blue 700
                secondary: '#0f172a', // Slate 900
                accent: '#3b82f6', // Blue 500
                background: '#f8fafc', // Slate 50
                surface: '#ffffff',
            },
            story: {
                location: "Multi-Location Enterprise",
                owner: "Marcus V.",
                metrics: [
                    { label: "Retention", val: "+42%", iconType: 'users' },
                    { label: "Revenue", val: "x2.4", iconType: 'trending' },
                    { label: "Staff Muscle", val: "+60%", iconType: 'dumbbell' }
                ],
                challenge: t('gym_themes.irontemple_challenge', "Frustrated by fragmented data across 8 locations. Legacy systems were brittle, causing member churn and administrative chaos."),
                solution: t('gym_themes.irontemple_solution', "Implemented FitNexa Elite Governance, centralizing all member data and launching a unified high-performance app for all clubs."),
                result: t('gym_themes.irontemple_result', "Operations normalized instantly. Retention spiked by 42% and brand was successfully professionalized for global expansion.")
            }
        },
        fitlife: {
            id: 'fitlife',
            name: 'FitLife Center',
            colors: {
                primary: '#16a34a', // Green 600
                secondary: '#1c1917', // Stone 900
                accent: '#84cc16', // Lime 500
                background: '#fafaf9', // Stone 50
                surface: '#ffffff',
            },
            story: {
                location: "Wellness & Lifestyle Hub",
                owner: "Elena R.",
                metrics: [
                    { label: "Engagement", val: "+55%", iconType: 'users' },
                    { label: "Class Fill", val: "98%", iconType: 'star' },
                    { label: "Referrals", val: "x3", iconType: 'trending' }
                ],
                challenge: t('gym_themes.fitlife_challenge', "Struggled to build a community beyond the workout. Members came in, worked out, and left without connecting."),
                solution: t('gym_themes.fitlife_solution', "Launched the FitNexa Community Suite with social feeds, challenges, and event scheduling directly in the app."),
                result: t('gym_themes.fitlife_result', "Created a vibrant digital ecosystem. Class attendance maxed out and member referrals tripled within 6 months.")
            }
        },
        greentheory: {
            id: 'greentheory',
            name: 'Green Theory',
            colors: {
                primary: '#00FF00', // Neon Green
                secondary: '#000000', // Black
                accent: '#1A1A1A', // Dark Gray
                background: '#000000',
                surface: '#121212',
            },
            story: {
                location: "High-Intensity Studio",
                owner: "Jax T.",
                metrics: [
                    { label: "Intensity", val: "MAX", iconType: 'trending' },
                    { label: "Adoption", val: "100%", iconType: 'users' },
                    { label: "Hype", val: "Viral", iconType: 'star' }
                ],
                challenge: t('gym_themes.greentheory_challenge', "Needed a brand experience as loud and intense as the workouts. Standard white-label apps felt too corporate and boring."),
                solution: t('gym_themes.greentheory_solution', "Customized FitNexa with 'Green Theory' neon aesthetics and gamified logic to match the high-octane vibe."),
                result: t('gym_themes.greentheory_result', "The app became an extension of the culture. Members share stats daily, driving organic viral growth on social media.")
            }
        },
        elite: {
            id: 'elite',
            name: 'Elite Performance',
            colors: {
                primary: '#f59e0b', // Amber 500
                secondary: '#0f172a', // Slate 900
                accent: '#fb923c', // Orange 400
                background: '#fafaf9', // Stone 50
                surface: '#ffffff',
            },
            story: {
                location: "Boutique Strength Studio",
                owner: "Sarah J.",
                metrics: [
                    { label: "PT ROI", val: "+85%", iconType: 'star' },
                    { label: "Admin Save", val: "120h/mo", iconType: 'timer' },
                    { label: "Member LTV", val: "+30%", iconType: 'trophy' }
                ],
                challenge: t('gym_themes.elite_challenge', "Premium pricing was hard to justify without a premium digital layer. Scheduling was manual and disconnected from the member journey."),
                solution: t('gym_themes.elite_solution', "Deployed the FitNexa 'Chameleon' app with integrated PT booking and social loyalty squads for the highest tier members."),
                result: t('gym_themes.elite_result', "Professionalized the brand within 30 days. PT bookings nearly doubled and member lifetime value increased significantly.")
            }
        }
    };
};

export const useGymTheme = (id: string | undefined): GymTheme => {
    const themes = useGymThemes();
    if (!id) return themes.irontemple;
    return themes[id] || themes.irontemple;
};
