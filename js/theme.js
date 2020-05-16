var darkmode = true;
function toggleDarkMode() {
    if (darkmode) {
        // Set button
        $('#themeButton').text('PM');
        $('#themeButton').removeClass('btn-light');
        $('#themeButton').addClass('btn-dark');
        // Set theme
        $('#darkMode').remove();
        $('head').append('<link id="lightMode" rel="stylesheet" type="text/css" href="lightmode.css">');
    }
    else {
        // Set button
        $('#themeButton').text('AM');
        $('#themeButton').removeClass('btn-dark');
        $('#themeButton').addClass('btn-light');
        // Set theme
        $('#lightmode').remove();
        $('head').append('<link id="darkMode" rel="stylesheet" type="text/css" href="darkmode.css">');
    }
    darkmode = !darkmode;
}