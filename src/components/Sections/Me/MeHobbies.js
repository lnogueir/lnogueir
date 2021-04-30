import React from 'react'
import MeImage from './MeImage'
import MeSectionBreadcrumbs from './MeSectionBreadcrumbs'
import YOUNG_ME_GUITAR from '../../../assets/images/young_me_guitar.png'
import HACKATHON from '../../../assets/images/hackathon_exp.jpeg'
import ME_FIT from '../../../assets/images/me_fit.png'
import ME_PLAYING from '../../../assets/videos/me_playing.mp4'
import Skills from './Skills/Skills'

function MeHobbies(props) {    
    return (
        <div className="me-section-content-wrapper">
            <div className="me-intro-wrap">
                <MeImage alt="Hack the North photo" src={HACKATHON}>
                    Hack N' Chill <span role="img" aria-label="emoji">👨‍💻</span>
                </MeImage>
                <div className="me-body">
                    <h1>Hobbies <span role="img" aria-label="emoji">🎯</span></h1>
                    <MeSectionBreadcrumbs sectionIndex={1} />
                    <p>
                        <br/>
                        I've always tried to make sure my hobbies were something more than just fun to me. For me, hobbies for me should also be something productive to you in some way. 
                        I found that attending hackathons are exactly that! Attending hackathons have been my #1 hobbie in the last few years. I have made many friends this way and experimented many technologies such as React Native, Google Vision and Speech-to-Text which improved my resume especially when I was in first year of school.
                    </p>
                </div>
            </div>

            <Skills />

            <div className="me-intro-wrap">
                <MeImage alt="Band Concert" src={YOUNG_ME_GUITAR}>
                    11 y.o. me at school concert <span role="img" aria-label="emoji">🎸</span>
                </MeImage>
                <div className="me-body">
                    <p>
                        Playing the guitar is one of my absolute favorite things to do. I started playing it when I was 9, and, at this point, it is part of who I am.
                        <br/>
                        I loved to play with other people and through music, I formed great friendships and most importantly developed important skills such as:
                    </p>
                    <ul style={{margin: '0 3px'}}>
                        <li>Getting out of my comfort zone: playing in front of other people is TOUGH</li>
                        <li>Teamwork to rehearsal and perform a song in group</li>
                        <li>Learning under pressure when you need to master songs within tight deadlines</li>
                    </ul>
                    <p style={{margin: 0}}>
                        Checkout my <a rel="noopener noreferrer" target="_blank" className="link" href="https://www.youtube.com/user/SuperLucasGuns/videos">Youtube</a> channel for some low-quality guitar covers 😂.
                    </p>
                </div>
            </div>
            <div className="guitar-video">
                <video controls>
                    <source src={ME_PLAYING} type="video/mp4" />
                    Your browser does not support videos.
                </video>
            </div>
            <div className="me-origins-wrap">
                <div className="me-body">
                    <p>
                        <br /><br/>
                        Another hobby that I love is running. I used to be part of the track team during High School and it's certainly my favorite sport to practice.
                        <br/> <br/>
                        I do not run competitively anymore, but I sure miss the feeling of being on a race! Now I run only 3-4 times a week as way to de-stress and as an excuse to listen to music for long periods of time 😂. 
                        <br/><br/>
                        Running has kept me in shape and has contributed to my well-being mentally and physically in many ways.
                    </p>
                </div>
                <MeImage alt={"Track & Field"} src={ME_FIT}>
                    {"Track == Best Sport"} <span role="img" aria-label="emoji">🏃🏻</span>
                </MeImage>
            </div>
        </div>

    )
}

export default MeHobbies;