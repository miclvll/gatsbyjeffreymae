import React from 'react';
import{Link} from "gatsby";
import Title from  '../../globals/Title';


export default function info() {
    return (
        <section className = "py-5">

        <div className = "container">

        <Title title = "Products"/>

        <div className = "row">
            <div className = "col-10 col-sm.8 mx-auto text-center">
                <p className=" lead text-muted mb-5">Specialising in used Daihatsu parts</p>

                <Link to= "/about">

                <button className="btn text-uppercase btn-yellow">About uppercase</button>

                </Link>


            </div>
        </div>
            
        </div>

        </section>
    );
}


