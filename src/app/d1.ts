export function Decorator1() {
    return function (constructor) {
        console.log('装饰执行');
        console.dir(constructor);
        console.log(Reflect.ownKeys(constructor));
        console.log(Reflect.ownKeys(constructor.prototype));
        return class extends constructor {
            constructor(...args) {
                super(...args)
                console.log('构造', this);
            }
        } as any
    }
}
// export function Decorator2() {
//     return function (constructor) {
//         console.log('装饰2');
//         console.dir(constructor);
//     }
// }
