// import AboutProp from "../components/props";
import { Stats } from "../components/props";
// import { RiShieldFlashLine } from "react-icons/ri";
// import { RiCustomerService2Line } from "react-icons/ri";
// import { FaSliders } from "react-icons/fa6";
const About = () =>{
    return(
        <div className="aboutpage">
            {/* <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <AboutProp
                        icon= {<RiShieldFlashLine />}
                        heading="Secure"
                        text="We strictly only deal with vendors that provide top notch security"
                    />
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <AboutProp
                        icon={<RiCustomerService2Line />}
                        heading="24/7 Support"
                        text="Lorem Ipsum donor amet siti ceali placeholder text"
                    />
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <AboutProp
                        icon={<FaSliders />}
                        heading="Customizable"
                        text="Lorem Ipsum donor amet siti ceali placeholder text"
                    />
                </div>
            </div> */}
            <div className="d-flex col-sm-12 col-md-12 col-lg-10 aboutone">
                <div>
                    <img className="rounded h-75" src="../images/beach-side.png" alt="beach-side" />
                </div>
                <div className="about-info col-sm-8 col-md-6 col-lg-5">
                    <h1 className="fw-bold text-body-secondary">We have the best service.</h1>
                    <p className="mb-5 pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className="w-100 mt-5 pt-5">
                        <div className="d-flex pb-5">
                            <Stats
                                number={192}
                                name="Countries"
                            />
                            <div className="ms-5 ps-3">
                                <Stats
                                    number={479}
                                    name="Hotel"
                                 />
                            </div>
                        </div>
                        <div className="d-flex">
                            <Stats 
                                number="2093"
                                name="Rooms"
                            />
                            <div className="ms-5 ps-5">
                                <Stats 
                                    number="10347"
                                    name="Workers"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;