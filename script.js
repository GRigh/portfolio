$(function() {
    let theme = localStorage.getItem('theme') || 'light';
    setTheme(theme);
    $('.theme-dot').click(function() {
        let mode = $(this).data('mode');
        setTheme(mode);
    });
    function setTheme(mode) {
        $('#theme-style').attr('href','themes/' + mode + '.css');
        localStorage.setItem('theme', mode);
    }
});
