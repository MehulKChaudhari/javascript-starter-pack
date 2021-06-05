# Javascript-starter-pack


**degit** makes copies of git repositories. When you run `degit some-user/some-repo`, it will find the latest commit on https://github.com/some-user/some-repo and download the associated tar file to `~/.degit/some-user/some-repo/commithash.tar.gz` if it doesn't already exist locally. (This is much quicker than using `git clone`, because you're not downloading the entire git history.)

_Requires Node 8 or above, because `async` and `await` are the cat's pyjamas_

## Installation

```bash
npm install -g degit
```

## Usage

### Basics

The simplest use of degit is to download the master branch of a repo from GitHub to the current working directory:

```bash
degit user/repo

# these commands are equivalent
degit github:user/repo
degit git@github.com:user/repo
degit https://github.com/user/repo
```

Or you can download from GitLab and BitBucket:

```bash
# download from GitLab
degit gitlab:user/repo
degit git@gitlab.com:user/repo
degit https://gitlab.com/user/repo

# download from BitBucket
degit bitbucket:user/repo
degit git@bitbucket.org:user/repo
degit https://bitbucket.org/user/repo

# download from Sourcehut
degit git.sr.ht/user/repo
degit git@git.sr.ht:user/repo
degit https://git.sr.ht/user/repo
```

### Specify a tag, branch or commit

The default branch is `master`.

```bash
degit user/repo#dev       # branch
degit user/repo#v1.2.3    # release tag
degit user/repo#1234abcd  # commit hash
````

### Create a new folder for the project

If the second argument is omitted, the repo will be cloned to the current directory.

```bash
degit user/repo my-new-project
```

### Specify a subdirectory

To clone a specific subdirectory instead of the entire repo, just add it to the argument:

```bash
degit user/repo/subdirectory
```

# Features

* Babel loader
* CSS loader
* Image asset, Inline asset 
* HtmlwebpackPlugin
* Code splitting 
* Caching 
* Dev server

# Example
