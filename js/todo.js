'use strict';
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currendtDate = new Date();
(() => document.querySelector('.date').innerHTML
    = `${days[currendtDate.getDay()]}<br>
    ${currendtDate.getMonth()}-${currendtDate.getDate()}-${currendtDate.getFullYear()}`)();

