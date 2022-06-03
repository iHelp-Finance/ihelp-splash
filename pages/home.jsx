import React, {useEffect, useRef, useState} from "react";
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
import {Power4} from "gsap/dist/gsap";
import {gsap} from "gsap/dist/gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {ScrollToPlugin} from "gsap/dist/ScrollToPlugin";

const commafy = require('commafy');

import {default as ThemeSwitch} from "./ThemeSwitch";

const locale = require('../locales');

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
                } else {
                    setTimeout(() => {
                        updateStats();
                    }, 2000);
                }
            }).then((d) => {
                //console.log(d);
                setTotalInterest(commafy(d['totalInterest']))
                setTvl(commafy(d['tvl']))
                setTotalCharities(commafy(d['totalCharities']))
                setTotalCountries(commafy(d['totalCountries']))
                setTotalHelpers(commafy(d['totalHelpers']))

                setTimeout(() => {
                    updateStats();
                }, 2000);

            }).catch((d) => {
                console.log('error', d);
                setTimeout(() => {
                    updateStats();
                }, 2000);
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
            {/*<img src="./assets/bgc.svg" alt="Bgc" className="body-bgc"/>*/}
            {/* Header */}
            <div className="header">
                <div className="mob-header">
                    <div className="box">
                        <div className="mob-header-content">
                            <a onClick={moveTo2Mob}>aaaa 1</a>
                            <a onClick={moveTo3Mob}>aaaa 2</a>
                            <a onClick={moveTo4Mob}>aaaa 3</a>
                            <a onClick={moveTo5Mob}>aaaa 4</a>
                            <a onClick={moveTo6Mob}>aaaa 5</a>
                            <a href="https://docs.ihelp.finance" target="_blank">aaaa 6</a>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="headerContent">
                        <img onClick={moveTo1} src="./assets/logo.svg" alt=""/>
                        <div className="headerRight">
                            <a onClick={moveTo2}>how it works</a>
                            <a onClick={moveTo3}>charities</a>
                            <a onClick={moveTo5}>roadmap</a>
                            <a onClick={moveTo6}>faq</a>
                            <a href="https://docs.ihelp.finance" target="_blank">docs</a>
                        </div>
                        <a href="https://avalanche.ihelp.finance" target="_blank">
                            <button className="grd-btn">ENTER APP</button>
                        </a>
                        <div>
                            <MdMenu onClick={openMobHeader} className="open-mob-header"/>
                            <MdClose
                                onClick={closeMobHeader}
                                className="close-mob-header"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Secton */}

            <div className="box">
                <div className={st.heroContent}>
                    <h1>Charitable Giving Powered by DeFi</h1>
                    <h2>
                        Donate Yield to Awesome Charities
                    </h2>
                    <a href="https://avalanche.ihelp.finance" target="_blank">
                        <button className="grd-btn">ENTER APP</button>
                    </a>

                </div>

                <div className={st.infoGridContent}>

                    <main>
                        <img src="./assets/card-img-1.png" alt="img"/>
                        <h1 id="total_interest">${totalInterest}</h1>
                        <h2>Total Value Locked</h2>
                    </main>
                    <main>
                        <img src="./assets/card-img-2.png" alt="img"/>
                        <h1 id="total_interest">${tvl}</h1>
                        <h2>Total Yield Donated</h2>
                    </main>
                    <main>
                        <img src="./assets/card-img-3.png" alt="img"/>
                        <h1 id="total_interest">${totalHelpers}</h1>
                        <h2 id="total_countries">Total Helpers</h2>
                    </main>
                    <main>
                        <img src="./assets/card-img-4.png" alt="img"/>
                        <h1 id="total_helpers">${totalCountries}</h1>
                        <h2>2 Countries</h2>
                    </main>

                </div>
                {/*                <div style={{
                    position: 'relative',
                    fontSize: '16px',
                    fontStyle: 'italic',
                    width: '100%',
                    textAlign: 'center',
                    marginTop: '0px',
                    display: 'inline-block'
                }}><a href="https://avalanche.ihelp.finance" target="_blank"
                      style={{textDecoration: 'underline'}}>xxxxx</a></div>*/}

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
                    <h1 className="mainHeading">How it works</h1>
                    <div className={st.howItWorksContent}>
                        <div className={st.howItWorksGrid}>
                            <p>
                                The IHELP protocol serves the intersection of web3 and charitable giving. IHELP is a
                                decentralized donation protocol where anyone can participate and easily contribute to
                                charitable causes worldwide.
                            </p>
                            <p>
                                IHELP allows you to sustainably & automatically donate yield to any charity in the
                                ecosystem. You can also easily donate crypto directly if you wish.
                            </p>
                        </div>
                        {/*                            <video
                                ref={videoRef}
                                src={`./assets/ihelp_animated.mp4`}
                                loop={true}
                                autoPlay={true}
                                muted={true}
                                controls={false}
                                playsInline={true}
                                style={{height: '700px'}}
                            ></video>*/}
                        <img src="./assets/donations.png" alt="" className={st.donations}/>
                    </div>
                </div>
            </div>

            {/* Why */}
            <div id="section3" className={st.why + " " + "section"}>
                <div className="box">
                    <h1 className="mainHeading">Charities</h1>
                    <h2 className={st.headTxt}>Sustainable + Recurring Donations</h2>
                    <div className={st.whyContent}>
                        <p className={st.txt}>IHELP makes it easy for you to fundraise from crypto donors. The protocol
                            is great for donors and easy to use for charities:
                        </p>
                        <div>
                            <ul>
                                <li className={st.txt}>A donor chooses which charity they want to donate to.</li>
                                <li className={st.txt}>They can choose to either donate the yield their assets generate,
                                    or to donate capital directly to your charity.
                                </li>
                            </ul>
                            <ul>
                                <li className={st.txt}>IHELP does the rest of the work.
                                </li>
                                <li className={st.txt}>You'll receive 100% of donations after fees in your bank account
                                    from the IHELP Foundation.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Roadmap */}
            <div id="section5" className={st.howItWorks + " " + "section"}>
                <div className="box">
                    <h1 className="mainHeading">Roadmap</h1>

                    <div className="roadmap-content">
                        <div className="road-map-line"></div>
                        <div className="roadmap-box-left">
                            <div className="roadmap-box-content">
                                <div className="roadmap-text-box">
                                    <h6>2021 Second Half</h6>
                                    <ul>
                                        <li className={st.txt}>Creation of IHELP Smart Contracts</li>
                                        <li className={st.txt}>Deployment of App on Rinkeby Testnet</li>
                                        <li className={st.txt}>Deployment of Front End V1</li>
                                        <li className={st.txt}>Protocol Documentation Published</li>
                                        <li className={st.txt}>Staking Pool & Leaderboard V1</li>
                                        <li className={st.txt}>Documents Published</li>
                                    </ul>
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
                                    <h6>2022 First Half</h6>
                                    <ul>
                                        <li className={st.txt}>Contract Audits</li>
                                        <li className={st.txt}>IHELP Foundation incorporated</li>
                                        <li className={st.txt}>Integration with Lending Protocol</li>
                                        <li className={st.txt}>Integration with Fiat Banking System</li>
                                        <li className={st.txt}>Deployment of Dapp</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="roadmap-box-left">
                            <div className="roadmap-box-content">
                                <div className="roadmap-text-box">
                                    <h6>2022 Second Half</h6>
                                    <ul>
                                        <li className={st.txt}>Front End V2</li>
                                        <li className={st.txt}>Leaderboard V2</li>
                                    </ul>
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
                                    <h6>2023</h6>
                                    <ul>
                                        <li className={st.txt}>Deployment on additional EVM compatible L1 or L2</li>
                                        <li className={st.txt}>Decentralization v1</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="roadmap-box-left">
                            <div className="roadmap-box-content">
                                <div className="roadmap-text-box">
                                    <h6>Long Term</h6>
                                    <ul>
                                        <li className={st.txt}>Transition to fully decentralized governance</li>
                                    </ul>
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
                    <h1 className="mainHeading">FAQ</h1>
                    <div className={st.faqContent}>
                        <div className={st.faqBox}>
                            <div className={st.faqQ + " " + "q q3"}>
                                <h6>What is IHELP?</h6>
                                <MdKeyboardArrowDown/>

                            </div>
                            <div className={st.faA + " " + "a a3"}>
                                <p>
                                    The IHELP protocol is a platform where people can easily generate and donate yield
                                    to charities worldwide. We seek to allow everyone the opportunity to support
                                    meaningful causes sustainably. Donors ("Helpers") can browse a list of charities
                                    worldwide and choose the causes they wish to support. We offer donors the
                                    opportunity to either donate yield or capital towards their chosen charities.
                                    Helpers who decide to donate yield can withdraw or reallocate their capital at any
                                    time. For more information,
                                </p>
                            </div>
                        </div>
                        <div className={st.faqBox}>
                            <div className={st.faqQ + " " + "q q4"}>
                                <h6>What is the HELP token?</h6>
                                <MdKeyboardArrowDown/>
                            </div>
                            <div className={st.faA + " " + "a a4"}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores atque dolor
                                    ea earum ex fuga iusto magni nisi obcaecati odit officia porro quae quibusdam
                                    repellat, sed sit voluptate voluptatum.
                                </p>
                            </div>
                        </div>
                        <div className={st.faqBox}>
                            <div className={st.faqQ + " " + "q q5"}>
                                <h6>Is IHELP audited?</h6>
                                <MdKeyboardArrowDown/>

                            </div>
                            <div className={st.faA + " " + "a a5"}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores atque dolor
                                    ea earum ex fuga iusto magni nisi obcaecati odit officia porro quae quibusdam
                                    repellat, sed sit voluptate voluptatum.
                                </p>
                            </div>
                        </div>
                        <div className={st.faqBox}>
                            <div className={st.faqQ + " " + "q q6"}>
                                <h6>Can I get a tax receipt for my donation? </h6>
                                <MdKeyboardArrowDown/>

                            </div>
                            <div className={st.faA + " " + "a a6"}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores atque dolor
                                    ea earum ex fuga iusto magni nisi obcaecati odit officia porro quae quibusdam
                                    repellat, sed sit voluptate voluptatum.
                                </p>
                            </div>
                        </div>
                        <div className={st.faqBox}>
                            <div className={st.faqQ + " " + "q q7"}>
                                <h6>What’s the difference between direct donation and yield donation?</h6>
                                <MdKeyboardArrowDown/>
                            </div>
                            <div className={st.faA + " " + "a a7"}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores atque dolor
                                    ea earum ex fuga iusto magni nisi obcaecati odit officia porro quae quibusdam
                                    repellat, sed sit voluptate voluptatum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className={st.footer}>
                <div className="box">
                    <div className={st.footerContent}>
                        <ul className={st.footerLeft}>
                            <a href="https://turbinex.io" target="_blank"
                               style={{fontWeight: '', fontSize: '16px'}}>
                                © 2022 Turbine X, LLC
                            </a>
                            <li>
                                <a href="#">Charity Login</a>
                            </li>
                            <li>
                                <a href="#">Status</a>
                            </li>
                            <li>
                                <a href="#">Status</a>
                            </li>
                        </ul>
                        <div className={st.footerRight}>
                            <a href="https://discord.gg/qXKE27dZVb" target="_blank">
                                <FaDiscord/>
                            </a>
                            <a href="https://twitter.com/ihelp_defi" target="_blank">
                                <FaTwitter/>
                            </a>
                            <a href="https://ihelp-finance.medium.com" target="_blank">
                                <FaMedium/>
                            </a>
                            <a href="https://github.com/iHelp-Finance" target="_blank">
                                <FaGithub/>
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
