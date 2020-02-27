# Intro to graphql

Welcome to the repo where you can find source code for running a demo server for graphql. This demo was created to showcase
graphql as a technology.

# Running the demo server

## Prerequisites
- Have Nodejs 10+ installed in your computer by downloading an installer from [https://nodejs.org/en/](https://nodejs.org/en/)

## Steps
- Download the repository by either clicking on download button, and unzipping the files once downloaded, or by using 
`git clone https://github.com/NPDSoftwareDev/graphql-presentation.git` 
- Once you have the files, open up command prompt, and use `cd` command to change directory to the location of the files. 
When you perform `ls` if you have unix based computer or `dir` in windows, you should see the package.json listed. 
- Run `npm install` 
- Once installation of all required modules is complete, Run `npm start`.
- your demo server will start on [http://localhost:4099/](http://localhost:4099/)


## Queries 
Copy and paste the following queries to experiment running the API


### Getting Customer with Id: 1
```
query {
  customer(id: 1) {
    id
    name
    contactLanguage
    orders { 
      id
      date
      products {
        id
        name
        document {
          documentUrl
        }
        images {
          imageUrl
        }
      }
    }
  }
}
```

### Getting Customer with Error
```
query {
  customer(id: 2) {
    id
    name
    contactLanguage
    orders { 
      services {
        id
      }
      products {
        id
      }
    }
    
  }
}
```


### Creating New Order (example of mutation)
```
mutation {
  createOrder(date: "01/10/2019",productIds:[1,2],serviceIds:[],customerId:1){
    id
    date
    invoiceAmount
    invoiceDocument {
      documentUrl
    }
    products {
      id
      name
    }
    customer {
      name
    }
  }
}
```


### Multiple queries in one
```
query {
  customer(id:1){
    name
  }
  customerA:customer(id:2){
    name
  }
  product(id:1){
    name
  }
}
```


### Very Nested Queries 
```
query {
  customer (id: 1){
    id
    name
    orders {
      id
      customer {
        name
        orders {
          id
        }
      }
    }
  }
}
```

