# ERROR

```shell
TypeError: Cannot call method 'substr' of undefined
    at Function.<anonymous> (/Users/jiku/.meteor/packages/meteor-tool/.1.1.12-modules.5.boy6cc++os.osx.x86_64+web.browser+web.cordova/mt-os.osx.x86_64/dev_bundle/lib/node_modules/source-map/lib/source-map/source-node.js:120:29)
    at Array.forEach (native)
    at SourceMapConsumer_eachMapping [as eachMapping] (/Users/jiku/.meteor/packages/meteor-tool/.1.1.12-modules.5.boy6cc++os.osx.x86_64+web.browser+web.cordova/mt-os.osx.x86_64/dev_bundle/lib/node_modules/source-map/lib/source-map/source-map-consumer.js:570:10)
    at Function.SourceNode_fromStringWithSourceMap [as fromStringWithSourceMap] (/Users/jiku/.meteor/packages/meteor-tool/.1.1.12-modules.5.boy6cc++os.osx.x86_64+web.browser+web.cordova/mt-os.osx.x86_64/dev_bundle/lib/node_modules/source-map/lib/source-map/source-node.js:84:26)
    at [object Object]._.extend.getPrelinkedOutput (/tools/isobuild/linker.js:687:36)
    at walk (/tools/isobuild/linker.js:259:23)
    at /tools/isobuild/linker.js:268:11
    at Array.forEach (native)
    at Function._.each._.forEach (/Users/jiku/.meteor/packages/meteor-tool/.1.1.12-modules.5.boy6cc++os.osx.x86_64+web.browser+web.cordova/mt-os.osx.x86_64/dev_bundle/lib/node_modules/underscore/underscore.js:79:11)
    at /tools/isobuild/linker.js:266:11
    at walk (/tools/isobuild/linker.js:273:26)
    at /tools/isobuild/linker.js:268:11
    at Array.forEach (native)
    at Function._.each._.forEach (/Users/jiku/.meteor/packages/meteor-tool/.1.1.12-modules.5.boy6cc++os.osx.x86_64+web.browser+web.cordova/mt-os.osx.x86_64/dev_bundle/lib/node_modules/underscore/underscore.js:79:11)
    at /tools/isobuild/linker.js:266:11
    at walk (/tools/isobuild/linker.js:273:26)
    at /tools/isobuild/linker.js:268:11
    at Array.forEach (native)
    at Function._.each._.forEach (/Users/jiku/.meteor/packages/meteor-tool/.1.1.12-modules.5.boy6cc++os.osx.x86_64+web.browser+web.cordova/mt-os.osx.x86_64/dev_bundle/lib/node_modules/underscore/underscore.js:79:11)
    at /tools/isobuild/linker.js:266:11
    at walk (/tools/isobuild/linker.js:273:26)
    at /tools/isobuild/linker.js:268:11
    at Array.forEach (native)
    at Function._.each._.forEach (/Users/jiku/.meteor/packages/meteor-tool/.1.1.12-modules.5.boy6cc++os.osx.x86_64+web.browser+web.cordova/mt-os.osx.x86_64/dev_bundle/lib/node_modules/underscore/underscore.js:79:11)
    at /tools/isobuild/linker.js:266:11
    at walk (/tools/isobuild/linker.js:273:26)
    at /tools/isobuild/linker.js:268:11
    at Array.forEach (native)
    at Function._.each._.forEach (/Users/jiku/.meteor/packages/meteor-tool/.1.1.12-modules.5.boy6cc++os.osx.x86_64+web.browser+web.cordova/mt-os.osx.x86_64/dev_bundle/lib/node_modules/underscore/underscore.js:79:11)
    at /tools/isobuild/linker.js:266:11
    at walk (/tools/isobuild/linker.js:273:26)
    at [object Object]._.extend._chunkifyModuleTree (/tools/isobuild/linker.js:282:5)
    at [object Object]._.extend.getPrelinkedFiles (/tools/isobuild/linker.js:169:14)
    at Object.fullLink (/tools/isobuild/linker.js:961:31)
    at /tools/isobuild/compiler-plugin.js:851:28
    at /tools/utils/buildmessage.js:359:18
    at [object Object]._.extend.withValue (/tools/utils/fiber-helpers.js:89:14)
    at /tools/utils/buildmessage.js:352:34
    at [object Object]._.extend.withValue (/tools/utils/fiber-helpers.js:89:14)
    at /tools/utils/buildmessage.js:350:23
    at [object Object]._.extend.withValue (/tools/utils/fiber-helpers.js:89:14)
    at Object.enterJob (/tools/utils/buildmessage.js:324:26)
    at PackageSourceBatch._linkJS (/tools/isobuild/compiler-plugin.js:850:18)
    at PackageSourceBatch.getResources (/tools/isobuild/compiler-plugin.js:748:28)
    at /tools/isobuild/bundler.js:757:37
    at Array.forEach (native)
    at ClientTarget._emitResources (/tools/isobuild/bundler.js:739:19)
    at /tools/isobuild/bundler.js:515:12
    at /tools/utils/buildmessage.js:359:18
    at [object Object]._.extend.withValue (/tools/utils/fiber-helpers.js:89:14)
    at /tools/utils/buildmessage.js:352:34
    at [object Object]._.extend.withValue (/tools/utils/fiber-helpers.js:89:14)
    at /tools/utils/buildmessage.js:350:23
    at [object Object]._.extend.withValue (/tools/utils/fiber-helpers.js:89:14)
    at Object.enterJob (/tools/utils/buildmessage.js:324:26)
    at ClientTarget.make (/tools/isobuild/bundler.js:506:18)
    at /tools/isobuild/bundler.js:2210:14
    at /tools/isobuild/bundler.js:2299:20
    at Array.forEach (native)
    at Function._.each._.forEach (/Users/jiku/.meteor/packages/meteor-tool/.1.1.12-modules.5.boy6cc++os.osx.x86_64+web.browser+web.cordova/mt-os.osx.x86_64/dev_bundle/lib/node_modules/underscore/underscore.js:79:11)
    at /tools/isobuild/bundler.js:2298:7
    at /tools/utils/buildmessage.js:271:13
    at [object Object]._.extend.withValue (/tools/utils/fiber-helpers.js:89:14)
    at /tools/utils/buildmessage.js:264:29
    at [object Object]._.extend.withValue (/tools/utils/fiber-helpers.js:89:14)
    at /tools/utils/buildmessage.js:262:18
    at [object Object]._.extend.withValue (/tools/utils/fiber-helpers.js:89:14)
    at /tools/utils/buildmessage.js:253:23
    at [object Object]._.extend.withValue (/tools/utils/fiber-helpers.js:89:14)
    at Object.capture (/tools/utils/buildmessage.js:252:19)
    at Object.exports.bundle (/tools/isobuild/bundler.js:2191:31)
    at /tools/runners/run-app.js:585:36
    at time (/tools/tool-env/profile.js:238:28)
    at Function.run (/tools/tool-env/profile.js:391:12)
    at bundleApp (/tools/runners/run-app.js:575:34)
    at [object Object]._.extend._runOnce (/tools/runners/run-app.js:628:35)
    at [object Object]._.extend._fiber (/tools/runners/run-app.js:880:28)
    at /tools/runners/run-app.js:402:12
```
