// const StoreLoginData = (data, headers) 
const StoreLoginData = (data,headers)=> {
    
    localStorage.setItem('data',JSON.stringify(data))
    localStorage.setItem('headers',JSON.stringify(headers))  
    console.warn('loginData=', localStorage.getItem('headers'))
    debugger
    // console.warn('loginData=',newData)
}
// const newData = localStorage.getItem(JSON.parse('data'))

export default StoreLoginData;
// export {newData}
