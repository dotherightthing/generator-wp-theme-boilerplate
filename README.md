# WordPress Theme Boilerplate

A best-practice boilerplate for rapid theme development.

Originally based on Twenty_Seventeen.

## Installation

### A. Create the theme folder

1. Clone this repository to your WordPress themes folder
1. Rename `generator-wp-plugin-boilerplate` to `your-theme-name` (this should be less than 50 characters, for compatibility with Bower)
1. Then launch Terminal from this folder

### B. Install requirements

1. Node & NPM: <https://nodejs.org/>
1. Git: <https://git-scm.com/>
1. [Bower](http://bower.io/): `$ npm install -g bower`
1. Composer: <https://getcomposer.org/download/>
1. [Yeoman](http://yeoman.io/): `$ sudo npm install -g yo`

### C. Set Defaults (optional)

Edit `.yo-rc.json`, to substitute in your own values.

These will then become the defaults when running the Yeoman generator (`yo`).

### D. Scaffold project

```
npm install

sudo npm link

yo wp-theme-boilerplate
```

When you encounter the following prompts, hit ENTER to confirm that it's ok to copy over the replacement files:

```
conflict package.json
? Overwrite package.json? (Ynaxdh)
```

```
conflict .gitignore
? Overwrite .gitignore? (Ynaxdh)
```

--

## Notes

### Publishing

The theme name should not include the word 'theme'


### Translation

`.pot` files can be generated using the [WordPress i18n tools](https://developer.wordpress.org/themes/functionality/localization/#wordpress-i18n-tools)

## Respect is due

This plugin is the result of hours of research, including these great resources:

* [How to Build a WordPress Plugin](https://teamtreehouse.com/library/how-to-build-a-wordpress-plugin)
* [WordPress-Plugin-Boilerplate](https://github.com/DevinVinson/WordPress-Plugin-Boilerplate/)
* [Create A Custom Yeoman Generator in 4 Easy Steps](https://scotch.io/tutorials/create-a-custom-yeoman-generator-in-4-easy-steps)
* [Building a Yeoman Generator](https://webcake.co/building-a-yeoman-generator/)
* [JSONPlaceholder - Fake Online REST API for Testing and Prototyping](http://jsonplaceholder.typicode.com/)
