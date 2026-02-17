import { motion } from 'framer-motion';
import { Smartphone, LayoutDashboard, Activity, Users, Shield, Zap, ArrowRight } from 'lucide-react';

const Experience = () => {
    return (
        <div className="bg-slate-900 min-h-screen text-white pt-20">
            {/* Hero */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px]" />
                </div>

                <div className="container-padding relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
                    >
                        The Full <br />
                        <span className="text-gradient-light">FitNexa Experience.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-400 max-w-2xl mx-auto mb-12"
                    >
                        A complete walkthrough of how FitNexa transforms your gym—for your members and for you.
                    </motion.p>
                </div>
            </section>

            {/* Member Journey */}
            <section className="py-24 bg-slate-900 border-t border-white/5">
                <div className="container-padding max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-4 block">
                            The Member Journey
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Your members expect a seamless, digital experience.</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">Here is exactly what happens when they join your gym.</p>
                    </div>

                    <div className="space-y-12">
                        {/* Step 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Smartphone className="w-24 h-24 text-blue-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">1. Joining is Instant</h3>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                They download your branded app from the App Store. Within seconds, they purchase a membership, sign the waiver digitally, and enter their payment details. No paperwork, no front desk interaction required.
                            </p>
                        </motion.div>

                        {/* Step 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Shield className="w-24 h-24 text-blue-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">2. Access is Seamless</h3>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                They walk up to your turnstile or door. They open the app, tap 'Check In', and a secure QR code appears. They scan it, and the door unlocks instantly. 24/7 access, handled entirely by software.
                            </p>
                        </motion.div>

                        {/* Step 3 */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Activity className="w-24 h-24 text-blue-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">3. Training is Connected</h3>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Inside the gym, they log workouts, track personal bests, and see who else is training via the 'Who's Here' feature. They are not just working out; they are part of a digital community.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Owner Journey */}
            <section className="py-24 bg-slate-950">
                <div className="container-padding max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-emerald-500 font-bold tracking-wider uppercase text-sm mb-4 block">
                            The Owner Journey
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Forget spreadsheets and manual admin.</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">Here is how you manage your empire from your phone.</p>
                    </div>

                    <div className="space-y-12">
                        {/* Step 4 */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-900/50 border border-emerald-900/30 rounded-2xl p-8 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <LayoutDashboard className="w-24 h-24 text-emerald-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">1. Total Command Center</h3>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                You open your Admin Dashboard. Instantly, you see live revenue, active members, and exactly who is in the gym right now. You have a pulse on your business 24/7, from anywhere in the world.
                            </p>
                        </motion.div>

                        {/* Step 5 */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-900/50 border border-emerald-900/30 rounded-2xl p-8 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Zap className="w-24 h-24 text-emerald-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">2. Automated Cash Flow</h3>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Payments happen while you sleep. FitNexa charges cards automatically. If a payment fails, the system retries automatically and temporarily suspends access until paid—without you lifting a finger.
                            </p>
                        </motion.div>

                        {/* Step 6 */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-900/50 border border-emerald-900/30 rounded-2xl p-8 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Users className="w-24 h-24 text-emerald-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">3. Effortless Communication</h3>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Need to announce a holiday closure or a new challenge? Send a push notification to every member's phone in one click. No more unread emails or unnoticed flyers.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
                <div className="container-padding text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Ready to Upgrade Your Gym?</h2>
                    <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">Join the elite facilities running on FitNexa today.</p>
                    <a
                        href="/onboarding"
                        className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-blue-50 transition-all inline-flex items-center gap-2"
                    >
                        Start Your Free Trial
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Experience;
