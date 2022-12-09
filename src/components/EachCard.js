import React from 'react';
import share from '../assets/icons/share.svg';
import './EachCard.css';

const EachCard = ({data}) => {
    const {pic, badge, title, description, calendar, date, file, job, pin, location, btnText, btnTextColor, userPic, userName, views} = data;

    return (
        <div className="card mb-3">
            {
                pic && <img src={pic} class="card-img-top" alt="..."/>
            }
            <div class="card-body">
                <p>{badge}</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4 className="card-title fw-bold w-75">{title}</h4>
                    <h2 className='fw-bold pb-4'>...</h2>
                </div>
                {
                    description && <p className="card-text">{description}</p>
                }
                <div className='d-flex justify-content-between w-75'>
                    {
                        date && 
                        <div className='d-flex align-items-center'>
                            <img src={calendar} alt="" />
                            <p className='m-0'>{date}</p>
                        </div>
                    }
                    <div className='d-flex align-items-center'>
                        <img src={file} alt="" />
                        <p className='m-0'>{job}</p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <img src={pin} alt="" />
                        <p className='m-0'>{location}</p>
                    </div>
                </div>
                {
                    btnText &&
                    <button className={`btn text-${btnTextColor} fw-bold text-center mt-4 w-100 border`}>
                        {btnText}
                    </button>
                }
                <div className='d-flex justify-content-between align-items-center mt-4'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <img src={userPic} alt="" />
                        <div className='ps-2'>
                            <p className='m-0 fw-bold'>{userName}</p>
                            <p className='m-0 viewSM'>{views}</p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center gap-5'>
                        <p className='m-0 viewLG'>{views}</p>
                        <button className='btn btn-light d-flex align-items-center rounded-0'>
                            <img src={share} alt="" />
                            <span className='ps-1 textShare'>Share</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EachCard;