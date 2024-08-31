/* eslint-disable @typescript-eslint/no-explicit-any */
import { LikeC4 } from '@/LikeC4'
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, extname, relative } from 'node:path'
import k from 'tinyrainbow'
import { createLikeC4Logger, startTimer } from '../../../logger'

type HandlerParams = {
  /**
   * The directory where c4 files are located.
   */
  path: string
  useDotBin: boolean
  /**
   * outfile directory
   */
  outfile: string
}

export async function handler({ path, useDotBin, outfile }: HandlerParams) {
  const logger = createLikeC4Logger('c4:export')

  const timer = startTimer(logger)
  const languageServices = await LikeC4.initForWorkspace(path, {
    logger: 'vite',
    graphviz: useDotBin ? 'binary' : 'wasm'
  })

  const model = await languageServices.builder.buildComputedModel()
  if (!model) {
    logger.warn('no model parsed')
    throw new Error('no model parsed')
  }

  if (extname(outfile) !== '.json') {
    outfile = outfile + '.json'
  }
  await mkdir(dirname(outfile), { recursive: true })

  const views = await languageServices.views.diagrams()

  const output = {
    ...model,
    views
  }

  const generatedSource = JSON.stringify(output, null, 2)

  await writeFile(outfile, generatedSource)

  logger.info(`${k.dim('generated')} ${relative(process.cwd(), outfile)}`)

  timer.stopAndLog(`✓ export in `)
}
