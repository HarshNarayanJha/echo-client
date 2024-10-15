/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

;(() => {
  'use strict'

  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = (theme) => localStorage.setItem('theme', theme)

  const getThemeUsed = () => localStorage.getItem('themeUsed')
  const setThemeUsed = (used) => localStorage.setItem('themeUsed', used)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = (theme) => {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  const showActiveTheme = (theme, focus = false) => {
    const themeSwitcher = document.querySelector('#bd-theme')

    if (!themeSwitcher) {
      return
    }

    const themeUsed = getThemeUsed()

    if (themeUsed) {
      const themeSwitcherDot = document.getElementById('bd-theme-dot')
      themeSwitcherDot.classList.add('d-none')
    }

    const themeSwitcherText = document.querySelector('#bd-theme-text')
    const activeThemeIcon = document.querySelector('.theme-icon-active i')
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
    const iconOfActiveBtn = btnToActive.querySelector('span i').className

    document.querySelectorAll('[data-bs-theme-value]').forEach((element) => {
      element.classList.remove('active')
      element.setAttribute('aria-pressed', 'false')
    })

    btnToActive.classList.add('active')
    btnToActive.setAttribute('aria-pressed', 'true')
    activeThemeIcon.className = iconOfActiveBtn
    const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
    themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)

    document.querySelectorAll('[data-bs-theme-value] > i').forEach((element) => {
      element.classList.add('d-none')
    })

    document.querySelector(`[data-bs-theme-value="${theme}"] > i`).classList.remove('d-none')

    if (focus) {
      themeSwitcher.focus()
    }
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-theme-value]').forEach((toggle) => {
      toggle.addEventListener('click', () => {
        const theme = toggle.getAttribute('data-bs-theme-value')
        setStoredTheme(theme)
        setTheme(theme)
        setThemeUsed(true)
        showActiveTheme(theme, true)
      })
    })
  })

  window.addEventListener('keydown', (e) => {
    if (e.key == 'D' && e.shiftKey) {
      let toggleTheme = getPreferredTheme()

      if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        toggleTheme = 'light'
      } else if (document.documentElement.getAttribute('data-bs-theme') == 'light') {
        toggleTheme = 'dark'
      }
      setStoredTheme(toggleTheme)
      setTheme(toggleTheme)
      showActiveTheme(toggleTheme, false)
    }
  })
})()
