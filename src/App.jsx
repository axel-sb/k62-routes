/* eslint-disable no-nested-ternary */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable no-void */
/* eslint-disable no-cond-assign */
/* eslint-disable eqeqeq */
/* eslint-disable no-return-assign */
/* eslint-disable no-shadow */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import './App.css'
import { Route, Routes } from 'react-router-dom'
import 'yet-another-react-lightbox/styles.css'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, useConnector } from 'react-instantsearch-hooks-web'
import './styles.css'
import connectAutocomplete from 'instantsearch.js/es/connectors/autocomplete/connectAutocomplete'
import Home from './pages/Home'
import CBE from './pages/CBE'
import SST from './pages/SST'
import UUR from './pages/UUR'
import NotFound from './pages/NotFound'

const Stretchy = (function (e) {
  function t(e) {
    const t =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document
    return e instanceof Node || e instanceof Window
      ? [e]
      : Array.from(typeof e === 'string' ? t.querySelectorAll(e) : e || [])
  }
  const i = {
    base: `textarea, select:not([size]), input:not([type]), input[type="${'text number url email tel'
      .split(' ')
      .join('"], input[type="')}"]`,
    filter: '*',
  }
  function n(e) {
    if (l(e)) {
      let t
      const i = getComputedStyle(e)
      let n = 0
      !e.value && e.placeholder && ((t = !0), (e.value = e.placeholder))
      const o = e.nodeName.toLowerCase()
      if (o == 'textarea')
        (e.style.height = '0'),
          i.boxSizing == 'border-box'
            ? (n =
                e.offsetHeight -
                parseFloat(i.paddingTop) -
                parseFloat(i.paddingBottom))
            : i.boxSizing == 'content-box' &&
              (n = -e.clientHeight + parseFloat(i.minHeight)),
          (e.style.height = `${e.scrollHeight + n}px`)
      else if (o == 'input')
        if (((e.style.width = '1000px'), e.offsetWidth)) {
          // eslint-disable-next-line no-extra-semi
          ;(e.style.width = '0'),
            i.boxSizing == 'border-box'
              ? (n = e.offsetWidth)
              : i.boxSizing == 'padding-box'
              ? (n = e.clientWidth)
              : i.boxSizing == 'content-box' && (n = parseFloat(i.minWidth))
          let r = Math.max(n, e.scrollWidth - e.clientWidth)
          e.style.width = `${r}px`
          for (
            let a = 0;
            a < 10 && ((e.scrollLeft = 1e10), e.scrollLeft != 0);
            a++
          )
            (r += e.scrollLeft), (e.style.width = `${r}px`)
        } else e.style.width = `${e.value.length + 1}ch`
      else if (o == 'select') {
        if (e.selectedIndex == -1) return
        let d
        const s = e.selectedIndex > 0 ? e.selectedIndex : 0
        let c = document.createElement('_')
        // eslint-disable-next-line no-restricted-syntax, guard-for-in
        for (const h in ((c.textContent = e.options[s].textContent),
        e.parentNode.insertBefore(c, e.nextSibling),
        i)) {
          const u = i[h]
          !/^(width|webkitLogicalWidth|length)$/.test(h) &&
            typeof u === 'string' &&
            h in c.style &&
            ((c.style[h] = u), /appearance$/i.test(h) && (d = h))
        }
        // eslint-disable-next-line no-extra-semi
        ;(c.style.width = ''),
          c.offsetWidth > 0 &&
            ((e.style.width = `${c.offsetWidth}px`),
            (i[d] && i[d] === 'none') ||
              (e.style.width = `calc(${e.style.width} + 2.1em)`)),
          c.parentNode.removeChild(c),
          (c = null)
      }
      t && (e.value = '')
    }
  }
  let o
  function r(e) {
    const o =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : document.documentElement
    t(e || i.base, o).forEach((e) => {
      let t
      ;(t = e.matches) !== null && void 0 !== t && t.call(e, i.filter) && n(e)
    })
  }
  function l(e) {
    return (
      e && e.parentNode && e.matches && e.matches(i.base) && e.matches(i.filter)
    )
  }
  function a(e) {
    e.target.matches(i.base) && e.target.matches(i.filter) && n(e.target)
  }
  function d() {
    let e
    const n =
      arguments.length > 0 && void 0 !== arguments[0]
        ? arguments[0]
        : document.documentElement
    ;(i.filter =
      ((e = document.currentScript) === null || void 0 === e
        ? void 0
        : e.getAttribute('data-filter')) ||
      (t('[data-stretchy-filter]').pop() || document.body).getAttribute(
        'data-stretchy-filter'
      ) ||
      i.filter),
      n.addEventListener('input', a),
      n.addEventListener('change', a),
      r(void 0, n),
      o ||
        (o = new MutationObserver((e) => {
          e.forEach((e) => {
            e.type == 'childList' && r(e.addedNodes)
          })
        })),
      o.observe(n, { childList: !0, subtree: !0 })
  }
  const s = new Promise((e) => {
    document.readyState == 'complete'
      ? e()
      : document.addEventListener('DOMContentLoaded', e),
      document.addEventListener('load', e)
  })
  return (
    document.currentScript &&
      (d(), s.then((e) => d()), window.addEventListener('load', () => d())),
    (e.$$ = t),
    (e.active = !0),
    (e.init = d),
    (e.ready = s),
    (e.resize = n),
    (e.resizeAll = r),
    (e.resizes = l),
    (e.selectors = i),
    Object.defineProperty(e, '__esModule', { value: !0 }),
    e
  )
})({})
//# sourceMappingURL=stretchy.iife.min.js.map

export function useAutocomplete(props) {
  return useConnector(connectAutocomplete, props)
}

export function Autocomplete(props) {
  const { indices, currentRefinement, refine } = useAutocomplete(props)
}

const searchClient = algoliasearch(
  'J4OKBAUNZR',
  '243e19ac5b0b758390fdd2faf42dfa0e'
)

function App() {
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName="catalogue">
        {/* ... */}
      </InstantSearch>
      <div>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<CBE />} path="/cbe" />
          <Route element={<SST />} path="/sst" />
          <Route element={<UUR />} path="/uur" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </div>
      <div /> {/*empty, self-closing tag just for fun*/}
    </>
  )
}

export default App
