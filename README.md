# WordPress Theme Boilerplate

A best-practice boilerplate for theme development.

## Installation

### A. Install the generator dependencies

1. Node & NPM: <https://nodejs.org/>
1. Git: <https://git-scm.com/>
1. [Bower](http://bower.io/): `$ npm install -g bower`
1. Composer: <https://getcomposer.org/download/>
1. [Yeoman](http://yeoman.io/): `$ sudo npm install -g yo`

### B. Install the generator

1. Clone this repository to a folder
1. Open Terminal
1. `cd`, into the downloaded folder
1. `npm install`
1. `sudo npm link`

### C. Set Defaults (optional)

Edit `.yo-rc.json`, to substitute in your own values.

These will then become the defaults when running the Yeoman generator (`yo`).

### D. Scaffold project

1. Create a folder for the theme
1. Open Terminal
1. `cd`, into the folder
1. yo wp-theme-boilerplate

---

## Notes

### Testing

There aren't any tests yet, but these are on the roadmap.

PHPUnit is currently at version 6.1, but this project uses the Old Stable Release of 5.7 to work with PHP 5.6. This version is supported until February 2018, see https://phpunit.de/.

### Publishing

The theme name should not include the word 'theme'

### Translation

`.pot` files can be generated using the [WordPress i18n tools](https://developer.wordpress.org/themes/functionality/localization/#wordpress-i18n-tools)

## Respect is due

This theme is the result of hours of research, including these great resources:

* [Create A Custom Yeoman Generator in 4 Easy Steps](https://scotch.io/tutorials/create-a-custom-yeoman-generator-in-4-easy-steps)
* [Building a Yeoman Generator](https://webcake.co/building-a-yeoman-generator/)
* WordPress TwentySeventeen theme
