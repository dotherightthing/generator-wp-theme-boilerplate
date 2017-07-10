/*jslint node: true, esversion:6 */

'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');
const S = require('string');
const open = require("open");
const pjson = require('../../package.json');

module.exports = class extends Generator {

    /**
     * 1. initializing()
     * a method for setting up basic initialization,
     * such as setting some properties names on your generator
     * based on information passed in by the user
     * {@link https://webcake.co/building-a-yeoman-generator/}
     */
    initializing() {

        // name must match the folder name, for WordPress to recognise the plugin
        this.config.set(
            'name',
            process.cwd().split(path.sep).pop() // get plugin name from parent folder
        );

        // nameSafe is used in PHP functions, so is based on name
        this.config.set(
            'nameSafe',
            S( this.config.get('name') ).replaceAll('-','_').s
        );

        // nameFriendly may be set by the author in .yo-rc.json
        if ( this.config.get('nameFriendly') === 'automatic' ) {
            this.config.set(
                'nameFriendly',
                S( this.config.get('name') ).humanize().titleCase().s
            );
        }

        // nameFriendlySafe is used in PHP classes, so is based on nameFriendly
        if ( this.config.get('nameFriendly') === 'automatic' ) {
            this.config.set(
                'nameFriendlySafe',
                S( this.config.get('name') ).humanize().titleCase().replaceAll(' ','_').s
            );
        }
        else {
            this.config.set(
                'nameFriendlySafe',
                S( this.config.get('nameFriendly') ).replaceAll(' ','_').s
            );
        }

        // nameAdminMenu may be set by the author in .yo-rc.json
        if ( this.config.get('nameAdminMenu') === 'automatic' ) {
            this.config.set(
                'nameAdminMenu',
                this.config.get('nameFriendly')
            );
        }

        // urlAdminMenu may be set by the author in .yo-rc.json
        if ( this.config.get('urlAdminMenu') === 'automatic' ) {
            this.config.set(
                'urlAdminMenu',
                S( this.config.get('nameAdminMenu') ).toLowerCase().replaceAll(' ','-').s
            );
        }

        // version is based on the current version of the generator
        // to allow backfilling of functionality added in spin-off themes
        this.config.set(
            'version',
            pjson.version
        );
    }

    /**
     * 2. prompting()
     * a method reserved for running questions by the user,
     * the answers to which can be used to further define properties on the generator object
     * {@link https://webcake.co/building-a-yeoman-generator/}
     */
    prompting() {

        this.log(yosay(
          'Welcome to the ' + chalk.red('WordPress Theme boilerplate') + ' generator!'
        ));

        const prompts = [
            {
                type: 'input',
                name: 'name',
                message: 'Plugin name (file safe)',
                default: this.config.get('name')
            },
            {
                type: 'input',
                name: 'nameSafe',
                message: 'Plugin name (function safe)',
                default: this.config.get('nameSafe')
            },
            {
                type: 'input',
                name: 'nameFriendly',
                message: 'Plugin name (friendly)',
                default: this.config.get('nameFriendly')
            },
            {
                type: 'input',
                name: 'nameFriendlySafe',
                message: 'Plugin name (friendly & function safe)',
                default: this.config.get('nameFriendlySafe')
            },
            {
                type: 'input',
                name: 'nameAdminMenu',
                message: 'Plugin name (admin menu)',
                default: this.config.get('nameAdminMenu')
            },
            {
                type: 'input',
                name: 'urlAdminMenu',
                message: 'Plugin URL (admin menu)',
                default: this.config.get('urlAdminMenu')
            },
            {
                type: 'input',
                name: 'description',
                message: 'Plugin description',
                default: this.config.get('description')
            },
            {
                type: 'input',
                name: 'tags',
                message: 'Plugin tags',
                default: this.config.get('tags')
            },
            {
                type: 'input',
                name: 'homepage',
                message: 'Plugin URL',
                default: this.config.get('homepage')
            },
            {
                type: 'input',
                name: 'license',
                message: 'Plugin license',
                default: this.config.get('license')
            },
            {
                type: 'input',
                name: 'licenseUrl',
                message: 'Plugin license URL',
                default: this.config.get('licenseUrl')
            },
            {
                type: 'input',
                name: 'donateUrl',
                message: 'Plugin donation URL',
                default: this.config.get('donateUrl')
            },
            {
                type: 'input',
                name: 'version',
                message: 'Plugin version',
                default: this.config.get('version')
            },
            {
                type: 'input',
                name: 'wpVersion',
                message: 'WordPress version',
                default: this.config.get('wpVersion')
            },
            {
                type: 'input',
                name: 'authorName',
                message: 'Your first and last names',
                default: this.config.get('authorName')
            },
            {
                type: 'input',
                name: 'authorWordPressName',
                message: 'Your WordPress.org username',
                default: this.config.get('authorWordPressName')
            },
            {
                type: 'input',
                name: 'authorEmail',
                message: 'Your email address',
                default: this.config.get('authorEmail')
            },
            {
                type: 'input',
                name: 'authorUrl',
                message: 'Author URL',
                default: this.config.get('authorUrl')
            },
            {
                type: 'input',
                name: 'repositoryType',
                message: 'Version control system (git/svn)',
                default: this.config.get('repositoryType')
            },
            {
                type: 'input',
                name: 'repositoryUrl',
                message: 'Repository URL',
                default: this.config.get('repositoryUrl')
            }
        ];

        return this.prompt(prompts).then(props => {
            this.props = props;
        });
    }

    /**
     * 3. configuring()
     * this method is generally used for the initial configuration steps,
     * as well as auto-generating files that you might find necessary and kind of a given,
     * like .gitignore, and .editorconfig as the docs suggest
     * {@link https://webcake.co/building-a-yeoman-generator/}
     */
    configuring() {
        this.config.set(this.props);
    }

    /**
     * 4. default()
     * if no specific method of the base generator class is extended,
     * any functionality added to the generator will fall into the default method.
     * I have yet to find a use for it, since when I write generators
     * they use the other available methods instead
     * {@link https://webcake.co/building-a-yeoman-generator/}
     */
    default() {
        //
    }

    /**
     * 5. writing()
     * actually writing the files based on data fields stored in the generator;
     * this can be done by either copying hard-coded files,
     * or passing data through EJS templates
     * {@link https://webcake.co/building-a-yeoman-generator/}
     */
    writing() {
        // Copy the configuration files

        // Security

        this.fs.copy(
            this.templatePath('_index.php'),
            this.destinationPath('index.php')
        );

        // Bower

        this.fs.copy(
            this.templatePath('_.bowerrc'),
            this.destinationPath('.bowerrc')
        );

        this.fs.copyTpl(
            this.templatePath('_bower.json'),
            this.destinationPath('bower.json'), {
                name:           this.props.name,
                description:    this.props.description,
                authorName:     this.props.authorName,
                authorEmail:    this.props.authorEmail,
                authorUrl:      this.props.authorUrl,
                homepage:       this.props.homepage,
                version:        this.props.version
            }
        );

        // Git
        this.fs.copy(
            this.templatePath('_.gitignore'),
            this.destinationPath('.gitignore')
        );

        // Composer

        this.fs.copy(
            this.templatePath('_composer.json'),
            this.destinationPath('composer.json')
        );

        this.fs.copy(
            this.templatePath('_composer.lock'),
            this.destinationPath('composer.lock')
        );

        // Gulp

        this.fs.copy(
            this.templatePath('_gulpfile.js'),
            this.destinationPath('gulpfile.js')
        );

        // NPM
        this.fs.copyTpl(
            this.templatePath('_package.json'),
            this.destinationPath('package.json'), {
                name:                   this.props.name,
                description:            this.props.description,
                repositoryType:         this.props.repositoryType,
                repositoryUrl:          this.props.repositoryUrl,
                authorName:             this.props.authorName,
                authorEmail:            this.props.authorEmail,
                authorUrl:              this.props.authorUrl,
                homepage:               this.props.homepage,
                srcDir:                 process.cwd(),
                version:                this.props.version
            }
        );

        // APP
        // --------

        // http://yeoman.io/authoring/file-system.html - Location contexts:
        // [dest] is defined as either the current working directory
        // or the closest parent folder containing a .yo-rc.json

        // root

        this.fs.copyTpl(
            this.templatePath('_readme.txt'),
            this.destinationPath('readme.txt'), {
                authorWordPressName:    this.props.authorWordPressName,
                themeTags:              this.props.tags,
                description:            this.props.description,
                name:                   this.props.name,
                nameSafe:               this.props.nameSafe,
                nameFriendly:           this.props.nameFriendly,
                wpVersion:              this.props.wpVersion,
                themeLicense:           this.props.license,
                themeLicenseUrl:        this.props.licenseUrl,
                themeDonateUrl:         this.props.donateUrl,
                version:                this.props.version
            }
        );

        // languages

        this.fs.copy(
            this.templatePath('languages/_wpdtrt-plugin-boilerplate.pot'),
            this.destinationPath('languages/' + this.props.name + '.pot')
        );

        // public

        this.fs.copyTpl(
            this.templatePath('views/public/css/_wpdtrt-plugin-boilerplate.css'),
            this.destinationPath('views/public/css/' + this.props.name + '.css'), {
                name:                   this.props.name,
                nameFriendlySafe:       this.props.nameFriendlySafe,
                themeUrl:               this.props.homepage,
                version:                this.props.version
            }
        );

        this.fs.copyTpl(
            this.templatePath('views/public/js/_wpdtrt-plugin-boilerplate.js'),
            this.destinationPath('views/public/js/' + this.props.name + '.js'), {
                name:                   this.props.name,
                nameSafe:               this.props.nameSafe,
                nameFriendlySafe:       this.props.nameFriendlySafe,
                themeUrl:               this.props.homepage,
                version:                this.props.version
            }
        );

        this.fs.copyTpl(
            this.templatePath('views/public/partials/_wpdtrt-plugin-boilerplate-front-end.php'),
            this.destinationPath('views/public/partials/' + this.props.name + '-front-end.php'), {
                name:                   this.props.name,
                nameSafe:               this.props.nameSafe,
                nameFriendlySafe:       this.props.nameFriendlySafe,
                themeUrl:               this.props.homepage,
                constantStub:           this.props.nameFriendlySafe.toUpperCase(),
                version:                this.props.version
            }
        );

    }

    /**
     * 6. conflicts()
     * the docs say ‘Where conflicts are handled (used internally)’.
     * If it’s an internal-method to the generator class I’m not sure why it’s exposed to developers,
     * and I have yet to see it used in any generator that I’ve researched
     * {@link https://webcake.co/building-a-yeoman-generator/}
     */
    conflicts() {
        //
    }

    /**
     * 7. install()
     * where you would either have Yeoman install dependencies – e.g. Bower -
     * or spawn child processes to install them yourself;
     * and you could take this opportunity to inject dependencies
     * into previously-written files as well
     * {@link https://webcake.co/building-a-yeoman-generator/}
     */
    install() {
        this.installDependencies({
            npm: true,
            bower: true,
            yarn: false
        });

        this.spawnCommand('composer', ['install']);

        this.spawnCommand('vendor/phpdocumentor/phpdocumentor/bin/phpdoc -d ./app -t ./docs/php/');
    }

    /**
     * 8. end()
     * the cleanup process – removing any temp files that may have been written,
     * running any build or minification tasks, etc.
     * {@link https://webcake.co/building-a-yeoman-generator/}
     */
    end() {

        this.log(yosay(
          'Thanks for installing the ' + chalk.red('WordPress Theme boilerplate') + '. Enjoy!'
        ));

        open("readme.txt");
    }

};
