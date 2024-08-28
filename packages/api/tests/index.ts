import { describe } from 'manten'

await describe('api', async ({ runTestSuite }) => {
  runTestSuite(import('./basic.test'))
})
