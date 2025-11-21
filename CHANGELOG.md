# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-11-21)

<section class="features">

### Features

-   [`079d040`](https://github.com/stdlib-js/stdlib/commit/079d04046139093c7b4dea9f30b6004a8263c911) - add C implementation for `stats/base/dists/cosine/quantile` [(#6283)](https://github.com/stdlib-js/stdlib/pull/6283)
-   [`1f53990`](https://github.com/stdlib-js/stdlib/commit/1f53990a00be857620285aa346fab8dc4a856b02) - add C implementation for `stats/base/dists/cosine/mean` [(#3985)](https://github.com/stdlib-js/stdlib/pull/3985)
-   [`2529fff`](https://github.com/stdlib-js/stdlib/commit/2529fff8d35f0e63fb8bb7ae7f1cfc94aa697e32) - add C implementation for `stats/base/dists/cosine/variance` [(#3983)](https://github.com/stdlib-js/stdlib/pull/3983)
-   [`ecd8369`](https://github.com/stdlib-js/stdlib/commit/ecd836903721f0f381eb71739a785cb0077ccf01) - add C implementation for `stats/base/dists/cosine/mgf` [(#4510)](https://github.com/stdlib-js/stdlib/pull/4510)
-   [`a0ac787`](https://github.com/stdlib-js/stdlib/commit/a0ac78799e6a7a99f5b68b0b73b680eeba6bd53d) - add C implementation for `stats/base/dists/cosine/pdf` [(#4500)](https://github.com/stdlib-js/stdlib/pull/4500)
-   [`8d8e866`](https://github.com/stdlib-js/stdlib/commit/8d8e86663fe6f285311cedd9fa0e97af126e10ac) - add C implementation for `stats/base/dists/cosine/kurtosis` [(#4477)](https://github.com/stdlib-js/stdlib/pull/4477)
-   [`eaef370`](https://github.com/stdlib-js/stdlib/commit/eaef370daaae0e0fbcfc97652060c3cc5088ac96) - add C implementation for `stats/base/dists/cosine/cdf` [(#4498)](https://github.com/stdlib-js/stdlib/pull/4498)
-   [`5f6bc87`](https://github.com/stdlib-js/stdlib/commit/5f6bc87d96a21664aeb7f4b097f03ba45ebb90ab) - add C implementation for `stats/base/dists/cosine/logcdf` [(#4499)](https://github.com/stdlib-js/stdlib/pull/4499)
-   [`4aec525`](https://github.com/stdlib-js/stdlib/commit/4aec52554b4f7ee67fbbc32cc3f8f937cd5987d2) - add C implementation for `stats/base/dists/cosine/logpdf` [(#4502)](https://github.com/stdlib-js/stdlib/pull/4502)
-   [`d5e0a74`](https://github.com/stdlib-js/stdlib/commit/d5e0a74ba2ba7a4632a1d31b2b949c4b42bec323) - add C implementation for `stats/base/dists/cosine/mode` [(#4476)](https://github.com/stdlib-js/stdlib/pull/4476)
-   [`0cc8c9c`](https://github.com/stdlib-js/stdlib/commit/0cc8c9cb0e63c69484c69693c32b3d55dea66532) - add C implementation for `stats/base/dists/cosine/stdev` [(#4468)](https://github.com/stdlib-js/stdlib/pull/4468)
-   [`19e6e7b`](https://github.com/stdlib-js/stdlib/commit/19e6e7b54f1fe359646788b33ac89bcc70f0ad21) - add C implementation for `stats/base/dists/cosine/median` [(#4467)](https://github.com/stdlib-js/stdlib/pull/4467)
-   [`5e8558a`](https://github.com/stdlib-js/stdlib/commit/5e8558a41efa061be5b4dfc04490dfe3c71f5481) - add C implementation for `stats/base/dists/cosine/skewness` [(#4469)](https://github.com/stdlib-js/stdlib/pull/4469)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`e457c7a`](https://github.com/stdlib-js/stdlib/commit/e457c7a03b29c7a470c165b21d77c85e4b21a4a1) - remove unused `eps` dependency from `cosine/pdf` build task
-   [`3a6a270`](https://github.com/stdlib-js/stdlib/commit/3a6a2702d22c310869b5896404a5456db5ed9312) - remove unused `eps` dependency from `cosine/median` build task
-   [`faa4ec6`](https://github.com/stdlib-js/stdlib/commit/faa4ec6547c9fb72f6a0ba0ebe0cbeaf405becca) - remove unused `eps` dependency from `cosine/logpdf` build task
-   [`23d8106`](https://github.com/stdlib-js/stdlib/commit/23d81062f03e38da13c2a9d4d00983a1a4993b8b) - remove unused `eps` dependency from `cosine/logcdf` build task
-   [`8dfe021`](https://github.com/stdlib-js/stdlib/commit/8dfe0212136eb297a3d1842a337d179034bdf743) - clean-up nonfibonacci implementation and remove unused deps

</section>

<!-- /.bug-fixes -->

<section class="issues">

### Closed Issues

A total of 15 issues were closed in this release:

[#1620](https://github.com/stdlib-js/stdlib/issues/1620), [#3514](https://github.com/stdlib-js/stdlib/issues/3514), [#3515](https://github.com/stdlib-js/stdlib/issues/3515), [#3516](https://github.com/stdlib-js/stdlib/issues/3516), [#3517](https://github.com/stdlib-js/stdlib/issues/3517), [#3518](https://github.com/stdlib-js/stdlib/issues/3518), [#3519](https://github.com/stdlib-js/stdlib/issues/3519), [#3520](https://github.com/stdlib-js/stdlib/issues/3520), [#3521](https://github.com/stdlib-js/stdlib/issues/3521), [#3522](https://github.com/stdlib-js/stdlib/issues/3522), [#3523](https://github.com/stdlib-js/stdlib/issues/3523), [#3524](https://github.com/stdlib-js/stdlib/issues/3524), [#3525](https://github.com/stdlib-js/stdlib/issues/3525), [#3526](https://github.com/stdlib-js/stdlib/issues/3526), [#8168](https://github.com/stdlib-js/stdlib/issues/8168)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`9b13062`](https://github.com/stdlib-js/stdlib/commit/9b130625f0f19866a877023e9be85204636ef01e) - **docs:** fix return values in TSDoc return annotation comments _(by Philipp Burckhardt)_
-   [`b893587`](https://github.com/stdlib-js/stdlib/commit/b893587169727ab72e382fe40ff2c0b9bb7078e7) - **chore:** resolve lint failures _(by Athan Reines)_
-   [`97684e4`](https://github.com/stdlib-js/stdlib/commit/97684e405691f707a532d542ea0f4ea106234588) - **chore:** fix EditorConfig lint errors [(#8178)](https://github.com/stdlib-js/stdlib/pull/8178) _(by navyansh007, Philipp Burckhardt)_
-   [`e2efe32`](https://github.com/stdlib-js/stdlib/commit/e2efe32914d0d9dae5da34e6f7e7bf7655430710) - **chore:** rename exported variable in d.ts file to match name used in example code _(by Philipp Burckhardt)_
-   [`e678757`](https://github.com/stdlib-js/stdlib/commit/e678757c9a62631a907278ec13a5d7b27c0f1e15) - **docs:** fix return annotation values _(by Philipp Burckhardt)_
-   [`7add020`](https://github.com/stdlib-js/stdlib/commit/7add0201c13e56a0381926ccfd4073c84eaf2ed4) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`11581aa`](https://github.com/stdlib-js/stdlib/commit/11581aaca8c3cb824cbb92c0c0f80e76890bdb20) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`07f7c05`](https://github.com/stdlib-js/stdlib/commit/07f7c0522c73e6ad9505e1d45035ae439344200d) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`9c21fd2`](https://github.com/stdlib-js/stdlib/commit/9c21fd20ef8b8a6a88abb96d80ea6d8e4c5434eb) - **test:** use .strictEqual() instead of .equal() _(by Philipp Burckhardt)_
-   [`8ea46b6`](https://github.com/stdlib-js/stdlib/commit/8ea46b662dc6e27231d250d101e33a3cf770cd77) - **test:** update descriptions to match language used in JS tests _(by Philipp Burckhardt)_
-   [`716f93d`](https://github.com/stdlib-js/stdlib/commit/716f93d14c76e1dda5b02c365a17a2519da3cada) - **chore:** add missing benchmark and examples dependencies _(by Philipp Burckhardt)_
-   [`a4ce77e`](https://github.com/stdlib-js/stdlib/commit/a4ce77efe910c9398e75b767fb81e786a3a04cc0) - **test:** pass in opts to skip if addon is not available _(by Philipp Burckhardt)_
-   [`079d040`](https://github.com/stdlib-js/stdlib/commit/079d04046139093c7b4dea9f30b6004a8263c911) - **feat:** add C implementation for `stats/base/dists/cosine/quantile` [(#6283)](https://github.com/stdlib-js/stdlib/pull/6283) _(by Harishchandra Reddy, Philipp Burckhardt, stdlib-bot)_
-   [`e457c7a`](https://github.com/stdlib-js/stdlib/commit/e457c7a03b29c7a470c165b21d77c85e4b21a4a1) - **fix:** remove unused `eps` dependency from `cosine/pdf` build task _(by Philipp Burckhardt)_
-   [`3a6a270`](https://github.com/stdlib-js/stdlib/commit/3a6a2702d22c310869b5896404a5456db5ed9312) - **fix:** remove unused `eps` dependency from `cosine/median` build task _(by Philipp Burckhardt)_
-   [`faa4ec6`](https://github.com/stdlib-js/stdlib/commit/faa4ec6547c9fb72f6a0ba0ebe0cbeaf405becca) - **fix:** remove unused `eps` dependency from `cosine/logpdf` build task _(by Philipp Burckhardt)_
-   [`23d8106`](https://github.com/stdlib-js/stdlib/commit/23d81062f03e38da13c2a9d4d00983a1a4993b8b) - **fix:** remove unused `eps` dependency from `cosine/logcdf` build task _(by Philipp Burckhardt)_
-   [`8dfe021`](https://github.com/stdlib-js/stdlib/commit/8dfe0212136eb297a3d1842a337d179034bdf743) - **fix:** clean-up nonfibonacci implementation and remove unused deps _(by Philipp Burckhardt)_
-   [`7b3dea1`](https://github.com/stdlib-js/stdlib/commit/7b3dea19db4333cc20d6deb6de1f62ed307ffeb5) - **test:** use correct function name _(by Philipp Burckhardt)_
-   [`2a44b1b`](https://github.com/stdlib-js/stdlib/commit/2a44b1b1028e5218e54c6b0677dc319493a5391b) - **test:** use standard deviation instead of stdev _(by Philipp Burckhardt)_
-   [`2f1bc9e`](https://github.com/stdlib-js/stdlib/commit/2f1bc9eb0ca087fb141fd68d1fe7704317be49a1) - **bench:** update random value generation [(#7093)](https://github.com/stdlib-js/stdlib/pull/7093) _(by Harsh Yadav)_
-   [`2ad245f`](https://github.com/stdlib-js/stdlib/commit/2ad245f8ea17a02a55fb41de90a7d6ee7c738c87) - **bench:** update random value generation [(#7094)](https://github.com/stdlib-js/stdlib/pull/7094) _(by Harsh Yadav)_
-   [`6792321`](https://github.com/stdlib-js/stdlib/commit/6792321ed5029b40a9ed15ac3f2dba212eb713e0) - **docs:** replace manual `for` loop in examples [(#7074)](https://github.com/stdlib-js/stdlib/pull/7074) _(by Harsh Yadav)_
-   [`5bed283`](https://github.com/stdlib-js/stdlib/commit/5bed2837d020e3ea6f8452e85b0f7008d4d76b68) - **docs:** replace manual `for` loop in examples [(#7075)](https://github.com/stdlib-js/stdlib/pull/7075) _(by Harsh Yadav)_
-   [`5f73301`](https://github.com/stdlib-js/stdlib/commit/5f73301a8509cc423a06b02140c4e316fd02ff49) - **docs:** minor clean-up _(by Philipp Burckhardt)_
-   [`b6ad3e2`](https://github.com/stdlib-js/stdlib/commit/b6ad3e2323bb7952819c34578467f382a7cace3e) - **chore:** clean-up _(by Athan Reines)_
-   [`d7721ac`](https://github.com/stdlib-js/stdlib/commit/d7721acc432ec419630e74bb49db5ccccc3cd1d5) - **docs:** fix C example code _(by Philipp Burckhardt)_
-   [`1f53990`](https://github.com/stdlib-js/stdlib/commit/1f53990a00be857620285aa346fab8dc4a856b02) - **feat:** add C implementation for `stats/base/dists/cosine/mean` [(#3985)](https://github.com/stdlib-js/stdlib/pull/3985) _(by Divyansh Seth, Philipp Burckhardt, stdlib-bot)_
-   [`cc2d62e`](https://github.com/stdlib-js/stdlib/commit/cc2d62e3aac6caac0fd33252640521d0b563c22a) - **chore:** clean-up _(by Athan Reines)_
-   [`2529fff`](https://github.com/stdlib-js/stdlib/commit/2529fff8d35f0e63fb8bb7ae7f1cfc94aa697e32) - **feat:** add C implementation for `stats/base/dists/cosine/variance` [(#3983)](https://github.com/stdlib-js/stdlib/pull/3983) _(by Aayush Khanna, Philipp Burckhardt, stdlib-bot)_
-   [`a1e230f`](https://github.com/stdlib-js/stdlib/commit/a1e230f29297caa89880e9c194c615a0400fb7bc) - **chore:** clean up cppcheck-suppress comments _(by Karan Anand)_
-   [`f7988d3`](https://github.com/stdlib-js/stdlib/commit/f7988d3c02e0eff3bd9bd7523b5dc975bb98dc0e) - **bench:** fix `isnan` checks in `stats/base/dists` [(#5296)](https://github.com/stdlib-js/stdlib/pull/5296) _(by Karan Anand)_
-   [`d53a818`](https://github.com/stdlib-js/stdlib/commit/d53a8184c029c3df7c45a7a1a2da9ff90b4f883e) - **docs:** fix errors in the structure of READMEs in `stats/base/*` [(#5138)](https://github.com/stdlib-js/stdlib/pull/5138) _(by Aayush Khanna)_
-   [`247af42`](https://github.com/stdlib-js/stdlib/commit/247af42a6ec69194b9d251be4785c120155d7fd8) - **bench:** refactor random number generation in `stats/base/dists/cosine` [(#4861)](https://github.com/stdlib-js/stdlib/pull/4861) _(by Karan Anand)_
-   [`3446619`](https://github.com/stdlib-js/stdlib/commit/344661922e465e67e62f35dde8e5ac3010dc80a4) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`b0790e4`](https://github.com/stdlib-js/stdlib/commit/b0790e41abbacf8f6b7a778dc2e8e552870fdc22) - **refactor:** precompute constant _(by Philipp Burckhardt)_
-   [`1a0d851`](https://github.com/stdlib-js/stdlib/commit/1a0d85130cde680109ebf3307a4fb5c39c5ee8ae) - **refactor:** precompute constant _(by Philipp Burckhardt)_
-   [`c4ef550`](https://github.com/stdlib-js/stdlib/commit/c4ef5500174a0d77a90b1a72be560938ac56d58d) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`05b5326`](https://github.com/stdlib-js/stdlib/commit/05b5326d097c6f4ebf4af11c6e92d5da1410caca) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`d199580`](https://github.com/stdlib-js/stdlib/commit/d19958025c3494ec94440c4d4d66e580d145e71e) - **test:** correcly pass options for native tests _(by Philipp Burckhardt)_
-   [`a203308`](https://github.com/stdlib-js/stdlib/commit/a2033080838f7056796d2bd6f0096e11c25c7da4) - **chore:** add missing empty lines _(by Philipp Burckhardt)_
-   [`33a4af8`](https://github.com/stdlib-js/stdlib/commit/33a4af8ea02d79120618cb4d50edb87d8aeab6a0) - **chore:** remove extra spaces _(by Philipp Burckhardt)_
-   [`895313e`](https://github.com/stdlib-js/stdlib/commit/895313e08f1006053fd6d995494bdf546002694e) - **docs:** update descriptions _(by Athan Reines)_
-   [`ecd8369`](https://github.com/stdlib-js/stdlib/commit/ecd836903721f0f381eb71739a785cb0077ccf01) - **feat:** add C implementation for `stats/base/dists/cosine/mgf` [(#4510)](https://github.com/stdlib-js/stdlib/pull/4510) _(by Prashant Kumar Yadav, Philipp Burckhardt, stdlib-bot)_
-   [`a0ac787`](https://github.com/stdlib-js/stdlib/commit/a0ac78799e6a7a99f5b68b0b73b680eeba6bd53d) - **feat:** add C implementation for `stats/base/dists/cosine/pdf` [(#4500)](https://github.com/stdlib-js/stdlib/pull/4500) _(by Prashant Kumar Yadav)_
-   [`8d8e866`](https://github.com/stdlib-js/stdlib/commit/8d8e86663fe6f285311cedd9fa0e97af126e10ac) - **feat:** add C implementation for `stats/base/dists/cosine/kurtosis` [(#4477)](https://github.com/stdlib-js/stdlib/pull/4477) _(by Prashant Kumar Yadav, Philipp Burckhardt)_
-   [`eaef370`](https://github.com/stdlib-js/stdlib/commit/eaef370daaae0e0fbcfc97652060c3cc5088ac96) - **feat:** add C implementation for `stats/base/dists/cosine/cdf` [(#4498)](https://github.com/stdlib-js/stdlib/pull/4498) _(by Prashant Kumar Yadav, stdlib-bot)_
-   [`5f6bc87`](https://github.com/stdlib-js/stdlib/commit/5f6bc87d96a21664aeb7f4b097f03ba45ebb90ab) - **feat:** add C implementation for `stats/base/dists/cosine/logcdf` [(#4499)](https://github.com/stdlib-js/stdlib/pull/4499) _(by Prashant Kumar Yadav)_
-   [`4aec525`](https://github.com/stdlib-js/stdlib/commit/4aec52554b4f7ee67fbbc32cc3f8f937cd5987d2) - **feat:** add C implementation for `stats/base/dists/cosine/logpdf` [(#4502)](https://github.com/stdlib-js/stdlib/pull/4502) _(by Prashant Kumar Yadav)_
-   [`f3df15f`](https://github.com/stdlib-js/stdlib/commit/f3df15f118d563573f27d2d2b96e35b842f05a18) - **chore:** directly draw from the desired distribution instead of adding constants _(by Philipp Burckhardt)_
-   [`fc0ff17`](https://github.com/stdlib-js/stdlib/commit/fc0ff171dab59e73e1748c1bff504166adc826c3) - **chore:** directly draw from the desired distribution instead of adding constants _(by Philipp Burckhardt)_
-   [`1d5aa47`](https://github.com/stdlib-js/stdlib/commit/1d5aa47204c258b674d3db4aec92fbd2475e5ea7) - **chore:** directly draw from the desired distribution instead of adding constants _(by Philipp Burckhardt)_
-   [`d5e0a74`](https://github.com/stdlib-js/stdlib/commit/d5e0a74ba2ba7a4632a1d31b2b949c4b42bec323) - **feat:** add C implementation for `stats/base/dists/cosine/mode` [(#4476)](https://github.com/stdlib-js/stdlib/pull/4476) _(by Prashant Kumar Yadav, Philipp Burckhardt)_
-   [`0cc8c9c`](https://github.com/stdlib-js/stdlib/commit/0cc8c9cb0e63c69484c69693c32b3d55dea66532) - **feat:** add C implementation for `stats/base/dists/cosine/stdev` [(#4468)](https://github.com/stdlib-js/stdlib/pull/4468) _(by Prashant Kumar Yadav, Philipp Burckhardt)_
-   [`19e6e7b`](https://github.com/stdlib-js/stdlib/commit/19e6e7b54f1fe359646788b33ac89bcc70f0ad21) - **feat:** add C implementation for `stats/base/dists/cosine/median` [(#4467)](https://github.com/stdlib-js/stdlib/pull/4467) _(by Prashant Kumar Yadav, Philipp Burckhardt)_
-   [`5e8558a`](https://github.com/stdlib-js/stdlib/commit/5e8558a41efa061be5b4dfc04490dfe3c71f5481) - **feat:** add C implementation for `stats/base/dists/cosine/skewness` [(#4469)](https://github.com/stdlib-js/stdlib/pull/4469) _(by Prashant Kumar Yadav, Philipp Burckhardt)_
-   [`4a70790`](https://github.com/stdlib-js/stdlib/commit/4a707903dfef7c2b56216000165706497d19a251) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`e5b993a`](https://github.com/stdlib-js/stdlib/commit/e5b993a1b314d478be07dabc12a7b349872e4427) - **docs:** improve README examples of `stats/base/dists/cosine` namespace [(#2669)](https://github.com/stdlib-js/stdlib/pull/2669) _(by Kohantika Nath, Kohantika Nath, Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 10 people contributed to this release. Thank you to the following contributors:

-   Aayush Khanna
-   Athan Reines
-   Divyansh Seth
-   Harishchandra Reddy
-   Harsh Yadav
-   Karan Anand
-   Kohantika Nath
-   Philipp Burckhardt
-   Prashant Kumar Yadav
-   navyansh007

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.2">

## 0.2.2 (2024-07-29)

<section class="commits">

### Commits

<details>

-   [`659f752`](https://github.com/stdlib-js/stdlib/commit/659f752db18317bf5fc237fdbcad0d74b61e1ed9) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`41d41e9`](https://github.com/stdlib-js/stdlib/commit/41d41e959b4eaad3c631e6898e3144a4015a5458) - **test:** include trailing newlines in Julia-generated JSON fixtures _(by Philipp Burckhardt)_
-   [`9ed7d0e`](https://github.com/stdlib-js/stdlib/commit/9ed7d0e7d57edb5ad0dfb65c944bed87d475cbf3) - **chore:** add missing trailing newlines _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-24)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="commits">

### Commits

<details>

-   [`9502ed2`](https://github.com/stdlib-js/stdlib/commit/9502ed27e2853e312c556a48bdd7775095e66709) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`d73bbf4`](https://github.com/stdlib-js/stdlib/commit/d73bbf43d222f935085f8ecf7526e5f57835f74e) - **build:** replace lint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="features">

### Features

-   [`81ca3ab`](https://github.com/stdlib-js/stdlib/commit/81ca3ab33585150e98a402b3e6d57beb1ec36864) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`81ca3ab`](https://github.com/stdlib-js/stdlib/commit/81ca3ab33585150e98a402b3e6d57beb1ec36864): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`81ca3ab`](https://github.com/stdlib-js/stdlib/commit/81ca3ab33585150e98a402b3e6d57beb1ec36864) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`d5fa8e8`](https://github.com/stdlib-js/stdlib/commit/d5fa8e8a6267a837a25a7027e9fe3e847bc2d1c5) - **test:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`ce7e336`](https://github.com/stdlib-js/stdlib/commit/ce7e3367c0f9477773fe76dd0eca64dc6ad33c02) - **docs:** update equations _(by Philipp Burckhardt)_
-   [`37f032d`](https://github.com/stdlib-js/stdlib/commit/37f032d4a571f667ea99f6f52f60b5d736c627f3) - **docs:** render equations via math code blocks _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2022-07-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-28)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

