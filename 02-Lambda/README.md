# AWS Lambda

## 1️⃣ What is AWS Lambda?

AWS Lambda is a serverless compute service that runs code in response to events without managing servers.

You upload code, and AWS handles:

- Infrastructure
- Scaling
- Execution environment
- Availability

---

## 2️⃣ Key Characteristics

- Event-driven execution
- Stateless architecture
- Automatic horizontal scaling
- Pay per execution (ms billing)
- Max execution time: 15 minutes

---

## 3️⃣ How Lambda Works

1. An event triggers the function.
2. AWS creates an execution environment.
3. Your handler function runs.
4. The response is returned.
5. The environment may be reused (warm start).

---

## 4️⃣ Common Triggers

- API Gateway (HTTP requests)
- S3 (file upload events)
- SQS (queue messages)
- EventBridge (scheduled jobs)
- DynamoDB Streams
