import axios from "axios";
import config from "./ConfigApi";
const AuthHandler=(email,password)=>{
    return new Promise((resolve,reject)=>{
        axios.post(
            `${config.getApiPath()}/api/v1/auth/authenticate`,
            {
              email: email,
              password:password,
            }
          ).then((data)=>{
            resolve(data.data)
          }).catch((e)=>{
            reject(e);
          })
    })
}

const AuthApi={AuthHandler}

export default AuthApi;