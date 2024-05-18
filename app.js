
var poc = document.getElementById("poc")
var mnl = document.getElementById("mnl")
var mlk = document.getElementById("mlk")
var cvx = document.getElementById("cvx")
var cvb = document.getElementById("cvb")

mnl.addEventListener("mouseover",function(){
    poc.src =mnl.src
})
mlk.addEventListener("mouseover",function(){
    poc.src =mlk.src
})
cvx.addEventListener("mouseover",function(){
    poc.src =cvx.src
})
cvb.addEventListener("mouseover",function(){
    poc.src =cvb.src
})



mnl.addEventListener("mouseout",function(){
    poc.src = "https://images.unsplash.com/photo-1692730770606-f5c6367ca286?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmV1dGlmdWwlMjBwbGFjZXxlbnwwfHwwfHx8MA%3D%3D"
})
mlk.addEventListener("mouseout",function(){
    poc.src = "https://images.unsplash.com/photo-1692730770606-f5c6367ca286?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmV1dGlmdWwlMjBwbGFjZXxlbnwwfHwwfHx8MA%3D%3D"
})
cvx.addEventListener("mouseout",function(){
    poc.src = "https://images.unsplash.com/photo-1692730770606-f5c6367ca286?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmV1dGlmdWwlMjBwbGFjZXxlbnwwfHwwfHx8MA%3D%3D"
})
cvb.addEventListener("mouseout",function(){
    poc.src = "https://images.unsplash.com/photo-1692730770606-f5c6367ca286?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmV1dGlmdWwlMjBwbGFjZXxlbnwwfHwwfHx8MA%3D%3D"
})