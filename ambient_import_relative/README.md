Module foo does a import/require with a relative path:

````
error TS2197: Import declaration in an ambient external module declaration cannot reference external module through relative external module name.
````

Ticket: https://typescript.codeplex.com/discussions/543469

Build: https://travis-ci.org/Bartvds/demo-typescript-cases/builds/23982115#L301
