import aws from 'aws-sdk'
import axios, { AxiosResponse } from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

const RECIPIENTS: string[] = [
    'curtis@focustime.ca',
    'vlad@focustime.ca'
]

const RECAPTCHA_SECRET = '6LfMuiYTAAAAAKa2BxBTzoKWEfAfkJlZf1D1NH33'

aws.config.loadFromPath('aws/config.json')
const ses = new aws.SES()

export interface IEmailData {
    subject: string
    body: string
    sender: string
    senderEmail: string
    reCaptchaValue: string
}

interface IReCaptchaData {
    success: boolean
    challenge_ts: string
    hostname: string
    'error-codes'?: any[]
}

interface ISendMailRequest extends NextApiRequest {
    body: IEmailData
}

interface IReCaptchaResponse extends AxiosResponse {
    data: IReCaptchaData
}

const sendEmailRequest = (request: NextApiRequest, response: NextApiResponse) => {
    const { subject, body, sender, senderEmail, reCaptchaValue } = request.body
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

    const reCaptchaData = {
        secret: RECAPTCHA_SECRET,                   // Our secret key
        response: reCaptchaValue,                   // The ReCAPTCHA value
        remoteip: request.connection.remoteAddress  // User's IP Address
    }

    // Verify ReCAPTCHA with Google.
    axios.post(`https://www.google.com/recaptcha/api/siteverify?${new URLSearchParams(reCaptchaData).toString()}`)
        .then((res: IReCaptchaResponse) => {
            const { success } = res.data

            if (success) {
                // Send email through AWS.
                ses.sendTemplatedEmail(params, (error: aws.AWSError, data: aws.SES.SendTemplatedEmailResponse) => {
                    if (error) {
                        response.status(500).end('Failed to send email:' + error)
                    } else {
                        response.status(200).end('Sent email successfully:' + data)
                    }
                })
            } else {
                response.status(400).end('Failed ReCAPTCHA verifiation.')
            }
        })
        .catch((err: any) => {
            response.status(500).end('Could not verify via ReCAPTCHA.')
        })
}

export default sendEmailRequest
