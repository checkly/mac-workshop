// Constructs
import { ApiCheck, Frequency, AssertionBuilder } from 'checkly/constructs'
// Import from file dependency 
import { timsEmail } from './alert_channels/email'

// Construct instantiation
new ApiCheck('json-test-api-check-1', {
  name: 'JSON test api',
  alertChannels: [timsEmail],
  frequency: Frequency.EVERY_30M,
  request: {
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
    assertions: [
      AssertionBuilder.statusCode().equals(200),
      AssertionBuilder.jsonBody('$[0].id').isNotNull(),
    ],
  },
})
