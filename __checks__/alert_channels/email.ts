// Construct
import { EmailAlertChannel } from 'checkly/constructs'

export const timsEmail = new EmailAlertChannel('email-1', { 
    address: 'tim@checklyhq.com'
})