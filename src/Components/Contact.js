import React from 'react'

export default function Contact() {
  return (
    <section className="contact section" id="contact">
        <div className="container">
            <div className="row">
                <div className="section-title padd-15">
                    <h2>Contact</h2>
                </div>
            </div>
            <h3 className="contact-title padd-15">Have You Any Questions ?</h3>
            <h4 className="contact-sub-title padd-15">LET'S CONNECT...........</h4>
            <div className="row">

                <div className="contact-info-item padd-15">
                    <div className="icon">
                        <i className="fa fa-envelope"></i>
                    </div>
                    <h4>Email</h4>
                    <p>manojuniyalm@gmail.com</p>
                </div>
                {/* EDITED */}
                <div className="contact-info-item padd-15">
                    <div className="icon">
                        <i className="fa fa-globe"></i>
                    </div>
                    <h4>Country</h4>
                    <p>India</p>
                </div>

                <div className="contact-info-item padd-15">
                    <div className="icon">
                        <i className="fa fa-map-marker-alt"></i>
                    </div>
                    <h4>State</h4>
                    <p>Uttrakhand</p>
                </div>
            </div>
        </div>
    </section>
  )
}
