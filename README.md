# Javascript-starter-pack


**degit** makes copies of git repositories. When you run `degit some-user/some-repo`, it will find the latest commit on https://github.com/some-user/some-repo and download the associated tar file to `~/.degit/some-user/some-repo/commithash.tar.gz` if it doesn't already exist locally. (This is much quicker than using `git clone`, because you're not downloading the entire git history.)

## Installation

```bash
npm install -g degit
```

## Usage

### Basics

The simplest use of degit is to download the master branch of a repo from GitHub to the current working directory:

```bash
degit MehulKChaudhari/javascript-starter-pack

# these commands are equivalent
degit MehulKChaudhari/javascript-starter-pack
degit git@github.com:MehulKChaudhari/javascript-starter-pack.git
degit https://github.com/MehulKChaudhari/javascript-starter-pack.git
```


### Create a new folder for the project

If the second argument is omitted, the repo will be cloned to the current directory.

```bash
degit user/repo my-new-project
```

### Specify a subdirectory

To clone a specific subdirectory instead of the entire repo, just add it to the argument:

```bash
degit mehulkchaudhari/javascript-starter-pack/subdirectory
```
## After cloning the repo
```bash
  cd my-new-project
```
Then Install dependencies:
```bash
  npm install
```
Then remove author git and initialise your own:
```bash
  rm -rf .git && git init
```
To run the development server:
```bash
  npm run start
```
To build production files:
```bash
  npm run build
```
You are ready to build your vanillaJs app

# Features

* Babel loader
* CSS loader
* Image asset, Inline asset 
* HtmlwebpackPlugin
* Code splitting 
* Caching 
* Dev server
* Eslint (add rules you want in `.eslintrc` file)

# Example
making it.

## License

[MIT](LICENSE).
