
import { Hero } from '../components/Hero';
import { BrandPreview } from '../components/BrandPreview';
import { BrandShowcase } from '../components/BrandShowcase';
import { HowItWorks } from '../components/HowItWorks';
import { ValueProp } from '../components/ValueProp';
import { Features } from '../components/Features';
import { SocialProof } from '../components/SocialProof';
import { Pricing } from '../components/Pricing';
import { CTASection } from '../components/CTASection';
import { FAQ } from '../components/FAQ';

const Home = () => {
    return (
        <div className="bg-white">
            <Hero />
            <BrandPreview />
            <BrandShowcase />
            <HowItWorks />
            <div id="features">
                <ValueProp />
                <Features />
            </div>
            <SocialProof />
            <div id="pricing">
                <Pricing />
            </div>
            <FAQ />
            <CTASection />
        </div>
    );
};

export default Home;
