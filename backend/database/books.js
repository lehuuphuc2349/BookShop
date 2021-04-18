const books = [
  {
    name: "Beginning Programming with C++ For Dummies, 2nd Edition",
    author: " Stephen R. Davis",
    year: "2018",
    pages: 456,
    category: "Programming Language",
    price: 99,
    countInStock: 2,
    bookDescription:
      "Beginning Programming with C++ For Dummies, 2ndEdition gives you plain-English explanations of the fundamentalprinciples of C++, arming you with the skills and know-how toexpertly use one of the world’s most popular programming languages.You’ll explore what goes into creating a program, how to put thepieces together, learn how to deal with standard programmingchallenges, and much more.",
    imageUrl:
      "https://allitbooks.net/images/1148-beginning-programming-cpp-for-dummies-2nd-edition.jpg",
  },
  {
    name: "Data Structures and Algorithms in C++, 2nd Edition",
    author: "David M. Mount, Michael T. Goodrich, Roberto Tamassia",
    year: "2011",
    pages: 744,
    category: "Programming Language",
    price: 199,
    countInStock: 3,
    bookDescription:
      "An updated, innovative approach to data structures and algorithms, Written by an author team of experts in their fields, this authoritative guide demystifies even the most difficult mathematical concepts so that you can gain a clear understanding of data structures and algorithms in C++.",
    imageUrl:
      "https://allitbooks.net/images/3809-data-structures-algorithms-cpp-2nd-edition.jpg",
  },
  {
    name: "Core Java Volume I–Fundamentals, 10th Edition",
    author: "Cay S. Horstmann",
    year: "2016",
    pages: 1040,
    category: "Programming Language",
    price: 299,
    countInStock: 10,
    bookDescription:
      "Core Java® has long been recognized as the leading, no-nonsense tutorial and reference for experienced programmers who want to write robust Java code for real-world applications. Now, Core Java®, Volume I—Fundamentals, Tenth Edition, has been extensively updated to reflect the most eagerly awaited and innovative version of Java in years: Java SE 8. Rewritten and reorganized to illuminate new Java SE 8 features, idioms, and best practices, it contains hundreds of example programs—all carefully crafted for easy understanding and practical applicability.",
    imageUrl:
      "https://allitbooks.net/images/2630-core-java-volume-i8211fundamentals-10th-edition.jpg",
  },
  {
    name: "Data Structures and the Java Collections Framework, 3rd Edition",
    author: "William Collins",
    year: "2011",
    pages: 736,
    category: "Programming Language",
    price: 199,
    countInStock: 7,
    bookDescription:
      "Instead of emphasizing the underlying mathematics to get programmers to build their own data structures, Collins enables them to manipulate existing structures in the Java Collections Library. This allows them to learn through coding rather than by doing proofs. 23 lab projects and hundreds of programming examples are integrated throughout the pages to build their intuition. ",
    imageUrl:
      "https://allitbooks.net/images/3811-data-structures-the-java-collections-framework-3rd-edition.jpg",
  },
  {
    name: "Pro ASP .NET 4.5 in C#, 5th Edition",
    author: "Adam Freeman",
    year: "2013",
    pages: 1187,
    category: "Programming Language",
    price: 299,
    countInStock: 1,
    bookDescription:
      "ASP.NET 4.5 remains Microsoft’s preferred technology for creating dynamic websites, providing developers with unrivaled power and flexibility. Pro ASP.NET 4.5 in C# is the most complete reference to ASP.NET that you will find. This comprehensively revised fifth edition will teach you everything you need to know in order to create well-designed ASP.NET websites. Beginning with core concepts the book progresses steadily through key professional skills.",
    imageUrl:
      "https://allitbooks.net/images/2293-pro-asp-net-45-csharp-5th-edition.jpg",
  },
  {
    name: "C# in Depth, 4th Edition",
    author: "Jon Skeet",
    year: "2019",
    pages: 528,
    category: "Programming Language",
    price: 99,
    countInStock: 10,
    bookDescription:
      "C# in Depth, Fourth Edition is your key to unlocking the powerful new features added to the language in C# 5, 6, and 7. Following the expert guidance of C# legend Jon Skeet, you’ll master asynchronous functions, expression-bodied members, interpolated strings, tuples, and much more.",
    imageUrl: "https://allitbooks.net/images/111-csharp-depth-4th-edition.jpg",
  },
  {
    name: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    year: "2011",
    pages: 224,
    category: "Web development",
    price: 99,
    countInStock: 5,
    bookDescription:
      "Eloquent JavaScript, 2nd Edition dives deep into the JavaScript language to show you how to write beautiful, effective code. Author Marijn Haverbeke immerses you in example code from the start, while exercises and full-chapter projects give you hands-on experience with writing your own programs",
    imageUrl: "https://allitbooks.net/images/2363-eloquent-javascript.jpg",
  },
  {
    name: "JavaScript Application Design",
    author: "Nicolas Bevacqua",
    year: "2015",
    pages: 344,
    category: "Web development",
    price: 99,
    countInStock: 10,
    bookDescription:
      "JavaScript Application Design: A Build First Approach introduces JavaScript developers to techniques that will improve the quality of their software as well as their web development workflow. You’ll begin by learning how to establish build processes that are appropriate for JavaScript-driven development. ",
    imageUrl:
      "https://allitbooks.net/images/4275-javascript-application-design.jpg",
  },
  {
    name: "HTML5 in Action",
    author: "Ash Blue, Greg Wanish, Joe Lennon, Rob Crowther",
    year: "2014",
    pages: 466,
    category: "Web development",
    price: 99,
    countInStock: 10,
    bookDescription:
      "HTML5 in Action provides a complete introduction to web development using HTML5. You’ll explore every aspect of the HTML5 specification through real-world examples and code samples. It’s much more than just a specification reference, though. It lives up to the name HTML5 in Action by giving you the practical, hands-on guidance you’ll need to use key features.",
    imageUrl: "https://allitbooks.net/images/42-html5-action.jpg",
  },
  {
    name: "CSS: The Definitive Guide, 4th Edition",
    author: "Eric A. Meyer, Estelle Wey",
    year: "2017",
    pages: 1090,
    category: "Web development",
    price: 299,
    countInStock: 8,
    bookDescription:
      "CSS is a constantly evolving language for describing the presentation of web content on screen, printers, speech synthesizers, screen readers, and chat windows. It is used by all browsers on all screen sizes on all types of IoT devices, including phones, computers, video games, televisions, watches, kiosks, and auto consoles. Authors Eric Meyer and Estelle Weyl show you how to improve user experience, speed development, avoid potential bugs, and add life and depth to your applications through layout, transitions and animations, borders, backgrounds, text properties, and many other tools and techniques.",
    imageUrl:
      "https://allitbooks.net/images/658-css-the-definitive-guide-4th-edition.jpg",
  },
  {
    name: "CSS Refactoring",
    author: "Steve Lindstrom",
    year: "2016",
    pages: 160,
    category: "Web development",
    price: 99,
    countInStock: 2,
    bookDescription:
      "Good CSS is essential to the look and feel of modern sites—as important as the HTML that dictates the site’s appearance and the JavaScript that runs the application. This book is ideal for seasoned front-end developers cleaning up an existing project, as well as those starting a new project for the first time.",
    imageUrl: "https://allitbooks.net/images/897-css-refactoring.jpg",
  },
  {
    name: "Web Development with MongoDB and NodeJS",
    author: "Bruno Joseph D'mello, Jason Krol, Mithun Satheesh",
    year: "2015",
    pages: 300,
    category: "Web development",
    price: 99,
    countInStock: 2,
    bookDescription:
      "Node.js and MongoDB are quickly becoming one of the most popular tech stacks for the web. Powered by Google’s V8 engine, Node.js caters to easily building fast, scalable network applications while MongoDB is the perfect fit as a scalable, high-performance, open source NoSQL database solution. Using these two technologies together, web applications can be built quickly and easily and deployed to the cloud with very little difficulty.",
    imageUrl:
      "https://allitbooks.net/images/2513-web-development-mongodb-nodejs.jpg",
  },
  {
    name: "Getting MEAN with Mongo, Express, Angular, and Node, 2nd Edition",
    author: "Clive Herber, Simon Holmes",
    year: "2019",
    pages: 504,
    category: "Web development",
    price: 199,
    countInStock: 3,
    bookDescription:
      "Getting MEAN, Second Edition teaches you how to develop full-stack web applications using the MEAN stack. This edition was completely revised and updated to cover MongoDB 4, Express 4, Angular 7, Node 11, and the latest mainstream release of JavaScript ES2015.",
    imageUrl:
      "https://allitbooks.net/images/140-getting-mean-mongo-express-angular-node-2nd-edition.jpg",
  },
  {
    name: "Web Development with Node and Express",
    author: "Ethan Brown",
    year: "2014",
    pages: 330,
    category: "Web development",
    price: 99,
    countInStock: 10,
    bookDescription:
      "Learn how to build dynamic web applications with Express, a key component of the Node/JavaScript development stack. In this hands-on guide, author Ethan Brown teaches you the fundamentals through the development of a fictional application that exposes a public website and a RESTful API. You’ll also learn web architecture best practices to help you build single-page, multi-page, and hybrid web apps with Express.",
    imageUrl:
      "https://allitbooks.net/images/5411-web-development-node-express.jpg",
  },
  {
    name: "Beginning MySQL",
    author: "Geoff Moes, Robert Sheldon",
    year: "2005",
    pages: 864,
    category: "Database",
    price: 299,
    countInStock: 10,
    bookDescription:
      "Provides programmers with a complete foundation in MySQL, the multi-user, multi-threaded SQL database server that easily stores, updates, and accesses information, Offers detailed instructions for MySQL installation and configuration on either Windows or Linux",
    imageUrl: "https://allitbooks.net/images/9-beginning-mysql.jpg",
  },
  {
    name: "Professional SQL Server 2005 Performance Tuning",
    author: "Arindam Sen, Christian Bolton, Douglas Hinson, Haidong Ji",
    year: "2008",
    pages: 551,
    category: "Database",
    price: 199,
    countInStock: 5,
    bookDescription:
      "Written by a team of expert SQL users, this comprehensive resource approaches performance tuning from a new perspective by showing you a methodical scientific approach to diagnose performance problems. The book first walks you through how to discover bottlenecks when something is wrong and you’ll then learn how to identify and remove the problems that are causing poor performance.",
    imageUrl:
      "https://allitbooks.net/images/40-professional-sql-server-2005-performance-tuning.jpg",
  },
  {
    name: "Oracle NoSQL Database",
    author: "Aalok Muley, Ashok Joshi, Chaitanya Kadaru, Maqsood Alam",
    year: "2013",
    pages: 256,
    category: "Database",
    price: 99,
    countInStock: 10,
    bookDescription:
      "Enable highly reliable, scalable, and available data. Oracle NoSQL Database: Real-Time Big Data Management for the Enterprise shows you how to take full advantage of this cost-effective solution for storing, retrieving, and updating high-volume, unstructured data. The book covers installation, configuration, application development, capacity planning and sizing, and integration with other enterprise data center products. Real-world examples illustrate the concepts presented in this Oracle Press guide.",
    imageUrl: "https://allitbooks.net/images/358-oracle-nosql-database.jpg",
  },
  {
    name: "Microsoft SQL Server 2008, Second Edition",
    author: "William R. Stanek",
    year: "2010",
    pages: 738,
    category: "Database",
    price: 299,
    countInStock: 12,
    bookDescription:
      "Microsoft® SQL Server® 2008 Administrator’s Pocket Consultant, 2nd Edition is the ideal concise, immediate reference you’ll want with you at all times as you deal with Microsoft® SQL Server® 2008 and SQL Server® 2008 R2 administration. Whether you handle administration for 50 users or 5000, this hands-on, fast answers guide focuses on what you need to do to get the job done quickly. With extensive easy-to-read tables, lists, and step-by-step instructions, it’s the portable, readable guide that you consistently save you time and minimize system downtime by giving you the right information right now",
    imageUrl:
      "https://allitbooks.net/images/1220-microsoft-sql-server-2008-second-edition.jpg",
  },
  {
    name: "MongoDB: The Definitive Guide, 3rd Edition",
    author: "Eoin Brazil, Kristina Chodorow, Shannon Bradshaw",
    year: "2019",
    pages: 514,
    category: "Database",
    price: 199,
    countInStock: 10,
    bookDescription:
      "Authors Shannon Bradshaw, Eoin Brazil, and Kristina Chodorow provide guidance for database developers, advanced configuration for system administrators, and use cases for a variety of projects. NoSQL newcomers and experienced MongoDB users will find updates on querying, indexing, aggregation, transactions, replica sets, ops management, sharding and data administration, durability, monitoring, and security.",
    imageUrl:
      "https://allitbooks.net/images/4693-mongodb-the-definitive-guide-3rd-edition.jpg",
  },
  {
    name: "Network Warrior",
    author: "Gary A. Donahue",
    year: "2007",
    pages: 576,
    category: "Networking",
    price: 199,
    countInStock: 10,
    bookDescription:
      "Network Warrior takes you step by step through the world of hubs, switches, firewalls, and more, including ways to troubleshoot a congested network, and when to upgrade and why. Along the way, you ‘ll gain an historical perspective of various networking features, such as the way Ethernet evolved. Based on the author ‘s own experience as well as those he worked for and with, Network Warrior is a Cisco-centric book, focused primarily on the TCP/IP protocol and Ethernet networks — the realm that Cisco Systems now dominates.",
    imageUrl: "https://allitbooks.net/images/25-network-warrior.jpg",
  },
  {
    name: "Getting a Networking Job For Dummies",
    author: "Bill Hughes, Peter H. Gregory",
    year: "2015",
    pages: 336,
    category: "Networking",
    price: 199,
    countInStock: 10,
    bookDescription:
      "Looking to land that computer networking position? Look no further! Getting a Networking Job For Dummies offers all the tools and step-by-step guidance you need to stand out from the crowd, get your foot in the door, and secure a job in this fast-growing sector. In no time, you’ll get a handle on networking roles, necessary education, training, and certifications, ways to brand yourself for your dream career, and so much more.",
    imageUrl:
      "https://allitbooks.net/images/466-getting-networking-job-for-dummies.jpg",
  },
  {
    name: "Networking All-in-One For Dummies, 7th Edition",
    author: "Doug Lowe",
    year: "2018",
    pages: 984,
    category: "Networking",
    price: 299,
    countInStock: 10,
    bookDescription:
      "Whether you’re in charge of a small network or a large network, Networking All-in-One is full of the information you’ll need to set up a network and keep it functioning. Fully updated to capture the latest Windows 10 releases through Spring 2018, this is the comprehensive guide to setting up, managing, and securing a successful network.",
    imageUrl:
      "https://allitbooks.net/images/965-networking-all-in-one-for-dummies-7th-edition.jpg",
  },
  {
    name: "JavaScript Data Structures and Algorithms",
    author: "Sammie Bae",
    year: "2019",
    pages: 357,
    category: "Data Structures and Algorithms",
    price: 199,
    countInStock: 10,
    bookDescription:
      "It is crucial for JavaScript developers to understand how data structures work and how to design algorithms. This book and the accompanying code provide that essential foundation for doing so. With JavaScript Data Structures and Algorithms you can start developing your knowledge and applying it to your JavaScript projects today.",
    imageUrl:
      "https://allitbooks.net/images/1233-javascript-data-structures-algorithms.jpg",
  },
  {
    name: "Algorithms For Dummies",
    author: "John Paul Mueller, Luca Massaron",
    year: "2017",
    pages: 432,
    category: "Data Structures and Algorithms",
    price: 199,
    countInStock: 10,
    bookDescription:
      "Algorithms for Dummies is a clear and concise primer for everyday people who are interested in algorithms and how they impact our digital lives. Based on the fact that we already live in a world where algorithms are behind most of the technology we use, this book offers eye-opening information on the pervasiveness and importance of this mathematical science—how it plays out in our everyday digestion of news and entertainment, as well as in its influence on our social interactions and consumerism. Readers even learn how to program an algorithm using Python!",
    imageUrl: "https://allitbooks.net/images/594-algorithms-for-dummies.jpg",
  },
  {
    name: "Data Structures & Algorithm Analysis in C++, 4th Edition",
    author: "Mark A. Weiss",
    year: "2013",
    pages: 656,
    category: "Data Structures and Algorithms",
    price: 199,
    countInStock: 10,
    bookDescription:
      "Data Structures and Algorithm Analysis in C++ is an advanced algorithms book that bridges the gap between traditional CS2 and Algorithms Analysis courses. As the speed and power of computers increases, so does the need for effective programming and algorithm analysis. By approaching these skills in tandem, Mark Allen Weiss teaches readers to develop well-constructed, maximally efficient programs using the C++ programming language.",
    imageUrl:
      "https://allitbooks.net/images/3807-data-structures-038-algorithm-analysis-cpp-4th-edition.jpg",
  },
];
console.log(books.length);
module.exports = books;
