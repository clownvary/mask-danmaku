
const genNumber = range => Math.floor(Math.random() * range);
const genColor = () => {
    return '#' +
            (function (color) {
                return (color += '0123456789abcdef'[Math.floor(Math.random() * 16)]) && (color.length == 6) ? color : arguments.callee(color);
            })("");
};
const run = () => {
    const wrapper = document.querySelector('.mask');
    const barrages = [
      'OKOK', 'DO you like me', 'are u ok', 'i am very ok', 'ohhhhhhhhhhhhhh', '哈哈哈哈哈哈哈哈哈哈', '抽个手机', '雷总好',
      'OKOK', 'DO you like me', 'are u ok', 'i am very ok', 'ohhhhhhhhhhhhhh', '哈哈哈哈哈哈哈哈哈哈', '抽个手机', '雷总好',
      'OKOK', 'DO you like me', 'are u ok', 'i am very ok', 'ohhhhhhhhhhhhhh', '哈哈哈哈哈哈哈哈哈哈', '抽个手机', '雷总好',
      'OKOK', 'DO you like me', 'are u ok', 'i am very ok', 'ohhhhhhhhhhhhhh', '哈哈哈哈哈哈哈哈哈哈', '抽个手机', '雷总好',
      'OKOK', 'DO you like me', 'are u ok', 'i am very ok', 'ohhhhhhhhhhhhhh', '哈哈哈哈哈哈哈哈哈哈', '抽个手机', '雷总好',
      'OKOK', 'DO you like me', 'are u ok', 'i am very ok', 'ohhhhhhhhhhhhhh', '哈哈哈哈哈哈哈哈哈哈', '抽个手机', '雷总好',
      'OKOK', 'DO you like me', 'are u ok', 'i am very ok', 'ohhhhhhhhhhhhhh', '哈哈哈哈哈哈哈哈哈哈', '抽个手机', '雷总好'
    ]
    for (const item of barrages) {
      const block = document.createElement('div')
      block.classList.add('block');
      block.style.color = genColor();
      block.style.top = genNumber(wrapper.clientHeight-20) + 'px' // 弹幕的位置不能超过容器的高度
      block.style.animation = `barrage ${genNumber(20)}s linear ${genNumber(60)}s` // 随机动画效果
      block.textContent = item;
      wrapper.appendChild(block)
    }
}

const start = () => {
  for (let index = 0; index < 10; index++) {
    run();
  }
}
