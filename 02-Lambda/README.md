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

---

## 5️⃣ Cold Start in Lambda

A cold start occurs when AWS Lambda needs to create a new execution environment before running the function.

During a cold start:

- Runtime (Node.js) is initialized
- Dependencies are loaded
- Function code is prepared for execution

This introduces additional latency to the first request.

### When Cold Starts Happens

- First invocation
- After a long idle period
- During sudden traffic spikes
- After deployment updates

### Impact

Cold starts mainly affect user-facing APIs.
They are les impactful for background or asynchronous tasks.
