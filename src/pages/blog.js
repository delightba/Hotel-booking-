import { BsArrowRight } from "react-icons/bs";
import { BlogProp, PopularPost } from "../components/props";
import Recent from "../components/recentPost";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";

const Blog = () => {
    return ( 
        <div className="mt-5 pt-5">
            <div className="px-5 py-5 row">
                    <div className=" col-sm-10 col-md-10 col-lg-8">
                        <h1 className="fw-bolder fs-1 text-primary-emphasis">Popular Posts</h1>
                        <div className="d-flex pt-4">
                            <div className="col-sm-6 col-md-6 col-lg-5">
                                <PopularPost
                                    image="../images/road.png"
                                    alt="canyon-road"
                                    heading="Tips on how to travel in foreign countries"
                                    text="Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele."
                                    lowerImage="../images/charlotte.avif"
                                    lowerAlt="Author of write up"
                                    author="Charlotte Delos"
                                    job="Travel Advocate"
                                />
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-5 ms-5">
                                <PopularPost
                                    image="../images/beach.png"
                                    alt="beach image"
                                    heading="Enjoying the beach life while on a vacation"
                                    text="Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele."
                                    lowerImage="../images/Adam.avif"
                                    lowerAlt="Author of write up"
                                    author="Adam Cuppy"
                                    job="Vlogger"
                                />
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-7 col-md-6 col-lg-4">
                    <div className="ms-auto">
                    <h1 className="ms-auto text-primary-emphasis pb-4 fw-bolder">Recent Posts</h1>
                        <Recent/>
                    </div>
                </div>   
            </div>
            <Testimonial />
            <Footer/>
        </div>
     );
}
 
export default Blog;