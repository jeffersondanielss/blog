var v = document.location.search.split('&')[0]
if(v.substring(v.length -1) === 'b') localStorage.setItem('theme-ui-color-mode', 'dark')