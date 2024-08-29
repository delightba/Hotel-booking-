import Footer from "../components/footer";

const Home = () => {
    return (
        <div className="row mt-5 pt-4 home" style={{backgroundColor:'#f5f5f5'}}>
            <div className="col-sm-12 col-md-6 col-lg-6 sm-mb-5 mx-auto my-auto">
                <div className="w-75 mx-auto text-div">
                    <h1 className="fw-bold text-secondary" style={{fontSize:'xxx-large'}}>Find Perfect Hotels</h1>
                    <h1 className="fw-bold" style={{fontSize:'xxx-large', color:'#6610f2'}}>anywhere you go.</h1>
                    <p className="fs-5">We've been in the hotels business across the world for 5 years now. We assure you that you will always enjoy your stay with us.</p>
                    <div className="accounts justify-content-center">
                        <button type="button" class="btn btn-lg mx-2 text-white px-5 py-2" style={{backgroundColor:'#6610f2'}}>Sign Up</button>
                        <button type="button" class="btn btn-lg btn-secondary text-secondary-emphasis mx-2 px-4">Search Hotels</button>
                    </div>
                </div>
            </div>
            <img src="../images/pool.png" alt="#" className="col-sm-12 col-md-6 col-lg-6 h-100 mb-5" />
            <Footer/>
        </div>
    )
}

export default Home;