import { NextApiRequest, NextApiResponse } from 'next'

const sendEmailRequest = (request: NextApiRequest, response: NextApiResponse) => {
    const { subject, body, sender, senderEmail, reCaptchaValue } = request.body
    console.log({ subject, body, sender, senderEmail, reCaptchaValue });

    setTimeout(() => {
        response.status(201).end();
    }, 2000)
}

export default sendEmailRequest
