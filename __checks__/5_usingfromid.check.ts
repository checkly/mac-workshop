import { ApiCheck, Frequency, AssertionBuilder, SmsAlertChannel } from 'checkly/constructs'

const timsPhone = SmsAlertChannel.fromId('240903')

new ApiCheck('json-test-api-check-2', {
  name: 'JSON test api',
  alertChannels: [timsPhone],
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