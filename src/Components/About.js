import React from 'react'

export default function About() {
  return (
    <section className="about section" id="about">
        <div className="container">
            <div className="row">
                <div className="section-title padd-15">
                    <h2>About Me</h2>
                </div>
            </div>
            <div className="ro">
                <div className="about-content padd-15">
                    <div className="row">
                        <div className="about-text padd-15">
                            <h3>I'm Satyam Uniyal and I am a<span>Developer</span></h3>
                            <p>Currently,I am pursuing my bachelor's degree in Computer Science and Engineering and like to play video games and learn new skills in my free time.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="personal-info padd-15">
                            <div className="row">
                                <div className="info-item padd-15">
                                    <p>Age : <span>20</span></p>
                                </div>
                                <div className="info-item padd-15">
                                    <p>Email : <span>manojuniyalm@gmail.com</span></p>
                                </div>
                                <div className="info-item padd-15">
                                    <p>Degree : <span>Computer Science</span></p>
                                </div>
                                <div className="info-item padd-15">
                                    <p>Country : <span>India</span></p>
                                </div>
                                <div className="info-item padd-15">
                                    <p>City : <span>Dehradun</span></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="buttons padd-15">
                                    <a href="/files/Resume1.pdf" download="Satyam Resume" className="btn">Download Resume</a>
                                </div>
                            </div>
                        </div>
                        <div className="skills padd-15">
                            <div className="row">
                                <div className="skill-item padd-15">
                                    <h5>java</h5>
                                    <div className="progress">
                                        <div className="progress-in" style={{ width: '90%' }}></div>
                                        <div className="skill-percentage">90%</div>
                                    </div>
                                </div>
                                <div className="skill-item padd-15">
                                    <h5>Python</h5>
                                    <div className="progress">
                                        <div className="progress-in" style={{ width: '70%' }}></div>
                                        <div className="skill-percentage">65%</div>
                                    </div>
                                </div>
                                <div className="skill-item padd-15">
                                    <h5>Big Data Tools & Technlologies</h5>
                                    <div className="progress">
                                        <div className="progress-in" style={{ width: '50%' }}></div>
                                        <div className="skill-percentage">65%</div>
                                    </div>
                                </div>
                                <div className="skill-item padd-15">
                                    <h5>HTML and CSS</h5>
                                    <div className="progress">
                                        <div className="progress-in" style={{ width: '70%' }}></div>
                                        <div className="skill-percentage">70%</div>
                                    </div>
                                </div>
                                <div className="skill-item padd-15">
                                    <h5>SQL</h5>
                                    <div className="progress">
                                        <div className="progress-in" style={{ width: '85%' }}></div>
                                        <div className="skill-percentage">85%</div>
                                    </div>
                                </div>
                                <div className="skill-item padd-15">
                                    <h5>JavaScript</h5>
                                    <div className="progress">
                                        <div className="progress-in" style={{ width: '70%' }}></div>
                                        <div className="skill-percentage">70%</div>
                                    </div>
                                </div>
                                <div className="skill-item padd-15">
                                    <h5>React</h5>
                                    <div className="progress">
                                        <div className="progress-in" style={{ width: '60%' }}></div>
                                        <div className="skill-percentage">60%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="education padd-15">
                            <h3 className="title">Education</h3>
                            <div className="row">
                                <div className="timeline-box padd-15">
                                    <div className="timeline shadow-dark">
                                        <div className="timeline-item">
                                            <div className="circle-dot"></div>
                                            <h3 className="timeline-date">
                                                2020 - 2021
                                            </h3>
                                            <h4 className="timeline-title">Graduate 12th grade</h4>
                                            <p className="timeline-text">From : All Saints Convent School<br/>CGPA : 80.1%</p>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="circle-dot"></div>
                                            <h3 className="timeline-date">
                                                2021 - 2025
                                            </h3>
                                            <h4 className="timeline-title">B.Tech in Computer Science</h4>
                                            <p className="timeline-text">From : University of Petroleum & Energy Studies<br/>CGPA : 8.5</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="experience padd-15">
                            <h3 className="title">Experience</h3>
                            <div className="row">
                                <div className="timeline-box padd-15">
                                    <div className="timeline shadow-dark">
                                        <div className="timeline-item">
                                            <div className="circle-dot"></div>
                                            <h3 className="timeline-date">
                                                Jun 2021 - Jul 2021
                                            </h3>
                                            <h4 className="timeline-title">InternShip</h4>
                                            <p className="timeline-text">From : Sewa International(Pradhan Mantri Kaushal Kendra)<br/>I was working as a Programming Teacher for 2 month teaching bacis of C language and Web Development and doing some beginner level projects.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
