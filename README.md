# Filecrypt

Encrypt and decrypt files with ease so that you can securely check them in to source control.

Files are encrypted with OpenSSL SHA-256 algorithm.

# Basic Usage

## Encrypt

Usage: `npx cryptfile encrypt file=<path-to-file> pw=<password>`

Example: `npx cryptfile encrypt file=./src/Crypt.ts pw=hunter2`

Output: `./src/Crypt.ts.enc` 

## Decrypt

Usage: `npx cryptfile decrypt file=<path-to-file> pw=<password>`

Example:
```
npx cryptfile decrypt file=./src/Crypt.ts pw=hunter2
npx cryptfile decrypt file=./src/Crypt.ts.enc pw=hunter2
```

Output: `./src/Crypt.ts` 

# Configuration File

## .filecrypt.cfg

```
<path-to-file-#1>
<path-to-file-#2>
<path-to-file-#3>
```

Example:

```
package.json
package.lock.json
src/Crypt.ts
```

## Encrypt from .cryptfile.cfg

Usage: `npx cryptfile encrypt cfg=<path-to-cryptfile.cfg> pw=<password≥`

Example: ```npx encrypt cryptfile cfg=.cryptfile.cfg pw=hunter2```

## Decrypt from .cryptfile.cfg

Usage: `npx cryptfile decrypt cfg=<path-to-cryptfile.cfg> pw=<password≥`

Example: `npx decrypt cryptfile cfg=.cryptfile.cfg pw=hunter2`
