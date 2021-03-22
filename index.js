const s = [
{
  code: 'a',
  value: 1,
  list: [
  {
    code: 'd',
    value: 4,
  }
]
},
{
code: 'b',
value: 2,
list: [
  {
  code: 'e',
  value: 5,
},
{
code: 'h',
value: 7,
}
]
},
{
code: 'c',
value: 3,
list: [
{
  code: 'f',
  value: 6 ,
}
]
}
]


function test(list, code) {

  let stack = [];
  let going = true;

  let walker = (array, code) => {
      console.log('测力的么', code)
      array.forEach(item => {
          if (!going) return;
          stack.push(item['code']);
          if (item['code'] === code) {
              console.log('相等', item)
              going = false;
          } else if (item['list']) {
              walker(item['list'], code);
          } else {
              stack.pop();
          }
      });

      if (going) stack.pop();
  }

walker(list, code)

console.log('test..............')

  return stack
}

const t = test(s, 'h')

console.log(t)


let data = [
{
id: 1,
label: '一级 2',
children: [
{
  id: 3,
  label: '二级 2-1',
  children: [{
    id: 4,
    label: '三级 3-1-1'
  }, {
    id: 5,
    label: '三级 3-1-2',
    disabled: true
  }]
},
{
  id: 2,
  label: '二级 2-2',
  disabled: true,
  children: [
  {
    id: 6,
    label: '三级 3-2-1'
  },
  {
    id: 7,
    label: '三级 3-2-2',
    disabled: true
  }]
}]
}
]

let find = (array, label) =>{
    let stack = [];
    let going = true;

    let walker = (array, label) => {
        array.forEach(item => {
            if (!going) return;
            stack.push(item['label']);
            if (item['label'] === label) {
                going = false;
            } else if (item['children']) {
                walker(item['children'], label);
            } else {
                stack.pop();
            }
        });
        if (going) stack.pop();
    }

    walker(array, label);

    return stack.join('-');
}

// console.log(find(data, '三级 3-2-2'))
// 一级 2-二级 2-2-三级 3-2-2

参考:
https://segmentfault.com/q/1010000013483988
https://segmentfault.com/q/1010000023835075
https://blog.csdn.net/qq_41071477/article/details/105768014
