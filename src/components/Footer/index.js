import React from 'react'
import '../../assets/stylesheets/application.css';
import { Link } from 'react-router-dom'
import moment from "moment";
import { displayHeaderAndFooterInIframe } from '../../utils/utils'

export const Footer = () => {
  const displayFooter = displayHeaderAndFooterInIframe()

  const footer = (
    <footer className="footer">
      <div className="container">
        <p className="rights">{moment().format('YYYY')} Echelon launchpad. All rights reserved.</p>
        <Link className="logo" to='/'/>
        <div className="socials">
          <a href="https://twitter.com/" className="social social_twitter">Twitter</a>
          <a href="http://echelonlaunchpad.online" className="social social_oracles">Echelon launchpad</a>
          <a href="https://t.me/echelonlaunchpad" className="social social_telegram">Telegram</a>
          <a href="https://github.com/echelonvision/launchpad" className="social social_github">GitHub</a>
        </div>
      </div>
    </footer>
  )

  return displayFooter ? footer : null
}
