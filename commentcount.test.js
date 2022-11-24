/**
 * @jest-environment jsdom
 */

const { commentsCounter } = require('./src/modules/commentCounter.js');

describe('no comments', () => {
    test('count comments', () => {
        const arr = []
        expect(commentsCounter(arr)).toBe(0)
    })
})

describe('number of comments', () => {
  const p = document.createElement('p');
    test('display number of comments', () => {
        const comment = [
          {
            creation_date: '2022-10-26',
            username: 'joseph',
            comment: 'lovely meal',
          }, 
          {
            creation_date: '2022-10-26',
            comment: 'delecious meal',
            username: 'oti',
          }
        ];
        expect(commentsCounter(comment,p)).toBe(2);
    })
})