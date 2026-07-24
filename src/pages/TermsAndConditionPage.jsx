import React from 'react'
import PageHero from '../components/shared/PageHero'
import TermsAndCondition from '../components/legal/TermsAndCondition'

const TermsAndConditionPage = () => {
  return (
    <>
      <PageHero>
        <span className='text-dark'>Terms </span>
        <span className='text-primary'>and Conditions</span>
      </PageHero>
      <TermsAndCondition/>
    </>
  )
}

export default TermsAndConditionPage
