var v = document.location.search.split('&')[0]
v.substring(v.length -1) === 'b'
  ? localStorage.setItem('theme-ui-color-mode', 'dark')
  : localStorage.setItem('theme-ui-color-mode', 'light')