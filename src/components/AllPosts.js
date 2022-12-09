import React from 'react';
import article from '../assets/images/article.png';
import education from '../assets/images/education.png';
import meetup from '../assets/images/meetup.png';
import sarthak from '../assets/images/sarthak.png';
import sarah from '../assets/images/sarah.png';
import ronal from '../assets/images/ronal.png';
import joseph from '../assets/images/joseph.png';
import calendar from '../assets/icons/calendar.svg';
import file from '../assets/icons/file.svg';
import pin from '../assets/icons/pin.svg';
import EachCard from './EachCard';


const AllPosts = () => {

    const cards = [
        {
            id: 1,
            pic: article,
            badge: '✍️ Article',
            title: 'What if famous brands had regular fonts? Meet RegulaBrands!',
            description: 'I’ve worked in UX for the better part of a decade. F..',
            date: '',
            job: '',
            location: '',
            userPic: sarthak,
            userName: 'Sarthak Kamra',
            views: '1.4k views',
        },
        {
            id: 2,
            pic: education,
            badge: '🔬️ Education',
            title: 'Tax Benefits for Investment under National Pension Scheme launched by Government',
            description: 'I’ve worked in UX for the better part of a decade. F..',
            date: '',
            job: '',
            location: '',
            userPic: sarah,
            userName: 'Sarah West',
            views: '4.8k views',
        },
        {
            id: 3,
            pic: meetup,
            badge: '🗓️ Meetup',
            title: 'Finance & Investment Elite Social Mixer @Lujiazui',
            description: '',
            calendar: calendar,
            date: 'Fri, 12 Oct, 2018',
            job: '',
            pin: pin,
            location: 'Ahmedabad, India',
            btnText: 'Visit Website',
            btnTextColor: 'danger',
            userPic: ronal,
            userName: 'Ronal Jones',
            views: '800 views',
        },
        {
            id: 4,
            pic: '',
            badge: '💼️ Job',
            title: 'Software Developer - II',
            description: '',
            date: '',
            file: file,
            job: 'Innovaccer Analytic...',
            pin: pin,
            location: 'Noida, India',
            btnText: 'Apply on Timesjobs',
            btnTextColor: 'success',
            userPic: joseph,
            userName: 'Joseph Gray',
            views: '1.7k views',
        }
    ];

    return (
        <div>
            {
                cards.map(card => <EachCard
                        key={card.id}
                        data={card}
                    ></EachCard>
                )
            }

        </div>
    );
};

export default AllPosts;