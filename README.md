# Fix Windows Vulcanize

There is a bug in the vulcanize library on Windows machines related to path resolution as can be seen [here](https://github.com/Polymer/polymer-bundler/issues/338).
This little utility automates the process of fixing up the vulcanize path resolver file locally without the need to keep a custom fork updated.

## Installing

Clone this repo and then install globally:

```
git clone https://github.com/CodeBaboon/fix-win-vulcanize.git
cd fix-win-vulcanize
npm install -g .
```

## Options

- `-p`|`-project-path`: specify the path to the project containing the installed vulcanize node module you want to fix. Defaults to the current directory.
- `-v`|`-vulcanize-path`: specify the path to the vulcanize module from within the project-path. Defaults to `node_modules/vulcanize`.
- `-r`|`-resolver-path`: specify the path to the file being modified within the vulcanize library. Defaults to `lib/pathresolver.js`.

## Usage

The easiest way to use this tool is to execute it from within the project that contains the installed vulcanize node module that you need modified:

`fix-win-vulcanize`

By default it will look for the following path: `./node_modules/vulcanize/lib/pathresolver.js` and if it finds it the file will be modified appropriately and saved.

Using the options you can fully customize the path to the pathresolver file.

The command

`fix-win-vulcanize -p ../../my/project/path`

Will result in editing `../../my/project/path/node_modules/vulcanize/lib/pathresolver.js`.

The command

`fix-win-vulcanize -p ../../my/project/path -v somehow/node_modules/are/here`

Will result in editing `../../my/project/path/somehow/node_modules/are/here/lib/pathresolver.js`

The command

`fix-win-vulcanize -p ../../my/project/path -v somehow/node_modules/are/here -r mycustomfile.js`

Will result in editing `../../my/project/path/somehow/node_modules/are/here/mycustomfile.js`