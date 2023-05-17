/**
 * External depedencies
 */
const path = require('node:path')
const { execSync } = require('node:child_process')
const fs = require('fs-extra')
const simpleGit = require('simple-git')
const consolji = require('consolji')

/**
 * Internal depedencies
 */
const srcPath = path.resolve(__dirname, '..', 'src')
const vsExtPath = path.resolve(__dirname, '..', 'temp')
const destSVGPath = path.resolve(__dirname, '..', 'svg')
const commitLockPath = path.resolve(__dirname, '..', 'upstream.commit')

const vsExtExecOptions = {
   cwd: vsExtPath,
   stdio: 'inherit',
}
const distIconsExecOptions = {
   cwd: path.resolve(destSVGPath),
   stdio: 'inherit',
}

async function main() {
   await fs.remove(vsExtPath)
   await fs.remove(destSVGPath)
   await fs.ensureDir(destSVGPath)

   consolji.log('[1/7] Cloning nyxblabs/materialiconic into temporary cache.')
   const git = simpleGit()
   await git.clone('https://github.com/nyxblabs/materialiconic.git', vsExtPath, [
      '--depth',
      '100', // fetch only last 100 commits. Guesswork, could be too shallow if upstream doesnt release often
   ])

   const commit = fs.readFileSync(commitLockPath, { encoding: 'utf8' })?.trim()
   consolji.log('Checking out to upstream commit:', commit)
   const upstreamGit = simpleGit(vsExtPath)
   await upstreamGit.checkout(commit, ['--force'])

   consolji.log('[2/7] Terminate Git repository in temporary cache.')
   await fs.remove(path.resolve(vsExtPath, '.git'))

   consolji.log('[3/7] Install PNPM dependencies for VSC extension.')
   execSync('nyxi --ignore-scripts', vsExtExecOptions)

   consolji.log('[4/7] Terminate Git tracking in temporary cache.')
   await fs.copy(path.resolve(vsExtPath, 'icons'), path.resolve(destSVGPath))

   consolji.log('[5/7] Optimise extension icons using SVGO.')
   execSync('npx svgo -r .', distIconsExecOptions)

   consolji.log('[6/7] Run build tasks for VSC extension.')
   execSync('nyxr build', vsExtExecOptions)

   consolji.log('[7/7] Copy file icon configuration to source code directory.')
   await fs.copy(
      path.resolve(vsExtPath, 'dist', 'material-icons.json'),
      path.resolve(srcPath, 'icon-map.json'),
   )

   await fs.remove(vsExtPath)
}

main()
