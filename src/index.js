const { GraphQLServer } = require("graphql-yoga");
const { data } = require("./data");

const resolvers = {
  Query: {
    customer: async (_, {id}, ctx) => {
      return data.customers.find(cust => cust.id == id)
    },
    product: async (_, {id}, ctx) => {
      return data.products.find(p => p.id == id)
    },
  },
  Mutation: {
    createOrder: async(parent, args, ctx, info) => {
      // Fake returning a new order by just returning data.orders[0].
      // In real world you'd create an order and return that.
      return data.orders[0] 
    }
  },
  Customer: {
    orders: async (parentCustomer, _, ctx) => {
      return data.orders.filter(ord => ord.customerId == parentCustomer.id)
    }
  },
  Order: {
    products: async (parentOrder, _, ctx) => {
      return data.products.filter(prd => parentOrder.products.includes( parseInt(prd.id) ))
    },
    services: async (parentOrder, _, ctx) => {
      if(ctx.user !==  "vp"){
        throw Error("You are not allowed to access information about services")
      }
      return []
    },
    customer: async(parentOrder, _, ctx) => {
      console.log(parentOrder)
      return data.customers.find(cust => cust.id == parentOrder.customerId )
    }
  },
  Product: {
    images: async (parentProduct, _, ctx) => {
      return [{imageUrl:"http://testImage"}]
    },
    orders: async (parent, _, ctx) => {
      // You can apply permissions filter here.
      return data.orders.filter(ord => ord.products.includes(parseInt(parent.id)))
    }
  },
  ProductImage: {
    product: async (parent, _, ctx) => {
      return {
        id:2,
        name: "S800"
      }
    }
  }
}

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const server = new GraphQLServer({
  resolvers,
  typeDefs: "./src/schema.graphql",
  middlewares:[] // Use Middleware to control authentication or authorization or other cross cutting concerns such as logging
})

server.start({port: 4099},() => console.log("Server is running"))
