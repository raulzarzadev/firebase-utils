import { FirebaseClass } from '../index'

test('my first test', () => {
    const init = FirebaseClass.init
    expect(init({ projectName:'Firebase-utils' })).toBe('started')
})
