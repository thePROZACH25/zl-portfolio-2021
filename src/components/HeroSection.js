import React from 'react'
import HeroImg from '../assets/images/DE640214-378F-4B20-BAE7-6BD2D436E181_1_105_c.jpeg'
import SocialMediaArrow from '../assets/images/social-media-arrow.svg'
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg'
import PText from './PText'
import Button from './Button'
import styled from 'styled-components'

const HeroStyles = styled.div`
background-color: red;
`;


export default function HeroSection() {
    return (
        <HeroStyles>
            <div className="container">
                <h1 className="hero__heading">
                    <span>Hello, This is </span>
                    <span>Zach Ledford</span>
                </h1>
                <div className="hero__img">
                    <img src={HeroImg} alt="Zachary Ledford Profile Image" />
                </div>
                <div className="hero__info">
                    <PText>
                        I am working as a freelance web designer and developer for 4 years. I love to design and make new web experiences for the people.
                    </PText>
                    <Button 
                    btnLink="/projects" 
                    btnText='see my works'
                    outLine={false}
                    />
                </div>
                <div className="hero__social">
                    <div className="hero__social__indicator">
                        <p>Follow</p>
                        <img src={SocialMediaArrow} alt="social media arrow" />
                    </div>
                    <div className="hero__social__text">
                        <ul>
                            <li>
                                {/* GitHub Link */}
                                <a href="github.com/thePROZACH25" target='_blank' rel='noreffer'>GH</a>
                            </li>
                            <li>
                                {/* Twitter Link */}
                                <a href="#" target='_blank' rel='noreffer'>TW</a>
                            </li>
                            <li>
                                {/* LinkedIn Link */}
                                <a href="linkedin.com/in/zacharyledford" target='_blank' rel='noreffer'>LI</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="hero__scrollDown">
                    <p>Scroll</p>
                    <img src={ScrollDownArrow} alt="" />
                </div>
            </div>
        </HeroStyles>
    )
}
