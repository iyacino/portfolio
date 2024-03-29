import React, {useState} from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index) =>{
        setToggleState(index)
    }

  return (
    <section className="qualifications section" id='qualifications'>
        <h2 className="section__title" >Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div onClick={()=> toggleTab(1)} className={ toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>Education
                </div>
                <div onClick={()=> toggleTab(2)} className={ toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                </div>
            </div>
                <div className="qualification__sections">
                    <div className={ toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Certificate of Training ‑ Resource Management</h3>
                                <span className="qualification__subtitle">California - Naval Postgraduate School</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> January 2022 - Mai 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder">
                                </span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>  

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Certificate of Training ‑ Americain Language Course</h3>
                                <span className="qualification__subtitle">Defense Language Institute - San Antonio - Texas</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Decembre 2021 - Janvier 2022
                                </div>
                            </div>

                        </div>


                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Master's Degree in Computer Science</h3>
                                <span className="qualification__subtitle">Polytechnic National School - Algiers - Algeria</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> September 2016 - July 2017
                                </div>
                            </div>
                            
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                        <div></div>
                            <div>
                                <span className="qualification__rounder">
                                </span>
                                <span className="qualification__line"></span>
                            </div><div>
                                <h3 className="qualification__title">Engineer's Degree in Computer Science</h3>
                                <span className="qualification__subtitle">Polytechnic National School - Algiers - Algeria</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> September 2011 - July 2016
                                </div>
                            </div>
                            
                        </div>  
                        
                    </div>

                    <div className={ toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">State Department</h3>
                                <span className="qualification__subtitle">Software Engineer</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> August 2018 - now
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder">
                                </span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>  
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Algérie Telecom Company</h3>
                                <span className="qualification__subtitle">Software Engineer</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> July 2017 - June 2018
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Java Developer</h3>
                                <span className="qualification__subtitle">Java & Java EE</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2015 - 2016
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder">
                                </span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>  
                    </div>
                </div>
        </div>
    </section>
    )
}

export default Qualification