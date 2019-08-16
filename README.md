# DTRT WordPress Theme Boilerplate Generator

[![GitHub tags](https://img.shields.io/github/tag/dotherightthing/generator-wpdtrt-theme-boilerplate.svg)](https://github.com/dotherightthing/generator-wpdtrt-theme-boilerplate/tags) [![Build Status](https://travis-ci.org/dotherightthing/generator-wpdtrt-theme-boilerplate.svg?branch=master)](https://travis-ci.org/dotherightthing/generator-wpdtrt-theme-boilerplate) [![GitHub issues](https://img.shields.io/github/issues/dotherightthing/generator-wpdtrt-theme-boilerplate.svg)](https://github.com/dotherightthing/generator-wpdtrt-theme-boilerplate/issues) [![GitHub wiki](https://img.shields.io/badge/documentation-wiki-lightgrey.svg)](https://github.com/dotherightthing/generator-wpdtrt-theme-boilerplate/wiki)

Generate a best-practice boilerplate for [WordPress](https://wordpress.org/) theme development.

The generated theme utilises the functionality packaged in [DTRT WordPress Parent Theme](https://github.com/dotherightthing/wpdtrt).

***

## Installation

1. [Create a Git repo to store the code](https://github.com/dotherightthing/generator-wpdtrt-theme-boilerplate/wiki/Create-a-Git-repo-to-store-the-code)
2. [Install the generator dependencies](https://github.com/dotherightthing/generator-wpdtrt-theme-boilerplate/wiki/Install-the-generator-dependencies)
3. [Install the generator](https://github.com/dotherightthing/generator-wpdtrt-theme-boilerplate/wiki/Install-the-generator)
4. [Use the generator to scaffold a custom theme](https://github.com/dotherightthing/generator-wpdtrt-theme-boilerplate/wiki/Use-the-generator-to-scaffold-a-custom-theme)
5. [Set up Travis CI](https://github.com/dotherightthing/generator-wpdtrt-theme-boilerplate/wiki/Set-up-Travis-CI)
6. Use the features of the [DTRT WordPress Parent Theme](https://github.com/dotherightthing/wpdtrt)

## Maintenance

This generator will need to be periodically updated as technologies change:

1. Update a previously generated theme as necessary, see [Appendix: Generated themes](https://github.com/dotherightthing/generator-wpdtrt-theme-boilerplate/wiki/Appendix:-Generated-themes)
2. Copy relevant changes over to the [DTRT WordPress Parent Theme](https://github.com/dotherightthing/wpdtrt)
3. Build, test, version & release the updated [DTRT WordPress Parent Theme](https://github.com/dotherightthing/wpdtrt), see [Release an update](https://github.com/dotherightthing/wpdtrt/wiki/Workflows#release-an-update)
4. Copy relevant changes over to the *DTRT WordPress Theme Boilerplate Generator*
5. Update the version of the [DTRT WordPress Parent Theme](https://github.com/dotherightthing/wpdtrt) required by the *DTRT WordPress Theme Boilerplate Generator* in `./generators/app/templates/composer.json`, or leave it as `dev-master` (the latest version):
  ```
  "require": {
    "dotherightthing/wpdtrt": "dev-master",
  },  
  ```
6. Build, test, version & release the updated *DTRT WordPress Theme Boilerplate Generator*
7. Update previously generated themes to reference the updated [DTRT WordPress Parent Theme](https://github.com/dotherightthing/wpdtrt) and *DTRT WordPress Theme Boilerplate Generator*, see [Release an update](https://github.com/dotherightthing/wpdtrt/wiki/Workflows#release-an-update)

## Respect is due

This theme is the result of hours of research, including these great resources:

* [Create A Custom Yeoman Generator in 4 Easy Steps](https://scotch.io/tutorials/create-a-custom-yeoman-generator-in-4-easy-steps)
* [Building a Yeoman Generator](https://webcake.co/building-a-yeoman-generator/)
* WordPress TwentySeventeen theme
