declare module 'foo' {
	import bar = require('../bar/bar');
	class Foo {
		foo(): void;

		bar(): bar.Bar;
	}
export = Foo;
}
