import React from "react"
import {SocialIcon} from 'react-social-icons'

export default function Footer(){
    return (
        <div>
            <SocialIcon network="facebook" />
            <SocialIcon network='twitter' />
            <SocialIcon network="google" />
            <SocialIcon network="instagram" />
            <SocialIcon network="pinterest" />
            <SocialIcon network="spotify" />
            <SocialIcon network="tiktok" />
            <h5>Created By HuyNguyen 
                <a href="https://gomoku-react-d2cd5.web.app">
                huyqndallas@gmail.com</a>
            </h5>
        </div>
    )
}