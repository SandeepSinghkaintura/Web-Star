import React from 'react';
import vg from '../assets/2.webp';
import {AiFillGoogleCircle , AiFillAmazonCircle , AiFillYoutube ,AiFillInstagram} from "react-icons/ai"

function Home() {
  return (
  <>
    <div className='home' id='home'>

<main>
    <h1>Tech Hiring 24</h1>
    <p>Solution to all your problems</p>
</main>

    </div>


    <div className='home2'>
        <img src={vg} alt="Graphics" />
        <div>
            <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
            </p>
        </div>
    </div>

    <div className='home3' id='about'>
        <div>
        <h1>Who are we</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quasi quas eaque labore culpa eos eveniet voluptates laudantium eligendi ad?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ipsam quaerat nobis officiis minus possimus est molestiae atque libero suscipit!</p>
        </div>
    </div>

    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>

            <article>
                <div style={{animationDelay:'0.3s'}}>
       <AiFillGoogleCircle />
       <p>Google</p>
                </div>
                <div style={{animationDelay:'0.5s'}}>
       <AiFillAmazonCircle />
       <p>Amazon</p>
                </div>
                <div style={{animationDelay:'0.7s'}}>
       <AiFillYoutube />
       <p>Youtube</p>
                </div>
                <div style={{animationDelay:'1s'}}>
       <AiFillInstagram />
       <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
  </>
  )
}

export default Home