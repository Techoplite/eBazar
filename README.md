# eBazar
An ecommerce website with a middle eastern look and feel.

## Current stage
The project is meant to showcase my frontend skills and is currently undergoing development.
In fact, the "dummy" backend features a json-server database file containing all the data about the objects displayed.

Herafter is my db.json file

```{
  "categories": [
    {
      "id": 1,
      "value": "any",
      "name": "--- Any ---",
      "departments": []
    },
    {
      "id": 2,
      "value": "computers-and-accessories",
      "name": "Computers and Accessories",
      "departments": [
        {
          "id": 0,
          "value": "any",
          "name": "--- Any ---"
        },
        {
          "id": 1,
          "value": "desktop-pc",
          "name": "Desktop PCs"
        },
        {
          "id": 2,
          "value": "laptops",
          "name": "Laptops"
        },
        {
          "id": 3,
          "value": "keyboards",
          "name": "Keyboards"
        },
        {
          "id": 4,
          "value": "headphones",
          "name": "Headphones"
        },
        {
          "id": 5,
          "value": "mouses",
          "name": "Mouses"
        },
        {
          "id": 6,
          "value": "gamepads",
          "name": "Gamepads"
        }
      ]
    },
    {
      "id": 3,
      "value": "fashion",
      "name": "Fashion",
      "departments": [
        {
          "id": 0,
          "value": "any",
          "name": "--- Any ---"
        },
        {
          "id": 1,
          "value": "dresses",
          "name": "Dresses"
        },
        {
          "id": 2,
          "value": "shoes",
          "name": "Shoes"
        },
        {
          "id": 3,
          "value": "pants",
          "name": "Pants"
        },
        {
          "id": 4,
          "value": "sunglasses",
          "name": "Sunglasses"
        },
        {
          "id": 5,
          "value": "handbags",
          "name": "Handbags"
        },
        {
          "id": 6,
          "value": "hats",
          "name": "Hats"
        }
      ]
    },
    {
      "id": 4,
      "value": "digital-music",
      "name": "Digital Music",
      "departments": [
        {
          "id": 0,
          "value": "any",
          "name": "--- Any ---"
        },
        {
          "id": 1,
          "value": "rock",
          "name": "Rock"
        },
        {
          "id": 2,
          "value": "pop",
          "name": "Pop"
        },
        {
          "id": 3,
          "value": "house-and-techno",
          "name": "House and Techno"
        },
        {
          "id": 4,
          "value": "trap",
          "name": "Trap"
        },
        {
          "id": 5,
          "value": "indie",
          "name": "Indie"
        },
        {
          "id": 6,
          "value": "hip-hop",
          "name": "Hip-Hop"
        }
      ]
    },
    {
      "id": 5,
      "value": "house",
      "name": "House",
      "departments": [
        {
          "id": 0,
          "value": "any",
          "name": "--- Any ---"
        },
        {
          "id": 1,
          "value": "kitchen",
          "name": "Kitchen"
        },
        {
          "id": 2,
          "value": "garden",
          "name": "Garden"
        },
        {
          "id": 3,
          "value": "bedroom",
          "name": "Bedroom"
        },
        {
          "id": 4,
          "value": "bathroom",
          "name": "Bathroom"
        },
        {
          "id": 5,
          "value": "livingroom",
          "name": "Livingroom"
        },
        {
          "id": 6,
          "value": "cleaning",
          "name": "Cleaning"
        }
      ]
    },
    {
      "id": 6,
      "value": "grocery",
      "name": "Grocery",
      "departments": [
        {
          "id": 0,
          "value": "any",
          "name": "--- Any ---"
        },
        {
          "id": 1,
          "value": "vegetables",
          "name": "Vegetables"
        },
        {
          "id": 2,
          "value": "pasta and rice",
          "name": "Pasta and Rice"
        },
        {
          "id": 3,
          "value": "snacks",
          "name": "Snacks"
        },
        {
          "id": 4,
          "value": "canned-food",
          "name": "Canned Food"
        },
        {
          "id": 5,
          "value": "frozen",
          "name": "Frozen"
        },
        {
          "id": 6,
          "value": "dairy",
          "name": "Dairy"
        }
      ]
    }
  ],
  "items": [
    {
      "id": 1,
      "name": "Dell XPS 13",
      "value": "dell-xps-13",
      "category": 2,
      "department": 2,
      "price": 1599.0,
      "discount": 0,
      "image": "xps13_9370_4_3_01.jpg",
      "rating": {
        "1": 1,
        "2": 0,
        "3": 8,
        "4": 12,
        "5": 21
      },
      "sold": 520,
      "left": 34
    },
    {
      "id": 2,
      "name": "MacBook Pro (16-inch, 2019)",
      "value": "macbook-pro-16-2019",
      "category": 2,
      "department": 2,
      "price": 2149.0,
      "discount": 10,
      "image": "36-macbook-pro-16-inch.jpg",
      "rating": {
        "1": 2,
        "2": 86,
        "3": 15,
        "4": 4,
        "5": 9
      },
      "sold": 520,
      "left": 5
    },
    {
      "id": 3,
      "name": "Acer Swift 3 (2020, AMD Ryzen 7 4700U)",
      "value": "acer-swift-3-2020",
      "category": 2,
      "department": 2,
      "price": 749.99,
      "discount": 30,
      "image": "18fd3a1c-d963-4fdb-b1a4-8e7f1019b98a.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
      "rating": {
        "1": 12,
        "2": 2,
        "3": 15,
        "4": 21,
        "5": 7
      },
      "sold": 520,
      "left": 34
    },
    {
      "id": 4,
      "name": "Dell XPS 8930 SE",
      "value": "dell-xps-8930-se",
      "category": 2,
      "department": 1,
      "price": 769.0,
      "discount": 0,
      "image": "u_10193823.jpg",
      "rating": {
        "1": 2,
        "2": 0,
        "3": 36,
        "4": 21,
        "5": 7
      },
      "sold": 520,
      "left": 6
    },
    {
      "id": 5,
      "name": "HP Omen Obelisk",
      "value": "hp-omen-obelisk",
      "category": 2,
      "department": 1,
      "price": 1520.0,
      "discount": 15,
      "image": "111_111.jpg",
      "rating": {
        "1": 2,
        "2": 13,
        "3": 15,
        "4": 21,
        "5": 7
      },
      "sold": 520,
      "left": 34
    },
    {
      "id": 6,
      "name": "Nike Air Jordan",
      "value": "nike-air-jordan",
      "category": 3,
      "department": 2,
      "price": 120.0,
      "discount": 15,
      "image": "30e9f6b70d9036719a967a76b3eebca6bc6e3343_image-3-copy.jpg",
      "rating": {
        "1": 2,
        "2": 0,
        "3": 30,
        "4": 21,
        "5": 7
      },
      "sold": 520,
      "left": 3
    }
  ]
}
```

It is build following a mobile-first approach, using **React** and **Redux**. 

Hereafter, it is possible to appreciate the current stage of the project with the latest features added at the bottom.

## Responsiveness

### Mobile 

![](mobile-responsive.gif)

### Tablet 

![](tablet-responsive.gif)

### Desktop 

![](desktop-responsive.gif)

### Full

![](full-responsive.gif)

## Feature added: filter items by category, department, minimum and maximum price

![](filter.gif)

## Feature added: searchbox allows to filter items by name

![](searchbox.gif)

## Feature added: display items data and responsive feedback tooltip
(N.B.) the tooltip will only display on hover if using a non-touch device

![](items-data.gif)
