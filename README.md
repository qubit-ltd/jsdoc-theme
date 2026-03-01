# qubit-jsdoc-theme

[![Stars](https://img.shields.io/github/stars/qubit-ltd/jsdoc-theme)](https://github.com/qubit-ltd/jsdoc-theme) [![Fork](https://img.shields.io/github/forks/qubit-ltd/jsdoc-theme)](https://github.com/qubit-ltd/jsdoc-theme/fork) ![Version](https://img.shields.io/badge/version-1.5.0-005bff) [![Issues Open](https://img.shields.io/github/issues/qubit-ltd/jsdoc-theme)](https://github.com/qubit-ltd/jsdoc-theme/issues) [![Contributors](https://img.shields.io/github/contributors/qubit-ltd/jsdoc-theme)](https://github.com/qubit-ltd/jsdoc-theme/graphs/contributors) [![license](https://img.shields.io/github/license/qubit-ltd/jsdoc-theme)](https://github.com/qubit-ltd/jsdoc-theme/blob/master/LICENSE)

<br>

**Based on [clean-jsdoc-theme](https://github.com/ankitskvmdam/clean-jsdoc-theme) v4.3.0**

`qubit-jsdoc-theme` is a customized version of the popular `clean-jsdoc-theme` that enhances your JSDoc 3 or 4 documentation with additional features specifically designed for better class documentation. It maintains all the beautiful and responsive design features of the original theme while adding enhanced property documentation capabilities.

## Enhanced Features (New in qubit-jsdoc-theme)

- **🆕 Smart Properties Table:** Automatically generates a dedicated "Properties" section for classes, displaying all class properties in a clean table format with type information and descriptions derived from individual field JSDoc comments.
- **🆕 Static/Instance Property Separation:** Intelligently separates static and instance properties into distinct sections, with automatic scope detection and fallback logic for accurate classification.
- **🆕 Getter/Setter Pair Merging:** Automatically detects and merges getter/setter pairs into single table entries, displaying combined descriptions and access type indicators.
- **🆕 Intelligent Constructor Detection:** Only displays the "Constructor" section when a class has explicit constructor documentation, avoiding empty constructor sections for classes without custom constructors.
- **🆕 Field-Level JSDoc Support:** Properties table is populated directly from `@type` annotations on individual class fields, eliminating the need for redundant `@property` tags in class-level JSDoc.
- **🆕 Clean Member Organization:** Properties are displayed in their own dedicated section, while the "Members" section can be configured to show only methods, avoiding duplication.
- **🆕 Enhanced Mixin Support:** Automatically displays methods inherited from mixin classes when using `@mixes` JSDoc tags, providing complete documentation of mixed-in functionality with proper inheritance attribution.
- **🆕 Internationalization (i18n):** Full support for multiple languages with comprehensive translation of all UI elements, section headings, table headers, and navigation tooltips.
- **🆕 Homepage Navigation:** Added a "Back to Homepage" button in the top navigation bar for easy navigation between class documentation and the main documentation index.
- **🆕 Enhanced Tooltips:** All navigation buttons include internationalized tooltips that adapt to the selected language.

## Key Features (Inherited from clean-jsdoc-theme)

- **Widespread Device Compatibility:** Adapts seamlessly to desktops, laptops, tablets, and mobile devices, ensuring a smooth user experience across all platforms.
- **Premium Aesthetics:** Choose between a sleek dark theme or a bright light theme, both designed to deliver a high-quality appearance for your documentation.
- **Optimized File Size:** Automatically minifies the generated HTML files, reducing their overall size by several kilobytes without compromising functionality.
- **Robust Search Functionality:** The built-in search feature allows users to quickly find specific information within your documentation, and it does so without adding extra weight to the output files.
- **Exceptional Performance:** Prioritizes performance, delivering a fast and responsive user experience for your documentation consumers.
- **Extensive Customization:** Offers a wide variety of customization options to tailor the look and feel to your preferences.


## Demo

The enhanced features of `qubit-jsdoc-theme` include:

1. **Smart Properties Table**: Automatically generated from field-level `@type` annotations
2. **Static/Instance Property Separation**: Properties are automatically categorized and displayed in separate sections
3. **Getter/Setter Pair Merging**: Related accessor methods are intelligently combined in the properties table
4. **Intelligent Constructor Detection**: Only shows constructor section when explicitly documented
5. **Clean Organization**: Properties and methods are clearly separated with enhanced categorization

For the base theme features and styling, you can reference the original [clean-jsdoc-theme demo](https://ankdev.me/clean-jsdoc-theme/v4).

## Screenshots

![Dark theme](./example/screen-1.png)
![Light theme](./example/screen-2.png)
![Mobile View](./example/screen-3.png)
![Search view](./example/screen-4.png)
![Class page](./example/screen-5.png)
![Code page](./example/screen-6.png)

## Installation

> Note : you must have `node` and `npm` installed on your machine.

In a terminal, type :

```bash
npm install @qubit-ltd/jsdoc-theme --save-dev
# or
yarn add @qubit-ltd/jsdoc-theme -D
```

In your projects `package.json` file, add a script to generate the documentation using JSDoc :

```json
"scripts": {
  "generate-docs": "jsdoc --configure jsdoc.json --verbose"
}
```

> Heads Up! In the above `generate_docs` script, the value of the `--configure` option is `jsdoc.json`. Make sure
> the `jsdoc.json` file exists as it contains the JSDoc configuration. If you have your JSDoc config in a different
> file,
> replace `jsdoc.json` with its name.

In your `jsdoc.json` file, add a template option to use `qubit-jsdoc-theme` instead of the default JSDoc theme:

```json
"opts": {
  "template": "node_modules/@qubit-ltd/jsdoc-theme"
}
```

Now, run the previously added script to generate the documentation :

```bash
npm run generate-docs
```

## Usage Example

Here's how to document your JavaScript classes to take advantage of the enhanced features:

```javascript
/**
 * Represents a user in the system.
 * @class User
 * @author John Doe
 */
class User {
    /**
     * Total number of users created
     * @type {number}
     * @static
     */
    static userCount = 0;

    /**
     * User's unique identifier
     * @type {string}
     */
    id;

    /**
     * User's display name
     * @type {string}
     */
    name;

    /**
     * User's email address
     * @type {string}
     */
    email;

    /**
     * Whether the user is active
     * @type {boolean}
     */
    isActive;

    /**
     * Get user's full display information
     * @type {string}
     */
    get displayInfo() {
        return `${this.name} (${this.email})`;
    }

    /**
     * Set user's full display information
     * @type {string}
     */
    set displayInfo(value) {
        const parts = value.split(' (');
        this.name = parts[0];
        this.email = parts[1]?.replace(')', '') || '';
    }

    /**
     * Creates a new user instance
     * @param {string} name - The user's name
     * @param {string} email - The user's email
     */
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.isActive = true;
        User.userCount++;
    }

    /**
     * Activates the user account
     * @returns {boolean} True if activation was successful
     */
    activate() {
        this.isActive = true;
        return true;
    }
}
```

This will generate documentation with:
- **Static Properties section**: Showing `userCount` and other static properties
- **Instance Properties section**: Showing `id`, `name`, `email`, `isActive` and merged `displayInfo` (getter/setter)
- **Constructor section**: Only displayed when constructor has documentation
- **Members section**: For methods like `activate()` (properties are excluded to avoid duplication)

## Example JSDoc Config

```json
{
    "source": {
        "include": ["lib", "package.json", "README.md"],
        "includePattern": ".js$",
        "excludePattern": "(node_modules/|docs)"
    },
    "plugins": ["plugins/markdown"],
    "opts": {
        "encoding": "utf8",
        "readme": "./README.md",
        "destination": "docs/",
        "recurse": true,
        "verbose": true,
        "template": "./node_modules/@qubit-ltd/jsdoc-theme",
        "theme_opts": {
            "default_theme": "dark",
            "language": "en"
        }
    },
    "markdown": {
        "hardwrap": false,
        "idInHeadings": true
        // This is important for clean-jsdoc-theme, otherwise some features might not work.
    }
}
```

## Options

### Set a default theme

To set the default theme, add the following in your JSDoc config file:

```json
"theme_opts": {
  "default_theme": "dark" // "light", "fallback-dark", "fallback-light"
}
```

If you set default theme as `"fallback-dark"`, then `clean-jsdoc-theme` will try to detect user's preferred color scheme. If it will detect successfully then it will set user's preferred theme else fallback to dark theme.

### Set language (i18n)

To set the documentation language, add the following in your JSDoc config file:

```json
"theme_opts": {
  "language": "en" // "en" for English, "zh" for Chinese
}
```

**Supported languages:**
- `"en"` - English (default)
- `"zh"` - Chinese (中文)

**The language setting affects:**
- Section headings (Properties, Methods, Constructor, etc.)
- Table headers (Name, Type, Description, etc.)
- Navigation button tooltips (Back to Homepage, Toggle Theme, Search, Change Font Size)
- Parameter attributes (optional, nullable, repeatable, Properties)
- Method documentation labels (Parameters, Returns, Type, Fires, Throws, etc.)
- Detail information labels (Author, Version, Since, Inherited From, etc.)

If no language is specified, English will be used as the default.

**Adding new languages:**

To add support for a new language, you need to:

1. Create a new translation file in the `i18n/` directory (e.g., `i18n/fr.json` for French)
2. Copy the structure from `i18n/en.json` and translate all values
3. The translation file should include all keys with their translated values:

```json
{
  "properties": "Propriétés",
  "methods": "Méthodes",
  "constructor": "Constructeur",
  "name": "Nom",
  "type": "Type",
  "description": "Description",
  "home_tooltip": "Retour à l'accueil",
  "toggle_theme_tooltip": "Basculer le thème",
  "search_tooltip": "Rechercher",
  "font_size_tooltip": "Changer la taille de police",
  // ... add all other keys from en.json
}
```

4. The i18n system will automatically load the appropriate language file based on the `language` setting in your JSDoc configuration.

### Set base url

To set the base url, add the following in your JSDoc config file:

```json
"theme_opts": {
  "base_url": "https://ankdev.me/v4/"
}
```

> Make sure to add a forward slash (`/`) at the end of the URL.

The default value of `base_url` is computed with the following code:

```js
const path = document.location.pathname;
const baseURL = path.substr(0, path.lastIndexOf('/') + 1);
```

### Add favicon

To set a favicon, add the following in your JSDoc config file:

```json
"theme_opts": {
  "favicon": "path/to/img"
}
```

You can use [`static_dir`](#add-static-dir) option to copy all you static files to output dir and use that path instead
of `path/to/img`. This will not flatten the output file path, it will preserve the directory structure. If you want to
flatten the output dir use jsdoc default [copy static files options](https://jsdoc.app/about-configuring-default-template.html)

### Add homepage title

To add the title of the homepage use the `homepageTitle` property as follows:

```json
"theme_opts": {
  "homepageTitle": "Clean JSDoc theme"
}
```

### Add title

Both strings and HTML are accepted. Use HTML to overwrite the default HTML, and a string to set a plaintext title. One
example of this is below:

```json
"theme_opts": {
  "title": "<img src='path/to/img' class='my-custom-class'/>" // or "title": "clean-jsodc-theme"
}
```

You can use [`static_dir`](#add-static-dir) option to copy all you static files to output dir and use that path in place
of `path/to/img`.

### Add files list in homepage

By default `clean-jsdoc-theme` will not include the list of files in the homepage. If you want to add them the do the following

```json
"theme_opts": {
  "includeFilesListInHomepage": true // by default it is false.
}
```

> Note: You need to add @file tag in the .js if you want to include it in the file list. For more details on `@file` visit: https://jsdoc.app/tags-file.html

### Add navbar menu

To render extra link(s) in navbar. It accepts an array of objects:

```json
"theme_opts": {
  "menu": [
    {
      "title": "Website",
      "link": "https://ankdev.me/clean-jsdoc-theme/dark/",
      "target": "_blank",
      "class": "some-class",
      "id": "some-id"
    },
    {
      // more if you want to.
    }
  ]
}
```

`menu` is an array of objects. Each object has five properties, out of which two are required (`title` and `link`). If
an object doesn't have the required properties, then you might expect an error.

<b>Properties</b>

| name     | type     | required |
| -------- | -------- | -------- |
| `title`  | `string` | required |
| `link`   | `string` | required |
| `target` | `string` | optional |
| `class`  | `string` | optional |
| `id`     | `string` | optional |

### Sections

There is also an option to add a meta tag to every generated HTML file. You can use the `meta` option to include a list
of `meta` tags into `head`.

```json
"theme_opts": {
  "sections": ["Classes", "Modules", "Global"] // Only three members will be in the sidebar.
}
```

```js
// SECTION_TYPE
[
    'Classes',
    'Modules',
    'Externals',
    'Events',
    'Namespaces',
    'Mixins',
    'Tutorials',
    'Interfaces',
    'Global',
];
```

### Meta

There is also an option to add meta tag to every generated HTML file. You can use `meta` option to include a list
of `meta` tags into `head`.

```json
"theme_opts": {
  "meta": [
    {
      "name": "author",
      "content": "Ankit Kumar"
    },
    {
      "name": "description",
      "content": "Best Clean and minimal JSDoc 3 Template/Theme"
    }
  ]
}
```

`meta` is an array of objects. Each objects can have any valid combination
of [HTML metadata attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#Attributes).

### Search

By default, the search feature is enabled in the theme.

> Make sure you have added the `base_url` option as well, otherwise your search query might fail.
>
> If you want to disable the search feature, you can do the following:

```json
"theme_opts": {
  "search": false
}
```

**How does the search work?**

If the search feature is enabled, you'll see a `data` folder in the output. This `data` folder contains a JSON
called `search.json`. There is a fetch request when user types anything in the search box. That means search data is
only loaded if user wants to search anything.

### CodePen

> Note: currently, this feature is only enabled for the examples section.

```json
"theme_opts": {
  "codepen": {
    "enable_for": ["examples"],
    "options": {
      "js_external": "https://code.jquery.com/jquery-3.6.0.min.js",
      "js_pre_processor": "babel"
    }
  }
}
```

`options` can be any valid CodePen option. For more
visit: [Codepen Prefill options](https://blog.codepen.io/documentation/prefill/#all-the-json-options-0)

If you want to add some js in the beginning of your example then you can use `js` option.

```json
"theme_opts": {
  "codepen": {
    "enable_for": ["examples"],
    "options": {
      "js_external": "https://code.jquery.com/jquery-3.6.0.min.js",
      "js_pre_processor": "babel"
      "js": "import Something from 'some-package'"
    }
  }
}
```

Let say you have an example as follows:

```js
/**
 * @example
 * let a = Something.fn()
 * console.log(a) // Return value of something
 */
const a;
```

In codepen the above `@example` will look like:

```js
import Something from 'some-package';

let a = Something.fn();
console.log(a); // Return value of something
```

### Add static dir

To include static files:

```json
"theme_opts": {
  "static_dir": ["./static"],
}
```

### Add styles

To create custom style rules. Example:

```json
"theme_opts": {
  "create_style": ".sidebar-title { font-size: 2rem }"
}
```

### Add style paths

Use this option to add third party css library. If you want to add your own custom css file then consider
using [Add custom css files](#add-custom-css-files)

> Note: you have to pass an array of objects. Each object key will be an attribute inside the generated style tag.

Example:

```json
"add_style_path": [
  {
    "href": "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css",
    "integrity": "sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1",
    "crossorigin": "anonymous"
  }
],
```

### Add custom css files

To include css files. Example:

```json
"theme_opts": {
  "include_css": ["./static/index.css", "./src/docs/index.css"]
}
```

> Note: you are not required to manually copy file to output dir.

It will include the css files to the output dir and also attach a link tag to the html pointing to the included css
file.

### Add scripts

If you wish to incorporate JavaScript functions that execute when a user accesses a webpage, you can utilize the add_scripts option for this purpose. For instance, suppose you want to display a notification dialog when a user visits the webpage located at https://place-where-my-docs-are/SomeClass.html. You want to notify users that they should refrain from utilizing this class. To accomplish this, you can proceed as follows:

```json
"theme_opts": {
  "add_scripts": "function showAlert(){ if (window.location.pathname === '/SomeClass.html') { alert('Do not use this class') } } showAlert();",
}
```

Writing js code like above can get tricky and complex. You can consider `include_js`.

### Add script paths

Use this option to add third party js library. If you want to add your own custom script file then consider
using [Add custom script files](#add-custom-script-files)

> Note: you have to pass an array of objects, and object keys are actually the attributes which you want in you script
> tag.

Example:

```json
"add_script_path": [
  {
    "href": "https://code.jquery.com/jquery-3.5.1.js",
    "integrity": "sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=",
    "crossorigin": "anonymous"
  }
],
```

This will copy the static folder to the output dir.

> Note: if the directory doesn't exist then you may get an error. Also, directory is relative to your jsdoc config file.

This will not flatten the directory. Directory structure will be kept as it is.

### Add custom script files

If you wish to run some local/custom javascript then you can include them via `include_js`.

Lets say you want to show some custom message depending on url. You can create a js file as follows:

```js
// static/showAlert.js
function showCustomAlertMessage() {
    const pathname = window.location.pathname;

    switch (pathname) {
        case '/SomeClass.html':
            return alert("Please don't use this class");
        case '/OtherPage.html':
            return alert('Wonderful!');
        default:
            return;
    }
}

showCustomAlert();
```

Assuming the above js file is stored in `./static/showAlert.js`. To include you can do:

```json
"theme_opts": {
  "include_js": ["./static/showAlert.js"]
}
```

> Note: you are not required to manually copy file to output dir.

It will include the js files to the output dir and also attach a script tag to the html pointing to the included js
file.

If you want to add some script for some pages then you can do the following:

```json
"include_js": [
    "./demo/src/assets/script.js",
    {
        "filepath": "./demo/src/assets/random.js",
        "targets": [
            "MyClass",
            "tutorial-MyClassTutorial"
        ]
    }
],
```

Here target is the name of the generated html file (don't include `.html`).

The above config will add `./demo/src/assets/script.js` to all the generated html files. However, it will
add `./demo/src/assets/random.js` only to `MyClass.html` and `tutorial-MyClassTutorial.html` files.

The file name of the generated html generally follows the following convention:

-   Class: class's name + `.html`. Ex `Alive.html`
-   Module: `module-` + module's name + `.html`. Ex: `module-SqlJs.html`
-   Tutorials: `tutorial-` + tutorial's filename + `.html`

If you are not sure about the target name, then generate html for the first time, then look at the urls.

### To ignore sorting

To ignore the sorting of members/methods/event in the page. If it is `false` then the order of
members/methods/events will be in the order they are in code/source.

```json
"theme_opts": {
  "sort": false
}
```

### Footer

```json
"theme_opts": {
  "footer": "This is footer" // or <div class="footer-wrapper">This is a footer </div>
}
```

### To exclude inherited

To exclude inherited symbols. Example:

```json
"exclude_inherited": true
```

This will remove all symbols (members, methods ...) that come from inherited parents.

### To remove styled applied to scrollbar

By default `clean-jsdoc-theme` applies some styles to browser's scroll bar. However if you want to remove this style do the following

```json
{
    "theme_opts": {
        "shouldRemoveScrollbarStyle": false
    }
}
```

This will remove all symbols (members, methods ...) that come from inherited parents.

## Cheat sheet

| name                         | default                                                                                                      | use case                                                                   | expected value(s)                                          |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- | ---------------------------------------------------------- |
| `default_theme`              | `"dark"`                                                                                                     | To set the default theme                                                   | `"light", "dark"`, `"fallback-light"` or `"fallback-dark"` |
| `language`                   | `"en"`                                                                                                       | To set the documentation language (i18n)                                   | `"en"` (English) or `"zh"` (Chinese)                       |
| `homepageTitle`              | "Home"                                                                                                       | To set the title of homepage. This will update HTML `<title>`.             | `string`                                                   |
| `title`                      | `null`                                                                                                       | To set the title of the sidebar.                                                           | `HTML` or `string`                                         |
| `base_url`                   | `/`                                                                                                          | To set the base URL                                                        | `string`                                                   |
| `menu`                       | `null`                                                                                                       | To render extra link in navbar                                             | Array of Object(s)                                         |
| `meta`                       | `null`                                                                                                       | Meta tag attributes                                                        | Array of Object(s)                                         |
| `search`                     | `true`                                                                                                       | To render search or not                                                    | `true` or `false`                                          |
| `codepen`                    | `{}`                                                                                                         | To open code in codepen                                                    | `Object`                                                   |
| `static_dir`                 | `null`                                                                                                       | To include static dir                                                      | Array of string                                            |
| `create_style`               | `null`                                                                                                       | To create custom style rules                                               | `string`                                                   |
| `add_style_path`             | `null`                                                                                                       | To add external css libraries/files                                        | Array of Object(s)                                         |
| `include_css`                | `null`                                                                                                       | To include css files                                                       | Array of string                                            |
| `add_scripts`                | `null`                                                                                                       | To create custom script                                                    | `string`                                                   |
| `add_script_path`            | `null`                                                                                                       | To add external js libraries/files                                         | Array of Object(s)                                         |
| `include_js`                 | `null`                                                                                                       | To include js files                                                        | `string`                                                   |
| `footer`                     | `null`                                                                                                       | To render footer                                                           | `HTML` or `string`                                         |
| `exclude_inherited`          | `false`                                                                                                      | To exclude inherited symbols                                               | `boolean`                                                  |
| `sections`                   | `["Modules", "Classes", "Externals", "Events", "Namespaces", "Mixins", "Tutorials", "Interfaces", "Global"]` | To order navbar/sidebar sections or to hide/remove navbar/sidebar sections | `Array<SECTION_TYPE>`                                      |
| `displayModuleHeader`        | `false`                                                                                                      | If you want the module name to appear on its page                          | `boolean`                                                  |
| `includeFilesListInHomepage` | `false`                                                                                                      | If you want to add or remove the list of files in homepage                 | `boolean`                                                  |
| `sort`                       | `true`                                                                                                       | To sort the output members/methods/events                                  | `boolean`                                                  |
| `shouldRemoveScrollbarStyle` | `false`                                                                                                      | To remove styles applied to browser's scrollbar                            | `boolean`                                                  |

Don't forget to add the following in your jsdoc config file, otherwise toc will not work on some pages.

```json
"markdown": {
  "idInHeadings": true // This is important for clean-jsdoc-theme, otherwise some features might not work.
}
```

## Changelog

### v1.5.0 (2025-01-XX)

**Advanced Property Management & Enhanced Documentation Features**

#### 🔧 New Features
- **Static/Instance Property Separation**: Automatically separates static and instance properties into distinct sections with intelligent scope detection
- **Getter/Setter Pair Merging**: Smart detection and merging of getter/setter pairs into unified table entries with combined descriptions
- **Enhanced Scope Detection**: Improved logic for detecting property scope using JSDoc's built-in detection with fallback heuristics
- **Access Type Indicators**: Clear visual indicators for property access types (property, getter, setter, getter/setter)

#### 🛠️ Technical Improvements
- **Advanced Template Logic**: Enhanced `container.tmpl` with sophisticated property categorization and merging algorithms
- **Improved Properties Template**: Updated `properties.tmpl` to support separate rendering of static and instance properties
- **Fallback Scope Detection**: Added longname pattern analysis for accurate scope detection when JSDoc's built-in detection fails
- **Bilingual Section Headers**: Support for both English and Chinese section headers in property tables

#### 📖 Documentation Updates
- **Enhanced Usage Examples**: Updated examples to demonstrate static properties and getter/setter documentation
- **Feature Documentation**: Comprehensive documentation for new property management features

### v1.4.0 (2025-01-XX)

**Enhanced Mixin Documentation Support**

#### 🔧 New Features
- **Complete Mixin Method Documentation**: Automatically displays methods inherited from mixin classes when using `@mixes` JSDoc tags
- **Proper Inheritance Attribution**: Methods from mixin classes are displayed with clear "Inherited from [MixinClass]" labels
- **Full Method Documentation**: Includes complete parameter descriptions, return values, and method documentation from mixin classes
- **Seamless Integration**: Works transparently with existing `@mixes` tags without requiring code changes

#### 🛠️ Technical Improvements
- **Enhanced Template Logic**: Updated `container.tmpl` to collect and display methods from mixed-in classes
- **Dynamic Method Collection**: Automatically searches for methods in classes specified by `@mixes` tags
- **Inheritance Flag Support**: Properly marks mixin methods as inherited for correct documentation formatting

#### 📖 Documentation Updates
- **Updated Examples**: Enhanced usage examples to demonstrate mixin documentation features
- **Feature Documentation**: Added comprehensive documentation for the new mixin method display functionality

### v1.2.0 (2025-01-XX)

**Major Update - Internationalization & Navigation Enhancements**

#### 🌍 New Features
- **Enhanced Mixin Documentation**: Automatic detection and display of methods inherited from mixin classes when using `@mixes` JSDoc tags, with proper "Inherited from" attribution
- **Full Internationalization (i18n)**: Complete support for multiple languages with comprehensive translation system
- **Homepage Navigation Button**: Added "Back to Homepage" button in top navigation bar for easy navigation
- **Internationalized Tooltips**: All navigation buttons now include language-aware tooltips
- **Enhanced Language Support**: Built-in support for English and Chinese with easy extensibility for additional languages

#### 🔧 Technical Improvements
- **i18n System Architecture**: Implemented robust internationalization system with helper functions and language files
- **Template Enhancements**: Updated all template files to support dynamic language switching
- **Smart Language Detection**: Automatic language file loading based on JSDoc configuration
- **Tooltip Integration**: Enhanced tooltip system with i18n support using tippy.js

#### 📝 Documentation Updates
- **Comprehensive i18n Guide**: Detailed instructions for configuring languages and adding new translations
- **Usage Examples**: Updated examples to show i18n configuration
- **Developer Guide**: Instructions for extending language support

### v1.0.0 (2025-01-XX)

**Initial Release - Based on clean-jsdoc-theme v4.3.0**

#### 🆕 New Features
- **Smart Properties Table**: Automatically generates a dedicated "Properties" section for classes
- **Field-Level JSDoc Support**: Properties table populated from individual field `@type` annotations
- **Intelligent Constructor Detection**: Only displays constructor section when explicitly documented
- **Clean Member Organization**: Properties displayed separately from methods to avoid duplication
- **English Comments**: All custom code uses English comments for better universality

#### 🔧 Technical Changes
- Custom template modifications in `container.tmpl` and `method.tmpl`
- Enhanced property collection and rendering logic
- Smart constructor detection algorithm
- Template-only solution (no custom plugins required)

#### 📦 Package Updates
- Package name: `@qubit-ltd/jsdoc-theme`
- Updated build pipeline for production deployment
- Configured for Qubit private npm registry

For the base theme changelog, see [clean-jsdoc-theme changelog](https://github.com/ankitskvmdam/clean-jsdoc-theme/blob/master/CHANGELOG.md).

## Developing

```bash
git clone https://github.com/qubit-ltd/jsdoc-theme.git
cd jsdoc-theme
npm install
npm install jsdoc --no-save
npm run build
```

`npm run build` will generate minified CSS and JavaScript files for production use.

To test your changes:
```bash
npm run build:demo
```

This will generate demo documentation in the `output` folder.

## Contributing

We welcome contributions! Please feel free to submit issues and pull requests on [GitHub](https://github.com/qubit-ltd/jsdoc-theme).

## Acknowledgments

This project is based on the excellent [clean-jsdoc-theme](https://github.com/ankitskvmdam/clean-jsdoc-theme) by [Ankit Kumar](https://github.com/ankitskvmdam). We extend our gratitude to the original author and all contributors of the clean-jsdoc-theme project.

## Contributors

<a href="https://github.com/qubit-ltd/jsdoc-theme/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=qubit-ltd/jsdoc-theme" alt="qubit-jsdoc-theme-contributors" />
</a>

## Thanks

Thanks to [fuse.js](https://fusejs.io/), [hljs](https://highlightjs.org/), [tippy.js](https://tippyjs.bootcss.com/), the original [clean-jsdoc-theme](https://github.com/ankitskvmdam/clean-jsdoc-theme) project, and all awesome contributors.

## Contact

If you like this project, please give it a <a href="https://github.com/qubit-ltd/jsdoc-theme" data-icon="octicon-star" aria-label="Star qubit-ltd/jsdoc-theme on GitHub">star</a>.

Mail: <a href="mailto:starfish.hu@gmail.com">starfish.hu@gmail.com</a> <br>

## License

Licensed under the MIT license.
