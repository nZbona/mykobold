import Head from 'next/head'

import Header from '../components/Header'

import Slideshow from '../components/slideshow/Slideshow';
import HeroWidget from '../components/HeroWidget'
import { Box } from '@material-ui/core';
import { useState } from 'react';



export default function Home() {

 
  return (
    <div className="container">
      <Head>
        <title> MyKobold </title>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Header />

    {/* <div style={{marginTop: "7%"}}></div> */}
      <main style={{display: "block"}}>
        <section className="full-width-wrapper slider-container">
          <HeroWidget />
          <Slideshow
            slides={[
              'pro_images/hero/family.jpg',
              'pro_images/hero/hero_img_5.jpg',
              'pro_images/hero/hero_img_6.jpg',
              'pro_images/hero/hero_img_7.jpg',
              'pro_images/hero/stage.jpg'
                    ]}
            effect={'fade'}
            slideInterval={6000}
            enableKeyboard= {true}
          />
                    
              
        </section>
        
        
      </main>
      

      <div className="example" style={{ width: "50%"}}> 
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae odio rhoncus, sagittis dolor eget, aliquet orci. Curabitur in nulla fringilla, mollis lacus sit amet, sollicitudin enim. Sed sit amet suscipit est. Donec a dolor sem. Sed at feugiat justo, vitae sodales dolor. Quisque aliquet metus quis rutrum pharetra. In placerat orci ac arcu efficitur, non sagittis sem tincidunt. Etiam tempus lorem risus. Mauris sed leo vel eros aliquam dignissim. Vestibulum pretium pharetra auctor. In sit amet iaculis nulla.

Mauris lobortis bibendum ultricies. Duis a venenatis metus. Nullam euismod vehicula pretium. Pellentesque tellus eros, maximus in tortor in, tristique pellentesque magna. Maecenas in dui sed justo hendrerit tempor vel nec massa. Aenean sed nisl sagittis metus molestie convallis. In hendrerit sodales mauris, at tempor ligula pretium vitae.

Duis non ipsum sit amet metus tincidunt interdum nec non enim. Nam ut egestas odio, ut aliquet ex. In eu lacinia lacus. Suspendisse quis metus non dui viverra efficitur. Nunc quis suscipit erat. Nulla et pharetra mi, in imperdiet massa. Fusce finibus ipsum ut molestie varius. Nunc convallis turpis vitae elit pharetra, id venenatis sem placerat. Suspendisse maximus blandit metus, ut pellentesque nunc condimentum finibus. In tellus orci, bibendum quis diam pretium, accumsan lacinia nisl. Sed vel dolor tristique, auctor ante sit amet, scelerisque tellus.

Suspendisse potenti. Cras vitae lacus sed ante lacinia tempus. Donec sollicitudin nisl in congue dapibus. Vestibulum consectetur nulla odio, ac varius urna mollis pretium. Donec eleifend rhoncus elit, eu placerat sapien hendrerit euismod. Aliquam tempor augue a mattis posuere. Nunc molestie non eros ac maximus. Cras sodales metus ut massa rhoncus, nec rhoncus velit vestibulum. Maecenas id nunc velit.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus convallis et quam molestie tincidunt. Sed bibendum ante quis fringilla gravida. Phasellus vestibulum nibh nisi, et cursus neque elementum a. Nam sit amet libero faucibus, scelerisque metus sed, volutpat ligula. Mauris et eleifend ipsum. Mauris pellentesque interdum luctus.

Integer at erat non quam blandit commodo. Praesent consectetur, orci eget imperdiet ultrices, velit felis vehicula mi, in tempus ligula erat ac justo. Aliquam erat volutpat. Maecenas vel lectus in ante consectetur euismod. Vivamus porta augue quis mauris dapibus dictum. Nam dictum metus sit amet nisl rutrum cursus. In sem sapien, ullamcorper non mattis quis, lobortis id augue. Sed nulla lacus, lobortis ut vulputate non, sagittis at magna. Mauris finibus risus eu justo sagittis efficitur. Maecenas elit lectus, rhoncus nec justo vel, ornare pulvinar erat. Maecenas sit amet suscipit nulla.

Donec vulputate semper justo eu pretium. Integer non quam lobortis, cursus urna sit amet, lacinia sem. Etiam interdum facilisis suscipit. Ut egestas ligula a risus rhoncus dignissim. Proin dictum semper sapien, eu tristique velit laoreet et. Maecenas scelerisque eu est vitae imperdiet. Praesent vestibulum, tortor sit amet finibus aliquam, ante eros molestie libero, id tristique tortor lectus euismod tellus. Aliquam congue interdum tortor nec hendrerit. Duis eget quam vitae metus congue luctus vel nec eros.

Mauris a quam et tellus lacinia auctor ut at orci. Morbi imperdiet mauris id augue eleifend aliquet. Sed placerat vitae ipsum ullamcorper consectetur. Nunc rutrum at sapien id volutpat. Nullam sollicitudin leo sed interdum interdum. Nulla ac iaculis libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Ut lorem metus, pharetra sit amet rhoncus ac, finibus tristique massa. Maecenas volutpat ligula rutrum dolor commodo accumsan. Fusce elementum sem sed ante vehicula, et dictum justo pretium. Phasellus sodales nibh augue, pharetra rhoncus nisi imperdiet vitae. Sed placerat condimentum enim ut dignissim. Donec mollis ac ligula elementum sodales. Quisque gravida pharetra tincidunt. Nunc a magna a enim egestas fermentum. Fusce at sapien eu ante rhoncus elementum. Sed tincidunt varius pellentesque. Maecenas pulvinar ac orci a ultrices. Donec nisl ligula, pretium eu quam eu, consequat finibus orci. Vestibulum id massa vitae justo elementum interdum.

Duis viverra ipsum neque, vitae laoreet lacus efficitur non. Cras a ex non erat congue aliquet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin mollis elit at lacinia rhoncus. Duis molestie gravida mi, aliquam molestie turpis volutpat a. Nunc orci nisi, aliquet ac ligula laoreet, convallis laoreet augue. Vestibulum mi orci, mollis quis elementum sed, sagittis nec diam. Etiam sollicitudin accumsan rhoncus. Phasellus id tellus sed lorem feugiat elementum.</p>
       </div>


      

      
      </div>
  )
}
