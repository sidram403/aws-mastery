# AWS IAM (Identity and Access Managment)

## 1️⃣ What is IAM?

IAM is the security and permission management system of AWS.

It controls:

- Who can access AWS (Authentication)
- What actions they can perform (Authorization)
- On which resources
- Under what conditions

---

## 2️⃣ Why IAM is Important

Every request to AWS must be authenticated and authorized.

Without IAM:

- AWS cannot verify identity.
- There is no permission boundary.
- Resources are not secure.

IAM acts as the foundation of AWS security.

---

## 3️⃣ Core Components of IAM

IAM consists of:

- Users
- Groups
- Roles
- Policies

---

## 4️⃣ IAM User vs IAM Role

| Feature        | IAM User                             | IAM Role                               |
| -------------- | ------------------------------------ | -------------------------------------- |
| Identity Type  | Permanent identity                   | Temporary identity                     |
| Credentials    | Long-term (Access Key + Secret Key)  | Temporary credentials                  |
| Used For       | Human users or external apps         | AWS services, cross-account access     |
| Security Level | Lower (manual key rotation required) | Higher (automatic credential rotation) |

---

## 5️⃣ IAM Policies

A policy is a JSON document that defines permissions.

It specifies:

- Effect (Allow or Deny)
- Action (What operations are allowed/denied)
- Resource (Which AWS resource)
- Condition (Optional constraints)

---

### Example Policy

```json
{
  "version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3.PutObject",
      "Resource": "arn:aws:s3:::my-bucket/*"
    }
  ]
}
```

This policy allows uploading objects to a specific S3 bucket.

---

## 6️⃣ IAM Authorization Model

AWS follows a strict authorization logic:

1. Implicit Deny (default)
2. Explicit Allow (via policy)
3. Explicit Deny (overrides everything)

### Evaluation Rule

Explicit Deny > Explicit Allow > Implicit Deny

If no policy allows an action, it is denied by default.

---

## 7️⃣ Managed Policy vs Inline Policy

### Inline Policy

- Attached directly to a single user, role, or group
- Not reusable
- Deleted automatically if the identity is deleted
- Best for very specific permissions

### Managed Policy

- Created once and reusable
- Can be attached to multiple users, roles, or groups
- Easier to maintain in large organizations
- Supports centralized permission management

### Best Practice

Use Managed Policies in large organizations to ensure scalability and easier maintenance.

---

## 8️⃣ Principle of Least Privilege (PoLP)

The Priniciple of Least Privilege means:

Give only the minimum permissions required to perform a task - nothing more.

### Example (Bad Practice)

```json
{
  "Effect": "Allow",
  "Action": "s3:*",
  "Resource": "*"
}
```

This grants full access and increases security risk.

### Example (Good Practice)

```json
{
  "Effect": "Allow",
  "Action": "s3:PutObject",
  "Resource": "arn:aws:s3:::my-bucket/*"
}
```

This grants only the required permission.

### Why It Matters

- Reduces security risk
- Limits blast redius
- Prevents accidental misuse
- Follows AWS security best practices
