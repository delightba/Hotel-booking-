import { BsArrowRight } from "react-icons/bs";
import { BlogProp } from "../components/props";
import Responsive from "../components/slider";
import Footer from "../components/footer";



const Pricing = () => {
    return ( 
        <div className="mt-5 pt-5">
            <div className=" ms-5">
            <div className="row container">
                <div className="col-sm-8 col-md-8 col-lg-4">
                    <h1 className="fw-bolder text-primary-emphasis">Trending Tours</h1>
                    <p className="fs-5 text-body-tertiary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.</p>
                    <div className="d-flex" style={{color:'#6610f2'}}>
                        <a href="#" style={{textDecoration:'none', color:'#6610f2'}} className="fw-medium fs-5">view all tours </a>
                        <i className="fs-5"><BsArrowRight/></i>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-8 d-flex me-0">
                    <div className="mx-3 w-50">
                        <BlogProp 
                            image="../images/umbrella.png"
                            service="Beachfront"
                            cost={99}
                            describe="A Trip to the Bahamas and the Carribean Ocean"
                            days={7}
                            location="AFRICA"
                        />
                    </div>
                    <div className="mx-3 w-50">
                    <BlogProp 
                        image="../images/cruise-ship.png"
                        service="Cruise"
                        cost={169}
                        describe="Cruise to the Mariana Trench and the Phillipines"
                        days={15}
                        location="AUSTRALIA"
                    />
                    </div>
                </div>
            </div>
            </div>
            <Responsive />
            <Footer/>
        </div>
     );
}
 
export default Pricing;