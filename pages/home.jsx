import React, { useEffect, useRef, useState } from "react";
import st from "../styles/home.module.css";
import {
  MdKeyboardArrowDown,
  MdSettings,
  MdChat,
  MdLocationSearching,
  MdOutlineCheckBox,
  MdPaid,
  MdSavedSearch,
  MdMenu,
  MdClose,
}
from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaDiscord,
  FaMedium,
  FaGithub,
  FaInstagram,
}
from "react-icons/fa";
import $ from "jquery";
import { Power4 } from "gsap/dist/gsap";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
const commafy = require('commafy');

{/*import {default as ThemeSwitch} from "./ThemeSwitch";*/}
import {default as LanguageSwitch} from "./LanguageSwitch";

const locale  = require('../locales');

const Home = () => {

  const [lang, setLang] = useState('en');
  
  const [totalInterest, setTotalInterest] = useState(commafy(''));
  const [tvl, setTvl] = useState(commafy(''));
  const [totalCharities, setTotalCharities] = useState(commafy(''));
  const [totalCountries, setTotalCountries] = useState(commafy(''));
  const [totalHelpers, setTotalHelpers] = useState(commafy(''));

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    /* Header on-scroll Animation */
    const headerAnim = gsap.timeline();
    headerAnim.fromTo(
      ".header", {
        backgroundColor: "transparent",
        backdropFilter: "blur(0px)",
      }, {
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(5px)",
        scrollTrigger: {
          trigger: ".hero",
          start: "0% 0",
          end: "50% 0",
          scrub: 0.5,
          toggleActions: "start pause resume none",
        },
      }
    );

    /* Accordian Custom Animations */
    $(".q1").click((e) => {
      e.stopPropagation()
      //$(".a1").slideToggle(350);
      $(".a1").toggleClass("active-menu");
      $(".q1 svg").toggleClass("rotate");
    });
    
    // $('.a').each(function() {
    // $(this).css('height', 'auto');
    // $(this).hide();
    // });

    
    $(".q2").click((e) => {
      e.stopPropagation()
     // $(".a2").slideToggle(350);
      $(".a2").toggleClass("active-menu");
      $(".q2 svg").toggleClass("rotate");
    });
    $(".q3").click((e) => {
      e.stopPropagation()
     // $(".a3").slideToggle(350);
       $(".a3").toggleClass("active-menu");
      $(".q3 svg").toggleClass("rotate");
    });
    $(".q4").click((e) => {
      e.stopPropagation()
     // $(".a4").slideToggle(350);
       $(".a4").toggleClass("active-menu");
      $(".q4 svg").toggleClass("rotate");
    });
    $(".q5").click((e) => {
      e.stopPropagation()
      //$(".a5").slideToggle(350);
       $(".a5").toggleClass("active-menu");
      $(".q5 svg").toggleClass("rotate");
    });
    $(".q6").click((e) => {
      e.stopPropagation()
      //$(".a6").slideToggle(350);
       $(".a6").toggleClass("active-menu");
      $(".q6 svg").toggleClass("rotate");
    });
    $(".q7").click((e) => {
      e.stopPropagation()
      //$(".a7").slideToggle(350);
       $(".a7").toggleClass("active-menu");
      $(".q7 svg").toggleClass("rotate");
    });

    /* $(".open-mob-header").click(() => {
      $(".header").addClass("active-mob-header");
    });
    $(".close-mob-header").click(() => {
      $(".header").removeClass("active-mob-header");
    }); */


    const updateStats = () => {

      let url = `https://avalanche.ihelp.finance/api/v1/data/stats`;

      fetch(url).then((d) => {
        if (d.ok) {
          return d.json()
        }else {
           setTimeout(()=>{
          updateStats();
        },2000);
        }
      }).then((d) => {
        //console.log(d);
        setTotalInterest(commafy(d['totalInterest']))
        setTvl(commafy(d['tvl']))
        setTotalCharities(commafy(d['totalCharities']))
        setTotalCountries(commafy(d['totalCountries']))
        setTotalHelpers(commafy(d['totalHelpers']))
        
        setTimeout(()=>{
          updateStats();
        },2000);
        
      }).catch((d) => {
        console.log('error',d);
        setTimeout(()=>{
          updateStats();
        },2000);
      })

    }
    updateStats();


  }, []);

  /* Mobile Header */
  const openMobHeader = () => {
    $(".header").addClass("active-mob-header");
  };
  const closeMobHeader = () => {
    $(".header").removeClass("active-mob-header");
  };
  /* PC Anchors */
  const moveTo1 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#app",
      },
      ease: Power4.easeInOut,
      duration: 0.75,
    });
  };
  const moveTo2 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section2",
        offsetY: 50,
      },
      ease: Power4.easeInOut,
      duration: 0.75,
    });
  };
  const moveTo3 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section3",
        offsetY: 50,
      },
      ease: Power4.easeInOut,
      duration: 0.75,
    });
  };
  const moveTo4 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section4",
        offsetY: 50,
      },
      ease: Power4.easeInOut,
      duration: 0.75,
    });
  };
  const moveTo5 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section5",
        offsetY: 50,
      },
      ease: Power4.easeInOut,
      duration: 0.75,
    });
  };
  const moveTo6 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section6",
        offsetY: 50,
      },
      ease: Power4.easeInOut,
      duration: 0.75,
    });
  };
  /* Mobile anchors */
  const moveTo2Mob = () => {
    closeMobHeader();
    gsap.to(window, {
      scrollTo: {
        y: "#section2",
        offsetY: 50,
      },
      ease: Power4.easeInOut,
      duration: 0.75,
    });
  };
  const moveTo3Mob = () => {
    closeMobHeader();
    gsap.to(window, {
      scrollTo: {
        y: "#section3",
        offsetY: 50,
      },
      ease: Power4.easeInOut,
      duration: 0.75,
    });
  };
  const moveTo4Mob = () => {
    closeMobHeader();
    gsap.to(window, {
      scrollTo: {
        y: "#section4",
        offsetY: 50,
      },
      ease: Power4.easeInOut,
      duration: 0.75,
    });
  };
  const moveTo5Mob = () => {
    closeMobHeader();
    gsap.to(window, {
      scrollTo: {
        y: "#section5",
        offsetY: 50,
      },
      ease: Power4.easeInOut,
      duration: 0.75,
    });
  };
  const moveTo6Mob = () => {
    closeMobHeader();
    gsap.to(window, {
      scrollTo: {
        y: "#section6",
        offsetY: 50,
      },
      ease: Power4.easeInOut,
      duration: 0.75,
    });
  };

  const playVideo = (e) => {
    //.log(e.)
    // this.refs.vidRef.play();
  }
  const videoRef = useRef();
  
  const handleLangChange = (selectedLang) => {
    setLang(selectedLang);
  }

  return (
    <div id="app" className="app">
       {/*<img src="./assets/bgc.svg" alt="Bgc" className="body-bgc" />
      Header */}
      <div className="header">
        <div className="mob-header">
          <div className="box">
            <div className="mob-header-content">
              <a onClick={moveTo2Mob}>{locale[lang].header.howitworks}</a>
              <a onClick={moveTo3Mob}>{locale[lang].header.why}</a>
              <a onClick={moveTo4Mob}>{locale[lang].header.foundation}</a>
              <a onClick={moveTo5Mob}>{locale[lang].header.roadmap}</a>
              <a onClick={moveTo6Mob}>{locale[lang].header.faq}</a>
              <a href="https://docs.ihelp.finance" target="_blank">{locale[lang].header.docs}</a>
              <LanguageSwitch />
            </div>
          </div>
        </div>
        <div className="box">
          <div className="headerContent">
            <img onClick={moveTo1} src="./assets/logo.svg" alt="" />
            <div className="headerRight">
              <a onClick={moveTo2}>{locale[lang].header.howitworks}</a>
              <a onClick={moveTo3}>{locale[lang].header.why}</a>
              <a onClick={moveTo4}>{locale[lang].header.foundation}</a>
              <a onClick={moveTo5}>{locale[lang].header.roadmap}</a>
              <a onClick={moveTo6}>{locale[lang].header.faq}</a>
              <a href="https://docs.ihelp.finance" target="_blank">{locale[lang].header.docs}</a>
              <LanguageSwitch lang={lang} handleLangChange={handleLangChange} />
              <a href="https://avalanche.ihelp.finance" target="_blank">
                <button className="grd-btn">{locale[lang].header.enter}</button>
              </a>
              <MdMenu onClick={openMobHeader} className="open-mob-header" />
              <MdClose
                onClick={closeMobHeader}
                className="close-mob-header"
              />
              
            </div>
          </div>
        </div>
      </div>

      {/* Hero Secton */}
      
        <div className="box" style={{ marginTop:'-100px', marginBottom:'100px'}}>
          <div className={st.heroContent}>
            <h1>{locale[lang].hero.title}</h1>
            <h2>
              {locale[lang].hero.subtitle}
            </h2>
            <a href="https://avalanche.ihelp.finance" target="_blank">
              <button className="grd-btn">{locale[lang].header.enter}</button>
            </a>
      
          </div>
          
                <div className={st.infoGridContent}>
                
            <main>
              <img src="./assets/lightMode/valueLocked_light.png" alt="img" />
              <h1 id="total_interest">{tvl != '' ? `$${tvl}` : ''}</h1>
              <h2>{locale[lang].hero.tvl}</h2>
            </main>
            
            <main>
              <img src="./assets/lightMode/generated_light.png" alt="img" />
              <h1 id="total_interest">{totalInterest != '' ? `$${totalInterest}` : ''}</h1>
              <h2>{locale[lang].hero.totalinterest}</h2>
            </main>
            
            <main>
              <img src="./assets/lightMode/helpers_light.png" alt="img" />
              <h1 id="total_helpers">{totalHelpers}</h1>
              <h2>{locale[lang].hero.helpers}</h2>
            </main>
            
            <main>
              <img src="./assets/lightMode/charities_light.png" alt="img" />
              <h1 id="total_interest">{totalCharities}</h1>
              <h2>{locale[lang].hero.charities}</h2>
            </main>
            
            
          </div>
          <div style={{position:'relative',fontSize:'16px',fontStyle:'italic',width:'100%',textAlign:'center',marginTop:'0px',display:'inline-block'}}><a href="https://avalanche.ihelp.finance" target="_blank" style={{textDecoration:'underline'}}>{locale[lang].hero.deployment}</a></div>
          
        </div>
     
      {/* Info Grid */}
      {/*<div className={st.infoGrid + " " + "section"}>
        <div className="box">
          <div className={st.infoGridContent}>
            <main>
              <img src="./assets/card-img-1.png" alt="img" />
              <h1>#3,565,996</h1>
              <h2>Total Capital Donated</h2>
            </main>
            <main>
              <img src="./assets/card-img-2.png" alt="img" />
              <h1>#3,565,996</h1>
              <h2>Total Pledged</h2>
            </main>
            <main>
              <img src="./assets/card-img-3.png" alt="img" />
              <h1>157 Charities</h1>
              <h2>93 Countries</h2>
            </main>
            <main>
              <img src="./assets/card-img-4.png" alt="img" />
              <h1>10, 000</h1>
              <h2>Total Helpers</h2>
            </main>
          </div>
          <img className={st.map} src="./assets/map.png" alt="" />
        </div>
      </div>*/}

      {/* How It Works */}
      <div id="section2" className={st.howItWorks + " " + "section"}>
        <div className="box">
          <h1 className="mainHeading">{locale[lang].header.howitworks}</h1>
          <div className={st.howItWorksContent}>
            <div className={st.howItWorksGrid}>
              <main>
                {locale[lang].howitworks.paragraph1} 
              </main>
              <main>
                {locale[lang].howitworks.paragraph2}
              </main>
            </div>
            <br/>
            {/*<img src="./assets/diagram.png" alt="" style={{width:'100%'}} />*/}
            <span style={{display:''}}>
            {/*<button className={st.videoPlay} onClick={playVideo}> <img src="./assets/robo.png" alt="" style={{height:'50px'}} /><br/>play</button>*/}
            <video
              ref={videoRef}
              src={`./assets/${locale[lang].howitworks.video}`}
              loop={true}
              autoPlay={true}
              muted={true}
              controls={false}
              playsInline={true}
              style={{height:'700px'}}
            ></video>
            {/*<img src="./assets/ihelp_animated.gif" alt="" style={{height:'700px'}} />*/}
            </span>
          </div>
        </div>
      </div>

      {/* Why */}
      <div id="section3" className={st.why + " " + "section"}>
        <div className="box">
          <h1 className="mainHeading">{locale[lang].header.why}</h1>
          <div className={st.whyContent}>
            <div className={st.faqBox} style={{borderBottom:'none'}}>
     

                <h6 className={st.subTitle}>{locale[lang].why.title}</h6>
         
      <div style={{width: '100%',
    fontSize: '1.65rem',
    fontWeight: '400',
    margin: '1.5rem 0 0 0',
    color: 'rgba(0,0,0,0.75)'}}>

   <div style={{display:'block',position:'relative',marginLeft:'30px',marginTop:'16px',marginBottom:'0px'}}>   
<p>
{locale[lang].why.paragraph1} 
</p>
</div>
</div>
              
     
            </div>
          </div>
          {/*<h1 className="mainHeading">TOP CHARITIES</h1>
          <div className={st.charitiesGrid}>
            <div className={st.charitiesGridCell}>
              <main>
                <img src="./assets/charity-img-1.jpg" alt="" />
              </main>
              <h6>Charity Name</h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                similique, veritatis saepe praesentium et vel itaque at
              </p>
            </div>
            <div className={st.charitiesGridCell}>
              <main>
                <img src="./assets/charity-img-1.jpg" alt="" />
              </main>
              <h6>Charity Name</h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                similique, veritatis saepe praesentium et vel itaque at
              </p>
            </div>
            <div className={st.charitiesGridCell}>
              <main>
                <img src="./assets/charity-img-1.jpg" alt="" />
              </main>
              <h6>Charity Name</h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                similique, veritatis saepe praesentium et vel itaque at
              </p>
            </div>
            <div className={st.charitiesGridCell}>
              <main>
                <img src="./assets/charity-img-1.jpg" alt="" />
              </main>
              <h6>Charity Name</h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                similique, veritatis saepe praesentium et vel itaque at
              </p>
            </div>
            <div className={st.charitiesGridCell}>
              <main>
                <img src="./assets/charity-img-1.jpg" alt="" />
              </main>
              <h6>Charity Name</h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                similique, veritatis saepe praesentium et vel itaque at
              </p>
            </div>
          </div>
          <div className={st.loadMore}>
            <button className="trans-btn">Load More</button>
          </div>*/}
        </div>
      </div>


     {/* Foundation */}
      <div id="section4" className={st.why + " " + "section"}>
        <div className="box">
          <h1 className="mainHeading">{locale[lang].header.foundation}</h1>
          <div className={st.whyContent}>
            <div className={st.faqBox} style={{borderBottom:'none'}}>
     

                <h6 className={st.subTitle}>{locale[lang].foundation.title}</h6>
         
      <div style={{width: '100%',
    fontSize: '1.65rem',
    fontWeight: '400',
    margin: '1.5rem 0 0 0',
    color: 'rgba(0,0,0,0.75)'}}>

<div className={st.howItWorksContent}>
            <div className={st.howItWorksGrid}>
<main>
                {locale[lang].foundation.paragraph1} 
              </main>
              <main>
                {locale[lang].foundation.paragraph2}
              </main>
              
</div>
</div>
</div>
              
     
            </div>
          </div>
 
        </div>
      </div>



      {/* Roadmap */}
      <div id="section5" className={st.howItWorks + " " + "section"}>
        <div className="box">
          <h1 className="mainHeading">{locale[lang].header.roadmap}</h1>

          <div className="roadmap-content">
            <div className="road-map-line"></div>
            <div className="roadmap-box-left">
              <div className="roadmap-box-content">
                <div className="roadmap-text-box">
                  <h6>{locale[lang].roadmap.r1}</h6>
                  <p>
• {locale[lang].roadmap.r1b1}<br/>
• {locale[lang].roadmap.r1b2}<br/>
• {locale[lang].roadmap.r1b3}<br/>
• {locale[lang].roadmap.r1b4}<br/>
• {locale[lang].roadmap.r1b5}
                  </p>
                </div>
                <div className="roadmap-circle">
                  
                </div>
              </div>
            </div>
            <div className="roadmap-box-right">
              <div className="roadmap-box-content">
                <div className="roadmap-circle">
                  
                </div>
                <div className="roadmap-text-box">
                  <h6>{locale[lang].roadmap.r2}</h6>
                  <p>
• {locale[lang].roadmap.r2b1}<br/>
• {locale[lang].roadmap.r2b2}<br/>
• {locale[lang].roadmap.r2b3}<br/>
• {locale[lang].roadmap.r2b4}<br/>
• {locale[lang].roadmap.r2b5}<br/>
• {locale[lang].roadmap.r2b6}
                  </p>
                </div>
              </div>
            </div>
            <div className="roadmap-box-left">
              <div className="roadmap-box-content">
                <div className="roadmap-text-box">
                  <h6>{locale[lang].roadmap.r3}</h6>
                  <p>
• {locale[lang].roadmap.r3b1}<br/>
• {locale[lang].roadmap.r3b2}<br/>
• {locale[lang].roadmap.r3b3}
                  </p>
                </div>
                <div className="roadmap-circle">
                  
                </div>
              </div>
            </div>
            <div className="roadmap-box-right">
              <div className="roadmap-box-content">
                <div className="roadmap-circle">
                  
                </div>
                <div className="roadmap-text-box">
                  <h6>{locale[lang].roadmap.r4}</h6>
                  <p>
• {locale[lang].roadmap.r4b1}
                  </p>
                </div>
              </div>
            </div>
            <div className="roadmap-box-left">
              <div className="roadmap-box-content">
                <div className="roadmap-text-box">
                  <h6>{locale[lang].roadmap.r5}</h6>
                  <p>
• {locale[lang].roadmap.r5b1}
                  </p>
                </div>
                <div className="roadmap-circle">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div id="section6" className={st.charities + " " + "section"}>
        <div className="box">
          <h1 className="mainHeading">{locale[lang].header.faq}</h1>
          <div className={st.faqContent}>
            <div className={st.faqBox}>
              <div className={st.faqQ + " " + "q q3"}>
                <h6>{locale[lang].faq.q1}</h6>
                <MdKeyboardArrowDown />
              </div>
              <div className={st.faA + " " + "a a3"}>
{locale[lang].faq.q1a1}  <a href="https://docs.ihelp.finance" target="_blank">{locale[lang].faq.q1a2}</a>.
              </div>
            </div>
            <div className={st.faqBox}>
              <div className={st.faqQ + " " + "q q4"}>
                <h6>{locale[lang].faq.q2}</h6>
                <MdKeyboardArrowDown />
              </div>
              <div className={st.faA + " " + "a a4"}>
{locale[lang].faq.q2a1} <a href="https://docs.ihelp.finance/ihelp-token" target="_blank">{locale[lang].faq.q2a2}</a>. 
              </div>
            </div>
            <div className={st.faqBox}>
              <div className={st.faqQ + " " + "q q5"}>
                <h6>{locale[lang].faq.q3}</h6>
                <MdKeyboardArrowDown />
              </div>
              <div className={st.faA + " " + "a a5"}>
{locale[lang].faq.q3a1} <a href="https://docs.ihelp.finance/developer-docs/audits" target="_blank">{locale[lang].faq.q3a2}</a>. 
              </div>
            </div>
            <div className={st.faqBox}>
              <div className={st.faqQ + " " + "q q6"}>
                <h6>{locale[lang].faq.q4}</h6>
                <MdKeyboardArrowDown />
              </div>
              <div className={st.faA + " " + "a a6"}>
{locale[lang].faq.q4a1} <a href="https://docs.ihelp.finance" target="_blank">{locale[lang].faq.q4a2}</a>
              </div>
            </div>
            <div className={st.faqBox}>
              <div className={st.faqQ + " " + "q q7"}>
                <h6>{locale[lang].faq.q5}</h6>
                <MdKeyboardArrowDown />
              </div>
              <div className={st.faA + " " + "a a7"}>
 {locale[lang].faq.q5a1}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={st.footer}>
        <div className="box">
          <div className={st.footerContent}>
            <div className={st.footerLeft}>
              <a href="https://turbinex.io" target="_blank" style={{fontWeight:'',fontSize:'14px'}}><h4 style={{fontWeight:'normal',marginTop:'0px'}}>© 2022 Turbine X, LLC</h4></a> 
              | 
              <a href="https://app.ihelp.finance/login" target="_blank">
                   <h4 style={{fontWeight:'normal',marginLeft:'16px',marginTop:'0px',fontSize:'14px'}}>Charity Login</h4>
              </a>
              |
              <a href="https://status.ihelp.finance" target="_blank">
                   <h4 style={{fontWeight:'normal',marginLeft:'16px',marginTop:'0px',fontSize:'14px'}}>Status</h4>
              </a>
              |
              <a href="https://docs.ihelp.finance" target="_blank">
                   <h4 style={{fontWeight:'normal',marginLeft:'16px',marginTop:'0px',fontSize:'14px'}}>Docs</h4>
              </a>
            </div>
            <div className={st.footerRight}>
              <a href="https://discord.gg/qXKE27dZVb" target="_blank">
                <FaDiscord />
              </a>
              <a href="https://twitter.com/ihelp_defi" target="_blank">
                <FaTwitter />
              </a>
              <a href="https://ihelp-finance.medium.com" target="_blank">
                <FaMedium />
              </a>
              <a href="https://github.com/iHelp-Finance" target="_blank">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      
{/*      <ThemeSwitch /> */}
    </div>
  );
};

export default Home;
