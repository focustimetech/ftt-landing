import aws from 'aws-sdk'

const RECIPIENTS: string[] = [
    'curtis@focustime.ca',
    'vlad@focustime.ca'
]

aws.config.loadFromPath('aws/config.json')
const ses = new aws.SES()

/**
 * Sends an email to each of the recipients given by `RECIPIENTS`.
 */
export const sendEmailHelper = (subject: string, body: string, sender: string, senderEmail: string) => {
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
            console.log('Failed to send email:', error)
        } else {
            console.log('Sent email successfully:', data)
        }
    })
}
