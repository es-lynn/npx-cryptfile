#!/usr/bin/env node
import { Arg } from 'nodejs-shell'
import { decrypt, decrypt_all, encrypt, encrypt_all } from './src/Crypt'
import { StringUtil as _ } from '@aelesia/commons'
;(async function(): Promise<void> {
  try {
    let command = Arg.v_first_enum(['encrypt', 'decrypt', 'encrypt_all', 'decrypt_all'])

    if (command === 'encrypt') {
      encrypt()
    } else if (command === 'decrypt') {
      decrypt()
    } else if (command === 'encrypt_all') {
      encrypt_all()
    } else if (command === 'decrypt_all') {
      decrypt_all()
    } else {
      throw Error('InvalidArgumentException')
    }
  } catch (e) {
    console.error((e?.name ?? 'Error') + ': ' + e?.message)
    console.error(_.lines(e.stack)[1])
    process.exit(1)
  }
})()
