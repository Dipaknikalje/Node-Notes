Q1. what is node js?
sloution:- (i)Node js is open source cross type platform of front end environment that allows developer to run js outside the browser,
(2) it is mediam between clientside and serverside 
(3)It perform non-blocking operation hence it is asynchronous

Q2. what is opensource cross platform  ?
solution:- Completetly accessible  at public end where everyone can acess it and it is across platform where javascript works.

Q3. Blocking operation and non-blocking?
solution:-Blocking operation- It is that kind of operation where a one task executed at one time or we can say that prevent the code to execute untill the first code execute hence its also synchronous.
 Non-Blocking operation- its getting execute not wait until the first code execute simultaniouly it execute other code. It is also known as asynchronous operation.
 
Q4. what is npm?
solution:- It works as a command line utility to install packages or dependencies It works as an Online repository for node.js packages/modules Where 
everyone can share Tools written in Javascript version management.

Q5 What are the modules in Node.js?
its are reusable codes in node where it can be easily shared using import and export keyword  within the application.

Q6 What is EXPORT, IMPORT, REQUIRE Keyword? 
solution:-(1)export keyword- export keyword is used to easily accessible or transferred the module,function variable, object within the application.
(2)Import Keyword- Import keyword is used to access or make usable to module which is transferred using export keyword, so the using import it get access to that particular code within the module. 
(3)require keyword-require() keyword is a built-in function to include external modules that are present in separate files. or elese  require() statement basically reads a JavaScript file, and then 
executes it, and then proceeds to return the export object(inbuilt function) .

Q7 What is the purpose of the module.exports?
solution:- Module.exports play the main role in node js as we want to export our modules to another modules so to make it transferable we use module.exports with the help of it we can transferred more function from that module to another module using it ex- module.exports={register,login,api} like that.

Q.8 Difference between default export and named export		
solution:- A.Default Exports:- i. It is used to transferred the unique function or only that function in which we define that default keyword. ii. access it in another keyword by importing that function and providing path.
B. Named export-: i. If in that module if we use two or more function which we want to acess in another module also then we use the name export to export those functions in another module. ii.It will be access only when we importing these function in another module that  time we need to write those functions in curly braces and provide the path while importing.

Q9 types of module
i. core module- a. inbuilt
                b. third party

ii. User module- made by developer

Q10. difference between http and https
http-hypertext transfer protocal
     it does not use encryption
     it is faster compare to https
     and uses application layer  
https- hypertext transfer protocal secure
      it uses encryption 
      slower compare to http
      work as transport layer(depends on tls provide authentication )

Q11. create server using 

const http= require("http");

const server= http.createServer(requestListener);

function  requestListener(req,res){
    console.log("my first server")
res.send({
    msg:"server created",
})
}

server.listen(7000,()=>{
    console.log("server is running")
})

Q12. what is express and what are the advantage of using express?
solution:express is the third party  framework which is a framework of node to use  multiple api  in a easy formats , routs, and middleware  are used. 

Q13. different types of http request?
CRUD-post-create - this method is used when user want to create data.
     get- - this method is used when user want to read data or it can use for only for reading purpose
     put & patch- these two methods are used to update the server while put is used to update whole code of that server but patch is only used for updating the required changes which user want to td.
     delete-delete- this method is used when user want to delete some extra unwanted code which are using more space and memory and time.


Q14 How do you import any module in Node.js	?
solution:-when we want to transfer the data or use the functionality from another module to present module then we used the export keyword, hence in present module we can import it using by defining one variable  and in that we uses a require keyword and provide a path to them. when we changes type module in the app dependencies that time we use a import keyword.


Q15 create server using express?
solution:- 
    const app=require("express")();
    app.use('/',(req,res)=>{
        console.log("server is created");
        res.send({
            msg:"server created",
        })
    })
    app.listen(4000,()=>{
        console.log("server is running.....")
    })
