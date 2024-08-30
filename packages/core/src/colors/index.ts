import type { LikeC4Theme } from '../types/theme'
import { ElementColors, elementColorValueProvider } from './element'
import { RelationshipColors, relationshipColorValueProvider } from './relationships'

export const defaultTheme = {
  elements: ElementColors,
  relationships: RelationshipColors,
  font: 'Arial',
  shadow: '#0a0a0a'
} satisfies LikeC4Theme

export { 
  ElementColors, 
  RelationshipColors,
  elementColorValueProvider,
  relationshipColorValueProvider
}
