<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Cosine

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Raised cosine distribution.



<section class="usage">

## Usage

```javascript
import cosine from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine@v0.2.0-esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { Cosine, cdf, kurtosis, logcdf, logpdf, mean, median, mgf, mode, pdf, quantile, skewness, stdev, variance } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine@v0.2.0-esm/index.mjs';
```

#### cosine

Raised cosine distribution.

```javascript
var dist = cosine;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, mu, s )`][@stdlib/stats/base/dists/cosine/cdf]</span><span class="delimiter">: </span><span class="description">raised cosine distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, mu, s )`][@stdlib/stats/base/dists/cosine/logcdf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the cumulative distribution function (CDF) for a raised cosine distribution.</span>
-   <span class="signature">[`logpdf( x, mu, s )`][@stdlib/stats/base/dists/cosine/logpdf]</span><span class="delimiter">: </span><span class="description">raised cosine distribution logarithm of probability density function (PDF).</span>
-   <span class="signature">[`mgf( t, mu, s )`][@stdlib/stats/base/dists/cosine/mgf]</span><span class="delimiter">: </span><span class="description">raised cosine distribution moment-generating function.</span>
-   <span class="signature">[`pdf( x, mu, s )`][@stdlib/stats/base/dists/cosine/pdf]</span><span class="delimiter">: </span><span class="description">raised cosine distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, mu, s )`][@stdlib/stats/base/dists/cosine/quantile]</span><span class="delimiter">: </span><span class="description">raised cosine distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`kurtosis( mu, s )`][@stdlib/stats/base/dists/cosine/kurtosis]</span><span class="delimiter">: </span><span class="description">raised cosine distribution excess kurtosis.</span>
-   <span class="signature">[`mean( mu, s )`][@stdlib/stats/base/dists/cosine/mean]</span><span class="delimiter">: </span><span class="description">raised cosine distribution expected value.</span>
-   <span class="signature">[`median( mu, s )`][@stdlib/stats/base/dists/cosine/median]</span><span class="delimiter">: </span><span class="description">raised cosine distribution median.</span>
-   <span class="signature">[`mode( mu, s )`][@stdlib/stats/base/dists/cosine/mode]</span><span class="delimiter">: </span><span class="description">raised cosine distribution mode.</span>
-   <span class="signature">[`skewness( mu, s )`][@stdlib/stats/base/dists/cosine/skewness]</span><span class="delimiter">: </span><span class="description">raised cosine distribution skewness.</span>
-   <span class="signature">[`stdev( mu, s )`][@stdlib/stats/base/dists/cosine/stdev]</span><span class="delimiter">: </span><span class="description">raised cosine distribution standard deviation.</span>
-   <span class="signature">[`variance( mu, s )`][@stdlib/stats/base/dists/cosine/variance]</span><span class="delimiter">: </span><span class="description">raised cosine distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [raised cosine][cosine-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Cosine( [mu, s] )`][@stdlib/stats/base/dists/cosine/ctor]</span><span class="delimiter">: </span><span class="description">raised cosine distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Cosine = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine' ).Cosine;

var dist = new Cosine( 2.0, 4.0 );

var y = dist.cdf( 0.5 );
// returns ~0.165
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs';
import cosine from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-cosine@v0.2.0-esm/index.mjs';

console.log( objectKeys( cosine ) );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-cosine.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-cosine

[test-image]: https://github.com/stdlib-js/stats-base-dists-cosine/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/stats-base-dists-cosine/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-cosine/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-cosine?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-cosine.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-cosine/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-cosine/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-cosine/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-cosine/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-cosine/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-cosine/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-cosine/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-cosine/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-cosine/main/LICENSE

[cosine-distribution]: https://en.wikipedia.org/wiki/Raised_cosine_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/cosine/ctor]: https://github.com/stdlib-js/stats-base-dists-cosine-ctor/tree/esm

[@stdlib/stats/base/dists/cosine/kurtosis]: https://github.com/stdlib-js/stats-base-dists-cosine-kurtosis/tree/esm

[@stdlib/stats/base/dists/cosine/mean]: https://github.com/stdlib-js/stats-base-dists-cosine-mean/tree/esm

[@stdlib/stats/base/dists/cosine/median]: https://github.com/stdlib-js/stats-base-dists-cosine-median/tree/esm

[@stdlib/stats/base/dists/cosine/mode]: https://github.com/stdlib-js/stats-base-dists-cosine-mode/tree/esm

[@stdlib/stats/base/dists/cosine/skewness]: https://github.com/stdlib-js/stats-base-dists-cosine-skewness/tree/esm

[@stdlib/stats/base/dists/cosine/stdev]: https://github.com/stdlib-js/stats-base-dists-cosine-stdev/tree/esm

[@stdlib/stats/base/dists/cosine/variance]: https://github.com/stdlib-js/stats-base-dists-cosine-variance/tree/esm

[@stdlib/stats/base/dists/cosine/cdf]: https://github.com/stdlib-js/stats-base-dists-cosine-cdf/tree/esm

[@stdlib/stats/base/dists/cosine/logcdf]: https://github.com/stdlib-js/stats-base-dists-cosine-logcdf/tree/esm

[@stdlib/stats/base/dists/cosine/logpdf]: https://github.com/stdlib-js/stats-base-dists-cosine-logpdf/tree/esm

[@stdlib/stats/base/dists/cosine/mgf]: https://github.com/stdlib-js/stats-base-dists-cosine-mgf/tree/esm

[@stdlib/stats/base/dists/cosine/pdf]: https://github.com/stdlib-js/stats-base-dists-cosine-pdf/tree/esm

[@stdlib/stats/base/dists/cosine/quantile]: https://github.com/stdlib-js/stats-base-dists-cosine-quantile/tree/esm

<!-- </toc-links> -->

</section>

<!-- /.links -->
