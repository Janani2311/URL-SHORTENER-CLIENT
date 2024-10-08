export default{
    SIGNIN:{
        path:'/user/signin',
        auth:false
    },
    SIGNUP:{
        path:'/user/signup',
        auth:false
    },
    FORGOT_PASSWORD:{
        path:'/user/forgotpwd',
        auth:false
    },
    RESET_PASSWORD:{
        path:'/user/resetpwd',
        auth:false
    },
    GET_ALL_USERS:{
        path:'/user/get',
        auth:true
    },
    ACTIVATE_NEW_ACCOUNT:{
        path:'/user/activate',
        auth:false
    },
    GET_USER_BY_ID:{
        path:'/user/getuser',
        auth:true
    },
    CHANGE_STATUS:{
        path:'/user/changestatus',
        auth:true
    },
    CREATE_SHORTURL:{
        path:'/url/create',
        auth:true
    },
    REDIRECT_URL:{
        path:'/url',
        auth:false
    },
    GETALL_URL:{
        path:'/url/get/getall',
        auth:true
    },
    GET_URL_BY_USERID:{
        path:'/url/get/myurls',
        auth:true
    }

}