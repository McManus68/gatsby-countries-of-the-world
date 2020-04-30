import React from 'react'
import PropTypes from 'prop-types'

import style from './hero.module.scss'

import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import OnVisible from 'react-on-visible'
import HeroTitle from './hero-title'
import HeroParticles from './hero-particles'
import Separator from '../../ui/separator/separator'

const Hero = ({ me, section }) => {
  const { t } = useTranslation()
  return (
    <section data-section={section.name} id={section.name}>
      <div className={style.hero}>
        <OnVisible visibleClassName={style.animateIcon}>
          <FontAwesomeIcon icon={['fab', 'angellist']} size="4x" />
        </OnVisible>

        <OnVisible visibleClassName={style.zoomIn} className={style.header}>
          <span className={style.name}>{me.name}</span>
          <ul className={style.subTitle}>
            {me.bannerList.map((item, index) => {
              return <li key={index}>{item}</li>
            })}
          </ul>

          <HeroTitle title={me.designation} />
        </OnVisible>

        <OnVisible visibleClassName={style.zoomIn}>
          <Separator></Separator>
        </OnVisible>

        <OnVisible visibleClassName={style.fadeInUp}>
          <AnchorLink to="/#about-me" className={style.knowMore}>
            <span>{t('intro.button')}</span>
          </AnchorLink>
        </OnVisible>

        <HeroParticles />
      </div>
    </section>
  )
}

Hero.propTypes = {
  me: PropTypes.object.isRequired,
  section: PropTypes.object.isRequired,
}

export default Hero
