import { makeTitle, makeDescription } from '../../util/document'

import TopNav from '../../components/TopNav'
import Footer from '../../components/Sections/Footer'
import ContactForm from '../../components/ContactForm'

const DOCUMENT_TITLE: string = 'Contact'

export const metadata = {
    title: makeTitle(DOCUMENT_TITLE),
    description: makeDescription(),
}

const ContactPage = async () => {
    return (
        <>
            <div className='site_page'>
                <div className='--maximize-footer'>
                    <TopNav static />
                    <section className='section --fit-content'>
                        <div className='section__inner'>
                            <h1>Contact</h1>
                            <p>Drop us a line! We'll be sure to get back to you as soon as possible.</p>
                            <ContactForm />
                        </div>
                    </section>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default ContactPage
