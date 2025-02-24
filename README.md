# Technical Test for Backend Developers – Event Attendance

## Introduction
Welcome to Wuolah’s technical test for backend developers.  
We want to see how you handle a practical case that simulates the challenges we face daily.

## What We Are Evaluating
- **Understanding Requirements & Problem Solving:**  
  Assess your ability to comprehend requirements and propose appropriate solutions.
- **Communication:**  
  Clearly articulate any doubts and explain your design decisions.
- **Adaptability to Our Stack:**  
  We value familiarity with Node.js and your ability to adapt to our environment.
- **API Design & Best Practices:**  
  Emphasis on idempotency, testability, performance, and scalability.
  - **Idempotency:** Your code should consistently return the same results for valid inputs, regardless of the execution environment.
  - **Testability:** Provide tests to ensure your code works as expected.
  - **Performance & Scalability:** Consider potential bottlenecks when handling high volumes of requests.
- **SOLID Principles:**  
  Ensure the design adheres to principles such as:
  - **Single Responsibility Principle (SRP)**: Keep modules/classes focused on one responsibility.
  - **Open/Closed Principle (OCP)**: Make your system easily extendable without modifying existing code.
  - **Dependency Inversion Principle (DIP)**: Rely on abstractions rather than concrete implementations.

## The Test

### Basic Requirements
You are to build a RESTful API for managing event attendance with the following user stories:

1. **List Events:**  
   *As a user, I want to view a list of available events* (e.g., music festivals, conferences, fairs, etc.).

2. **Event Details:**  
   *As a user, I want to view the details of a specific event*, including title, description, date, and location.

3. **Mark/Change Attendance:**  
   *As a user, I want to indicate that I will attend an event* and, if needed, cancel or update my attendance.

4. **List Attendees:**  
   *As a user, I want to see a list of users who have confirmed their attendance for a specific event*.

### Bonus
The system should send a reminder notification to users who have confirmed attendance one week before the event.  
Please provide your theoretical approach on how you would implement this processing (implementation is not required).

## Additional Considerations
- **Documentation:**  
  Write clear documentation on your design and how to run your code.
- **Inline Comments:**  
  Include inline comments explaining key or complex decisions.
- **Commits:**  
  Make descriptive and frequent commits that reflect the evolution of your solution.
- **To obtain honors:**  
  Use Domain Driven Design (DDD) & Hexagonal Architecture: Isolate core business logic (event management and user attendance) from infrastructure concerns such as database access.

## Implementation Options
You may choose one of the following approaches:

### Non Cloud-native
- Use Node.js LTS and any framework of your choice.
- Suggested databases:
  - **Relational:** MySQL
  - **NoSQL:** MongoDB (or another, with justification)

### Cloud-native (AWS)
- Develop a single service as an AWS Lambda function in Node.js.
- Suggested databases:
  - **Relational:** AWS Aurora (MySQL-compatible)
  - **NoSQL:** DynamoDB or DocumentDB
- Use an infrastructure-as-code tool (e.g., CloudFormation, Terraform, Serverless Framework) to deploy resources.
- Use API Gateway to expose your AWS Lambda.
- *(Optional)* Explain your approach for error handling (retry policies, DLQs, etc.) and for logging/monitoring in a cloud-native environment.

## Instructions
1. Fork this repository.
2. Create a branch with your full name.
3. Make frequent, descriptive commits showing your development process.
4. Once complete, create a Pull Request for review.

If you have any questions, please open an issue in the repository or contact **juanlu@wuolah.com**.
