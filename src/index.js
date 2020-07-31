// import { h, init } from 'snabbdom'
// import snabbdom from 'snabbdom'


import { h } from 'snabbdom/build/package/h'
import { init } from 'snabbdom/build/package/init'
import { classModule } from 'snabbdom/build/package/modules/class'

console.log(h)

var snabbdom = window.snabbdom

var patch = init([
    classModule
])

var container = document.getElementById('container')
// 生成vnode
var vnode = h('ul#list', {}, [
    h('li.item', {}, ['默认节点', h('button.del', {}, '删除当前项')]),
])
// 初次渲染,把vnode的内容全部添加到空白的容器中
patch(container, vnode)

document.getElementById('add').addEventListener('click', () => {
    // 生成新的vnode
    var newVnode = h('ul#list', {}, [
        h('li.item', {}, ['默认节点', h('button.del', {}, '删除当前项')]),
        h('li.item', {}, [Math.random() * 10, h('button.del', {}, '删除当前项')]),
    ])
    // 再次渲染,对比new vnode 和 old vnode,将真正需要渲染的部分进行渲染,不需要渲染的部分,不会更改 
    patch(vnode, newVnode)
})
//事件委托 删除子节点
document.addEventListener('click', function (e) {
    var element = e.target;
    if (element.className == 'del') {
        console.log(element);
        element.parentNode.parentNode.removeChild(element.parentNode)
    }
})