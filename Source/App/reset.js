const resetUdThemeTd = () => {
    let udTheme = document.querySelectorAll('link[href="/api/internal/dashboard/theme"]')
    udTheme[0].sheet.cssRules[9].style.padding = 'unset'
}
export default resetUdThemeTd