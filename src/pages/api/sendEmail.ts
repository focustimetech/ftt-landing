import aws from 'aws-sdk'
import { NextApiRequest, NextApiResponse } from 'next'

const RECIPIENTS: string[] = [
    'curtis@focustime.ca',
    'vlad@focustime.ca'
]

aws.config.loadFromPath('aws/config.json')
const ses = new aws.SES()

export interface IEmailData {
    subject: string
    body: string
    sender: string
    senderEmail: string
    reCaptchaValue: string
}

const sendEmailRequest = (request: NextApiRequest, response: NextApiResponse) => {
    const { subject, body, sender, senderEmail } = request.body
    const params: aws.SES.SendTemplatedEmailRequest = {
        Source: 'contact@focustime.ca',
        Destination: {
            ToAddresses: RECIPIENTS
        },
        Template: 'ContactTemplate',
        TemplateData: JSON.stringify({
            subject,
            body,
            sender,
            senderEmail
        })
    }
    ses.sendTemplatedEmail(params, (error: aws.AWSError, data: aws.SES.SendTemplatedEmailResponse) => {
        if (error) {
            response.status(500).end('Failed to send email:' + error)
        } else {
            response.status(200).end('Sent email successfully:' + data)
        }
    })
}

export default sendEmailRequest
