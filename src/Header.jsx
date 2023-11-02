import React from 'react'
import './Header.css';
const Header = () => {
  return (
    <div className="body11">
    <div className="mainBodyContainer">

        <div className="imageContainer">
            <img src="https:/www.esalink.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fiso-27001.c9102e6a.webp&w=1080&q=75"
                className="webIconImage" />
        </div>
        <h1 className="HeadingContainer">
            Dematerialization
            <br />
            au service de votre business
        </h1>
        <div className="descriptionTextContainer">
           Esalink supports you in the digitalization of your B2B flows
        </div>
        <div className="twoButttonContainer">
            <div className="buttons">Trouver votre solution EDI</div>
            <div className="buttons">Passer à la facturation électronique</div>
        </div>
        <img src="https://www.esalink.com/_next/static/media/globe_white_block.6699e2aa.svg" className="globeIcon"
            alt="" />
        <div className="bottomImageIcons">
            <img src="https://www.esalink.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fgenerix-white.e5ab8b0c.webp&w=256&q=75"
                alt="" className="bootomIcons" />
            <img src="https://www.esalink.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcleo-white.ad4618e5.webp&w=128&q=75"
                alt="" className="bootomIcons" />
            <img src="https://www.esalink.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FHUBTIMIZE-white.19537ec6.webp&w=256&q=75"
                alt="" className="bootomIcons" />
            <img src="https://www.esalink.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fibm-white.7d4e8780.webp&w=128&q=75"
                alt="" className="bootomIcons" />
            <img src="https://www.esalink.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fgs1-white.c6b5f462.webp&w=128&q=75"
                alt="" className="bootomIcons" />
            <img src="https://www.esalink.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Ffne-white.f8c056bc.webp&w=640&q=75"
                alt="" className="bootomIcons" />
        </div>
    </div>
</div>
  )
}

export default Header