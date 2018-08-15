# 注意事项

* 组件的状态和事件都集中在 **store** 中管理

* 只要数据发生改变，`Component` 组件就会刷新，因此这会有性能问题，需要在 `shouldComponent` 钩子下进行数据校验，这显然是非常麻烦的。可以使用 `PureComponent` 来替代 `Component`，它默认内置了校验，但务必配合 **immutable** 来使用，否则会有坑（header 组件没有更新，用来做对比）

* 如果使用了 **react-router-dom**，那就不要用 `a` 标签了，因为点击 `a` 标签会重新渲染 doc 文件，应该引入库中的 `Link` 来代替 `a`，它不会导致重复渲染