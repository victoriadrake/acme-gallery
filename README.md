# acme-gallery: Automagically create a pure CSS gallery web page from a folder of image files

**See a working example here: [victoria.dev/tokyo-life](https://victoria.dev/tokyo-life/)**

**acme-gallery** creates an HTML page with CSS styling included. You can add the page to your website as a standalone gallery, or extract the HTML and styling to mix into other pages. Some comfort with HTML and CSS is recommended for the latter.

## Files provided

- `index.html` (generated from `index.pug`)
- `style.css` (generated from `style.sass`)
- `gulpfile.js`
- `package.json`

## Usage (command line)

### 1. Clone the repository

```
$ git clone https://github.com/victoriadotdev/acme-gallery.git
```

### 2. Enter the repo directory and download dependencies

This tool makes use of Node.js and npm. You can find instructions for installing these here: https://docs.npmjs.com/getting-started/installing-node

```
$ cd acme-gallery
$ npm install
```

### 3. Place any number of images in the `acme-gallery/images/` folder

These images will be optimized for you.

### 4. Optionally, edit the `.sass` and `.pug` files

You may wish to change the styling, or the page's title and description.

### 5. Generate the gallery

In `acme-gallery/`, run:

```
$ gulp generate
```

The program will output a `public/` folder containing the files for your gallery page.

# License
Copyright (C) 2018 Victoria Lai

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.

## Acme Corp.

![Mail order catalog.](images/acme-catalog.jpg)