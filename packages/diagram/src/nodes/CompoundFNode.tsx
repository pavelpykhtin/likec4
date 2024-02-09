import { defaultTheme } from '@likec4/core'
import { Text } from '@mantine/core'
import { Handle, type NodeProps, Position } from '@xyflow/react'
import { clsx } from 'clsx'
import { scale, toHex } from 'khroma'
import { memo, useMemo } from 'react'
import type { CompoundNodeData } from '../types'
import { toDomPrecision } from '../utils'
import { useLikeC4Editor } from '../ViewEditorApi'
import classes from './CompoundFNode.module.css'
import { NavigateToBtn } from './shared/NavigateToBtn'

// type CompoundFNodeProps = Pick<NodeProps<CompoundNodeData>, 'id' | 'data'>
type CompoundFNodeProps = NodeProps<CompoundNodeData>

const compoundColor = (color: string, depth: number) =>
  toHex(
    scale(color, {
      l: -35 - 5 * depth,
      s: -15 - 5 * depth
    })
  )

export const CompoundFNode = memo<CompoundFNodeProps>(function CompoundNode({ id, data, width, height }) {
  // useTilg()
  const { color, depth = 0, ...compound } = data
  const colors = useMemo(() => {
    const colors = defaultTheme.elements[color]
    return {
      ...colors,
      fill: compoundColor(colors.fill, depth),
      stroke: compoundColor(colors.stroke, depth)
    }
  }, [color, depth])

  const w = toDomPrecision(width ?? compound.size.width)
  const h = toDomPrecision(height ?? compound.size.height)

  const editor = useLikeC4Editor()

  return (
    <div
      className={classes.container}
      data-likec4-color={color}
      data-likec4-shape={compound.shape}
      data-likec4-navigatable={!!compound.navigateTo}
      style={{
        // @ts-expect-error
        '--likec4-element-fill': colors.fill,
        '--likec4-element-stroke': colors.stroke
      }}
    >
      <Handle
        type="target"
        position={Position.Top}
        style={{ visibility: 'hidden' }}
      />
      <svg className={classes.indicator} viewBox={`0 0 ${w} ${h}`} width={w} height={h}>
        <rect
          x={-1}
          y={-1}
          width={w + 2}
          height={h + 2}
          rx={6}
        />
      </svg>
      <div
        className={clsx(classes.compound)}
      >
        <Text component="div" className={classes.title}>{compound.title}</Text>
      </div>
      {compound.navigateTo && editor.isNavigateBtnVisible && (
        <NavigateToBtn
          onClick={() => {
            editor.navigateTo(data)
          }}
          className={classes.navigateBtn} />
      )}
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ visibility: 'hidden' }}
      />
    </div>
  )
})
// }, (prev, next) => prev.id == next.id && isEqualSimple(prev.data, next.data))
