import { NextApiRequest, NextApiResponse } from 'next'

import { sendEmailHelper } from '../../util/email'

const sendEmailRequest = (request: NextApiRequest, response: NextApiResponse) => {
    const { subject, body, sender, senderEmail } = request.body
    sendEmailHelper(subject, body, sender, senderEmail)
    response.status(200)
}

export default sendEmailRequest
