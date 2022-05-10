import React from 'react';



const Blogs = () => {
    return (
        
        <div className='pt-20 container '>
            <div class="accordion mt-16" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        javascript vs node.js
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <strong>javascript :</strong>  <p>
        JavaScript is a lightweight , cross-platform, interpreted scripting programming language that is primarily used for client-side scripting. It's built into both Java and HTML, is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. javaScript can run on any engine, including Firefox's Spider Monkey, Safari's JavaScript Core, and V8 (Google Chrome). As a result, JavaScript programming is very simple to create, and any running environment is equivalent to a proper browser
        <strong>Node.js</strong> <p>Node.js is a cross-platform, open-source JavaScript runtime environment that enables JavaScript to be run on the server. Node.js enables JavaScript code to run outside of the browser. Node.js comes with a large number of modules and is mostly used in web creation.Node.js can be used to create a variety of applications, including web apps, real-time chat apps, command-line apps, and REST API servers, among others. However, it is mainly used to build network programs such as web servers. The standard filename extension of Node.js It's a JavaScript interpreter and environment with some valuable libraries that JavaScript programming can use separately. It is generally used on the server-side.</p>
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
       sql Database VS nosql Database
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        <strong> SQL Database.</strong> <p> A SQL Database follows a table like structure which can have an 
unlimited number of rows and every data present inside the database 
is properly structured with Predefined Schemas, SQL databases are vertically scalable are table-based,  it is basically used 
to manipulate Relational Databases Management Systems.  </p> <strong>No SQL database</strong> <p>
A NoSQL Database is a Distributed Database where the data is very 
unstructured with Dynamic Schema. Unlike SQL it cannot have unlimited 
rows but it follows a Standard Schema Definition and can store all 
sorts of data models with large distributed data in the form of 
key-value pairs, graph databases, documents or wide-column stores. have dynamic schemas for unstructured data. is  are horizontally scalable.better for unstructured data like documents or JSON.. </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      when should use node.js & when should use mongodb
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        <strong>.Generally both are different  technologie</strong> <p> basically MonogDB is a database system which gives us a chance to efficiently store documents in a database and to perform operations like data updates, or to search documents by some criterias. MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.  MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database. MongoDB also has API libraries for other programming environments such as Python, Java, etc
            <strong>Node.js</strong> <p>Shortly we can say that, NodeJS is a JavaScript runtime environment. It's actually helps JavaScript to run outside of server. It's used in server side development. ny project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language Node.js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind. </p>

</p>
      </div>
    </div>
  </div>
</div>
 
        </div>
    );
};

export default Blogs;