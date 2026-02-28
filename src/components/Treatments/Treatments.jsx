import React from 'react';
import './Treatments.scss';
import treatment1 from '../../assets/images/treatment-1.jpg';
import treatment2 from '../../assets/images/treatment-2.jpg';
import treatment3 from '../../assets/images/treatment-3.jpg';

const Treatments = () => {
    const treatmentsData = [
        {
            title: "Signature\nFacial",
            info: "90 mins | 200$",
            img: treatment1
        },
        {
            title: "Oxygen\nFacial",
            info: "60 mins | 160$",
            img: treatment2
        },
        {
            title: "Purifying\nHerbal Facial",
            info: "60 mins | 160$",
            img: treatment3
        }
    ];

    return (
        <section className="treatments">
            <h2 className="section-label">My Treatments</h2>

            <div className="treatments-grid">
                {treatmentsData.map((item, index) => (
                    <div className="treatment-card" key={index}>
                        <div className="treatment-img-wrapper">
                            <img src={item.img} alt={item.title.replace('\n', ' ')} />
                        </div>
                        <h3 className="treatment-title">
                            {item.title.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {line}
                                    {i === 0 && <br />}
                                </React.Fragment>
                            ))}
                        </h3>
                        <p className="treatment-info">{item.info}</p>
                    </div>
                ))}
            </div>

            <a href="#" className="btn-solid">Book Now</a>
        </section>
    );
};

export default Treatments;
