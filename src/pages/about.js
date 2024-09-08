import { RiCustomerService2Fill, RiShieldFlashLine } from "react-icons/ri";
import Footer from "../components/footer";
import { AboutProp, Stats } from "../components/props";
import { FaSliders } from "react-icons/fa6";
const About = () => {
    return (
        <div className="mt-5">
            <div className="mt-5 pt-5 container">
                <div className="p-2 my-3 d-flex gap-3 row justify-content-center">
                    <AboutProp
                        icon={<RiShieldFlashLine/>}
                        title='Secure'
                        text='We strictly only deal with vendors that provide top notch security like no other'
                    />
                    <AboutProp
                        icon={<RiCustomerService2Fill/>}
                        title='24/7 Support'
                        text='We are here to attend to your every needs, no matter the time or timezone, we are a click away'
                    />
                    <AboutProp
                        icon={<FaSliders/>}
                        title='Customizable'
                        text='Your wish is our command! You are free to tweak any of our services to your satisfaction '
                    />
                </div>
                <div className="row aboutone">
                    <div className="col-sm-10 col-md-7 col-lg-6">
                        <img className="rounded about-image" src="../images/beach-side.png" alt="beach-side" />
                    </div>
                    <div className="col-sm-8 col-md-6 col-lg-6">
                        <h1 className="fw-bold text-primary-emphasis">We have the best service.</h1>
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="mt-5">
                            <div className="d-flex gap-5">
                                <div>
                                    <div className="mb-4">
                                        <Stats
                                            number={192}
                                            name="Countries"
                                        />
                                    </div>
                                    <div>
                                        <Stats
                                            number={2093}
                                            name="Rooms"
                                        />
                                    </div>
                                </div>
                                <div className="ms-5 ps-5">
                                    <div className="mb-4">
                                        <Stats
                                            number={479}
                                            name="Hotel"
                                        />
                                    </div>
                                    <div>
                                        <Stats
                                            number={10347}
                                            name="Workers"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;