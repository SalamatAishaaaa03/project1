# practice
[Base Apparel coming soon page challenge on Frontend Mentor]
## Table of contents

- [Review] (#review)
- [Call] (#call)
- [Links] (#links)
- [My process] (#my-process)
- [Built-in] (#built-in)
- [What I learned] (#what-I-learned)
- [The continued development] (#continue development)
- [Useful resources] (#useful resources)
- [Author](#Aisha)
- [Author](#Albina)

## Overview

We take project from the  https://www.frontendmentor.io .https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0
### The challenge

Create a site with photo,bg-images ,input
### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS container
- Mobile-first workflow
- JS library
-Forms with text and a button


### What I learned

We learned how to create a website. Apply a design to it . We used html, css, js for this)



### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.



###What I learned


In the process of doing this work, we have deepened our knowledge of HTMl, CSS and Javascript. We also studied new functions of these programming languages. For example, we learned how to replace a button with a picture. Also connect various fonts from the Internet. Set colors using a gradient. We also learned the functions thanks to which you can check the spelling of the email address, as well as the functions that can add a class to CSS. In most cases, we improved our skills with these programming languages.

These are examples from our code that are the most successful and new to us:

html
<form id="form"> 
<input type="email" placeholder="Email Address">
<img src="images/icon-error.svg" alt="icon-error"  class="error-icon"> 
<button> <img src="images/icon-arrow.svg" alt="icon-arrow" > </button>

css
body {
	font-family:Josefin Sans ;
	background-image:url("file:///C:/Users/Adm/Desktop/base-apparel-coming-soon-master/images/bg-pattern-desktop.svg") ;
margin: 0;
}

@import url('https://fonts.google.com/specimen/Josefin+Sans');
* {
	box-sizing: border-box;
}

js
var form = document.getElementsByid('email');
var form = document.getElementsByid('form');
form.addEventListener('submit', e=> {
	e.preventDefault();
	var emailVal= email.value;
	if(!validateEmail(emailVal)) {
		form.classList.add('error');
	}


