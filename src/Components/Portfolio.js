import React from 'react'

export default function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
        <div className="container">
            <div className="row">
                <div className="section-title padd-15">
                    <h2>Portfolio</h2>
                </div>
            </div>
            <div className="row">
                <div className="portfolio-heading padd-15">
                    <h2>My Last Projects :</h2>
                </div>
            </div>
            <div className="row">
                <div className="portfolio-item padd-15">
                    <div className="portfolio-item-inner shadow-dark">
                        <div className="portfolio-img">
                            <a href="https://github.com/0-R3X/usem_app"><img src="img/usem.png" alt=""/></a>
                        </div>
                    </div>
                </div>

                <div className="portfolio-item padd-15">
                    <div className="portfolio-item-inner shadow-dark">
                        <div className="portfolio-img">
                            <a href="https://github.com/0-R3X/VIRTUAL-T"><img src="img/VirtualT.png" alt=""/></a>
                        </div>
                    </div>
                </div>

                <div className="portfolio-item padd-15">
                    <div className="portfolio-item-inner shadow-dark">
                        <div className="portfolio-img">
                            <a href="https://github.com/0-R3X/RAWStrength"><img src="img/raw.png" alt="" height="184px"/></a>
                        </div>
                    </div>
                </div>

                <div className="portfolio-item padd-15">
                    <div className="portfolio-item-inner shadow-dark">
                        <div className="portfolio-img">
                            <a href="https://github.com/0-R3X/Gait-Detection"><img src="img/gait.png" alt=""/></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}
