# Technical test for backend developers – Event Attendance 🎫

## Introduction 👋
Welcome to Wuolah’s technical test for backend developers.  
We want to see how you handle a practical case that simulates the challenges we face daily.

## What we are evaluating 🔍
- **Understanding requirements & problem solving:**  
  Assess your ability to comprehend requirements and propose appropriate solutions. 🧠
- **Communication:**  
  Clearly articulate any doubts and explain your design decisions. 💬
- **Adaptability to our stack:**  
  We value familiarity with Node.js and your ability to adapt to our environment. 🔧
- **API design & best practices:**  
  Emphasis on idempotency, testability, performance, and scalability. 🚀  
  - **Idempotency:** Your code should consistently return the same results for valid inputs, regardless of the execution environment. 🔄
  - **Testability:** Provide tests to ensure your code works as expected. ✅
  - **Performance & scalability:** Consider potential bottlenecks when handling high volumes of requests. ⚡
- **SOLID principles:**  
  Ensure the design adheres to principles such as:  
  - **Single Responsibility Principle (SRP):** Keep modules/classes focused on one responsibility. 🎯
  - **Open/Closed Principle (OCP):** Make your system easily extendable without modifying existing code. ➕
  - **Dependency Inversion Principle (DIP):** Rely on abstractions rather than concrete implementations. 🔌

## The test 📝

### Basic requirements
You are to build a RESTful API for managing event attendance with the following user stories:

1. **List events:**  
   *As a user, I want to view a list of available events* (e.g., music festivals, conferences, fairs, etc.). 🎉

2. **Event details:**  
   *As a user, I want to view the details of a specific event*, including title, description, date, and location. 📅

3. **Mark/change attendance:**  
   *As a user, I want to indicate that I will attend an event* and, if needed, cancel or update my attendance. 👍/👎

4. **List attendees:**  
   *As a user, I want to see a list of users who have confirmed their attendance for a specific event.* 👥

Use Node.js (preferably the LTS version) and any tools you typically use in a real-world application.
Provides steps that explain how to install and run your code.

**Example**
```shell
# Setup
git clone git@github.com:<username>/test-backend-developer.git
cd test-backend-developer
npm install

# Run tests
npm run test

# Run development server
npm run dev

# Run development server (using Docker)
npm run build
docker build -t test-backend-developer:1.0.0 .
docker run -ti test-backend-developer:1.0.0
```

### Bonus ✨
The system should send a reminder notification to users who have confirmed attendance one week before the event.  
Please provide your theoretical approach on how you would implement this processing (implementation is not required).

## Additional considerations 📌
- **Documentation:**  
  Write clear documentation on your design and how to run your code. 📖
- **Inline comments:**  
  Include inline comments explaining key or complex decisions. 💡
- **Commits:**  
  Make descriptive and frequent commits that reflect the evolution of your solution. 🔄
- **To obtain honors:**  
  Use Domain Driven Design (DDD) & Hexagonal Architecture: Isolate core business logic (event management and user attendance) from infrastructure concerns such as database access. 🏗️

## Instructions 🔧
1. Fork this repository.
2. Create a branch with your full name.
3. Make frequent, descriptive commits showing your development process.
4. Once complete, create a Pull Request for review.

If you have any questions, please open an issue in the repository or contact **juanlu@wuolah.com**.
