import { BrowserCheck, Frequency } from 'checkly/constructs'

new BrowserCheck('homepage-check-1', {
    name: 'Checkly homepage',
    frequency: Frequency.EVERY_30M,
    locations: ['us-east-2', 'eu-west-2'],
    code: {
        entrypoint: './3_homepage.spec.ts',
    }
})
