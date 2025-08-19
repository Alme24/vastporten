import Header from "../organism/header";
import Footer from "../organism/footer";
import HomeForm from "../organism/homeForm";
import Image from "next/image";
export default function Contact(){
    return (
        <div>
            <section className="relative mb-40">
                <Image
                src="/images/contact.webp"
                alt=""
                priority
                fill
                className="object-cover mask-bottom-gradient -z-10"
                />
                <div className="relative z-10">
                    <Header />
                    <div className="pl-7 pb-18 pt-33 lg:pl-14 bg:pb-36 bg:pt-66">
                        <HomeForm />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}