import { encrypt, decrypt } from '../src/Crypt'
import { Files, Shell } from 'nodejs-shell'

describe('Crypt', () => {
  beforeAll(() => {
    Shell.copy('tests/files/test.txt', 'tests/files/test.copy')
  })

  test('encrypt', async () => {
    process.argv = ['file=tests/files/test.copy', 'pw=123']
    encrypt()
    expect(Files.exists('tests/files/test.copy.enc'))
  })

  test('fail_decrypt', async () => {
    process.argv = ['file=tests/files/test.copy.enc', 'pw=1234']
    expect(() => {
      decrypt()
    }).toThrowError('Incorrect Password. Unable to decrypt file')
  })

  test('successful_decrypt no .enc', async () => {
    process.argv = ['file=tests/files/test.copy', 'pw=123']
    decrypt()
    expect(Files.read('tests/files/test.copy')).toEqual('hello world')
  })

  test('successful_decrypt .enc', async () => {
    process.argv = ['file=tests/files/test.copy.enc', 'pw=123']
    decrypt()
    expect(Files.read('tests/files/test.copy')).toEqual('hello world')
  })

  afterAll(() => {
    Shell.rm('tests/files/test.copy')
    Shell.rm('tests/files/test.copy.enc')
  })
})
