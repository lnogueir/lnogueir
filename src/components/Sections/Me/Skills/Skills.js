import React from 'react'
import TechBar from './TechBar'
import PYTHON from '../../../../assets/images/python.svg'
import JAVASCRIPT from '../../../../assets/images/javascript.svg'
import CPLUS from '../../../../assets/images/c++.svg'
import C from '../../../../assets/images/C.svg'
import HTML from '../../../../assets/images/html.svg'
import CSS from '../../../../assets/images/css.svg'
import GO from '../../../../assets/images/go-logo.png'
import AWS from '../../../../assets/images/aws-logo.svg'
import REACT from '../../../../assets/images/react.svg'
import MONGODB from '../../../../assets/images/mongodb.svg'
import NODE from '../../../../assets/images/node.svg'
import DOCKER from '../../../../assets/images/docker.svg'
import REDIS from '../../../../assets/images/redis.svg'
import WEBRTC from '../../../../assets/images/webrtc.svg'
import $ from 'jquery'


function Skills() {
    React.useEffect(() => {
        var timeouts = [];

        var handleGraphClick = (i, graph) => {
            let timeout = setTimeout(() => {
                $(graph).find('.animate-tech-graph').click()
                const timeoutIndex = timeouts.indexOf(timeout)
                if (timeoutIndex > -1) {
                    timeouts.splice(timeoutIndex, 1)
                }
            }, i * 230)
            timeouts.push(timeout)
        }

        var handleScrollOutGraph = ({ detail }) => {
            let graphs_wrap = $(detail).find('.graphs-wrap').children()
            graphs_wrap.each((i, graph) => $(graph).find('.techbar-in').css('height', 0))
        }

        var handleScrollInGraph = ({ detail }) => {
            let graphs_wrap = $(detail).find('.graphs-wrap').children()
            graphs_wrap.each((i, graph) => $(graph).find('.techbar-in').css('height', 0))
            graphs_wrap.each(handleGraphClick)
        }

        //load graphs onscroll
        document.addEventListener('aos:in', handleScrollInGraph)
        document.addEventListener('aos:out', handleScrollOutGraph)

        return () => {
            document.removeEventListener('aos:in', handleScrollInGraph)
            document.removeEventListener('aos:out', handleScrollOutGraph)
            timeouts.forEach(timeout => clearTimeout(timeout))
        }
    }, [])

    const LANGUAGES = [
        { src: JAVASCRIPT, title: 'JavaScript', level: 89, color: '#757575' },
        { src: CSS, title: 'CSS', level: 86, color: '#039be5' },
        { src: HTML, title: 'HTML', level: 88, color: '#ef5350' },
        { src: C, title: 'C', level: 84, color: '#bdbdbd' },
        { src: GO, title: 'Golang', level: 86, color: '#5DC9E2', logoClass: 'skill-golang-responsive' },
        { src: PYTHON, title: 'Python', level: 94, color: '#ffeb3b' },
        { src: CPLUS, title: 'C++', level: 92, color: '#5c6bc0' },
    ]

    const TOOLS = [
        { src: REACT, title: 'React', level: 86, color: '#263238' },
        { src: WEBRTC, title: 'WebRTC', level: 94, color: '#ffffff' },
        { src: DOCKER, title: 'Docker', level: 90, color: '#0db7ed' },
        { src: NODE, title: 'Node', level: 84, color: '#4caf50' },
        { src: AWS, title: 'AWS', level: 80, color: '#FF9900' },
        { src: REDIS, title: 'Redis', level: 79, color: '#D82C20' },
        { src: MONGODB, title: 'MongoDB', level: 82, color: '#66bb6a' },
    ]

    return (
        <section className="skills-section animated     mb30">
            <h1 className="me-section-subtitle"><span role="img" aria-label="emoji">💻</span> <span style={{opacity: 0.5}}>Hacker Stats</span> <span role="img" aria-label="emoji">👨‍💻</span></h1>
            <div>
                <div className="mt30">
                    <div align="center" style={{ height: '40vh' }} className="graphs-wrap justify-around flex-wrap">
                        {LANGUAGES.map((skill, i) => {
                            return (
                                <TechBar
                                    key={i}
                                    index={i}
                                    load_delay={i * 230}
                                    skill={skill}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className="mt30">
                    <div align="center" style={{ height: '40vh' }} className="graphs-wrap justify-around flex-wrap">
                        {TOOLS.map((skill, i) => {
                            i = LANGUAGES.length + i
                            return (
                                <TechBar
                                    key={i}
                                    index={i}
                                    skill={skill}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;
