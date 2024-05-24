'use strict'

/***********************
 * 
 *  COMMENT JS BLOCK
 * 
 */

const footerCopyrightYearSpan = document.getElementById('footer-copyright-year')
const currentDate = new Date()
footerCopyrightYearSpan.innerText = currentDate.getFullYear()