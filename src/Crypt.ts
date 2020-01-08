import { Files, OpenSSL, Arg } from 'nodejs-shell'

export function encrypt(): void {
  let file_path = Arg.v('file')
  let password = Arg.v('pw')
  OpenSSL.encrypt(file_path, password)
}

export function decrypt(): void {
  let file_path = Arg.v('file')
  let password = Arg.v('pw')
  file_path = file_path.endsWith('.enc') ? file_path : file_path + '.enc'
  OpenSSL.decrypt(file_path, password)
}

export function encrypt_all(): void {
  let config = Arg.v('cfg')
  let password = Arg.v('pw')

  Files.read_lines(config).forEach(it => {
    Files.validate(it)
  })
  Files.read_lines(config).forEach(it => {
    OpenSSL.encrypt(it, password)
  })
}

export function decrypt_all(): void {
  let config = Arg.v('cfg')
  let password = Arg.v('pw')

  Files.read_lines(config).forEach(it => {
    let file_path = it.endsWith('.enc') ? it : it + '.enc'
    Files.validate(file_path)
  })
  Files.read_lines(config).forEach(it => {
    let file_path = it.endsWith('.enc') ? it : it + '.enc'
    OpenSSL.decrypt(file_path, password)
  })
}
