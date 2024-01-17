function daychange(day, curday) {
    curday = document.getElementById(curday);
    curday.style.display = 'none';

    
    alttag = day.getAttribute('alt');
    chosenday = document.getElementById(alttag);
    chosenday.style.display = 'block';
    
}
