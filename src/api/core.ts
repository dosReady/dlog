import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const api =  axios.create(
    {
        baseURL: "http://127.0.0.1:8080",
        headers: {
            "content-type": "application/json"
        },
        responseType: "json"
    }
)

export const post = async function(url:string, param:any) {
    await api.post(url, param)
}

const reqSuccessCallback = async function(req:AxiosRequestConfig):Promise<AxiosRequestConfig> {
    console.log("req");
    return req;
}

const resSuccessCallback = async function(res:AxiosResponse):Promise<AxiosResponse> {
    const data:{errormsg:string} = res.data;
    console.log(data)
    /*
    if(data.errormsg === "access") {
        const isOk = await UserService.procSettingLogin();
        if(isOk) {
            return api(res.config);
        }        
    } else if(data.errormsg === "refresh") {
        toast.error("로그인정보가 만료되었습니다.");
        window.location.replace("/");
    }
    */

    return res;
}

api.interceptors.request.use(reqSuccessCallback);
api.interceptors.response.use(resSuccessCallback);
