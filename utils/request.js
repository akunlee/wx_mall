const request=(url,data={},method='GET')=>{
    return new Promise((resolve,reject)=>{
        wx.request({
            url,
            method,
            data,
            success:(res)=>{
                resolve(res)
            },
            fail:(err)=>{
                reject(err)
            }
          })
    })

}
module.exports=request;