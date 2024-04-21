import type { RawGrammar } from 'shiki'

export const grammarGlob: RawGrammar = {
  name: 'glob',
  patterns: [
    { include: '#root' },
  ],
  repository: {
    '$base': undefined!,
    '$self': undefined!,
    'root': {
      patterns: [
        { include: '#star' },
        { include: '#slash' },
        { include: '#bracket-round' },
        { include: '#bracket-square' },
        { include: '#bracket-curly' },
        { include: '#operator' },
      ],
    },
    'star': {
      match: '\\*+',
      name: 'puctuation.definition.glob',
    },
    'operator': {
      match: '[?]',
      name: 'keyword.operator.glob',
    },
    'slash': {
      match: '[/\\\\]+',
      name: 'punctuation.definition.glob',
    },
    'bracket-round': {
      begin: '(\\()',
      beginCaptures: {
        0: { name: 'punctuation.bracket.round.glob' },
      },
      endCaptures: {
        0: { name: 'punctuation.bracket.round.glob' },
      },
      patterns: [
        { include: '#root' },
      ],
      end: '(\\))',
    },
    'bracket-square': {
      begin: '(\\[)',
      beginCaptures: {
        0: { name: 'punctuation.bracket.square.glob' },
      },
      end: '(\\])',
      endCaptures: {
        0: { name: 'punctuation.bracket.square.glob' },
      },
      patterns: [
        {
          match: '[^\\]]',
          name: 'constant.glob',
        },
      ],
    },
    'bracket-curly': {
      begin: '(\\{)',
      beginCaptures: {
        0: { name: 'punctuation.bracket.curly.glob' },
      },
      end: '(\\})',
      endCaptures: {
        0: { name: 'punctuation.bracket.curly.glob' },
      },
      patterns: [
        {
          match: '[^\\],]',
          name: 'constant.glob',
        },
        {
          match: ',',
          name: 'punctuation.definition.glob',
        },
      ],
    },
    'string': {
      name: 'string.glob',
      match: '.+',
    },
  },
  scopeName: 'text.glob',
}
