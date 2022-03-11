import type { LanguageFn } from 'highlight.js'
import hljs from 'highlight.js/lib/core'
import hljsVuePlugin from '@highlightjs/vue-plugin'

import go from 'highlight.js/lib/languages/go'
import css from 'highlight.js/lib/languages/css'
import sql from 'highlight.js/lib/languages/sql'
import php from 'highlight.js/lib/languages/php'
import xml from 'highlight.js/lib/languages/xml'
import json from 'highlight.js/lib/languages/json'
import bash from 'highlight.js/lib/languages/bash'
import less from 'highlight.js/lib/languages/less'
import scss from 'highlight.js/lib/languages/scss'
import shell from 'highlight.js/lib/languages/shell'
import nginx from 'highlight.js/lib/languages/nginx'
import stylus from 'highlight.js/lib/languages/stylus'
import python from 'highlight.js/lib/languages/python'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'

const languages: Record<string, LanguageFn> = {
  go,
  css,
  sql,
  php,
  xml,
  json,
  bash,
  less,
  scss,
  shell,
  nginx,
  stylus,
  python,
  javascript,
  typescript
}

Object.keys(languages).forEach((name) => hljs.registerLanguage(name, languages[name]))

// dynamic style for highlight.js
// https://github.com/vitejs/vite/issues/3246
// https://github.com/vitejs/vite/commit/e1de8a888ea9adb9dc415cf74aec43dfa83aa526
import _lightStyle from 'highlight.js/styles/github.css?inline'
import _darkStyle from 'highlight.js/styles/github-dark-dimmed.css'

export const getHighlightThemeStyle = (darkTheme: boolean) => {
  return darkTheme ? _darkStyle : _lightStyle
}

export default hljsVuePlugin
