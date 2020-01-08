import { encrypt_all, decrypt_all } from '../src/Crypt'
import { Files, Shell } from 'nodejs-shell'

describe('Crypt Config', () => {
  beforeAll(() => {
    Shell.copy('tests/files/test.txt', 'tests/files/test.copy1')
    Shell.copy('tests/files/test.txt', 'tests/files/test.copy2')
  })

  test('Encrypt All', () => {
    process.argv = ['cfg=./tests/files/.cryptfile.cfg', 'pw=123']
    encrypt_all()
    expect(Files.exists('tests/files/test.copy1.enc'))
    expect(Files.exists('tests/files/test.copy2.enc'))
  })

  test('Decrypt All', () => {
    Shell.rm('tests/files/test.copy1')
    Shell.rm('tests/files/test.copy2')
    process.argv = ['cfg=./tests/files/.cryptfile.cfg', 'pw=123']
    decrypt_all()
    expect(Files.exists('tests/files/test.copy1.enc'))
    expect(Files.exists('tests/files/test.copy2.enc'))
    expect(Files.read('tests/files/test.copy1')).toEqual('hello world')
    expect(Files.read('tests/files/test.copy2')).toEqual('hello world')
  })

  afterAll(() => {
    Shell.rm('tests/files/test.copy1')
    Shell.rm('tests/files/test.copy1.enc')
    Shell.rm('tests/files/test.copy2')
    Shell.rm('tests/files/test.copy2.enc')
  })
})
