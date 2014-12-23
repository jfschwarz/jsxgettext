[![Build Status](https://travis-ci.org/zaach/jsxgettext.png)](https://travis-ci.org/zaach/jsxgettext)
[![NPM version](https://badge.fury.io/js/jsxgettext.png)](http://badge.fury.io/js/jsxgettext)

# jsxgettext

A node module with a CLI that extracts gettext strings from JavaScript and EJS files. It also extracts comments that begin with "L10n:" when they appear above a `gettext` call. It also handles gettext function calls with a second string parameter for the plural form.

## Install

    npm install jsxgettext
    
Or from source:

    git clone https://github.com/zaach/jsxgettext.git
    cd jsxgettext
    npm link

## Use

    $ jsxgettext

    input argument is required

    Usage: jsxgettext <input>... [options]

    input     input files

    Options:
       -o FILE, --output FILE     write output to specified file
       -p DIR, --output-dir DIR   output files will be placed in directory DIR
       -v, --version              print version and exit
       -k WORD, --keyword WORD    additional keyword to be looked for as a gettext alias
       -n WORD, --plural WORD     additional keyword to be looked for as a ngettext alias
       -j, --join-existing        join messages with existing file
       -L NAME, --language NAME   recognise the specified language (JavaScript, EJS, Jinja, JSX)


