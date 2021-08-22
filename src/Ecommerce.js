import React from 'react'
import { useHistory } from 'react-router-dom';
import './Ecommerce.css';

function Ecommerce() {

    const history = useHistory();

    return (
        <div className="ecommrece__body">
            <div className="ecommerce__header">
                <div className="ecommerceheader__bar">
                    <button onClick={() => history.push('/')}>Home</button>
                    <h1>Ecommerce-website</h1>
                    <div className="ecommercebar__link">
                        <form action="https://vish-ecom.herokuapp.com/">
                            <input type="submit" value="Go to project" />
                        </form>
                    </div>

                </div>
                <p>This ecommerce website was built using Django framework.<br />
                    AWS database and bucket was used to store the whole project. </p>
            </div>
            <div className="django__desc">
                <h2>What is Django?</h2>
                <p>Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.
                    It’s free and open source. It works on MVT (Model View Template) architectural pattern.</p>
                <img src="https://scontent.fgau1-2.fna.fbcdn.net/v/t1.6435-9/219950185_4059095237522905_1788302553694071705_n.jpg?_nc_cat=109&ccb=1-4&_nc_sid=730e14&_nc_ohc=p-IHLAdk6foAX9oEgc4&_nc_ht=scontent.fgau1-2.fna&oh=2219fc41e94ce85263e0cedbd3fac665&oe=613A4387" alt="" />
            </div>
            <div className="core__functionality">
                <h2>Core Functionality:</h2>
                <img src="https://scontent.fgau1-1.fna.fbcdn.net/v/t1.6435-9/225159914_4059095274189568_4752685836140632966_n.jpg?_nc_cat=105&ccb=1-4&_nc_sid=730e14&_nc_ohc=J9DHfYJZW-kAX_iEaaC&_nc_ht=scontent.fgau1-1.fna&oh=81f91e8f9cdf2dab13b73682214b2780&oe=6138745E" alt="" />
            </div>
            <div className="DB__models">
                <h2>Database Models:</h2>
                <img src="https://scontent.fgau1-1.fna.fbcdn.net/v/t1.6435-9/232207650_4059095257522903_4025945195145742709_n.jpg?_nc_cat=103&ccb=1-4&_nc_sid=730e14&_nc_ohc=U93Sl_GcTh0AX_m1b__&_nc_ht=scontent.fgau1-1.fna&oh=fcc4574a6664af23ad14487ab3ee5b46&oe=613A8623" alt="" />
                <p>A great ecommerce website is that one which has the facility of checkout with or without
                    logged in to a website. My website gives the facility to checkout as guest (using cookie)
                    or as an authenticated user. It asks for shipping address in case the product is non-digital.
                    The AWS database and bucket has been used to store the whole project.
                </p>
            </div>
            <div className="ecom_snaps">
                <div className="ecom__link">
                    <form action="https://vish-ecom.herokuapp.com/">
                        <input type="submit" value="Go to project" />
                    </form>
                </div>

                <h2>Project Snaps:</h2>
                <div className="ecom__row1">
                    <img src="https://scontent.fgau1-1.fna.fbcdn.net/v/t1.6435-9/224649385_4047003138732115_6090231025996933394_n.jpg?_nc_cat=103&ccb=1-4&_nc_sid=730e14&_nc_ohc=40f1fIm3Yt4AX_g8UJK&_nc_ht=scontent.fgau1-1.fna&oh=c2ce58a29138b47c9cb5beaa62dadd27&oe=6139160C" alt="" />
                    <img src="https://scontent.fgau1-1.fna.fbcdn.net/v/t1.6435-9/223186377_4047002935398802_5039669452068451561_n.jpg?_nc_cat=105&ccb=1-4&_nc_sid=730e14&_nc_ohc=W4_diSpqUX4AX8OUmlz&_nc_ht=scontent.fgau1-1.fna&oh=f1e95e2008c161c215e6f557848c1eb6&oe=61382827" alt="" />
                </div>
                <div className="ecom__row2">
                    <img src="https://scontent.fgau1-1.fna.fbcdn.net/v/t1.6435-9/233629418_4047002922065470_4549823050275980925_n.jpg?_nc_cat=103&ccb=1-4&_nc_sid=730e14&_nc_ohc=KQoQ_0_5vTUAX99aOjn&_nc_ht=scontent.fgau1-1.fna&oh=c1a54592537c955e2773ad1178523aef&oe=613B1D9E" alt="" />
                    <img src="https://scontent.fgau1-1.fna.fbcdn.net/v/t1.6435-9/230814442_4059380207494408_1324632612027914163_n.jpg?_nc_cat=104&ccb=1-4&_nc_sid=730e14&_nc_ohc=yfJ4tQzxwnYAX_yBW6i&_nc_ht=scontent.fgau1-1.fna&oh=6481f27ebd6a3e8c381867713beec752&oe=61387DE8" alt="" />
                </div>
                <div className="ecom__row3">
                    <img src="https://scontent.fgau1-1.fna.fbcdn.net/v/t1.6435-9/225732559_4059354107497018_5862614800846991622_n.jpg?_nc_cat=101&ccb=1-4&_nc_sid=730e14&_nc_ohc=TD_GlrCXXXAAX81kGe6&tn=myiA4AwsHfpV-BcN&_nc_ht=scontent.fgau1-1.fna&oh=ec0d3a6f59951e4679f2df2aae5113ea&oe=613B5B17" alt="" />
                    <img src="https://scontent.fgau1-2.fna.fbcdn.net/v/t1.6435-9/229471866_4059354207497008_435773345847541226_n.jpg?_nc_cat=109&ccb=1-4&_nc_sid=730e14&_nc_ohc=pN3XZbyeN7IAX9Vf2RE&_nc_ht=scontent.fgau1-2.fna&oh=9bd8c5016d995f32299a1767b8027d7a&oe=6138FE11" alt="" />
                </div>
                <p>*As my AWS account was charging me for storing the project in it, I've closed my account*
                    <br/>
                    So no product images are visible now as it was stored in AWS bucket. 
                </p>
            </div>

        </div>
    )
}

export default Ecommerce;
