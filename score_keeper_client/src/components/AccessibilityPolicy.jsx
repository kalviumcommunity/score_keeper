import React from 'react'

function AccessibilityPolicy() {
  return (
    <div style={{borderBottom:"1px solid white"}}>
        <div className='title'>
            <h2>Accessibility Policy</h2>
        </div>
        <div className='content-pp' style={{width:"85%", margin:"auto", marginBottom:"10vh"}}>
            <h3 className='heading' style={{fontSize:"xx-large", marginBottom:"5vh"}}>Effective Date: [Date]</h3>
            <p className='heading-content'>
                We are committed to ensuring that our badminton website ("Website") is accessible to all users, including individuals with disabilities. We strive to follow the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA to make our Website user-friendly and accessible.
            </p>

            <h2 className='heading'>1. Accessibility Features:</h2>
            <p className='heading-content'>
                We have implemented the following accessibility features on our Website:
            </p>
            <ul className='sub-heading'>
                <li>Alternative text for images and non-text content to provide descriptive information.</li>
                <li>Clear and consistent navigation throughout the Website.</li>
                <li>Resizable text options for users with visual impairments.</li>
                <li>Keyboard accessibility for users who cannot use a mouse.</li>
                <li>Color contrast to ensure content is distinguishable for users with visual impairments.</li>
            </ul>

            <h2 className='heading'>2. Accessibility Support:</h2>
            <p className='heading-content'>
                If you encounter any accessibility barriers while using our Website or have suggestions for improvement, please contact us. We welcome your feedback and are committed to making the necessary changes to enhance accessibility.
            </p>

            <h2 className='heading'>3. Third-Party Content:</h2>
            <p className='heading-content'>
                Our Website may contain third-party content or links to external websites. We cannot guarantee the accessibility of third-party content, as it is beyond our control. However, we strive to provide accessible alternatives or inform users about the accessibility limitations of such content.
            </p>

            <h2 className='heading'>4. Ongoing Efforts:</h2>
            <p className='heading-content'>
                We are continuously working to improve the accessibility of our Website. Our team regularly reviews the Website, conducts accessibility audits, and implements necessary updates to ensure compliance with accessibility standards.
            </p>

            <h2 className='heading'>5. Contact Us:</h2>
            <p className='heading-content'>
                If you have any questions or need further assistance regarding the accessibility of our Website, please contact us at, <a href="mailto:chandan1012004@gmail.com">chandan1012004@gmail.com</a> . We will make every effort to address your concerns and provide you with the information you need.
            </p>
        </div>
    </div>
  )
}

export default AccessibilityPolicy