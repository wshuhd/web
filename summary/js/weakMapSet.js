
//由于 Set 类型存储对象引用的方式，它也可以被称为 Strong Set 。
//对象存储在 Set 的一个 实例中时，实际上相当于把对象存储在变量中。
//只要对于 Set 实例的引用仍然存在，所存储 的对象就无法被垃圾回收机制回收，从而无法释放内存。例如:

let set = new Set(),
    key = {};
set.add(key); console.log(set.size);
// 取消原始引用 key = null;
console.log(set.size);
// 重新获得原始引用 key = [...set][0];

//将 key 设置为 null 清除了对 key 对象的一个引用，但是另一个引用还存于 set 内部. 
//此时 就造成一个效果：key无法被垃圾回收，即使它被设置为null（只是原始引用）。

//所以就有weakSet，一旦key 被删除或者设置null，weakSet就会移除。当对应的key 0个引用时，就被垃圾回收。

//WeakMap 同理
//WeakSet和WeakMap一般用于dom 作为key 场景。因为dom容易被移除。