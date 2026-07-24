import React from 'react'
import PageHero from '../components/shared/PageHero'
import PrivacyPolicy from '../components/legal/PrivacyPolicy'

const PrivacyPolicyPage = () => {
  return (
    <>
      <PageHero>
        <span className='text-dark'>Privacy </span>
        <span className='text-primary'>Policy</span>
      </PageHero>
      <PrivacyPolicy/>
    </>
  )
}

export default PrivacyPolicyPage

