# AWS IAM (Identity and Access Managment)

## 1️⃣ What is IAM?

IAM is the security and permission management system of AWS.

It controls:

- Who can access AWS (Authentication)
- What actions they can perform (Authorization)
- On which resources
- Under what conditions

## 2️⃣ Why IAM is Important

Every request to AWS must be authenticated and authorized.

Without IAM:

- AWS cannot verify identity.
- There is no permission boundary.
- Resources are not secure.

IAM acts as the foundation of AWS security.

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
