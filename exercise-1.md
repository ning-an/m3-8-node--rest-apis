# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of waht it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer

| Endpoint                        | Method | Description                      |
| --------------------------------|--------|----------------------------------|
| `/stocks`                       | `GET`  | Get all stocks                   |
| `/stocks/:category`             | `GET`  | Get all stocks from a category   |
| `/stocks/:category/:stockName`  | `GET`  | Get an item from a category      |
| `/stocks/:category`             | `POST` | Add a new item to a category     |
| `/stocks/:category/:stockName`  | `PUT`  | Edit item in a category          |
| `/stocks/:category`             | `DEL`  | Delete all items in a category   |
| `/stocks/:category/:stockName`  | `DEL`  | Delete an item in a category     |
| Customers                       |        |                                  |
| `/customers`                    | `GET`  | Get all customers                |
| `/customers/:id`                | `GET`  | Get a customers                  |
| `/customers`                    | `POST` | Add a new customers              |
| `/customers/:id`                | `PUT`  | Edit a customers                 |
| `/customers`                    | `DEL`  | Delete all customers             |
| `/customers/:id`                | `DEL`  | Delete a customers               |
| Orders                          |        |                                  |
| `/orders`                       | `GET`  | Get all orders                   |
| `/orders/:id`                   | `GET`  | Get an orders                     |
| `/orders`                       | `POST` | Add a new orders                 |
| `/orders/:id`                   | `PUT`  | Edit an orders                   |
| `/orders`                       | `DEL`  | Delete all orders                |
| `/orders/:id`                   | `DEL`  | Delete an orders                 |
| Tables                          |        |                                  |
| `/tables`                       | `GET`  | Get all tables                   |
| `/tables/:id`                   | `GET`  | Get a tables                     |
| `/tables`                       | `POST` | Add a new tables                 |
| `/tables/:id`                   | `PUT`  | Edit a tables                    |
| `/tables/:id`                   | `DEL`  | Remove a tables                  |
| Finances                        |        |                                  |
| `/finances`                     | `GET`  | Get all income/expenses          |
| `/finances/income`              | `GET`  | Get all income                   |
| `/finances/expenses`            | `GET`  | Get all expenses                 |
| `/finances/income`              | `POST` | Add a new income                 |
| `/finances/expenses`            | `POST` | Add a new expense                |
| `/finances/income/:id`          | `PUT`  | Edit an income                   |
| `/finances/expenses/:id`        | `PUT`  | Edit an expense                  |
| `/finances/income/:id`          | `DEL`  | Delete an income                 |
| `/finances/expenses/:id`        | `DEL`  | Delete an expense                |