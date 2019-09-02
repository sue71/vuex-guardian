import * as fs from 'fs-extra'
import * as path from 'path'
import Watchpack from 'watchpack'
import { Config } from './types'
import { config as defaultConfig } from './config'
import { emitFiles } from './emitFiles'
//_______________________________________________________
//
export function run(config: Config) {
  const storeDir = path.resolve(config.storeDir)
  const distDir = path.resolve(config.distDir)
  const constants = {
    ...defaultConfig.constants,
    ...config.constants
  }
  fs.removeSync(distDir)

  function onChange(filePath: string) {
    ;(async () => {
      if (!fs.existsSync(filePath)) {
        const distTarget = path.resolve(
          process.cwd +
            config.distDir +
            filePath.replace(storeDir, '')
        )
        fs.removeSync(distTarget)
      }
      await emitFiles(distDir, storeDir, config, constants)
    })()
  }

  if (config.build) {
    emitFiles(distDir, storeDir, config, constants)
  } else {
    const wp = new Watchpack({})
    wp.watch([], [storeDir])
    wp.on('change', onChange)
  }
}
