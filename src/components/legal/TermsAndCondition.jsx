import React from 'react'

const TermsAndCondition = () => {
  const paragraphClass = "font-medium text-sm md:text-[15px] text-gray-700 leading-8 mt-4"
  return (
    <section className='max-w-5xl mx-auto py-12 md:py-16 px-6 md:px-10 lg:px-16 xl:px-20'>
      <h2 className='text-dark font-bold text-xl lg:text-2xl'>Terms & Conditions</h2>
      <p className={paragraphClass}>
        Welcome to our platform. These Terms & Conditions govern your access to and use of our website,
         mobile application, and related services. By accessing or using our platform, you agree to 
         comply with these terms. If you do not agree with any part of these Terms & Conditions, please 
         do not use our services.
      </p>
      <p className={paragraphClass}>
        These terms apply to all users, including customers, dairy farmers,
        collection partners, milk collection centres, and visitors accessing our
        platform.
      </p>
      <h3 className="text-dark font-bold text-xl lg:text-2xl mt-8">Use of Services</h3>
      <p className={paragraphClass}>
        Our platform provides digital solutions for dairy businesses, including
        milk delivery management, farmer management, collection centres, and
        related services. You agree to use our platform only for lawful purposes
        and in accordance with these Terms.
      </p>
      <ul className="list-disc font-medium text-sm md:text-[15px] text-gray-700 space-y-2 mt-4 pl-8">
        <li>Use the platform only for legitimate business activities.</li>
        <li>Provide accurate and up-to-date information.</li>
        <li>Maintain the confidentiality of your account credentials.</li>
        <li>Do not misuse, copy, or interfere with the platform.</li>
        <li>Do not attempt unauthorized access to our systems.</li>
      </ul>
      <h3 className="text-dark font-bold text-xl lg:text-2xl mt-8">User Responsibilities</h3>
      <p className={paragraphClass}>
        You are responsible for maintaining the security of your account and for
        all activities carried out using your account. Any misuse, fraudulent
        activity, or violation of these Terms may result in suspension or
        termination of your access.
      </p>
      <h3 className="text-dark font-bold text-xl lg:text-2xl mt-8">Account & Security</h3>
<p className={paragraphClass}>
  You are responsible for maintaining the confidentiality of your account
  credentials. Please notify us immediately if you suspect any unauthorized
  access to your account.
</p>
<h3 className="text-dark font-bold text-xl lg:text-2xl mt-8">Limitation of Liability</h3>
<p className={paragraphClass}>
    DairyHub shall not be liable for indirect, incidental,
    consequential, or special damages arising from the use or inability
    to use the platform. Users acknowledge that they use the platform
    at their own risk.
</p>
<h3 className="text-dark font-bold text-xl lg:text-2xl mt-8">Changes to Terms</h3>
<p className={paragraphClass}>
    We may update these Terms & Conditions periodically to reflect
    legal, operational, or service-related changes. Updated Terms will
    become effective immediately upon publication. Continued use of the
    platform constitutes acceptance of the revised Terms.
</p>

<h3 className="text-dark font-bold text-xl lg:text-2xl mt-8">Contact Us</h3>
<p className={paragraphClass}>
  If you have any questions regarding these Terms & Conditions, please
  contact us through our Contact Us page. We will be happy to assist you.
</p>

    </section>
  )
}

export default TermsAndCondition
