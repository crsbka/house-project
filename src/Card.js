import React from "react";
import './Card.css';

export default function Card() {
    return (

    <div className="card-group">

        <div className="card">
            <a href="https://housesigma.com/web/en/house/VLaGyG2eZo1YW1ZD/76-Radford-Dr-Ajax-E5531157">
                <img src="https://photos.zolo.ca/76-radford-drive-ajax-E5531157-1.jpg?2022-03-22+04%3A09%3A13" className="card-img" alt="..."/></a>
            <div className="card-body">
                <h5 className="card-title">76 Radford Rd.</h5>
                <p className="card-text">Listed for: $ 1,250,000</p>
                <p className="card-text">Ajax - Central West</p>
                <p className="card-text">Detached</p>

            </div>
            <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>

            </div>
        </div>

        <div className="card">
            <a href="https://housesigma.com/web/en/house/LzQ1y5Ebll4yqdeK/132-Berkeley-St-601-Toronto-C5537305">
            <img src="https://www.rentseeker.ca/content/property-images/030420130638-1.jpg" className="card-img" alt="..."/> </a>
                <div className="card-body">
                    <h5 className="card-title">132 Berkeley St.</h5>
                    <p className="card-text">Big House</p>


                </div>
                <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                </div>
        </div>
        <div className="card">
            <a href="https://housesigma.com/web/en/map?lat=43.65387&lng=-79.36396&zoom=19.25&center=%7B%22lat%22%3A43.65372722418019,%22lng%22%3A-79.36413565553904%7D&list_type=%5B3,1%5D&id_listing=XRla7gxw6nR3jEvL">
            <img src="https://shared-s3.property.ca/public/images/listings/optimized/c4846723/mls/c4846723_1.jpg?v=1" className="card-img" alt="..." /></a>
                <div className="card-body">
                    <h5 className="card-title">120 Parliament St.</h5>
                    <p className="card-text">Big House</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                </div>
        </div>

    </div>

);
}