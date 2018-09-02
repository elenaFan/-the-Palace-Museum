
$(function () {

    //声明一个变量,用来记录当前显示图片的索引.
    var index  = 0;
    //需求1:点击右边焦点,下一张li慢慢显示fadeIn,其他的li慢慢隐藏fadeOut
    $('.wenwu .tupin .arrow-right').on('click',function () {
        index++;
        //如果你现在是最后一张图片(索引是7), 那么点击右边焦点index就是8, 但是要显示第一张就应该把index变成0.
        if(index == 2){ //8最好不要写死,是轮播图图片的个数.
            index = 0;
        }
        console.log(index);
        $('.wenwu .tupin li').eq(index).fadeIn(500).siblings('li').fadeOut(500);
    });


    //需求2:点击左边焦点,上一张li慢慢显示fadeIn,其他的li慢慢隐藏fadeOut
    $('.wenwu .tupin .arrow-left').on('click',function () {
        index--;
        //如果你现在是第一张,点击左边焦点index变成-1, 但是我们要显示最后一张,应该index改成7.
        if(index == -1){
            index = 1; //7也不要写死,应该是轮播图图片的个数-1
        }
        console.log(index);
        $('.wenwu .tupin li').eq(index).fadeIn(500).siblings('li').fadeOut(500);
    });


});

