import React from "react"

import IconGithub from './images/github'
import IconLinkedIn from './images/in'
import IconTwitter from './images/twitter'
import IconInstagram from './images/instagram'
import IconFaebook from './images/facebook'
import IconKeyBase from './images/keybase'

const SocialIconLinks = ({ iconClasses }) => {

  return (
    <>
      <a href="https://github.com/utsav09211" target="_blank" rel="noopener noreferrer">
        <IconGithub classes={`${iconClasses}`} />
      </a>
      <a href="https://www.linkedin.com/in/utsav-sharma-89586724/" target="_blank" rel="noopener noreferrer">
        <IconLinkedIn classes={`${iconClasses}`}  />
      </a>
      <a href="https://twitter.com/UtsavSharma08" target="_blank" rel="noopener noreferrer">
        <IconTwitter classes={`${iconClasses}`}  />
      </a>
      <a href="https://www.instagram.com/munkeykong_007/" target="_blank" rel="noopener noreferrer">
        <IconInstagram classes={`${iconClasses}`}  />
      </a>
      <a href="https://www.facebook.com/utsav199" target="_blank" rel="noopener noreferrer">
        <IconFaebook classes={`${iconClasses}`}  />
      </a>
      <a href="https://keybase.io/utsav09211sharma/chat" target="_blank" rel="noopener noreferrer">
        <IconKeyBase classes={`${iconClasses}`}  />
      </a>
    </>
  )
}

export default SocialIconLinks
