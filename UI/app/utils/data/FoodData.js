export const FoodData = [
  {
    id: 1,
    name: "Fluffy Almond Flour Pancakes",
    image: require("../../assets/foods/1.jpg"),
    description:
      "These fluffy almond flour pancakes are perfect for a weekend brunch! They're easy to make, gluten-free, and delicious with your favorite toppings. ",
    user: {
      id: 1,
      username: "foodlover123",
      bio: "Food lover and recipe creator",
      userImage:
        "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      instaLink: "https://www.instagram.com/foodlover123/",
    },
    reviews: {
      rating: 4.5,
      likes: 152,
      reviewTexts: [
        "Wow! Best pancake I've ever had.",
        "These pancakes are so fluffy and delicious!",
        "I love this recipe!",
      ],
    },
    difficulty: "Easy",
    ingredients: ["1 cup almond flour", "2 eggs", "1/2 cup almond milk"],
    nutritionPerServing: {
      calories: 250,
      protein: 10,
      fat: 18,
      carbohydrates: 15,
    },
    steps: [
      {
        id: 1,
        title: "Mix the batter",
        description: "Mix almond flour, eggs, and almond milk in a bowl.",
      },
      {
        id: 2,
        title: "Cook the pancakes",
        description:
          "Pour the batter onto a hot skillet and cook until golden brown on both sides.",
      },
      // Add more steps as needed
    ],
    comments: [
      {
        commentId: 1,
        commentText:
          "Having these pancakes with fresh berries is truly a delight. The burst of flavor from the juicy berries complements the fluffy pancakes perfectly. It's like a symphony of taste exploding in my mouth with every bite. I could eat these pancakes every day and never get tired of them. They're simply irresistible!   ",
        time: "2024-02-25T12:30:00Z",
        commentImage:
          "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        user: {
          userId: 2,
          image:
            "https://images.pexels.com/photos/35666/cooking-baby-only-kitchen.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          userName: "commenter456",
        },
        likes: 10,
        reports: 0,
        replies: [
          {
            repId: 1,
            repText: "I agree, they look delicious!",
            time: "2024-02-25T13:00:00Z",
            repImage:
              "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            user: {
              userId: 3,
              image:
                "https://images.pexels.com/photos/3171128/pexels-photo-3171128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              userName: "foodie789",
            },
          },
          {
            repId: 1,
            repText: "I agree, they look delicious!",
            time: "2024-02-25T13:00:00Z",
            repImage:
              "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            user: {
              userId: 3,
              image:
                "https://images.pexels.com/photos/3171128/pexels-photo-3171128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              userName: "foodie789",
            },
          },
        ],
      },
      {
        commentId: 2,
        commentText: "I can't wait to try making these pancakes!",
        time: "2024-02-25T13:30:00Z",
        commentImage:
          "https://images.pexels.com/photos/7218637/pexels-photo-7218637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        user: {
          userId: 4,
          image:
            "https://images.pexels.com/photos/35666/cooking-baby-only-kitchen.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          userName: "cookingfanatic123",
        },
        likes: 5,
        reports: 0,
        replies: [
          {
            repId: 2,
            repText: "You won't be disappointed!",
            time: "2024-02-25T14:00:00Z",
            repImage:
              "https://images.pexels.com/photos/7218637/pexels-photo-7218637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            user: {
              userId: 5,
              image:
                "https://images.pexels.com/photos/3770002/pexels-photo-3770002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              userName: "chefmaster789",
            },
          },
        ],
      },
      {
        commentId: 2,
        commentText: "I can't wait to try making these pancakes!",
        time: "2024-02-25T13:30:00Z",
        commentImage:
          "https://images.pexels.com/photos/7218637/pexels-photo-7218637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        user: {
          userId: 4,
          image:
            "https://images.pexels.com/photos/35666/cooking-baby-only-kitchen.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          userName: "cookingfanatic123",
        },
        likes: 5,
        reports: 0,
        replies: [
          {
            repId: 2,
            repText: "You won't be disappointed!",
            time: "2024-02-25T14:00:00Z",
            repImage:
              "https://images.pexels.com/photos/7218637/pexels-photo-7218637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            user: {
              userId: 5,
              image:
                "https://images.pexels.com/photos/3770002/pexels-photo-3770002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              userName: "chefmaster789",
            },
          },
        ],
      },
      {
        commentId: 2,
        commentText: "I can't wait to try making these pancakes!",
        time: "2024-02-25T13:30:00Z",
        commentImage:
          "https://images.pexels.com/photos/7218637/pexels-photo-7218637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        user: {
          userId: 4,
          image:
            "https://images.pexels.com/photos/35666/cooking-baby-only-kitchen.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          userName: "cookingfanatic123",
        },
        likes: 5,
        reports: 0,
        replies: [
          {
            repId: 2,
            repText: "You won't be disappointed!",
            time: "2024-02-25T14:00:00Z",
            repImage:
              "https://images.pexels.com/photos/7218637/pexels-photo-7218637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            user: {
              userId: 5,
              image:
                "https://images.pexels.com/photos/3770002/pexels-photo-3770002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              userName: "chefmaster789",
            },
          },
        ],
      },
      {
        commentId: 2,
        commentText: "I can't wait to try making these pancakes!",
        time: "2024-02-25T13:30:00Z",
        commentImage:
          "https://images.pexels.com/photos/7218637/pexels-photo-7218637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        user: {
          userId: 4,
          image:
            "https://images.pexels.com/photos/35666/cooking-baby-only-kitchen.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          userName: "cookingfanatic123",
        },
        likes: 5,
        reports: 0,
        replies: [
          {
            repId: 2,
            repText: "You won't be disappointed!",
            time: "2024-02-25T14:00:00Z",
            repImage:
              "https://images.pexels.com/photos/7218637/pexels-photo-7218637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            user: {
              userId: 5,
              image:
                "https://images.pexels.com/photos/3770002/pexels-photo-3770002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              userName: "chefmaster789",
            },
          },
        ],
      },
      {
        commentId: 2,
        commentText: "I can't wait to try making these pancakes!",
        time: "2024-02-25T13:30:00Z",
        commentImage:
          "https://images.pexels.com/photos/7218637/pexels-photo-7218637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        user: {
          userId: 4,
          image:
            "https://images.pexels.com/photos/35666/cooking-baby-only-kitchen.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          userName: "cookingfanatic123",
        },
        likes: 5,
        reports: 0,
        replies: [
          {
            repId: 2,
            repText: "You won't be disappointed!",
            time: "2024-02-25T14:00:00Z",
            repImage:
              "https://images.pexels.com/photos/7218637/pexels-photo-7218637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            user: {
              userId: 5,
              image:
                "https://images.pexels.com/photos/3770002/pexels-photo-3770002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              userName: "chefmaster789",
            },
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Avocado Toast with Poached Eggs",
    image: require("../../assets/foods/2.jpg"),
    description:
      "These fluffy almond flour pancakes are perfect for a weekend brunch! They're easy to make, gluten-free, and delicious with your favorite toppings. ",
    user: {
      id: 2,
      username: "chefmike",
      bio: "Food lover and recipe creator",

      userImage:
        "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      instaLink: "https://www.instagram.com/chefmike/",
    },
    difficulty: "Medium",
    reviews: {
      rating: 4.5,
      likes: 152,
      reviewTexts: [
        "Wow! Best pancake I've ever had.",
        "These pancakes are so fluffy and delicious!",
        "I love this recipe!",
      ],
    },
    comments: [],
    ingredients: [
      "1 ripe avocado",
      "2 eggs",
      "2 slices of whole grain bread",
      // Add more ingredients as needed
    ],
    nutritionPerServing: {
      calories: 320,
      protein: 15,
      fat: 20,
      carbohydrates: 25,
    },
    steps: [
      {
        id: 1,
        title: "Toast the bread",
        description: "Toast the whole grain bread slices until golden brown.",
        image:
          "https://images.pexels.com/photos/784632/pexels-photo-784632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 2,
        title: "Prepare the avocado",
        description:
          "Mash the ripe avocado and spread it on the toasted bread slices.",
        image:
          "https://images.pexels.com/photos/175753/pexels-photo-175753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 3,
        title: "Poach the eggs",
        description:
          "Poach the eggs in simmering water for 3-4 minutes until cooked to your liking.",
        image:
          "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    id: 3,
    name: "Mediterranean Quinoa Salad",
    description:
      "These fluffy almond flour pancakes are perfect for a weekend brunch! They're easy to make, gluten-free, and delicious with your favorite toppings. ",
    image: require("../../assets/foods/3.jpg"),
    user: {
      id: 3,
      username: "healthy_eats",
      bio: "Food lover and recipe creator",

      userImage:
        "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      instaLink: "https://www.instagram.com/healthy_eats/",
    },
    difficulty: "Easy",
    reviews: {
      rating: 4.5,
      likes: 152,
      reviewTexts: [
        "Wow! Best pancake I've ever had.",
        "These pancakes are so fluffy and delicious!",
        "I love this recipe!",
      ],
    },
    ingredients: [
      "1 cup cooked quinoa",
      "1/2 cup cherry tomatoes, halved",
      "1/4 cup cucumber, diced",
      // Add more ingredients as needed
    ],
    nutritionPerServing: {
      calories: 180,
      protein: 5,
      fat: 8,
      carbohydrates: 20,
    },
    steps: [
      {
        id: 1,
        title: "Mix the ingredients",
        description:
          "Combine cooked quinoa, cherry tomatoes, cucumber, and any other desired ingredients in a bowl.",
      },
      {
        id: 2,
        title: "Season the salad",
        description:
          "Season the salad with olive oil, lemon juice, salt, and pepper to taste.",
      },
      // Add more steps as needed
    ],
  },
  {
    id: 4,
    name: "Vegan Mushroom Risotto",
    description:
      "These fluffy almond flour pancakes are perfect for a weekend brunch! They're easy to make, gluten-free, and delicious with your favorite toppings. ",
    image: require("../../assets/foods/4.jpg"),
    user: {
      id: 4,
      username: "vegan_cook",
      bio: "Food lover and recipe creator",

      userImage:
        "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      instaLink: "https://www.instagram.com/vegan_cook/",
    },
    difficulty: "Medium",
    reviews: {
      rating: 4.5,
      likes: 152,
      reviewTexts: [
        "Wow! Best pancake I've ever had.",
        "These pancakes are so fluffy and delicious!",
        "I love this recipe!",
      ],
    },
    ingredients: [
      "1 cup Arborio rice",
      "4 cups vegetable broth",
      "1 cup sliced mushrooms",
      // Add more ingredients as needed
    ],
    nutritionPerServing: {
      calories: 320,
      protein: 8,
      fat: 6,
      carbohydrates: 60,
    },
    steps: [
      {
        id: 1,
        title: "Saute the mushrooms",
        description:
          "In a large skillet, sauté the mushrooms in olive oil until tender.",
      },
      {
        id: 2,
        title: "Cook the rice",
        description:
          "Add Arborio rice to the skillet and cook until translucent.",
      },
      // Add more steps as needed
    ],
  },
  {
    id: 5,
    name: "Grilled Salmon with Lemon Dill Sauce",
    description:
      "These fluffy almond flour pancakes are perfect for a weekend brunch! They're easy to make, gluten-free, and delicious with your favorite toppings. ",
    image: require("../../assets/foods/5.jpg"),
    user: {
      id: 5,
      username: "seafoodlover",
      bio: "I love cooking and sharing my favorite seafood recipes!",
      userImage:
        "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      instaLink: "https://www.instagram.com/seafoodlover/",
    },
    difficulty: "Medium",
    reviews: {
      rating: 4.5,
      likes: 152,
      reviewTexts: [
        "Wow! Best pancake I've ever had.",
        "These pancakes are so fluffy and delicious!",
        "I love this recipe!",
      ],
    },
    ingredients: [
      "4 salmon fillets",
      "1 lemon, sliced",
      "2 tablespoons chopped fresh dill",
      // Add more ingredients as needed
    ],
    nutritionPerServing: {
      calories: 300,
      protein: 25,
      fat: 15,
      carbohydrates: 5,
    },
    steps: [
      {
        id: 1,
        title: "Season the salmon",
        description:
          "Season the salmon fillets with salt, pepper, and chopped fresh dill.",
      },
      {
        id: 2,
        title: "Grill the salmon",
        description:
          "Grill the salmon fillets on a preheated grill until cooked through, about 4-5 minutes per side.",
      },
      // Add more steps as needed
    ],
  },
  {
    id: 6,
    name: "Thai Green Curry",
    description:
      "These fluffy almond flour pancakes are perfect for a weekend brunch! They're easy to make, gluten-free, and delicious with your favorite toppings. ",
    image: require("../../assets/foods/6.jpg"),
    user: {
      id: 6,
      username: "thaicuisine",
      bio: "Food lover and recipe creator",

      userImage:
        "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      instaLink: "https://www.instagram.com/thaicuisine/",
    },
    difficulty: "Medium",
    reviews: {
      rating: 4.5,
      likes: 152,
      reviewTexts: [
        "Wow! Best pancake I've ever had.",
        "These pancakes are so fluffy and delicious!",
        "I love this recipe!",
      ],
    },
    ingredients: [
      "2 cups coconut milk",
      "2 tablespoons green curry paste",
      "1 cup mixed vegetables (bell peppers, carrots, broccoli)",
      // Add more ingredients as needed
    ],
    nutritionPerServing: {
      calories: 350,
      protein: 8,
      fat: 25,
      carbohydrates: 20,
    },
    steps: [
      {
        id: 1,
        title: "Cook the curry paste",
        description:
          "In a large skillet, cook the green curry paste in coconut milk until fragrant.",
      },
      {
        id: 2,
        title: "Add the vegetables",
        description:
          "Add mixed vegetables to the skillet and simmer until tender.",
      },
      // Add more steps as needed
    ],
  },
  {
    id: 7,
    name: "Chicken Tikka Masala",
    description:
      "These fluffy almond flour pancakes are perfect for a weekend brunch! They're easy to make, gluten-free, and delicious with your favorite toppings. ",
    image: require("../../assets/foods/7.jpg"),
    user: {
      id: 7,
      bio: "Food lover and recipe creator",

      username: "indianfoodie",
      userImage:
        "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      instaLink: "https://www.instagram.com/indianfoodie/",
    },
    difficulty: "Medium",
    reviews: {
      rating: 4.5,
      likes: 152,
      reviewTexts: [
        "Wow! Best pancake I've ever had.",
        "These pancakes are so fluffy and delicious!",
        "I love this recipe!",
      ],
    },
    ingredients: [
      "2 chicken breasts, diced",
      "1 cup plain yogurt",
      "2 tablespoons tikka masala spice blend",
      // Add more ingredients as needed
    ],
    nutritionPerServing: {
      calories: 400,
      protein: 30,
      fat: 20,
      carbohydrates: 25,
    },
    steps: [
      {
        id: 1,
        title: "Marinate the chicken",
        description:
          "Marinate diced chicken breasts in plain yogurt and tikka masala spice blend for at least 1 hour.",
      },
      {
        id: 2,
        title: "Cook the chicken",
        description:
          "In a large skillet, cook the marinated chicken until cooked through.",
      },
      // Add more steps as needed
    ],
  },
  {
    id: 8,
    name: "Homemade Pizza",
    description:
      "These fluffy almond flour pancakes are perfect for a weekend brunch! They're easy to make, gluten-free, and delicious with your favorite toppings. ",
    image: require("../../assets/foods/8.jpg"),
    user: {
      id: 8,
      username: "pizzalover",
      bio: "Food lover and recipe creator",

      userImage:
        "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      instaLink: "https://www.instagram.com/pizzalover/",
    },
    difficulty: "Medium",
    reviews: {
      rating: 4.5,
      likes: 152,
      reviewTexts: [
        "Wow! Best pancake I've ever had.",
        "These pancakes are so fluffy and delicious!",
        "I love this recipe!",
      ],
    },
    ingredients: [
      "1 pizza dough ball",
      "1/2 cup pizza sauce",
      "1 cup shredded mozzarella cheese",
      // Add more ingredients as needed
    ],
    nutritionPerServing: {
      calories: 350,
      protein: 15,
      fat: 20,
      carbohydrates: 30,
    },
    steps: [
      {
        id: 1,
        title: "Roll out the dough",
        description:
          "Roll out the pizza dough into a round shape on a floured surface.",
      },
      {
        id: 2,
        title: "Top the pizza",
        description:
          "Spread pizza sauce over the dough and sprinkle with shredded mozzarella cheese.",
      },
      // Add more steps as needed
    ],
  },
  {
    id: 9,
    name: "Fresh Berry Smoothie Bowl",
    description:
      "These fluffy almond flour pancakes are perfect for a weekend brunch! They're easy to make, gluten-free, and delicious with your favorite toppings. ",
    image: require("../../assets/foods/9.jpg"),
    user: {
      id: 9,
      username: "smoothiequeen",
      bio: "Food lover and recipe creator",

      userImage:
        "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      instaLink: "https://www.instagram.com/smoothiequeen/",
    },
    difficulty: "Easy",
    reviews: {
      rating: 4.5,
      likes: 152,
      reviewTexts: [
        "Wow! Best pancake I've ever had.",
        "These pancakes are so fluffy and delicious!",
        "I love this recipe!",
      ],
    },
    ingredients: [
      "1 cup mixed berries (strawberries, blueberries, raspberries)",
      "1/2 banana",
      "1/4 cup almond milk",
      // Add more ingredients as needed
    ],
    nutritionPerServing: {
      calories: 200,
      protein: 5,
      fat: 3,
      carbohydrates: 40,
    },
    steps: [
      {
        id: 1,
        title: "Blend the ingredients",
        description:
          "Blend mixed berries, banana, and almond milk until smooth.",
      },
      {
        id: 2,
        title: "Serve the smoothie",
        description:
          "Pour the smoothie into a bowl and top with your favorite toppings such as granola, nuts, and fresh fruit.",
      },
      // Add more steps as needed
    ],
  },
];
