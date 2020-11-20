import { renderDate } from './index'

describe('util', () => {
  test('Convert date to friendly ap format', () => {
    expect(renderDate('2018-03-09T19:28:23Z')).toEqual('March 9, 2018')
  })
})
