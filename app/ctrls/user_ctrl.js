//获取用户
exports.getUser = async (ctx, next) => {
    ctx.body = {
        username: 'karst.xia',
        age: 30
    }
};

//用户注册
exports.registerUser = async (ctx, next) => {
    console.log('registerUser', ctx.request.body);
};