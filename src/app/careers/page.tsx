import { Header } from "@/components/landing/header";
import {HeroCareers} from "@/components/careers/hero-careers";
import {Footer} from "@/components/landing/footer";

export default function  Careers() {
    return (
        <div className="min-h-screen flex-col bg-background text-foreground">
            <Header/>
            <HeroCareers />
            <Footer />
        </div>
    );
}