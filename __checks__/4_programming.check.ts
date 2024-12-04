import { ApiCheck, Frequency } from 'checkly/constructs'

// You can use any TypeScript/JavaScript code to create and organize your checks.
const url = 'https://google.com'

const targets = [
  {
    path: '/images',
    tags: ['prod:east','staging:west']
  },
  {
    path: '/maps',
    tags: ['prod:west']
  }
]

for (const [index, target] of targets.entries() ) {
  new ApiCheck(`checkly-api-${index + 1}`, {
    name: `Google Check ${index + 1}: `,
    locations: ['eu-central-1', 'eu-west-2'],
    tags: target.tags,
    frequency: Frequency.EVERY_2H,
    request: {
    url: url + target.path,
      method: 'GET',
    },
  })
  
}

