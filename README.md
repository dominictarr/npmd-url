# npmd-url

get the url to download a npm module from an explicit module id.

``` bash
#download a module version from the registry.
{module}@{version}
  -> https://registry.npmjs.org/{module}/-/{module}-{version}.tgz

#download a module from github
git://github.com/{user}/{module}.git#{commitish}
  -> https://codeload.github.com/{user}/{module}/targz/{commitish}

#another github url
https?://github.com/{user}/{module}.git#{commitish}
  -> https://codeload.github.com/{user}/{module}/targz/{commitish}

#url directly to the tarball.
{url} -> {url}

```

## License

MIT
