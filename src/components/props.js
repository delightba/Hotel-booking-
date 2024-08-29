// import { findAllByAltText } from "@testing-library/react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { BsArrowRight, BsGeoAlt } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";


 
export const AboutProp = (props) =>{
    return(
        <a className="about col-sm-9 col-md-8 col-lg-3">
            <div className="about-icon p-2 w-25 color fs-2 bg-light">{props.icon}</div>
            <h5 className="text-secondary-emphasis">{props.title}</h5>
            <p className="text-secondary">{props.text}</p>
            <div className="color arrow d-flex justify-content-center">
                <p>Learn More</p>
                <i><BsArrowRight/></i>
            </div>
        </a>
    )
}

export const Stats = (props) =>{
    return(
        <div>
            <h3 style={{color:'#6610f2'}}>{props.number}</h3>
            <h3 className="text-body-secondary">{props.name}</h3>
        </div>
    )
}

export const BlogProp = (props) =>{
    return(
        <div>
            <img className="rounded w-100" src={props.image} alt={props.alt} />
            <div>
                <div className="d-flex">
                    <h5 style={{color:'#6610f2'}}>{props.service}</h5>
                    <div className="d-flex ms-auto">
                        <h5 className="text-primary-emphasis">${props.cost}</h5>
                        <p className="fw-bold">per day</p>
                    </div>
                </div>
                <h4 className="text-primary-emphasis">{props.describe}</h4>
                <div className="d-flex text-secondary">
                    <p className="w-50 fs-6"><FaArrowTrendUp />TRENDING</p>
                    <p className="w-50 mx-1 fs-6"><FaRegClock />{props.days}DAYS TOUR</p>
                    <p className="w-50 fs-6"><BsGeoAlt />{props.location}</p>
                </div>
                <button className="btn btn-lg text-white fw-bold w-100 py-2" style={{backgroundColor:'#6610f2'}}>Book Now</button>
            </div>
        </div>
    );
}


export const PopularPost = (props) =>{
    return(
        <div>
            <img className="rounded" src={props.image} alt={props.alt} />
            <h5 className="fw-bold text-primary-emphasis">{props.heading}</h5>
            <p className="lh-sm">{props.text}</p>
            <div className="d-flex">
                <img className="d-block rounded-circle me-3" style={{width:'15%', height:'10%'}} src={props.lowerImage} alt={props.lowerAlt} />
                <div>
                    <h5 className="text-primary-emphasis">{props.author}</h5>
                    <p className="text-secondary fs-6">{props.job}</p>
                </div>

            </div>
        </div>
    )
}

export const RecentPost = (props) =>{
    return(
        <div className="d-flex my-5">
            <div>
                <h6 className="fs-5 fw-bold text-primary-emphasis">{props.heading}</h6>
                <p className="text-body-secondary">{props.author}</p>
            </div>
            <div>
                <img src={props.image} className="rounded ms-3 w-75" alt={props.alt} />
            </div>
        </div>
    )
}
export const TestimonialProp = (props) =>{
    return(
        <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-7 mt-auto">
                <p className="fs-4"><i className="color"><RiDoubleQuotesL/></i>{props.paragraph}<i className="color"><RiDoubleQuotesR/></i></p>
                <div className="d-flex">
                    <img className="rounded-circle testimonial-img" src={props.author} alt={props.authoralt} />
                    <div>
                        <h2 className="color">{props.name}</h2>
                        <p>{props.occupation}</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-5">
                <img className="test-height rounded" src={props.img} alt={props.alt} />
            </div>
        </div>
    )
}

export const SliderProp = (props) =>{
    return(
        <div>
            <img src={props.image} alt={props.alt} className="w-100" />
            <div className="px-4">
                <div className="d-flex">
                    <h3>{props.heading}</h3>
                    <div className="d-flex ms-auto">
                        <i className="text-warning">
                            <BsStarFill />
                        </i>
                        <h5>{props.rating}</h5>
                    </div>
                </div>
                <div>
                    <div className="d-flex">
                        <i className="rounded-circle"><BsGeoAlt /></i>
                        <p>{props.location}</p>
                    </div>
                    <div className="d-flex">
                        <i className="rounded-circle"><FiDollarSign /></i>
                        <p>USD {props.price}/Day</p>
                    </div>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio velit dolore veniam, eligendi saepe doloremque ut aspernatur magnam mollitia enim laboriosam assumenda! Impedit hic corporis a reiciendis neque veniam tempore.</p>
                </div>
                <div class="d-grid">
                    <button class="btn btn-lg btn-primary" type="button" style={{backgroundColor:'#6610f2'}}>Book Now</button>
                </div>
            </div>
        </div>
    )
}