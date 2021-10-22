import React from 'react'
import HeroImg from '../assets/images/DE640214-378F-4B20-BAE7-6BD2D436E181_1_105_c.jpeg'
import PText from './PText'
import Button from './Button'

export default function HeroSection() {
    return (
        <div>
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
            </div>
        </div>
    )
}
