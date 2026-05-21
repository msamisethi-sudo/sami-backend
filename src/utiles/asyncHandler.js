 const asyncHandler = (requestHandler) => {
(req,res,next,err) =>{
    Promise.resolve(requestHandler(req,res,err,next)).catch((err) => next(err))
}
 }

export default asyncHandler;


// try catch method :


// const asyncHandler = (func) => async (req,res,next,err) =>{
// try {
//     await func(req,res,next,err)
// } catch (error) {
//     res.status(err.code || 500).json({
//         success: false,
//         message:err.message




//     })
// }
// }