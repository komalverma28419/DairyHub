import React from 'react'

const PrivacyPolicy = () => {
    const paragraphClass = "font-medium text-sm md:text-[15px] text-gray-700 leading-8 mt-4"
  return (
    <section className='max-w-5xl mx-auto py-12 md:py-16 px-6 md:px-10 lg:px-16 xl:px-20'>
      <h2 className='text-dark font-bold text-xl lg:text-2xl'>PRIVACY POLICY</h2>
      <p className={paragraphClass}>This privacy policy explains how we collect, use, process and disclose information about you. 
        By using our website/ app/ platform and affiliated services, you consent to the terms of our 
        privacy policy (“Privacy Policy”) in addition to our ‘Terms of Use.’ We encourage you to read this
        privacy policy to understand the collection, use, and disclosure of your information from time to 
        time, to keep yourself updated with the changes and updates that we make to this policy.
      </p>
      <p className={paragraphClass}>
        This privacy policy describes our privacy practices for all websites, products and services that 
        are linked to it. However this policy does not apply to those affiliates and partners that have 
        their own privacy policy. In such situations, we recommend that you read the privacy policy on 
        the applicable site.
      </p>
      <h3 className='text-dark font-bold text-xl lg:text-2xl mt-8'>The collection, storage and use of information</h3>
      <p className={paragraphClass}>We may automatically store certain information including but not limited to information about your
        web browser, IP address, cookies stored on your device and other information about you based upon
        your behaviour on the website. We use this information to do internal research on our users’ 
        demographics, interests and behaviour to better understand, protect and serve our users. This 
        information is compiled and analyzed on an aggregated basis. This information may include the URL 
        that you just came from (whether this URL is on the website or not), which URL you next go to 
        (whether this URL is on the website or not), your computer browser information, your IP address, 
        and other information associated with your interaction with the website.
      </p>
      <p className={paragraphClass}>We may also share your Mobile IP/Device IP with third party(ies) and to the best of our knowledge,
         be-life and representations given to us by these third party(ies) this information is not stored
          by them.
      </p>
      <p className={paragraphClass}>We also collect and store personal information provided by you from time to time on the 
        website/app. We only collect and use such information from you that we consider necessary for 
        achieving a seamless, efficient and safe experience, customized to your needs including:
      </p>
      <ul className='list-disc font-medium text-sm md:text-[15px] text-gray-700 space-y-2 mt-4 pl-8'>
        <li>To enable the provision of services opted by you;</li>
        <li>To communicate necessary account and product/service related information from time to time;</li>
        <li>To allow you to receive quality customer care services;</li>
        <li>To undertake necessary fraud and money laundering prevention checks, and comply with the 
            highest security standards;</li>
        <li>To comply with applicable laws, rules and regulations; and</li>
        <li>To provide you with information and offers on products and services, on updates, on promotions,
             on related, affiliated or associated service providers and partners, that we believe would 
             be of interest to you
        </li>
      </ul>
      <p className={paragraphClass}>
        We also do use your contact information to send you notifications based on the tasks allotted to 
        you and also based on your interests and prior activity. The Company may also use contact 
        information internally to direct its efforts for product improvement, to contact you as a 
        survey respondent, to notify you if you win any contest; and to send you promotional materials from
        its contest sponsors or advertisers.
      </p>
      <h3 className='text-dark font-bold text-xl lg:text-2xl mt-8'>Contacts Permissions:</h3>
      <p className={paragraphClass}>
        If you allow us to access your contact list information including you and your contacts’ 
        e-mail ids and any other details saved therein, it enables us to provide social features to you 
        and your friends/contacts such as sharing your orders with your friends/contacts, inviting your 
        contacts to try our app, send across referral links to your friends/contacts, etc. We may also use
         this information to make recommendations for milk products. This information will be synced from 
         your phone and stored on our servers.
      </p>
      <p className={paragraphClass}>
        Further, you may from time to time choose to provide payment related financial information 
        (credit card, debit card, bank account details, name, billing address, shipping address, phone 
        number etc.) on the website. We are committed to keeping all such sensitive data/information safe 
        at all times and ensure that such data/information is only transacted over secure websites of 
        approved payment gateways which are digitally encrypted and provide the highest possible degree 
        of care available under the technology presently in use.
      </p>

    </section>
  )
}

export default PrivacyPolicy
